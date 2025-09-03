
"use client";

import { useState, useEffect } from "react";
import { RefreshCw, Copy, Clock, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { tempMailAPI } from "./TempMailAPI";

interface StoredEmailData {
  email: string;
  expiresAt: number;
  isExtended: boolean;
  account: any;
}

export default function EmailGenerator() {
  const [currentEmail, setCurrentEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [expiresIn, setExpiresIn] = useState(600); // 10 minutes in seconds
  const [isExtended, setIsExtended] = useState(false);
  const { toast } = useToast();

  // Load saved email from localStorage on component mount
  useEffect(() => {
    const savedEmailData = localStorage.getItem('fluxmail-current-email');
    if (savedEmailData) {
      try {
        const data: StoredEmailData = JSON.parse(savedEmailData);
        const now = Date.now();
        
        // Check if email hasn't expired
        if (data.expiresAt > now) {
          setCurrentEmail(data.email);
          setIsExtended(data.isExtended);
          setExpiresIn(Math.floor((data.expiresAt - now) / 1000));
          
          // Restore the account in tempMailAPI
          if (data.account) {
            tempMailAPI.setCurrentAccount(data.account);
          }
          
          // Dispatch event for inbox
          window.dispatchEvent(new CustomEvent('emailGenerated', { detail: data.email }));
          
          console.log("📧 Restored email from localStorage:", data.email);
        } else {
          // Email has expired, clear storage
          localStorage.removeItem('fluxmail-current-email');
          console.log("⏰ Stored email has expired, cleared from storage");
        }
      } catch (error) {
        console.error("❌ Error loading saved email:", error);
        localStorage.removeItem('fluxmail-current-email');
      }
    }
  }, []);

  // Save email data to localStorage whenever it changes
  useEffect(() => {
    if (currentEmail && expiresIn > 0) {
      const expiresAt = Date.now() + (expiresIn * 1000);
      const emailData: StoredEmailData = {
        email: currentEmail,
        expiresAt,
        isExtended,
        account: tempMailAPI.getCurrentAccount()
      };
      
      localStorage.setItem('fluxmail-current-email', JSON.stringify(emailData));
      console.log("💾 Saved email to localStorage:", currentEmail);
    } else if (expiresIn <= 0) {
      // Email expired, remove from storage
      localStorage.removeItem('fluxmail-current-email');
      console.log("🗑️ Removed expired email from localStorage");
    }
  }, [currentEmail, expiresIn, isExtended]);
  // Pass current email to parent component for inbox
  useEffect(() => {
    if (currentEmail) {
      window.dispatchEvent(new CustomEvent('emailGenerated', { detail: currentEmail }));
    }
  }, [currentEmail]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (currentEmail && expiresIn > 0) {
      interval = setInterval(() => {
        setExpiresIn(prev => {
          if (prev <= 1) {
            setCurrentEmail("");
            setIsExtended(false);
            localStorage.removeItem('fluxmail-current-email');
            window.dispatchEvent(new CustomEvent('emailExpired'));
            toast({
              title: "Email Expired",
              description: "Your temporary email has expired",
              variant: "destructive",
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentEmail, expiresIn, toast]);

  const generateEmail = async () => {
    console.log("🔄 Starting email generation...");
    setIsGenerating(true);
    
    // Show initial toast message
    toast({
      title: "Generating Email",
      description: "Please wait, creating your temporary email...",
    });
    
    try {
      console.log("📧 Calling tempMailAPI.generateRandomEmail()...");
      
      // Add a small delay to show the loading state
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newEmail = await tempMailAPI.generateRandomEmail();
      console.log("✅ Generated email:", newEmail);
      
      setCurrentEmail(newEmail);
      setExpiresIn(600); // 10 minutes
      setIsExtended(false);
      
      console.log("📤 Dispatching emailGenerated event with:", newEmail);
      
      // Show success toast
      toast({
        title: "Temporary Mail Generated",
        description: `Your email ${newEmail} is ready to use!`,
      });
    } catch (error) {
      console.error("❌ Error generating email:", error);
      toast({
        title: "Error",
        description: "Failed to generate email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const extendEmail = () => {
    setExpiresIn(86400); // 24 hours
    setIsExtended(true);
    toast({
      title: "Email Extended",
      description: "Your email is now valid for 24 hours!",
    });
  };

  const copyToClipboard = async () => {
    if (currentEmail) {
      await navigator.clipboard.writeText(currentEmail);
      toast({
        title: "Copied!",
        description: "Email address copied to clipboard",
      });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="card-premium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-lato">
          <RefreshCw className="h-5 w-5" />
          Temporary Mail Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {currentEmail ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <span className="font-mono text-sm break-all">{currentEmail}</span>
              <Button size="sm" variant="ghost" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-ubuntu text-muted-foreground">
                <Clock className="h-4 w-4" />
                {isExtended ? "Expires in:" : "Temp Mail -"} {formatTime(expiresIn)}
              </div>
              <div className="status-active">
                <CheckCircle className="h-3 w-3" />
                Active
              </div>
            </div>

            {!isExtended && expiresIn > 0 && (
              <Button 
                onClick={extendEmail}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Extend to 24 Hours
              </Button>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground font-ubuntu mb-4">
              Generate a temporary email address to get started
            </p>
          </div>
        )}
        
        <Button 
          onClick={generateEmail} 
          disabled={isGenerating}
          className="w-full btn-hero"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <RefreshCw className="h-4 w-4 mr-2" />
              {currentEmail ? "Generate New Temporary Mail" : "Generate Temporary Mail"}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
