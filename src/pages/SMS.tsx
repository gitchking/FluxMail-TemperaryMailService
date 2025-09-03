import CreditCardGenerator from "@/components/creditcard/CreditCardGenerator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SMS = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Credit Card Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Generate valid test credit card numbers for development and testing purposes. 
              These cards are for testing only and cannot be used for real transactions.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <CreditCardGenerator />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SMS;
