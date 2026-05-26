import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ChatPageContent = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "ai" },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setChat((prevChat) => [...prevChat, { id: Date.now(), text: message, sender: "user" }]);
    setMessage("");

    setTimeout(() => {
      setChat((prevChat) => [
        ...prevChat,
        { id: Date.now() + 1, text: `You said: ${message}`, sender: "ai" },
      ]);
      toast("This is a test message.");
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[100dvh] bg-background flex flex-col items-center justify-center px-6 py-12"
    >
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight mb-8 text-center">
          AI Chat Assistant
        </h1>
        <div className="h-[70vh] overflow-y-auto border rounded-xl p-6 mb-6 space-y-4">
          {chat.map((msg) => (
            <div key={msg.id} className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  msg.sender === "ai"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {msg.sender === "ai" ? "AI" : "You"}
              </div>
              <div className="flex-1">
                <p
                  className={`text-sm ${
                    msg.sender === "ai" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center gap-2">
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatPageContent;
