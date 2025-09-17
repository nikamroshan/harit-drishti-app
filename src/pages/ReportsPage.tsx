import { ArrowLeft, FileText, TrendingUp, Bug, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FarmingNavigation } from "@/components/FarmingNavigation";
import { RecommendationsPanel } from "@/components/RecommendationsPanel";
import { WhatsAppShareButton } from "@/components/WhatsAppShareButton";
import { useNavigate } from "react-router-dom";

const ReportsPage = () => {
  const navigate = useNavigate();

  const recentReports = [
    {
      id: 1,
      type: "yield",
      title: "गेहूं उत्पादन पूर्वानुमान",
      date: "15 नवंबर 2024",
      status: "completed",
      result: "2.8 टन/एकड़"
    },
    {
      id: 2,
      type: "disease",
      title: "पत्ती का धब्बा रोग निदान",
      date: "12 नवंबर 2024", 
      status: "completed",
      result: "मध्यम गंभीरता (60%)"
    },
    {
      id: 3,
      type: "yield",
      title: "धान उत्पादन पूर्वानुमान",
      date: "8 नवंबर 2024",
      status: "completed", 
      result: "3.2 टन/एकड़"
    }
  ];

  const getReportIcon = (type: string) => {
    return type === "yield" ? (
      <TrendingUp className="h-5 w-5 text-primary" />
    ) : (
      <Bug className="h-5 w-5 text-warning" />
    );
  };

  const getReportBadge = (type: string) => {
    return type === "yield" ? (
      <Badge variant="default">उत्पादन</Badge>
    ) : (
      <Badge variant="secondary">रोग निदान</Badge>
    );
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
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">रिपोर्ट्स और विश्लेषण</h1>
              <p className="text-sm text-muted-foreground">आपकी सभी AI रिपोर्ट्स</p>
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
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="farming-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">कुल रिपोर्ट्स</div>
                </CardContent>
              </Card>
              <Card className="farming-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-success">8</div>
                  <div className="text-sm text-muted-foreground">उत्पादन पूर्वानुमान</div>
                </CardContent>
              </Card>
              <Card className="farming-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-warning">4</div>
                  <div className="text-sm text-muted-foreground">रोग निदान</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Reports */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">हाल की रिपोर्ट्स</h2>
                {recentReports.map((report) => (
                  <Card key={report.id} className="farming-card hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            {getReportIcon(report.type)}
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold">{report.title}</h3>
                              {getReportBadge(report.type)}
                            </div>
                            <p className="text-sm text-muted-foreground">{report.date}</p>
                            <p className="text-sm font-medium text-primary">{report.result}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <WhatsAppShareButton 
                            reportText={`${report.title}\n\nपरिणाम: ${report.result}\nदिनांक: ${report.date}\n\nकिसान मित्र AI द्वारा तैयार`}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Button 
                    variant="farming" 
                    className="h-16 flex-col space-y-2"
                    onClick={() => navigate('/prediction')}
                  >
                    <TrendingUp className="h-6 w-6" />
                    <span>नया पूर्वानुमान</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-16 flex-col space-y-2"
                    onClick={() => navigate('/disease-detection')}
                  >
                    <Bug className="h-6 w-6" />
                    <span>रोग निदान</span>
                  </Button>
                </div>
              </div>

              {/* Recommendations Panel */}
              <div>
                <RecommendationsPanel />
              </div>
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

export default ReportsPage;