
import { 
  Clock, 
  Globe, 
  Forward, 
  Save, 
  Infinity, 
  Zap,
  Shield,
  Smartphone,
  RefreshCw,
  CreditCard,
  CheckCircle
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Auto Expiration",
      description: "Emails automatically delete after set time periods for enhanced privacy and security."
    },
    {
      icon: Globe,
      title: "10 Min Mail",
      description: "Temporary email addresses that automatically expire after 10 minutes for maximum privacy."
    },
    {
      icon: Forward,
      title: "Email Forwarding",
      description: "Forward important emails to your real email address when needed."
    },
    {
      icon: Save,
      title: "Save for Later",
      description: "Extend storage time manually for important emails you want to keep longer."
    },
    {
      icon: Infinity,
      title: "Long-Term Use",
      description: "Option to persist emails beyond the default expiration time."
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "Instant email notifications and updates using WebSocket technology."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "No registration required. Complete anonymity and privacy protection."
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Fully responsive design that works perfectly on all devices."
    },
    {
      icon: RefreshCw,
      title: "Instant Generation",
      description: "Generate new temporary email addresses instantly with one click."
    },
    {
      icon: CreditCard,
      title: "Credit Card Generator",
      description: "Generate valid test credit card numbers for development and testing purposes."
    },
    {
      icon: CheckCircle,
      title: "Multiple Card Types",
      description: "Support for Visa, Mastercard, Amex, Discover, and more with proper validation."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="mb-4 font-lato">Powerful Features</h1>
            <p className="text-xl font-ubuntu text-muted-foreground max-w-2xl mx-auto">
              Everything you need for secure, temporary email management.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="card-premium animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-lato">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-ubuntu text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
