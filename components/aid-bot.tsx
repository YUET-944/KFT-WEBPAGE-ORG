"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, Bot, User, X } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function AidBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm the KFT Aid Assistant. I can help you with:\n\n• Understanding aid application process\n• Required documents\n• Eligibility criteria\n• Application status\n• Contact information\n\nHow can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const botResponses = {
    documents:
      "For aid applications, you'll need:\n\n• Copy of CNIC (front and back)\n• Income certificate or salary slip\n• Medical reports (for medical aid)\n• Utility bills (proof of address)\n• Birth certificates (for children)\n• Any other relevant documents",

    eligibility:
      "KFT aid eligibility criteria:\n\n• Pakistani citizen with valid CNIC\n• Monthly family income below PKR 50,000\n• Genuine need for assistance\n• Complete and accurate application\n• Supporting documents provided\n\nWe prioritize urgent cases and families with children, elderly, or disabled members.",

    process:
      "Aid application process:\n\n1. Fill out the online application form\n2. Upload required documents\n3. Submit application\n4. Our team reviews (3-5 days)\n5. Verification process\n6. Decision notification\n7. Aid distribution (if approved)\n\nYou'll receive updates via phone/email.",

    types:
      "Types of aid available:\n\n• Food Assistance - Monthly rations\n• Medical Support - Healthcare costs\n• Education Support - School fees, books\n• Emergency Relief - Disaster assistance\n• Housing Assistance - Rent, repairs\n• Orphan Care - Special support program\n• Wedding Assistance - Marriage support",

    contact:
      "Contact KFT:\n\n📞 Phone: +92-300-907-7229\n📧 Email: khegarha.falahi.tanzeem@gmail.com\n📍 Address: Karim Abad Kota, Barikot, Swat\n\n⏰ Office Hours:\nMon-Fri: 9:00 AM - 5:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed\n\n🚨 Emergency: Available 24/7",

    status:
      "To check your application status:\n\n• Keep your application ID safe\n• Call us at +92-300-907-7229\n• Email with your full name and CNIC\n• Visit our office during business hours\n\nWe typically respond within 3-5 business days.",

    flood:
      "Flash Flood Relief (Swat & Bunair):\n\n✅ What we provided:\n• Clothes and shoes: 100 pairs each\n• Cash assistance: PKR 450,020 total\n• Kitchen accessories\n• Volunteer support for mud removal\n\n🆘 Need flood relief? Contact us immediately for emergency assistance.",

    default:
      "I understand you need help. Here are some common topics:\n\n• Type 'documents' - Required documents\n• Type 'eligibility' - Who can apply\n• Type 'process' - Application steps\n• Type 'types' - Types of aid\n• Type 'contact' - Contact information\n• Type 'status' - Check application status\n• Type 'flood' - Flood relief information\n\nOr ask me anything about KFT aid programs!",
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Generate bot response
    setTimeout(() => {
      const lowerInput = inputMessage.toLowerCase()
      let response = botResponses.default

      for (const [key, value] of Object.entries(botResponses)) {
        if (lowerInput.includes(key) || lowerInput.includes(key.slice(0, -1))) {
          response = value
          break
        }
      }

      // Special keyword matching
      if (lowerInput.includes("help") || lowerInput.includes("assist")) {
        response = botResponses.default
      } else if (lowerInput.includes("thank") || lowerInput.includes("thanks")) {
        response = "You're welcome! I'm here to help. Is there anything else you'd like to know about KFT aid programs?"
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("salam")) {
        response =
          "Hello! Welcome to KFT Aid Assistant. I'm here to help you with information about our aid programs. What would you like to know?"
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)

    setInputMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-xl z-50 bg-white">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <CardTitle className="text-lg">KFT Aid Assistant</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-blue-100 text-sm">Online • Ready to help</p>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-[400px]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex items-start space-x-2 max-w-[80%]`}>
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                    {message.sender === "user" && (
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon" className="bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
