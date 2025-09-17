import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  icon: ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  variant?: "default" | "success" | "warning" | "accent";
  className?: string;
}

export function DashboardCard({
  title,
  value,
  unit,
  trend,
  trendValue,
  icon,
  action,
  variant = "default",
  className = "",
}: DashboardCardProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-success" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-destructive" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "success":
        return "border-success/20 bg-gradient-to-br from-success/5 to-success/10";
      case "warning":
        return "border-warning/20 bg-gradient-to-br from-warning/5 to-warning/10";
      case "accent":
        return "border-accent-foreground/20 bg-gradient-to-br from-accent/50 to-accent/30";
      default:
        return "farming-card";
    }
  };

  return (
    <Card className={`${getVariantClasses()} ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-2">
          <div className="text-2xl font-bold">
            {value}
            {unit && <span className="text-lg text-muted-foreground ml-1">{unit}</span>}
          </div>
          {trend && trendValue && (
            <div className="flex items-center space-x-1 text-sm">
              {getTrendIcon()}
              <span className={
                trend === "up" 
                  ? "text-success" 
                  : trend === "down" 
                    ? "text-destructive" 
                    : "text-muted-foreground"
              }>
                {trendValue}
              </span>
            </div>
          )}
        </div>
        {action && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="mt-3 p-0 h-auto font-medium text-primary hover:text-primary-glow"
            onClick={action.onClick}
          >
            {action.label} →
          </Button>
        )}
      </CardContent>
    </Card>
  );
}