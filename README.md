# 📧 FluxMail - Temporary Mail Service

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
</div>

<div align="center">
  <h3>🚀 Professional Temporary Email & Testing Tools Suite</h3>
  <p><em>Generate temporary disposable email addresses, test credit cards, and more - all in one modern web application</em></p>
  
  <p>
    <a href="#features">Features</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#api-integration">API Integration</a> •
    <a href="#deployment">Deployment</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

---

## 🌟 Features Overview

### 📧 **Temporary Mail Generator**
- **🔄 Instant Email Creation**: Generate temporary email addresses in seconds using Mail.tm API
- **🧠 Smart Username Generation**: AI-powered meaningful usernames using Datamuse API
- **⏰ Auto-Expiry Management**: 10-minute default with 24-hour extension option
- **📬 Real-time Inbox**: Live email monitoring with auto-refresh every 10 seconds
- **💾 Persistent Storage**: Emails saved locally with expiration tracking
- **📋 Copy to Clipboard**: One-click copying of email addresses
- **📱 Mobile Responsive**: Optimized for all device sizes

### 💳 **Credit Card Generator**
- **🏦 Multiple Card Types**: Visa, Mastercard, American Express, Discover, Diners Club, JCB
- **✅ Luhn Algorithm**: Generates mathematically valid test card numbers
- **📊 Batch Generation**: Create multiple cards at once (1-10 cards)
- **🔢 Complete Details**: Card number, CVV, expiry date, and issuer information
- **📋 Easy Copying**: Copy individual fields or entire card details
- **💾 Local Storage**: Save and manage generated cards persistently

### 🎨 **Modern UI/UX**
- **🎭 shadcn/ui Components**: Beautiful, accessible UI components (49 components)
- **🌓 Theme Support**: Built-in dark/light theme compatibility
- **📱 Responsive Design**: Mobile-first responsive layout
- **✨ Smooth Animations**: CSS animations and transitions
- **🔔 Toast Notifications**: Real-time feedback system
- **🎯 Clean Interface**: Intuitive and professional design

### 📄 **Additional Pages**
- **❓ FAQ**: Comprehensive frequently asked questions
- **⭐ Features**: Detailed feature showcase and capabilities
- **🔒 Privacy Policy**: Complete privacy information and data handling
- **📜 Terms of Service**: Legal terms and conditions
- **❌ 404 Error Page**: Custom not found page with navigation

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/gitchking/FluxMail-TemperaryMailService.git

# Navigate to project directory
cd FluxMail-TemperaryMailService

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

---

## 🏗️ Project Architecture

### 📁 Directory Structure
```
FluxMail-TemperaryMailService/
├── 📂 public/                 # Static assets
│   ├── favicon.ico
│   ├── favicon.png
│   ├── placeholder.svg
│   └── robots.txt
├── 📂 src/
│   ├── 📂 components/         # Reusable components
│   │   ├── 📂 creditcard/     # Credit card generator
│   │   │   └── CreditCardGenerator.tsx
│   │   ├── 📂 layout/         # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── 📂 sms/            # SMS components
│   │   │   └── SMSBomber.tsx
│   │   ├── 📂 tempmail/       # Email functionality
│   │   │   ├── EmailGenerator.tsx
│   │   │   ├── EmailInbox.tsx
│   │   │   └── TempMailAPI.ts
│   │   └── 📂 ui/             # shadcn/ui components (49 components)
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ... (45 more components)
│   ├── 📂 hooks/             # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── 📂 lib/               # Utility functions
│   │   └── utils.ts
│   ├── 📂 pages/             # Application pages
│   │   ├── Index.tsx         # Home page
│   │   ├── SMS.tsx           # Credit card page
│   │   ├── FAQ.tsx           # FAQ page
│   │   ├── Features.tsx      # Features page
│   │   ├── Privacy.tsx       # Privacy policy
│   │   ├── Terms.tsx         # Terms of service
│   │   └── NotFound.tsx      # 404 error page
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # App entry point
│   ├── index.css             # Global styles
│   └── vite-env.d.ts         # Vite type definitions
├── 📄 package.json           # Dependencies and scripts
├── 📄 tailwind.config.ts     # Tailwind configuration
├── 📄 vite.config.ts         # Vite configuration
├── 📄 tsconfig.json          # TypeScript configuration
└── 📄 README.md              # Project documentation
```

### 🛠️ Technology Stack

#### **Frontend Framework**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript with enhanced developer experience
- **Vite 5.4.19** - Next-generation frontend build tool for fast development

#### **UI & Styling**
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components (49 components)
- **Lucide React 0.462.0** - Beautiful SVG icon library
- **Radix UI** - Low-level UI primitives for accessibility
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional CSS class utilities

#### **State Management & Data**
- **TanStack Query 5.83.0** - Powerful data synchronization and caching
- **React Hook Form 7.61.1** - Performant forms with validation
- **Zod 3.25.76** - TypeScript-first schema validation
- **date-fns 3.6.0** - Modern JavaScript date utility library

#### **UI Components & Interactions**
- **Embla Carousel React 8.6.0** - Carousel/slider components
- **Recharts 2.15.4** - Composable charting library
- **React Day Picker 8.10.1** - Date picker component
- **React Resizable Panels 2.1.9** - Resizable panel layouts
- **Sonner 1.7.4** - Toast notification system
- **Vaul 0.9.9** - Drawer/modal components

#### **Routing & Navigation**
- **React Router DOM 6.30.1** - Declarative routing for React
- **React Helmet 6.1.0** - Document head management

#### **Development Tools**
- **ESLint 9.32.0** - Code linting and formatting
- **TypeScript ESLint 8.38.0** - TypeScript-specific linting rules
- **PostCSS 8.5.6** - CSS processing and optimization
- **Autoprefixer 10.4.21** - CSS vendor prefixing

---

## 🌐 API Integration

### Mail.tm API

FluxMail integrates with **Mail.tm**, a free and reliable temporary email service:

- **Base URL**: `https://api.mail.tm`
- **Authentication**: Bearer token-based
- **Rate Limiting**: Handled automatically with retry logic
- **Error Handling**: Comprehensive error management with fallbacks

#### Key API Endpoints:
```typescript
// Get available domains
GET /domains

// Create account
POST /accounts
{
  "address": "username@domain.com",
  "password": "securepassword"
}

// Authenticate
POST /token
{
  "address": "username@domain.com",
  "password": "securepassword"
}

// Get messages
GET /messages

// Get specific message
GET /messages/{id}
```

#### Features:
- **Smart Domain Selection**: Automatically selects active, non-private domains
- **Retry Logic**: Handles duplicate email addresses with automatic retry
- **Account Management**: Persistent token-based authentication
- **Real-time Updates**: Periodic message checking

### Datamuse API

For intelligent username generation:

- **Base URL**: `https://api.datamuse.com`
- **Purpose**: Generate meaningful, readable usernames
- **Fallback**: Random string generation if API fails
- **Rate Limiting**: No authentication required, generous limits

#### Usage:
```typescript
// Get words related to "funny" concept
GET /words?ml=funny&max=50

// Response format
[
  { "word": "hilarious", "score": 1000 },
  { "word": "amusing", "score": 950 },
  // ... more words
]
```

---

## 🎯 Core Components

### EmailGenerator Component

**Location**: `src/components/tempmail/EmailGenerator.tsx`

**Features**:
- 📧 Generates temporary email addresses using Mail.tm API
- ⏰ Manages email expiration (10 min default, 24h extended)
- 💾 Local storage persistence with automatic cleanup
- ⏱️ Real-time countdown timer with visual feedback
- 📋 Copy to clipboard functionality with success feedback
- 🔄 Loading states and error handling
- 📱 Responsive design with mobile optimization

**Key Methods**:
```typescript
// Generate new email
const generateEmail = async () => {
  // Mail.tm API integration with Datamuse username generation
}

// Extend email duration
const extendEmail = () => {
  setExpiresIn(86400); // 24 hours
}

// Copy to clipboard
const copyToClipboard = async () => {
  await navigator.clipboard.writeText(currentEmail);
}
```

### EmailInbox Component

**Location**: `src/components/tempmail/EmailInbox.tsx`

**Features**:
- 📬 Real-time email monitoring with auto-refresh
- 📝 Message threading and detailed viewing
- 🔄 Auto-refresh every 10 seconds
- 👁️ Mark as read/unread functionality
- 🌐 Email content display (HTML and text)
- 📱 Mobile-responsive inbox interface
- 🔔 Toast notifications for new emails

### CreditCardGenerator Component

**Location**: `src/components/creditcard/CreditCardGenerator.tsx`

**Features**:
- 🏦 Multiple card type support (6 major card networks)
- ✅ Luhn algorithm validation for mathematical correctness
- 📊 Batch generation (1-10 cards at once)
- 🔢 Complete card details (number, CVV, expiry, issuer)
- 📋 Copy individual fields or complete card data
- 💾 Local storage for generated cards with timestamps
- 🗑️ Delete and manage generated cards

**Supported Card Types**:
```typescript
const CARD_TYPES = {
  visa: { prefixes: ["4"], length: 16, cvvLength: 3 },
  mastercard: { prefixes: ["51", "52", "53", "54", "55"], length: 16, cvvLength: 3 },
  amex: { prefixes: ["34", "37"], length: 15, cvvLength: 4 },
  discover: { prefixes: ["6011"], length: 16, cvvLength: 3 },
  diners: { prefixes: ["300", "301", "302", "303", "304", "305"], length: 14, cvvLength: 3 },
  jcb: { prefixes: ["35"], length: 16, cvvLength: 3 }
};
```

### TempMailAPI Service

**Location**: `src/components/tempmail/TempMailAPI.ts`

**Features**:
- 🌐 Complete Mail.tm API integration
- 🔄 Automatic retry logic for failed requests
- 🧠 Intelligent username generation with Datamuse API
- 🔑 Token-based authentication management
- 📧 Email account creation and management
- 📬 Message retrieval and processing
- ⚠️ Comprehensive error handling

---

## 🔒 Security & Privacy

### Data Handling
- **🚫 No Server Storage**: All data stored locally in browser only
- **⏰ Temporary Nature**: Emails expire automatically (10 min/24 hr)
- **🚫 No Personal Information**: No registration or personal data required
- **💻 Client-Side Only**: All operations performed in browser
- **🧹 Auto-Cleanup**: Expired data automatically removed from local storage

### Test Data Only
- **💳 Credit Cards**: Generated for testing purposes only, mathematically valid but not real
- **📧 Email Addresses**: Temporary and disposable, automatically expire
- **🚫 No Real Transactions**: All data is for development/testing purposes
- **⚠️ Disclaimer**: Clear warnings about test-only nature of generated data

### API Security
- **🔐 HTTPS Only**: All API communications use secure HTTPS
- **🎫 Token-Based Auth**: Secure bearer token authentication
- **🔄 Automatic Cleanup**: Tokens and accounts automatically expire
- **🚫 No Sensitive Data**: No storage of passwords or sensitive information

---

## 🚀 Deployment

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Deployment Options

#### **Vercel** (Recommended) ⭐
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Advantages**:
- ✅ Automatic deployments from GitHub
- ✅ Built-in SPA routing support
- ✅ Edge functions and CDN
- ✅ Custom domains and SSL

#### **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

**Advantages**:
- ✅ Drag-and-drop deployment
- ✅ Built-in form handling
- ✅ Automatic HTTPS
- ✅ Branch previews

#### **GitHub Pages**
```bash
# Install gh-pages
npm i -D gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
npm run build && npm run deploy
```

**Note**: Limited SPA routing support. Consider using Vercel or Netlify for full functionality.

#### **Docker Deployment**
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### Getting Started

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
4. **Make** your changes
5. **Test** your changes thoroughly
6. **Commit** your changes (`git commit -m '✨ Add amazing feature'`)
7. **Push** to the branch (`git push origin feature/amazing-feature`)
8. **Open** a Pull Request

### Development Guidelines

#### Code Style
- ✅ **TypeScript**: Use strict TypeScript with proper type definitions
- ✅ **ESLint**: Follow the existing ESLint configuration
- ✅ **Components**: Use functional components with hooks
- ✅ **Naming**: Use descriptive, meaningful names for variables and functions
- ✅ **Comments**: Write comprehensive JSDoc comments for functions
- ✅ **Imports**: Use absolute imports with `@/` prefix

#### Component Guidelines
- ✅ **shadcn/ui**: Prefer shadcn/ui components over custom ones
- ✅ **Responsive**: Ensure all components work on mobile devices
- ✅ **Accessibility**: Follow WCAG guidelines for accessibility
- ✅ **Performance**: Optimize for performance with React.memo when needed
- ✅ **Error Handling**: Include proper error boundaries and handling

#### Git Commit Convention
Follow the emoji-based commit convention:

- ✨ `:sparkles:` - New features
- 🔧 `:wrench:` - Bug fixes
- 📝 `:memo:` - Documentation
- 🎨 `:art:` - UI/UX improvements
- ⚡ `:zap:` - Performance improvements
- 🔒 `:lock:` - Security updates
- 🚀 `:rocket:` - Deployment and releases

### Testing

```bash
# Run linting
npm run lint

# Build and test
npm run build
npm run preview
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ **Commercial use** allowed
- ✅ **Modification** allowed
- ✅ **Distribution** allowed
- ✅ **Private use** allowed
- ❌ **Liability** not provided
- ❌ **Warranty** not provided

---

## 🆘 Support & Troubleshooting

### Common Issues

#### **📧 Email Generation Fails**
**Symptoms**: Error messages when generating emails
**Solutions**:
- ✅ Check internet connection
- ✅ Verify Mail.tm API status at [status.mail.tm](https://status.mail.tm)
- ✅ Clear browser cache and localStorage
- ✅ Try refreshing the page
- ✅ Check browser console for detailed error messages

#### **💳 Credit Card Generation Issues**
**Symptoms**: Invalid card numbers or generation failures
**Solutions**:
- ✅ Ensure JavaScript is enabled
- ✅ Try different card types
- ✅ Clear generated cards and try again
- ✅ Check browser compatibility

#### **🎨 UI Components Not Loading**
**Symptoms**: Missing styles or broken layout
**Solutions**:
- ✅ Ensure all dependencies are installed (`npm install`)
- ✅ Check for TypeScript errors (`npm run lint`)
- ✅ Verify Node.js version compatibility (v18+)
- ✅ Clear node_modules and reinstall dependencies
- ✅ Check for conflicting CSS or browser extensions

#### **🔄 SPA Routing Issues (404 errors)**
**Symptoms**: 404 errors when refreshing pages
**Solutions**:
- ✅ Configure your hosting platform for SPA routing
- ✅ Use the provided configuration files (vercel.json, _redirects)
- ✅ Check server configuration for fallback to index.html

### Getting Help

- 🐛 **Bug Reports**: [Open an issue on GitHub](https://github.com/gitchking/FluxMail-TemperaryMailService/issues)
- 💡 **Feature Requests**: [Start a discussion](https://github.com/gitchking/FluxMail-TemperaryMailService/discussions)
- 📧 **General Questions**: Use GitHub Discussions
- 📖 **Documentation**: Check this README and code comments

### Performance Tips

- 🚀 **Fast Loading**: Enable browser caching for static assets
- 📱 **Mobile Performance**: Test on actual mobile devices
- 🔄 **Email Refresh**: Adjust refresh interval based on needs
- 💾 **Storage Management**: Clear old data periodically

---

## 🙏 Acknowledgments

### APIs & Services
- **[Mail.tm](https://mail.tm)** - For providing free, reliable temporary email API
- **[Datamuse API](https://datamuse.com)** - For intelligent username generation

### UI & Design
- **[shadcn/ui](https://ui.shadcn.com)** - For beautiful, accessible UI components
- **[Tailwind CSS](https://tailwindcss.com)** - For utility-first styling framework
- **[Radix UI](https://radix-ui.com)** - For accessible, unstyled UI primitives
- **[Lucide](https://lucide.dev)** - For beautiful, consistent icons

### Development Tools
- **[Vite](https://vitejs.dev)** - For lightning-fast build tool
- **[React](https://react.dev)** - For the amazing component-based framework
- **[TypeScript](https://typescriptlang.org)** - For type-safe development
- **[TanStack Query](https://tanstack.com/query)** - For powerful data synchronization

### Inspiration
- **Open Source Community** - For countless examples and contributions
- **Modern Web Development** - For pushing the boundaries of what's possible

---

<div align="center">
  <h3>⭐ If you found this project helpful, please give it a star! ⭐</h3>
  <p>
    <strong>Made with ❤️ by the FluxMail Team</strong><br>
    <em>Empowering developers with modern, accessible tools</em>
  </p>
  
  <p>
    <a href="https://github.com/gitchking/FluxMail-TemperaryMailService">🌟 Star on GitHub</a> •
    <a href="https://github.com/gitchking/FluxMail-TemperaryMailService/issues">🐛 Report Bug</a> •
    <a href="https://github.com/gitchking/FluxMail-TemperaryMailService/discussions">💡 Request Feature</a>
  </p>
</div>
