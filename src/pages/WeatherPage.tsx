import { ArrowLeft, Cloud, Sun, CloudRain, Wind, Droplets, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FarmingNavigation } from "@/components/FarmingNavigation";
import { WeatherWidget } from "@/components/WeatherWidget";
import { useNavigate } from "react-router-dom";

const WeatherPage = () => {
  const navigate = useNavigate();

  const weeklyForecast = [
    { day: "आज", date: "15 नवं", icon: Sun, temp: "28°/18°", condition: "साफ आसमान", rain: "0%" },
    { day: "कल", date: "16 नवं", icon: Cloud, temp: "26°/16°", condition: "आंशिक बादल", rain: "10%" },
    { day: "शुक्र", date: "17 नवं", icon: CloudRain, temp: "24°/15°", condition: "हल्की बारिश", rain: "70%" },
    { day: "शनि", date: "18 नवं", icon: CloudRain, temp: "22°/14°", condition: "बारिश", rain: "85%" },
    { day: "रवि", date: "19 नवं", icon: Cloud, temp: "25°/16°", condition: "बादल छाए", rain: "30%" },
    { day: "सोम", date: "20 नवं", icon: Sun, temp: "27°/17°", condition: "साफ", rain: "5%" },
    { day: "मंगल", date: "21 नवं", icon: Sun, temp: "29°/19°", condition: "धूप", rain: "0%" },
  ];

  const farmingAlerts = [
    {
      id: 1,
      type: "warning",
      title: "बारिश की चेतावनी",
      message: "17-18 नवंबर को भारी बारिश की संभावना है। फसल की सुरक्षा करें।",
      priority: "high"
    },
    {
      id: 2, 
      type: "info",
      title: "सिंचाई सुझाव",
      message: "अगले 3 दिन बारिश के कारण सिंचाई की जरूरत नहीं।",
      priority: "medium"
    },
    {
      id: 3,
      type: "success", 
      title: "अनुकूल मौसम",
      message: "20-21 नवंबर को धान की कटाई के लिए अच्छा मौसम रहेगा।",
      priority: "low"
    }
  ];

  const getBadgeVariant = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning": return CloudRain;
      case "info": return Droplets;
      case "success": return Sun;
      default: return Cloud;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={() => navigate('/')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="w-10 h-10 farming-gradient rounded-lg flex items-center justify-center">
              <Cloud className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">मौसम पूर्वानुमान</h1>
              <p className="text-sm text-muted-foreground">कृषि अनुकूल मौसम जानकारी</p>
            </div>
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
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Current Weather Widget */}
            <WeatherWidget />

            {/* Weather Alerts */}
            <Card className="farming-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Thermometer className="h-5 w-5 mr-2 text-primary" />
                  कृषि चेतावनी और सुझाव
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {farmingAlerts.map((alert) => {
                  const IconComponent = getAlertIcon(alert.type);
                  return (
                    <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                      <IconComponent className="h-5 w-5 mt-1 text-primary" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{alert.title}</h4>
                          <Badge variant={getBadgeVariant(alert.priority)}>
                            {alert.priority === "high" ? "तत्काल" : 
                             alert.priority === "medium" ? "महत्वपूर्ण" : "सामान्य"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{alert.message}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* 7-Day Forecast */}
            <Card className="farming-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wind className="h-5 w-5 mr-2 text-primary" />
                  7 दिन का मौसम पूर्वानुमान
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                  {weeklyForecast.map((day, index) => {
                    const IconComponent = day.icon;
                    return (
                      <div key={index} className="text-center p-3 rounded-lg border bg-card hover:shadow-md transition-shadow">
                        <div className="font-semibold text-sm">{day.day}</div>
                        <div className="text-xs text-muted-foreground mb-2">{day.date}</div>
                        <IconComponent className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="font-bold text-sm mb-1">{day.temp}</div>
                        <div className="text-xs text-muted-foreground mb-2">{day.condition}</div>
                        <Badge variant="secondary" className="text-xs">
                          ☔ {day.rain}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Farming Calendar */}
            <Card className="farming-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sun className="h-5 w-5 mr-2 text-primary" />
                  मौसम आधारित कृषि सुझाव
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-success">अनुकूल गतिविधियां</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span>आज: बीज उपचार करें</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span>कल: खाद का छिड़काव</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span>20-21 नवं: कटाई</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-warning">सावधानी बरतें</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        <span>17-18 नवं: छिड़काव न करें</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        <span>बारिश से पहले ढकें</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        <span>जल निकासी की व्यवस्था</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-destructive">टालें</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-destructive rounded-full"></div>
                        <span>17-18 नवं: सिंचाई</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-destructive rounded-full"></div>
                        <span>बारिश में बुआई</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-destructive rounded-full"></div>
                        <span>गीली मिट्टी में काम</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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

export default WeatherPage;