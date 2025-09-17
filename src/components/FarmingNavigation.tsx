import { Home, Activity, Cloud, FileText, MessageSquare, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/components/LanguageContext";

export function FarmingNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const navigationItems = [
    { icon: Home, label: t("home"), key: "home", path: "/" },
    { icon: Activity, label: t("prediction"), key: "prediction", path: "/prediction" },
    { icon: Cloud, label: t("weather"), key: "weather", path: "/weather" },
    { icon: FileText, label: t("reports"), key: "reports", path: "/reports" },
    { icon: MessageSquare, label: t("chat"), key: "chat", path: "/chat" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-2 md:relative md:border-0 md:bg-transparent md:p-0">
      <div className="flex justify-around items-center md:flex-col md:space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.key}
              variant={isActive ? "farming" : "ghost"}
              size="lg"
              className="flex-col space-y-1 h-auto py-2 px-3 md:w-full md:flex-row md:justify-start md:space-y-0 md:space-x-3"
              onClick={() => navigate(item.path)}
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