import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Languages, Check } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "hi", name: "हिंदी", englishName: "Hindi", flag: "🇮🇳" },
  { code: "en", name: "English", englishName: "English", flag: "🇺🇸" },
  { code: "mr", name: "मराठी", englishName: "Marathi", flag: "🇮🇳" },
  { code: "or", name: "ଓଡ଼ିଆ", englishName: "Odia", flag: "🇮🇳" },
];

interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void;
}

export function LanguageSelector({ onLanguageSelect }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    onLanguageSelect(languageCode);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md farming-card">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 farming-gradient rounded-full flex items-center justify-center">
            <Languages className="h-8 w-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">भाषा चुनें</CardTitle>
          <p className="text-muted-foreground">अपनी पसंदीदा भाषा का चयन करें</p>
        </CardHeader>
        <CardContent className="space-y-3">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant={selectedLanguage === language.code ? "farming" : "outline"}
              className="w-full justify-between h-auto p-4"
              onClick={() => handleLanguageSelect(language.code)}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{language.flag}</span>
                <div className="text-left">
                  <div className="font-semibold">{language.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {language.englishName}
                  </div>
                </div>
              </div>
              {selectedLanguage === language.code && (
                <Check className="h-5 w-5 text-primary-foreground" />
              )}
            </Button>
          ))}
          
          {selectedLanguage && (
            <Button 
              variant="farming" 
              className="w-full mt-6"
              size="lg"
              onClick={() => {/* Navigate to login */}}
            >
              जारी रखें
            </Button>
          )}
          
          <div className="text-center mt-4">
            <Badge variant="secondary" className="text-xs">
              किसान मित्र ऐप में आपका स्वागत है
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}