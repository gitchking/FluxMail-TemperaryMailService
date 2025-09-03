
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-lato font-bold text-xl">
            <Mail className="h-6 w-6" />
            <span>FluxMail</span>
          </Link>

          {/* Center - Name and Year */}
          <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 items-center">
            <span className="text-lg font-ubuntu font-semibold text-foreground">
              © {currentYear} FluxMail
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6">
            <Link
              to="/terms"
              className="text-lg font-ubuntu font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-lg font-ubuntu font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        
        {/* Mobile Center */}
        <div className="sm:hidden pb-4 text-center">
          <span className="text-lg font-ubuntu font-semibold text-foreground">
            © {currentYear} FluxMail
          </span>
        </div>
      </div>
    </footer>
  );
}
