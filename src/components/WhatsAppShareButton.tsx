import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageContext";

interface WhatsAppShareButtonProps {
  reportText: string;
  className?: string;
}

export function WhatsAppShareButton({ reportText, className }: WhatsAppShareButtonProps) {
  const { t } = useLanguage();

  const shareOnWhatsApp = () => {
    const encodedText = encodeURIComponent(reportText);
    const whatsappUrl = `https://wa.me/?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      variant="whatsapp" 
      onClick={shareOnWhatsApp}
      className={className}
    >
      <MessageSquare className="h-4 w-4 mr-2" />
      {t('whatsappShare')}
    </Button>
  );
}