import { useState } from "react";
import { Wheat, Droplets, Sun, TrendingUp, MessageSquare, FileText, AlertTriangle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { DashboardCard } from "@/components/DashboardCard";
import { WeatherWidget } from "@/components/WeatherWidget";
import { YieldPredictionChart } from "@/components/YieldPredictionChart";
import { FarmingNavigation } from "@/components/FarmingNavigation";
import { LanguageSelector } from "@/components/LanguageSelector";
import farmingHeroImage from "@/assets/farming-hero.jpg";

const Index = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState("");

  const handleLanguageSelect = (language: string) => {
    setCurrentLanguage(language);
    setShowLanguageSelector(false);
  };

  if (showLanguageSelector) {
    return <LanguageSelector onLanguageSelect={handleLanguageSelect} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 farming-gradient rounded-lg flex items-center justify-center">
              <Wheat className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">किसान मित्र</h1>
              <p className="text-sm text-muted-foreground">AI कृषि सहायक</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
              <Badge variant="destructive" className="ml-1 text-xs">3</Badge>
            </Button>
            <Button variant="outline" size="sm">राज कुमार</Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation - Hidden on mobile */}
        <aside className="hidden md:block w-64 bg-card border-r border-border p-4">
          <FarmingNavigation />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 pb-20 md:pb-4">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Hero Section */}
            <div 
              className="relative h-48 md:h-64 rounded-xl overflow-hidden farming-gradient flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${farmingHeroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  आपकी फसल, हमारी तकनीक
                </h2>
                <p className="text-lg opacity-90">AI के साथ बेहतर कृषि</p>
                <Button variant="secondary" className="mt-4" size="lg">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  सहायक से बात करें
                </Button>
              </div>
            </div>

            {/* Important Alerts */}
            <Alert className="border-warning bg-warning/10">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <AlertDescription>
                <strong>मौसम चेतावनी:</strong> कल बारिश की संभावना है। फसल की सुरक्षा करें।
              </AlertDescription>
            </Alert>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <DashboardCard
                title="फसल स्वास्थ्य"
                value="85"
                unit="%"
                trend="up"
                trendValue="+5%"
                icon={<Wheat className="h-5 w-5 text-primary" />}
                variant="success"
                action={{
                  label: "विस्तार देखें",
                  onClick: () => console.log("View crop health details")
                }}
              />
              
              <DashboardCard
                title="अनुमानित उत्पादन"
                value="2.8"
                unit="टन/एकड़"
                trend="up"
                trendValue="+12%"
                icon={<TrendingUp className="h-5 w-5 text-primary" />}
                variant="default"
                action={{
                  label: "रिपोर्ट देखें",
                  onClick: () => console.log("View yield report")
                }}
              />
              
              <DashboardCard
                title="मिट्टी नमी"
                value="68"
                unit="%"
                trend="down"
                trendValue="-3%"
                icon={<Droplets className="h-5 w-5 text-primary" />}
                variant="warning"
                action={{
                  label: "सिंचाई सुझाव",
                  onClick: () => console.log("View irrigation suggestions")
                }}
              />
              
              <DashboardCard
                title="आज का तापमान"
                value="28"
                unit="°C"
                trend="neutral"
                trendValue="सामान्य"
                icon={<Sun className="h-5 w-5 text-primary" />}
                variant="accent"
                action={{
                  label: "पूर्वानुमान",
                  onClick: () => console.log("View weather forecast")
                }}
              />
            </div>

            {/* Weather Widget */}
            <WeatherWidget />

            {/* Yield Prediction Charts */}
            <YieldPredictionChart />

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span>रिपोर्ट डाउनलोड करें</span>
              </Button>
              
              <Button variant="whatsapp" className="h-16 flex-col space-y-2">
                <MessageSquare className="h-6 w-6" />
                <span>WhatsApp पर भेजें</span>
              </Button>
              
              <Button variant="farming" className="h-16 flex-col space-y-2">
                <TrendingUp className="h-6 w-6" />
                <span>नई भविष्यवाणी</span>
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden">
        <FarmingNavigation />
      </div>
    </div>
  );
};

export default Index;