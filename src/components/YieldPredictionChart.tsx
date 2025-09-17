import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Wheat } from "lucide-react";

const yieldData = [
  { crop: "गेहूं", predicted: 2.8, actual: 2.6, unit: "टन/एकड़" },
  { crop: "धान", predicted: 3.2, actual: 3.0, unit: "टन/एकड़" },
  { crop: "मक्का", predicted: 2.5, actual: 2.3, unit: "टन/एकड़" },
  { crop: "सरसों", predicted: 1.8, actual: 1.9, unit: "टन/एकड़" },
];

const cropDistribution = [
  { name: "गेहूं", value: 40, color: "#22c55e" },
  { name: "धान", value: 30, color: "#3b82f6" },
  { name: "मक्का", value: 20, color: "#f59e0b" },
  { name: "सरसों", value: 10, color: "#ef4444" },
];

const performanceMetrics = {
  totalYield: "12.3 टन",
  accuracy: "87%",
  improvement: "+15%",
  recommendation: "सिंचाई बढ़ाएं",
};

export function YieldPredictionChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Yield Comparison Chart */}
      <Card className="farming-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            फसल उत्पादन पूर्वानुमान
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yieldData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="crop" 
                  tick={{ fontSize: 12, fill: "hsl(var(--foreground))" }}
                />
                <YAxis tick={{ fontSize: 12, fill: "hsl(var(--foreground))" }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Bar dataKey="predicted" fill="hsl(var(--primary))" name="भविष्यवाणी" radius={4} />
                <Bar dataKey="actual" fill="hsl(var(--success))" name="वास्तविक" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Performance Metrics */}
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {performanceMetrics.totalYield}
              </div>
              <div className="text-sm text-muted-foreground">कुल उत्पादन</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">
                {performanceMetrics.accuracy}
              </div>
              <div className="text-sm text-muted-foreground">सटीकता</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Crop Distribution */}
      <Card className="farming-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Wheat className="h-5 w-5 mr-2 text-primary" />
            फसल वितरण
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={cropDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {cropDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {cropDistribution.map((crop, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: crop.color }}
                />
                <span className="text-sm">{crop.name}</span>
                <Badge variant="secondary" className="text-xs ml-auto">
                  {crop.value}%
                </Badge>
              </div>
            ))}
          </div>
          
          {/* Recommendation */}
          <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-warning" />
              <span className="text-sm font-medium">सुझाव:</span>
              <span className="text-sm">{performanceMetrics.recommendation}</span>
            </div>
            <Badge variant="secondary" className="mt-2">
              {performanceMetrics.improvement} सुधार
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}