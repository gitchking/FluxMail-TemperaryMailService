// Mail.tm API integration - Free and reliable temporary email service
// Documentation: https://docs.mail.tm/

export interface Email {
  id: string;
  from: {
    name: string;
    address: string;
  };
  subject: string;
  createdAt: string;
  intro?: string;
  text?: string;
  html?: string[];
  seen?: boolean;
  hasAttachments?: boolean;
  attachments?: any[];
  isRead?: boolean; // For local state management
}

export interface Domain {
  id: string;
  domain: string;
  isActive: boolean;
  isPrivate: boolean;
}

export interface Account {
  id: string;
  address: string;
  token?: string;
}

class TempMailAPI {
  private baseUrl = 'https://api.mail.tm';
  private datamuseUrl = 'https://api.datamuse.com/words';
  private currentAccount: Account | null = null;

  private async makeRequest(endpoint: string, options?: RequestInit): Promise<any> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      console.log("🌐 Making request to:", url);
      
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...(this.currentAccount?.token && {
            'Authorization': `Bearer ${this.currentAccount.token}`
          }),
          ...options?.headers,
        },
        ...options,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log("✅ Request successful:", data);
      return data;
    } catch (error) {
      console.error("❌ Request failed:", error);
      throw error;
    }
  }

  private async fetchRandomWord(): Promise<string> {
    try {
      // Fetch random words using Datamuse API
      // Using 'ml=' (meaning like) with a common seed word to get varied results
      const response = await fetch(`${this.datamuseUrl}?ml=funny&max=50`);
      if (!response.ok) {
        throw new Error(`Failed to fetch word from Datamuse API`);
      }
      
      const words = await response.json();
      if (words.length === 0) {
        throw new Error('No words received from Datamuse API');
      }
      
      // Select a random word from the results
      const randomWord = words[Math.floor(Math.random() * words.length)];
      let word = randomWord.word.toLowerCase();
      
      // Clean up the word - remove special characters and ensure it's suitable for email
      word = word.replace(/[^a-z0-9]/g, '');
      
      // If the word is too short, add some random characters
      if (word.length < 4) {
        word += this.generateRandomString(4);
      }
      
      // Limit the length to avoid overly long email addresses
      if (word.length > 8) {
        word = word.substring(0, 8);
      }
      
      // Add random numbers to the word (format: word123)
      const randomNumber = Math.floor(Math.random() * 900) + 100; // Generate 3-digit number
      word += randomNumber.toString();
      
      console.log("📝 Generated word with numbers:", word);
      return word;
    } catch (error) {
      console.error("❌ Error fetching word from Datamuse API:", error);
      // Fallback to random string generation with numbers
      return this.generateRandomString(5) + Math.floor(Math.random() * 900) + 100;
    }
  }

  async getAvailableDomains(): Promise<Domain[]> {
    try {
      console.log("🌐 Fetching available domains...");
      const response = await this.makeRequest('/domains');
      return response['hydra:member'] || [];
    } catch (error) {
      console.error('Error fetching domains:', error);
      return [];
    }
  }

  async createAccount(address: string, password: string): Promise<Account> {
    try {
      console.log("👤 Creating account for:", address);
      const response = await this.makeRequest('/accounts', {
        method: 'POST',
        body: JSON.stringify({ address, password }),
      });
      return response;
    } catch (error) {
      console.error('Error creating account:', error);
      throw error;
    }
  }

  async getToken(address: string, password: string): Promise<string> {
    try {
      console.log("🔑 Getting token for:", address);
      const response = await this.makeRequest('/token', {
        method: 'POST',
        body: JSON.stringify({ address, password }),
      });
      return response.token;
    } catch (error) {
      console.error('Error getting token:', error);
      throw error;
    }
  }

  async generateRandomEmail(): Promise<string> {
    try {
      console.log("📧 Generating random email...");
      
      // Get available domains
      const domains = await this.getAvailableDomains();
      if (domains.length === 0) {
        throw new Error('No domains available');
      }
      
      const activeDomains = domains.filter(d => d.isActive && !d.isPrivate);
      if (activeDomains.length === 0) {
        throw new Error('No active domains available');
      }
      
      // Generate meaningful username using Datamuse API
      const username = await this.fetchRandomWord();
      const randomDomain = activeDomains[Math.floor(Math.random() * activeDomains.length)];
      const email = `${username}@${randomDomain.domain}`;
      const password = this.generateRandomString(12);
      
      console.log("📧 Creating account:", email);
      
      // Create account with retry logic for duplicate emails
      let account;
      let attempts = 0;
      const maxAttempts = 3;
      let currentEmail = email;
      
      while (attempts < maxAttempts) {
        try {
          account = await this.createAccount(currentEmail, password);
          break; // Success, exit the loop
        } catch (error: any) {
          attempts++;
          console.log(`⚠️  Attempt ${attempts} failed:`, error.message);
          
          if (attempts >= maxAttempts) {
            throw new Error('Failed to create account after multiple attempts. Please try again.');
          }
          
          // Generate a new username and try again
          const newUsername = await this.fetchRandomWord();
          currentEmail = `${newUsername}@${randomDomain.domain}`;
          console.log(`🔄 Retrying with new email: ${currentEmail}`);
        }
      }
      
      // Get token
      const token = await this.getToken(currentEmail, password);
      
      // Store current account info
      this.currentAccount = {
        ...account,
        address: currentEmail,
        token
      };
      
      console.log("✅ Email created successfully:", currentEmail);
      return currentEmail;
    } catch (error) {
      console.error('❌ Error generating email:', error);
      throw error;
    }
  }
      

  async getMessages(): Promise<Email[]> {
    try {
      if (!this.currentAccount?.token) {
        throw new Error('No active account');
      }
      
      console.log("📨 Fetching messages...");
      const response = await this.makeRequest('/messages');
      const messages = response['hydra:member'] || [];
      
      console.log("📬 Received messages:", messages);
      return messages.map((msg: any) => ({
        ...msg,
        isRead: msg.seen || false
      }));
    } catch (error) {
      console.error('❌ Error fetching messages:', error);
      return [];
    }
  }

  async readMessage(messageId: string): Promise<Email | null> {
    try {
      if (!this.currentAccount?.token) {
        throw new Error('No active account');
      }
      
      console.log("📖 Reading message:", messageId);
      const message = await this.makeRequest(`/messages/${messageId}`);
      return message;
    } catch (error) {
      console.error('Error reading message:', error);
      return null;
    }
  }

  // Format date for display
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  }

  getCurrentAccount(): Account | null {
    return this.currentAccount;
  }

  setCurrentAccount(account: Account): void {
    this.currentAccount = account;
  }

  private generateRandomString(length = 10): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}

export const tempMailAPI = new TempMailAPI();
