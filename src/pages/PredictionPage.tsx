import { useState } from "react";
import { Wheat, TrendingUp, Calendar, Droplets, Leaf, Bug, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FarmingNavigation } from "@/components/FarmingNavigation";
import { WhatsAppShareButton } from "@/components/WhatsAppShareButton";
import { useLanguage } from "@/components/LanguageContext";
import { useNavigate } from "react-router-dom";

const PredictionPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [showReport, setShowReport] = useState(false);
  const [formData, setFormData] = useState({
    cropType: '',
    soilType: '',
    location: '',
    fieldSize: ''
  });

  const generateReport = () => {
    setShowReport(true);
  };

  const reportText = `${t('yieldPredictionReport')}

फसल: ${formData.cropType}
स्थान: ${formData.location}
अनुमानित उत्पादन: 2.8 टन/एकड़

सिफारिशें:
• सिंचाई: सप्ताह में 2-3 बार
• उर्वरक: NPK 19:19:19
• कीटनाशक: नीम तेल स्प्रे
• बुआई का समय: 15 नवंबर तक

किसान मित्र AI द्वारा तैयार`;

  if (showReport) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" onClick={() => setShowReport(false)}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="w-10 h-10 farming-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">{t('yieldPredictionReport')}</h1>
                <p className="text-sm text-muted-foreground">AI आधारित विश्लेषण</p>
              </div>
            </div>
          </div>
        </header>

        <div className="flex">
          <aside className="hidden md:block w-64 bg-card border-r border-border p-4">
            <FarmingNavigation />
          </aside>

          <main className="flex-1 p-4 pb-20 md:pb-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Report Content */}
              <Card className="farming-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wheat className="h-6 w-6 mr-3 text-primary" />
                    उत्पादन पूर्वानुमान विवरण
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h3 className="font-semibold text-primary">फसल जानकारी</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        फसल: {formData.cropType}<br/>
                        क्षेत्र: {formData.fieldSize} एकड़<br/>
                        स्थान: {formData.location}
                      </p>
                    </div>
                    <div className="p-4 bg-success/5 rounded-lg">
                      <h3 className="font-semibold text-success">अनुमानित परिणाम</h3>
                      <div className="text-2xl font-bold text-success mt-1">2.8 टन/एकड़</div>
                      <p className="text-sm text-muted-foreground">कुल उत्पादन: 8.4 टन</p>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Droplets className="h-5 w-5 mr-2 text-blue-500" />
                          सिंचाई योजना
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• सप्ताह में 2-3 बार सिंचाई</li>
                          <li>• प्रति एकड़ 2-3 इंच पानी</li>
                          <li>• सुबह 6-8 बजे सिंचाई करें</li>
                          <li>• ड्रिप इरीगेशन बेहतर</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Leaf className="h-5 w-5 mr-2 text-green-500" />
                          उर्वरक सुझाव
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• NPK 19:19:19 - 50 किग्रा/एकड़</li>
                          <li>• यूरिया - 25 किग्रा/एकड़</li>
                          <li>• DAP - 30 किग्रा/एकड़</li>
                          <li>• जैविक खाद - 5 टन/एकड़</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Bug className="h-5 w-5 mr-2 text-red-500" />
                          कीट नियंत्रण
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• नीम तेल स्प्रे - साप्ताहिक</li>
                          <li>• BT कीटनाशक - आवश्यकतानुसार</li>
                          <li>• फेरोमोन ट्रैप लगाएं</li>
                          <li>• नियमित निरीक्षण करें</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Schedule */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" />
                        कृषि कैलेंडर (अगले 30 दिन)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold">पहला सप्ताह</h4>
                          <ul className="text-sm space-y-1">
                            <li>• दिन 1-2: बीज उपचार</li>
                            <li>• दिन 3-5: बुआई करें</li>
                            <li>• दिन 6-7: पहली सिंचाई</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">दूसरा सप्ताह</h4>
                          <ul className="text-sm space-y-1">
                            <li>• दिन 8-10: अंकुरण जांच</li>
                            <li>• दिन 11-13: खरपतवार नियंत्रण</li>
                            <li>• दिन 14: दूसरी सिंचाई</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <WhatsAppShareButton 
                      reportText={reportText}
                      className="flex-1"
                    />
                    <Button variant="outline" className="flex-1">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      PDF डाउनलोड करें
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>

        <div className="md:hidden">
          <FarmingNavigation />
        </div>
      </div>
    );
  }

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
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">{t('prediction')}</h1>
              <p className="text-sm text-muted-foreground">फसल उत्पादन पूर्वानुमान</p>
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
          <div className="max-w-2xl mx-auto space-y-6">
            <Card className="farming-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wheat className="h-6 w-6 mr-3 text-primary" />
                  फसल की जानकारी दें
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cropType">{t('cropType')}</Label>
                  <Select onValueChange={(value) => setFormData({...formData, cropType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="फसल चुनें" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">गेहूं</SelectItem>
                      <SelectItem value="rice">धान</SelectItem>
                      <SelectItem value="maize">मक्का</SelectItem>
                      <SelectItem value="mustard">सरसों</SelectItem>
                      <SelectItem value="cotton">कपास</SelectItem>
                      <SelectItem value="sugarcane">गन्ना</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="soilType">{t('soilType')}</Label>
                  <Select onValueChange={(value) => setFormData({...formData, soilType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="मिट्टी का प्रकार चुनें" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="loamy">दोमट मिट्टी</SelectItem>
                      <SelectItem value="clay">चिकनी मिट्टी</SelectItem>
                      <SelectItem value="sandy">बलुई मिट्टी</SelectItem>
                      <SelectItem value="black">काली मिट्टी</SelectItem>
                      <SelectItem value="red">लाल मिट्टी</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">{t('location')}</Label>
                  <Input 
                    id="location"
                    placeholder="जैसे: जयपुर, राजस्थान"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fieldSize">खेत का आकार (एकड़)</Label>
                  <Input 
                    id="fieldSize"
                    type="number"
                    placeholder="जैसे: 3"
                    value={formData.fieldSize}
                    onChange={(e) => setFormData({...formData, fieldSize: e.target.value})}
                  />
                </div>

                <Button 
                  variant="farming" 
                  className="w-full h-12"
                  onClick={generateReport}
                  disabled={!formData.cropType || !formData.soilType || !formData.location}
                >
                  <TrendingUp className="h-5 w-5 mr-2" />
                  {t('generatePrediction')}
                </Button>
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

export default PredictionPage;