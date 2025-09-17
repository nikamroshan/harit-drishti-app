import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Wheat, Phone, Mail, Eye, EyeOff } from "lucide-react";
import farmingHeroImage from "@/assets/farming-hero.jpg";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneLogin = () => {
    if (phoneNumber) {
      setShowOtpInput(true);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${farmingHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 farming-gradient rounded-full flex items-center justify-center">
            <Wheat className="h-8 w-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">किसान मित्र में लॉगिन करें</CardTitle>
          <p className="text-muted-foreground">अपने खाते में प्रवेश करें</p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="phone" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="phone">
                <Phone className="h-4 w-4 mr-2" />
                फोन
              </TabsTrigger>
              <TabsTrigger value="email">
                <Mail className="h-4 w-4 mr-2" />
                ईमेल
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="phone" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">मोबाइल नंबर</Label>
                <div className="flex">
                  <Badge variant="secondary" className="rounded-r-none px-3 py-2 border-r-0">
                    +91
                  </Badge>
                  <Input 
                    id="phone"
                    type="tel" 
                    placeholder="9876543210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="rounded-l-none"
                  />
                </div>
              </div>
              
              {showOtpInput && (
                <div className="space-y-2">
                  <Label htmlFor="otp">OTP दर्ज करें</Label>
                  <Input 
                    id="otp"
                    type="text" 
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                  />
                  <p className="text-sm text-muted-foreground">
                    OTP आपके मोबाइल नंबर पर भेजा गया है
                  </p>
                </div>
              )}
              
              {!showOtpInput ? (
                <Button 
                  variant="farming" 
                  className="w-full" 
                  onClick={handlePhoneLogin}
                  disabled={!phoneNumber}
                >
                  OTP भेजें
                </Button>
              ) : (
                <Button 
                  variant="farming" 
                  className="w-full"
                  disabled={otp.length !== 6}
                >
                  लॉगिन करें
                </Button>
              )}
            </TabsContent>
            
            <TabsContent value="email" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">ईमेल पता</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="farmer@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">पासवर्ड</Label>
                <div className="relative">
                  <Input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="अपना पासवर्ड दर्ज करें"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              <Button variant="farming" className="w-full">
                ईमेल से लॉगिन करें
              </Button>
              
              <Button variant="ghost" className="w-full text-sm">
                पासवर्ड भूल गए?
              </Button>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">
              नया खाता बनाना चाहते हैं?
            </p>
            <Button variant="outline" className="w-full">
              साइन अप करें
            </Button>
          </div>
          
          <div className="text-center mt-4">
            <Badge variant="secondary" className="text-xs">
              सुरक्षित और निजी
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}