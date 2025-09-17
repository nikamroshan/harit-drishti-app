import { useState } from "react";
import { Camera, Upload, ArrowLeft, Bug, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FarmingNavigation } from "@/components/FarmingNavigation";
import { WhatsAppShareButton } from "@/components/WhatsAppShareButton";
import { useLanguage } from "@/components/LanguageContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DiseaseDetectionPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [showReport, setShowReport] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    if (!uploadedImage) {
      toast.error("कृपया पहले एक तस्वीर अपलोड करें");
      return;
    }
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowReport(true);
      toast.success("रोग विश्लेषण पूर्ण!");
    }, 3000);
  };

  const reportText = `${t('diseaseDetectionReport')}

पहचाना गया रोग: पत्ती का धब्बा रोग (Leaf Spot Disease)
गंभीरता स्तर: मध्यम (60%)
प्रभावित क्षेत्र: पत्तियों पर भूरे धब्बे

उपचार सुझाव:
• कॉपर सल्फेट स्प्रे - 2 ग्राम/लीटर
• मैंकोज़ेब छिड़काव - साप्ताहिक
• प्रभावित पत्तियां हटाएं
• जल निकासी सुधारें

किसान मित्र AI द्वारा निदान`;

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
                <Bug className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">{t('diseaseDetectionReport')}</h1>
                <p className="text-sm text-muted-foreground">AI रोग निदान परिणाम</p>
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
              {/* Analysis Results */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Uploaded Image */}
                <Card className="farming-card">
                  <CardHeader>
                    <CardTitle>अपलोड की गई तस्वीर</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {uploadedImage && (
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded crop" 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    )}
                  </CardContent>
                </Card>

                {/* Disease Detection Results */}
                <Card className="farming-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                      रोग विश्लेषण परिणाम
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                      <h3 className="font-semibold text-warning">पहचाना गया रोग</h3>
                      <p className="text-lg font-bold mt-1">पत्ती का धब्बा रोग</p>
                      <p className="text-sm text-muted-foreground">(Leaf Spot Disease)</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-destructive/10 rounded-lg">
                        <div className="text-2xl font-bold text-destructive">60%</div>
                        <div className="text-sm text-muted-foreground">गंभीरता स्तर</div>
                      </div>
                      <div className="text-center p-3 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">95%</div>
                        <div className="text-sm text-muted-foreground">पहचान सटीकता</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Treatment Recommendations */}
              <Card className="farming-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-success" />
                    उपचार की सिफारिशें
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Immediate Actions */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-destructive">तत्काल करने वाले काम</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                          <span className="text-sm">सभी प्रभावित पत्तियों को तुरंत हटा दें</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                          <span className="text-sm">खेत की जल निकासी में सुधार करें</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                          <span className="text-sm">कॉपर सल्फेट स्प्रे (2 ग्राम/लीटर) करें</span>
                        </li>
                      </ul>
                    </div>

                    {/* Weekly Treatment */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-primary">साप्ताहिक उपचार</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span className="text-sm">मैंकोज़ेब 75% WP - 2.5 ग्राम/लीटर</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span className="text-sm">बेसिक कॉपर क्लोराइड स्प्रे</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span className="text-sm">ट्राइकोडर्मा छिड़काव (प्राकृतिक उपचार)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Prevention Tips */}
                  <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                    <h4 className="font-semibold text-success mb-2">भविष्य में रोकथाम के लिए</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <ul className="space-y-1">
                        <li>• फसल चक्र अपनाएं</li>
                        <li>• बीज उपचार करें</li>
                        <li>• संतुलित उर्वरक का प्रयोग</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• पौधों के बीच उचित दूरी रखें</li>
                        <li>• नियमित निरीक्षण करें</li>
                        <li>• जैविक कीटनाशक का प्रयोग</li>
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <WhatsAppShareButton 
                      reportText={reportText}
                      className="flex-1"
                    />
                    <Button variant="outline" className="flex-1">
                      <Bug className="h-4 w-4 mr-2" />
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
              <Bug className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">रोग पहचान</h1>
              <p className="text-sm text-muted-foreground">AI आधारित फसल रोग निदान</p>
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
                  <Camera className="h-6 w-6 mr-3 text-primary" />
                  फसल की तस्वीर अपलोड करें
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Image Upload Area */}
                <div className="border-2 border-dashed border-border rounded-lg p-8">
                  {uploadedImage ? (
                    <div className="text-center">
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded crop" 
                        className="max-h-64 mx-auto rounded-lg"
                      />
                      <p className="mt-2 text-sm text-muted-foreground">तस्वीर अपलोड हो गई</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                      <h3 className="mt-2 text-lg font-semibold">तस्वीर चुनें</h3>
                      <p className="text-muted-foreground">फसल या पत्तियों की स्पष्ट तस्वीर लें</p>
                    </div>
                  )}
                </div>

                {/* Upload Button */}
                <div className="flex flex-col space-y-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload">
                    <Button variant="outline" className="w-full h-12" asChild>
                      <span>
                        <Camera className="h-5 w-5 mr-2" />
                        {uploadedImage ? "दूसरी तस्वीर चुनें" : "तस्वीर अपलोड करें"}
                      </span>
                    </Button>
                  </label>

                  <Button 
                    variant="farming" 
                    className="w-full h-12"
                    onClick={analyzeImage}
                    disabled={!uploadedImage || isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        विश्लेषण हो रहा है...
                      </>
                    ) : (
                      <>
                        <Bug className="h-5 w-5 mr-2" />
                        {t('detectDisease')}
                      </>
                    )}
                  </Button>
                </div>

                {/* Tips */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">बेहतर परिणाम के लिए:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• स्पष्ट और उजाला तस्वीर लें</li>
                    <li>• पत्तियों को नज़दीक से दिखाएं</li>
                    <li>• कई कोणों से तस्वीर लें</li>
                    <li>• प्रभावित हिस्से को फोकस करें</li>
                  </ul>
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

export default DiseaseDetectionPage;