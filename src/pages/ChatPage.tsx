import { useState } from "react";
import { ArrowLeft, MessageSquare, Send, Bot, User, Mic, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FarmingNavigation } from "@/components/FarmingNavigation";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "नमस्ते! मैं किसान मित्र AI हूं। मैं आपकी कृषि संबंधी किसी भी समस्या में मदद कर सकता हूं। क्या आप मुझसे कुछ पूछना चाहते हैं?",
      time: "अभी"
    },
    {
      id: 2,
      type: "user", 
      message: "मेरी गेहूं की फसल में पीले धब्बे दिख रहे हैं। क्या करना चाहिए?",
      time: "2 मिनट पहले"
    },
    {
      id: 3,
      type: "bot",
      message: "गेहूं में पीले धब्बे कई कारणों से हो सकते हैं:\n\n1. **पत्ती का जंग (Leaf Rust)** - सबसे आम कारण\n2. **नाइट्रोजन की कमी**\n3. **पानी की कमी**\n\n**तत्काल उपाय:**\n• प्रोपिकोनाज़ोल स्प्रे करें (1 मिली/लीटर)\n• यूरिया 10 किग्रा/एकड़ दें\n• नियमित सिंचाई करें\n\nक्या आप इसकी तस्वीर भेज सकते हैं? मैं बेहतर सुझाव दे सकूंगा।",
      time: "अभी"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const quickQuestions = [
    "मिट्टी की जांच कैसे करें?",
    "खाद कब और कितनी दें?", 
    "बारिश के बाद क्या करना चाहिए?",
    "कीट कैसे पहचानें?",
    "बुआई का सही समय क्या है?"
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        type: "user" as const,
        message: newMessage,
        time: "अभी"
      };
      
      setMessages([...messages, userMessage]);
      setNewMessage("");
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: "bot" as const,
          message: "धन्यवाद आपके प्रश्न के लिए। मैं इसका विस्तृत उत्तर तैयार कर रहा हूं। कृपया थोड़ा इंतजार करें...",
          time: "अभी"
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const sendQuickMessage = (question: string) => {
    setNewMessage(question);
    sendMessage();
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
              <MessageSquare className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">AI कृषि सहायक</h1>
              <p className="text-sm text-muted-foreground">24/7 उपलब्ध • ऑनलाइन</p>
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
        <main className="flex-1 flex flex-col pb-20 md:pb-4" style={{ height: 'calc(100vh - 73px)' }}>
          <div className="flex-1 overflow-hidden">
            {/* Quick Questions */}
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold mb-3">तुरंत पूछें:</h3>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => sendQuickMessage(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.type === 'bot' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                    }`}>
                      {msg.type === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    
                    <div className={`rounded-lg p-3 ${
                      msg.type === 'user' 
                        ? 'bg-primary text-primary-foreground ml-auto' 
                        : 'bg-card border border-border'
                    }`}>
                      <div className="whitespace-pre-wrap text-sm">{msg.message}</div>
                      <div className={`text-xs mt-1 ${
                        msg.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <Button variant="ghost" size="sm">
                  <Image className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex-1 flex space-x-2">
                <Input
                  placeholder="अपना प्रश्न यहां लिखें..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1"
                />
                <Button 
                  variant="farming" 
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="text-xs text-muted-foreground mt-2 text-center">
              AI सुझाव हैं। विशेषज्ञ सलाह के लिए कृषि विभाग से संपर्क करें।
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

export default ChatPage;