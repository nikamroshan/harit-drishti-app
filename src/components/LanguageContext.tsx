import { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    "farmingPlatform": "Farming Platform",
    "aiAssistant": "AI Assistant", 
    "home": "Home",
    "prediction": "Prediction",
    "weather": "Weather",
    "reports": "Reports",
    "chat": "Support",
    "cropHealth": "Crop Health",
    "predictedYield": "Predicted Yield",
    "soilMoisture": "Soil Moisture",
    "todayTemp": "Today's Temperature",
    "whatsappShare": "Share on WhatsApp",
    "downloadReport": "Download Report",
    "newPrediction": "New Prediction",
    "cropType": "Crop Type",
    "soilType": "Soil Type",
    "location": "Location",
    "generatePrediction": "Generate Prediction",
    "yieldPredictionReport": "Yield Prediction Report",
    "diseaseDetectionReport": "Disease Detection Report",
    "uploadImage": "Upload Image",
    "detectDisease": "Detect Disease",
    "recommendations": "Recommendations",
    "irrigation": "Irrigation",
    "fertilizers": "Fertilizers",
    "pesticides": "Pesticides",
    "schedule": "Schedule"
  },
  hi: {
    "farmingPlatform": "किसान मित्र",
    "aiAssistant": "AI कृषि सहायक",
    "home": "होम",
    "prediction": "भविष्यवाणी", 
    "weather": "मौसम",
    "reports": "रिपोर्ट",
    "chat": "सहायता",
    "cropHealth": "फसल स्वास्थ्य",
    "predictedYield": "अनुमानित उत्पादन",
    "soilMoisture": "मिट्टी नमी",
    "todayTemp": "आज का तापमान",
    "whatsappShare": "WhatsApp पर भेजें",
    "downloadReport": "रिपोर्ट डाउनलोड करें",
    "newPrediction": "नई भविष्यवाणी",
    "cropType": "फसल का प्रकार",
    "soilType": "मिट्टी का प्रकार",
    "location": "स्थान",
    "generatePrediction": "भविष्यवाणी बनाएं",
    "yieldPredictionReport": "उत्पादन पूर्वानुमान रिपोर्ट",
    "diseaseDetectionReport": "रोग निदान रिपोर्ट",
    "uploadImage": "चित्र अपलोड करें",
    "detectDisease": "रोग पहचानें",
    "recommendations": "सिफारिशें",
    "irrigation": "सिंचाई",
    "fertilizers": "उर्वरक",
    "pesticides": "कीटनाशक",
    "schedule": "अनुसूची"
  },
  mr: {
    "farmingPlatform": "शेती मित्र",
    "aiAssistant": "AI शेती सहायक",
    "home": "मुख्यपृष्ठ",
    "prediction": "अंदाज",
    "weather": "हवामान", 
    "reports": "अहवाल",
    "chat": "सहाय्य",
    "cropHealth": "पीक आरोग्य",
    "predictedYield": "अपेक्षित उत्पादन",
    "soilMoisture": "मृदा ओलावा",
    "todayTemp": "आजचे तापमान",
    "whatsappShare": "WhatsApp वर पाठवा",
    "downloadReport": "अहवाल डाउनलोड",
    "newPrediction": "नवीन अंदाज",
    "cropType": "पीकाचा प्रकार",
    "soilType": "मातीचा प्रकार", 
    "location": "स्थान",
    "generatePrediction": "अंदाज तयार करा",
    "yieldPredictionReport": "उत्पादन अंदाज अहवाल",
    "diseaseDetectionReport": "रोग शोधण अहवाल",
    "uploadImage": "प्रतिमा अपलोड करा",
    "detectDisease": "रोग शोधा",
    "recommendations": "शिफारशी",
    "irrigation": "सिंचन",
    "fertilizers": "खत",
    "pesticides": "कीटकनाशके",
    "schedule": "वेळापत्रक"
  },
  od: {
    "farmingPlatform": "କୃଷକ ମିତ୍ର",
    "aiAssistant": "AI କୃଷି ସହାୟକ",
    "home": "ଗୃହ",
    "prediction": "ପୂର୍ବାନୁମାନ",
    "weather": "ପାଣିପାଗ",
    "reports": "ରିପୋର୍ଟ",
    "chat": "ସାହାଯ୍ୟ",
    "cropHealth": "ଫସଲ ସ୍ବାସ୍ଥ୍ୟ",
    "predictedYield": "ପୂର୍ବାନୁମାନିତ ଉତ୍ପାଦନ",
    "soilMoisture": "ମୃତ୍ତିକା ଆର୍ଦ୍ରତା",
    "todayTemp": "ଆଜିର ତାପମାତ୍ରା",
    "whatsappShare": "WhatsApp ରେ ପଠାନ୍ତୁ",
    "downloadReport": "ରିପୋର୍ଟ ଡାଉନଲୋଡ୍",
    "newPrediction": "ନୂଆ ପୂର୍ବାନୁମାନ",
    "cropType": "ଫସଲର ପ୍ରକାର",
    "soilType": "ମୃତ୍ତିକାର ପ୍ରକାର",
    "location": "ସ୍ଥାନ",
    "generatePrediction": "ପୂର୍ବାନୁମାନ ସୃଷ୍ଟି କରନ୍ତୁ",
    "yieldPredictionReport": "ଉତ୍ପାଦନ ପୂର୍ବାନୁମାନ ରିପୋର୍ଟ",
    "diseaseDetectionReport": "ରୋଗ ନିର୍ଣ୍ଣୟ ରିପୋର୍ଟ",
    "uploadImage": "ଛବି ଅପଲୋଡ୍ କରନ୍ତୁ",
    "detectDisease": "ରୋଗ ଚିହ୍ନଟ କରନ୍ତୁ",
    "recommendations": "ପରାମର୍ଶ",
    "irrigation": "ସେଚନ",
    "fertilizers": "ସାର",
    "pesticides": "କୀଟନାଶକ",
    "schedule": "ସୂଚୀ"
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState('hi');

  const t = (key: string): string => {
    return translations[currentLanguage as keyof typeof translations]?.[key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}