import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const weatherData = {
  current: {
    temp: "28°C",
    condition: "Partly Cloudy",
    humidity: "65%",
    windSpeed: "12 km/h",
    icon: <Sun className="h-6 w-6 text-warning" />,
  },
  forecast: [
    { day: "आज", temp: "28°C", icon: <Sun className="h-5 w-5 text-warning" /> },
    { day: "कल", temp: "26°C", icon: <CloudRain className="h-5 w-5 text-accent-foreground" /> },
    { day: "परसों", temp: "24°C", icon: <CloudRain className="h-5 w-5 text-accent-foreground" /> },
    { day: "बुध", temp: "27°C", icon: <Cloud className="h-5 w-5 text-muted-foreground" /> },
  ],
  alerts: [
    { type: "बारिश", message: "कल बारिश की संभावना", severity: "info" },
    { type: "तापमान", message: "अगले 3 दिन ठंडा मौसम", severity: "warning" },
  ],
};

export function WeatherWidget() {
  return (
    <Card className="sky-gradient border-accent-foreground/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-accent-foreground flex items-center">
          <Cloud className="h-5 w-5 mr-2" />
          मौसम पूर्वानुमान
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Weather */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {weatherData.current.icon}
            <div>
              <div className="text-2xl font-bold text-accent-foreground">
                {weatherData.current.temp}
              </div>
              <div className="text-sm text-accent-foreground/70">
                {weatherData.current.condition}
              </div>
            </div>
          </div>
          <div className="text-right space-y-1">
            <div className="flex items-center text-sm text-accent-foreground/70">
              <Droplets className="h-4 w-4 mr-1" />
              {weatherData.current.humidity}
            </div>
            <div className="flex items-center text-sm text-accent-foreground/70">
              <Wind className="h-4 w-4 mr-1" />
              {weatherData.current.windSpeed}
            </div>
          </div>
        </div>

        {/* 4-Day Forecast */}
        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-accent-foreground/20">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-accent-foreground/70 mb-1">{day.day}</div>
              <div className="flex justify-center mb-1">{day.icon}</div>
              <div className="text-sm font-medium text-accent-foreground">{day.temp}</div>
            </div>
          ))}
        </div>

        {/* Weather Alerts */}
        <div className="space-y-2 pt-2 border-t border-accent-foreground/20">
          {weatherData.alerts.map((alert, index) => (
            <div key={index} className="flex items-center justify-between">
              <Badge 
                variant={alert.severity === "warning" ? "destructive" : "secondary"}
                className="text-xs"
              >
                {alert.type}
              </Badge>
              <span className="text-xs text-accent-foreground/70 flex-1 ml-2">
                {alert.message}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}