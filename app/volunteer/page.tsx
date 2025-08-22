"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle } from "lucide-react"
import {
  Users,
  Heart,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  HelpingHand,
  Stethoscope,
  GraduationCap,
  Camera,
} from "lucide-react"

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    profession: "",
    experience: "",
    availability: "",
    interests: [] as string[],
    skills: "",
    motivation: "",
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const volunteerOpportunities = [
    {
      title: "Food Distribution Volunteer",
      icon: <HelpingHand className="h-8 w-8 text-green-600" />,
      description: "Help distribute food packages to families in need",
      commitment: "4-6 hours/week",
      location: "Community Centers",
      requirements: "Physical fitness, compassionate nature",
    },
    {
      title: "Medical Support Volunteer",
      icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
      description: "Assist in medical camps and health awareness programs",
      commitment: "6-8 hours/week",
      location: "Medical Centers",
      requirements: "Medical background preferred",
    },
    {
      title: "Education Support Volunteer",
      icon: <GraduationCap className="h-8 w-8 text-purple-600" />,
      description: "Teach and mentor underprivileged children",
      commitment: "3-5 hours/week",
      location: "Schools & Community Centers",
      requirements: "Teaching skills, patience",
    },
    {
      title: "Event Documentation",
      icon: <Camera className="h-8 w-8 text-orange-600" />,
      description: "Document our activities through photography and videography",
      commitment: "Flexible",
      location: "Various locations",
      requirements: "Photography/videography skills",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-volunteer-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitting(false)
        setIsSubmitted(true)
      } else {
        throw new Error(result.message || "Failed to send application")
      }
    } catch (error) {
      console.error("Error submitting volunteer application:", error)
      setIsSubmitting(false)
      alert("There was an error submitting your application. Please try again or contact us directly.")
    }
  }

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({ ...prev, interests: [...prev.interests, interest] }))
    } else {
      setFormData((prev) => ({ ...prev, interests: prev.interests.filter((i) => i !== interest) }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Volunteer Application Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in volunteering with us. Your application has been sent to our team at:
            </p>
            <div className="text-sm text-gray-600 mb-4">
              <p>• preetykhan88@gmail.com</p>
              <p>• admykjcs2023@gmail.com</p>
            </div>
            <p className="text-gray-600 mb-6">Our team will review your application and contact you soon.</p>
            <Button onClick={() => (window.location.href = "/")} className="w-full">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Join Our Volunteer Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make a difference in your community by volunteering with KFT. Your time and skills can help transform lives
            and create lasting impact.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <p className="text-yellow-800 font-bold">
                ⚠️ UNDER DEVELOPMENT - We are currently working on improving this section
              </p>
            </div>
          </div>
        </div>

        {/* Why Volunteer */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Make a Difference</h3>
              <p className="text-gray-600">
                Directly impact the lives of those in need and contribute to positive change in your community.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Build Connections</h3>
              <p className="text-gray-600">
                Meet like-minded individuals and build meaningful relationships while working towards a common goal.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Flexible Commitment</h3>
              <p className="text-gray-600">Choose volunteer opportunities that fit your schedule and availability.</p>
            </CardContent>
          </Card>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {opportunity.icon}
                    <CardTitle>{opportunity.title}</CardTitle>
                  </div>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>
                        <strong>Time Commitment:</strong> {opportunity.commitment}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>
                        <strong>Location:</strong> {opportunity.location}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Users className="h-4 w-4 text-gray-500 mt-0.5" />
                      <span>
                        <strong>Requirements:</strong> {opportunity.requirements}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteer Application Form */}
        <Card>
          <CardHeader>
            <CardTitle>Volunteer Application Form</CardTitle>
            <CardDescription>
              Fill out this form to join our volunteer team. We'll contact you with suitable opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="profession">Profession/Occupation</Label>
                  <Input
                    id="profession"
                    value={formData.profession}
                    onChange={(e) => handleInputChange("profession", e.target.value)}
                  />
                </div>
              </div>

              {/* Volunteer Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Volunteer Preferences</h3>
                <div>
                  <Label>Areas of Interest (Select all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-3 mt-2">
                    {[
                      "Food Distribution",
                      "Medical Support",
                      "Education & Teaching",
                      "Event Organization",
                      "Fundraising",
                      "Documentation",
                      "Administrative Support",
                      "Community Outreach",
                    ].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <Label htmlFor={interest}>{interest}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="availability">Availability *</Label>
                  <Select
                    value={formData.availability}
                    onValueChange={(value) => handleInputChange("availability", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="both">Both weekdays and weekends</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="experience">Previous Volunteer Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    placeholder="Describe any previous volunteer work or relevant experience"
                  />
                </div>
                <div>
                  <Label htmlFor="skills">Special Skills or Talents</Label>
                  <Textarea
                    id="skills"
                    value={formData.skills}
                    onChange={(e) => handleInputChange("skills", e.target.value)}
                    placeholder="List any special skills, languages, or talents that might be helpful"
                  />
                </div>
                <div>
                  <Label htmlFor="motivation">Why do you want to volunteer with KFT? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="Tell us about your motivation to volunteer"
                    required
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  required
                />
                <Label htmlFor="agreeToTerms">
                  I agree to the volunteer terms and conditions and commit to the responsibilities of volunteering *
                </Label>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !formData.agreeToTerms}>
                {isSubmitting ? "Sending Volunteer Application..." : "Send Volunteer Application"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-12 bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Questions About Volunteering?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+92-300-907-7229</p>
              <p className="text-sm text-gray-500">Sultan Zeb Khan (Vice Chairman)</p>
            </div>
            <div>
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">preetykhan88@gmail.com</p>
              <p className="text-gray-600">admykjcs2023@gmail.com</p>
              <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
