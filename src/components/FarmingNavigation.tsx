import { Home, Activity, Cloud, FileText, MessageSquare, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  { icon: Home, label: "होम", key: "home", active: true },
  { icon: Activity, label: "भविष्यवाणी", key: "prediction" },
  { icon: Cloud, label: "मौसम", key: "weather" },
  { icon: FileText, label: "रिपोर्ट", key: "reports" },
  { icon: MessageSquare, label: "सहायता", key: "chat" },
];

export function FarmingNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-2 md:relative md:border-0 md:bg-transparent md:p-0">
      <div className="flex justify-around items-center md:flex-col md:space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.key}
              variant={item.active ? "farming" : "ghost"}
              size="lg"
              className="flex-col space-y-1 h-auto py-2 px-3 md:w-full md:flex-row md:justify-start md:space-y-0 md:space-x-3"
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs md:text-sm font-medium">{item.label}</span>
            </Button>
          );
        })}
        
        <div className="hidden md:block md:mt-6">
          <Button variant="outline" size="sm" className="w-full">
            <Bell className="h-4 w-4 mr-2" />
            अलर्ट
            <Badge variant="destructive" className="ml-2">3</Badge>
          </Button>
        </div>
        
        <div className="hidden md:block md:mt-2">
          <Button variant="ghost" size="sm" className="w-full">
            <User className="h-4 w-4 mr-2" />
            प्रोफाइल
          </Button>
        </div>
      </div>
    </nav>
  );
}