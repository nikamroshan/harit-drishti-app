import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Droplets, 
  Leaf, 
  Bug, 
  Calendar, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

const recommendations = [
  {
    id: 1,
    category: "irrigation",
    title: "सिंचाई की सलाह",
    priority: "high",
    description: "मिट्टी की नमी 68% है। अगले 2-3 दिनों में सिंचाई करें।",
    action: "अभी सिंचाई करें",
    icon: <Droplets className="h-5 w-5 text-blue-500" />,
    timeframe: "आज",
    impact: "+15% उत्पादन"
  },
  {
    id: 2,
    category: "fertilizer",
    title: "खाद की सिफारिश",
    priority: "medium",
    description: "नाइट्रोजन की कमी दिख रही है। NPK 19:19:19 खाद का उपयोग करें।",
    action: "खाद की व्यवस्था करें",
    icon: <Leaf className="h-5 w-5 text-green-500" />,
    timeframe: "3 दिन में",
    impact: "+10% पोषण"
  },
  {
    id: 3,
    category: "pest",
    title: "कीट नियंत्रण",
    priority: "low",
    description: "मौसम के अनुसार कीटों का खतरा बढ़ सकता है। निवारक उपाय अपनाएं।",
    action: "कीटनाशक छिड़काव",
    icon: <Bug className="h-5 w-5 text-red-500" />,
    timeframe: "1 सप्ताह में",
    impact: "सुरक्षा"
  },
  {
    id: 4,
    category: "timing",
    title: "बुआई का समय",
    priority: "medium",
    description: "रबी फसल की बुआई के लिए अनुकूल समय आ रहा है।",
    action: "बीज तैयार करें",
    icon: <Calendar className="h-5 w-5 text-purple-500" />,
    timeframe: "2 सप्ताह में",
    impact: "समय पर बुआई"
  }
];

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return <Badge variant="destructive">तुरंत</Badge>;
    case "medium":
      return <Badge variant="default">जल्दी</Badge>;
    case "low":
      return <Badge variant="secondary">बाद में</Badge>;
    default:
      return <Badge variant="secondary">सामान्य</Badge>;
  }
};

export function RecommendationsPanel() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="farming-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-semibold flex items-center">
            <TrendingUp className="h-6 w-6 mr-3 text-primary" />
            व्यक्तिगत सिफारिशें
          </CardTitle>
          <p className="text-muted-foreground">
            आपकी फसल और क्षेत्र के लिए AI-आधारित सुझाव
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">कुल सुझाव</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-destructive">3</div>
              <div className="text-sm text-muted-foreground">तुरंत करें</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">92%</div>
              <div className="text-sm text-muted-foreground">सटीकता</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Priority Alert */}
      <Alert className="border-destructive bg-destructive/10">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <AlertDescription className="text-destructive">
          <strong>महत्वपूर्ण:</strong> मिट्टी की नमी कम हो रही है। तुरंत सिंचाई की जरूरत है।
        </AlertDescription>
      </Alert>

      {/* Recommendations List */}
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <Card key={rec.id} className="farming-card hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {rec.icon}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{rec.title}</h3>
                    {getPriorityBadge(rec.priority)}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {rec.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {rec.timeframe}
                    </div>
                    <div className="flex items-center text-success">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {rec.impact}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button 
                    variant={rec.priority === "high" ? "farming" : "outline"} 
                    size="sm"
                  >
                    {rec.action}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button variant="farming" className="h-12">
          <TrendingUp className="h-5 w-5 mr-2" />
          नई सिफारिशें प्राप्त करें
        </Button>
        <Button variant="outline" className="h-12">
          <CheckCircle className="h-5 w-5 mr-2" />
          पूरी की गई गतिविधियां
        </Button>
      </div>
    </div>
  );
}