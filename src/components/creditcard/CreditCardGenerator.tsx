"use client";

import { useState, useEffect } from "react";
import { CreditCard, Copy, RefreshCw, Shield, CheckCircle, AlertCircle, Trash2, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface CreditCardData {
  number: string;
  cvv: string;
  expiry: string;
  type: string;
  issuer: string;
}

interface GeneratedCard extends CreditCardData {
  id: string;
  timestamp: Date;
}

export default function CreditCardGenerator() {
  const [cards, setCards] = useState<GeneratedCard[]>([]);
  const [selectedType, setSelectedType] = useState<string>("visa");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  // Load cards from localStorage on component mount
  useEffect(() => {
    const savedCards = localStorage.getItem('generatedCreditCards');
    if (savedCards) {
      try {
        const parsedCards = JSON.parse(savedCards);
        setCards(parsedCards);
      } catch (error) {
        console.error('Error loading saved cards:', error);
      }
    }
  }, []);

  // Save cards to localStorage whenever cards change
  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem('generatedCreditCards', JSON.stringify(cards));
    }
  }, [cards]);

  // Credit card prefixes and formats
  const CARD_TYPES = {
    visa: {
      name: "Visa",
      prefixes: ["4"],
      length: 16,
      cvvLength: 3,
      format: "4xxx xxxx xxxx xxxx"
    },
    mastercard: {
      name: "Mastercard",
      prefixes: ["51", "52", "53", "54", "55"],
      length: 16,
      cvvLength: 3,
      format: "5xxx xxxx xxxx xxxx"
    },
    amex: {
      name: "American Express",
      prefixes: ["34", "37"],
      length: 15,
      cvvLength: 4,
      format: "3xxx xxxxxx xxxxx"
    },
    discover: {
      name: "Discover",
      prefixes: ["6011"],
      length: 16,
      cvvLength: 3,
      format: "6011 xxxx xxxx xxxx"
    },
    diners: {
      name: "Diners Club",
      prefixes: ["300", "301", "302", "303", "304", "305"],
      length: 14,
      cvvLength: 3,
      format: "3xxx xxxxxxx xxxx"
    },
    jcb: {
      name: "JCB",
      prefixes: ["35"],
      length: 16,
      cvvLength: 3,
      format: "35xx xxxx xxxx xxxx"
    }
  };

  // Luhn algorithm for credit card validation
  const luhnCheck = (num: string): boolean => {
    let sum = 0;
    let isEven = false;
    
    for (let i = num.length - 1; i >= 0; i--) {
      let digit = parseInt(num[i]);
      
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      
      sum += digit;
      isEven = !isEven;
    }
    
    return sum % 10 === 0;
  };

  // Generate random number with prefix
  const generateNumber = (type: string): string => {
    const cardInfo = CARD_TYPES[type as keyof typeof CARD_TYPES];
    const prefix = cardInfo.prefixes[Math.floor(Math.random() * cardInfo.prefixes.length)];
    
    let number = prefix;
    
    // Fill remaining digits
    while (number.length < cardInfo.length - 1) {
      number += Math.floor(Math.random() * 10);
    }
    
    // Calculate check digit using Luhn algorithm
    let checkDigit = 0;
    do {
      number = number.slice(0, -1) + checkDigit;
      checkDigit++;
    } while (!luhnCheck(number) && checkDigit < 10);
    
    return number;
  };

  // Format card number for display
  const formatCardNumber = (number: string, type: string): string => {
    const cardInfo = CARD_TYPES[type as keyof typeof CARD_TYPES];
    
    switch (type) {
      case 'amex':
        return `${number.slice(0, 4)} ${number.slice(4, 10)} ${number.slice(10)}`;
      case 'diners':
        return `${number.slice(0, 4)} ${number.slice(4, 10)} ${number.slice(10)}`;
      default:
        return number.match(/.{1,4}/g)?.join(' ') || number;
    }
  };

  // Generate expiry date
  const generateExpiry = (): string => {
    const month = Math.floor(Math.random() * 12) + 1;
    const year = new Date().getFullYear() + Math.floor(Math.random() * 5) + 1;
    return `${month.toString().padStart(2, '0')}/${year.toString().slice(-2)}`;
  };

  // Generate CVV
  const generateCVV = (type: string): string => {
    const cvvLength = CARD_TYPES[type as keyof typeof CARD_TYPES].cvvLength;
    let cvv = '';
    for (let i = 0; i < cvvLength; i++) {
      cvv += Math.floor(Math.random() * 10);
    }
    return cvv;
  };

  // Generate a new card
  const generateCard = () => {
    const number = generateNumber(selectedType);
    const cvv = generateCVV(selectedType);
    const expiry = generateExpiry();
    const cardInfo = CARD_TYPES[selectedType as keyof typeof CARD_TYPES];

    const newCard: GeneratedCard = {
      id: Date.now().toString(),
      number,
      cvv,
      expiry,
      type: cardInfo.name,
      issuer: cardInfo.name,
      timestamp: new Date()
    };

    setCards([newCard]); // Replace with single card
  };

  // Generate multiple cards
  const generateMultipleCards = (count: number) => {
    const newCards: GeneratedCard[] = [];
    
    for (let i = 0; i < count; i++) {
      const number = generateNumber(selectedType);
      const cvv = generateCVV(selectedType);
      const expiry = generateExpiry();
      const cardInfo = CARD_TYPES[selectedType as keyof typeof CARD_TYPES];

      newCards.push({
        id: `${Date.now()}-${i}`,
        number,
        cvv,
        expiry,
        type: cardInfo.name,
        issuer: cardInfo.name,
        timestamp: new Date()
      });
    }

    setCards(newCards); // Replace existing cards
  };

  // Copy card details
  const copyCardDetails = (card: GeneratedCard, format: 'full' | 'json' | 'csv') => {
    let textToCopy = '';

    switch (format) {
      case 'full':
        textToCopy = `Card Number: ${formatCardNumber(card.number, selectedType)}\nCVV: ${card.cvv}\nExpiry: ${card.expiry}\nType: ${card.type}`;
        break;
      case 'json':
        textToCopy = JSON.stringify({
          number: card.number,
          cvv: card.cvv,
          expiry: card.expiry,
          type: card.type,
          issuer: card.issuer
        }, null, 2);
        break;
      case 'csv':
        textToCopy = `${card.number},${card.cvv},${card.expiry},${card.type},${card.issuer}`;
        break;
    }

    navigator.clipboard.writeText(textToCopy);
    
    setCopiedId(card.id);
    setTimeout(() => setCopiedId(null), 2000);
    
    toast({
      title: "Copied!",
      description: `${format.toUpperCase()} format copied to clipboard`,
    });
  };

  // Delete individual card
  const deleteCard = (cardId: string) => {
    setCards(prevCards => prevCards.filter(card => card.id !== cardId));
    toast({
      title: "Card Deleted",
      description: "The card has been removed from your saved cards",
    });
  };

  // Clear all cards
  const clearAllCards = () => {
    setCards([]);
    localStorage.removeItem('generatedCreditCards');
    toast({
      title: "All Cards Cleared",
      description: "All saved cards have been removed",
    });
  };

  // Validate card number
  const validateCard = (number: string): boolean => {
    return luhnCheck(number.replace(/\s/g, ''));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="card-premium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Credit Card Generator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm text-muted-foreground font-ubuntu">
              Generate valid test credit card numbers for development and testing purposes. 
              These cards are for testing only and cannot be used for real transactions.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Generator Controls */}
      <Card className="card-premium">
        <CardHeader>
          <CardTitle className="text-lg">Generate Test Cards</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="font-ubuntu">Card Type</Label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(CARD_TYPES).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="font-ubuntu">Format</Label>
              <div className="text-sm text-muted-foreground font-ubuntu">
                {CARD_TYPES[selectedType as keyof typeof CARD_TYPES].format}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-ubuntu">CVV Length</Label>
              <div className="text-sm text-muted-foreground font-ubuntu">
                {CARD_TYPES[selectedType as keyof typeof CARD_TYPES].cvvLength} digits
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={generateCard} className="flex-1">
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate 1 Card
            </Button>
            <Button onClick={() => generateMultipleCards(5)} variant="outline">
              Generate 5 Cards
            </Button>
            <Button onClick={() => generateMultipleCards(10)} variant="outline">
              Generate 10 Cards
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Generated Cards */}
      {cards.length > 0 && (
        <Card className="card-premium">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Generated Cards</CardTitle>
              <Button
                size="sm"
                variant="destructive"
                onClick={clearAllCards}
                className="text-xs"
              >
                <Trash2 className="h-3 w-3 mr-1" />
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cards.map((card) => (
                <Card key={card.id} className="bg-muted/30">
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="font-ubuntu">
                          {card.type}
                        </Badge>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyCardDetails(card, 'full')}
                            className="h-6 w-6 p-0"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => deleteCard(card.id)}
                            className="h-6 w-6 p-0 text-red-500 hover:text-red-600"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label className="text-xs font-ubuntu">Card Number</Label>
                        <div className="font-mono text-sm bg-background p-2 rounded">
                          {formatCardNumber(card.number, selectedType)}
                        </div>
                        {validateCard(card.number) ? (
                          <CheckCircle className="h-3 w-3 text-green-500 inline-block ml-1" />
                        ) : (
                          <AlertCircle className="h-3 w-3 text-red-500 inline-block ml-1" />
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-xs font-ubuntu">CVV</Label>
                          <div className="font-mono text-sm bg-background p-2 rounded">
                            {card.cvv}
                          </div>
                        </div>
                        <div>
                          <Label className="text-xs font-ubuntu">Expiry</Label>
                          <div className="font-mono text-sm bg-background p-2 rounded">
                            {card.expiry}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyCardDetails(card, 'json')}
                          className="text-xs"
                        >
                          JSON
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyCardDetails(card, 'csv')}
                          className="text-xs"
                        >
                          CSV
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Usage Guide */}
      <Card className="card-premium">
        <CardHeader>
          <CardTitle className="text-lg">Usage Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-ubuntu font-semibold mb-2">Features</h4>
              <ul className="text-sm space-y-1 text-muted-foreground font-ubuntu">
                <li>• Valid Luhn algorithm check</li>
                <li>• Multiple card types (Visa, MC, Amex, etc.)</li>
                <li>• Realistic expiry dates</li>
                <li>• Proper CVV generation</li>
                <li>• Copy in multiple formats</li>
                <li>• No API keys required</li>
              </ul>
            </div>
            <div>
              <h4 className="font-ubuntu font-semibold mb-2">Use Cases</h4>
              <ul className="text-sm space-y-1 text-muted-foreground font-ubuntu">
                <li>• Payment form testing</li>
                <li>• E-commerce development</li>
                <li>• API testing</li>
                <li>• UI/UX testing</li>
                <li>• Security testing</li>
                <li>• Educational purposes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
