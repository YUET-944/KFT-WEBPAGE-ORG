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
import { AlertCircle, Upload, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ApplyAidPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    cnic: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    aidType: "",
    monthlyIncome: "",
    familyMembers: "",
    reasonForAid: "",
    urgencyLevel: "",
    hasAppliedBefore: false,
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-aid-email", {
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
      console.error("Error submitting aid application:", error)
      setIsSubmitting(false)
      alert("There was an error submitting your application. Please try again or contact us directly.")
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Application Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your application. Our team will review your request and contact you within 3-5 business
              days.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Application ID: <strong>KFT-{Date.now().toString().slice(-6)}</strong>
            </p>
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
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Apply for Aid</h1>
          <p className="text-xl text-gray-600">
            Fill out this form to request assistance from our welfare programs. All information will be kept
            confidential.
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

        {/* Important Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Important Information</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• All fields marked with * are required</li>
                <li>• Please provide accurate information for faster processing</li>
                <li>• Our team will verify all submitted information</li>
                <li>• You will be contacted within 3-5 business days</li>
                <li>• Keep your application ID for future reference</li>
              </ul>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Please provide your basic personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* AI Assistant Bot Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🤖</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-800 mb-2">AI Application Assistant</h3>
                    <p className="text-blue-700 text-sm mb-3">
                      Need help filling out this form? Our AI assistant can guide you through the application process
                      and answer your questions.
                    </p>
                    <div className="space-y-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
                        onClick={() =>
                          alert(
                            "AI Assistant: Hello! I can help you with:\n\n• Understanding required documents\n• Filling out form fields correctly\n• Choosing the right aid type\n• Explaining the application process\n\nWhat would you like help with?",
                          )
                        }
                      >
                        💬 Start Chat with AI Assistant
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="ml-2 bg-transparent"
                        onClick={() =>
                          alert(
                            "Quick Help:\n\n• CNIC Format: 12345-6789012-3\n• Phone Format: +92-300-1234567\n• Income: Enter monthly family income in PKR\n• Documents: CNIC copy, income proof, utility bills\n• Processing Time: 3-5 business days",
                          )
                        }
                      >
                        ❓ Quick Help
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cnic">CNIC Number *</Label>
                  <Input
                    id="cnic"
                    value={formData.cnic}
                    onChange={(e) => handleInputChange("cnic", e.target.value)}
                    placeholder="XXXXX-XXXXXXX-X"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+92-XXX-XXXXXXX"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Complete Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="House/Flat number, Street, Area, City"
                  required
                />
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="Enter your city"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Aid Request Details */}
          <Card>
            <CardHeader>
              <CardTitle>Aid Request Details</CardTitle>
              <CardDescription>Specify the type of assistance you need</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="aidType">Type of Aid Requested *</Label>
                <Select value={formData.aidType} onValueChange={(value) => handleInputChange("aidType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the type of aid you need" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="food">Food Assistance</SelectItem>
                    <SelectItem value="medical">Medical/Healthcare Support</SelectItem>
                    <SelectItem value="education">Education Support</SelectItem>
                    <SelectItem value="emergency">Emergency Relief</SelectItem>
                    <SelectItem value="housing">Housing Assistance</SelectItem>
                    <SelectItem value="orphan">Orphan Care Support</SelectItem>
                    <SelectItem value="other">Other (specify in reason)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="monthlyIncome">Monthly Family Income (PKR) *</Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    value={formData.monthlyIncome}
                    onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                    placeholder="Enter monthly income"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="familyMembers">Number of Family Members *</Label>
                  <Input
                    id="familyMembers"
                    type="number"
                    value={formData.familyMembers}
                    onChange={(e) => handleInputChange("familyMembers", e.target.value)}
                    placeholder="Total family members"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="reasonForAid">Detailed Reason for Aid Request *</Label>
                <Textarea
                  id="reasonForAid"
                  value={formData.reasonForAid}
                  onChange={(e) => handleInputChange("reasonForAid", e.target.value)}
                  placeholder="Please explain your situation and why you need assistance"
                  rows={4}
                  required
                />
              </div>
              <div>
                <Label htmlFor="urgencyLevel">Urgency Level *</Label>
                <Select
                  value={formData.urgencyLevel}
                  onValueChange={(value) => handleInputChange("urgencyLevel", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="How urgent is your need?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Can wait 2-4 weeks</SelectItem>
                    <SelectItem value="medium">Medium - Need within 1-2 weeks</SelectItem>
                    <SelectItem value="high">High - Need within few days</SelectItem>
                    <SelectItem value="critical">Critical - Emergency situation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Supporting Documents</CardTitle>
              <CardDescription>Upload documents to support your application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Upload supporting documents</p>
                <p className="text-sm text-gray-500 mb-4">
                  CNIC copy, income proof, medical reports, etc. (Max 5MB per file)
                </p>
                <Button type="button" variant="outline">
                  Choose Files
                </Button>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium mb-2">Recommended documents:</p>
                <ul className="space-y-1">
                  <li>• Copy of CNIC (front and back)</li>
                  <li>• Income certificate or salary slip</li>
                  <li>• Medical reports (for medical aid)</li>
                  <li>• Utility bills (proof of address)</li>
                  <li>• Any other relevant documents</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hasAppliedBefore"
                  checked={formData.hasAppliedBefore}
                  onCheckedChange={(checked) => handleInputChange("hasAppliedBefore", checked as boolean)}
                />
                <Label htmlFor="hasAppliedBefore">I have applied for aid from KFT before</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  required
                />
                <Label htmlFor="agreeToTerms">
                  I agree to the terms and conditions and confirm that all information provided is accurate *
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" size="lg" className="px-12" disabled={isSubmitting || !formData.agreeToTerms}>
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </form>

        {/* Orphan Application Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-red-600">Special: Orphan Support Application</CardTitle>
            <CardDescription>
              Dedicated support program for orphaned children - Educational and welfare assistance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img
                src="/orphan-application-form.jpg"
                alt="Orphan Application Form"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-4">Required Documents for Orphan Support:</h3>
              <ul className="text-blue-700 space-y-2">
                <li>1. Copy of birth certificate of the Applicant</li>
                <li>2. Copy of CNIC Father / Guardian of the Applicant</li>
                <li>3. Photo copy of previous course (class) marks duly attested by the principal</li>
                <li>4. Passport size photograph to the application</li>
                <li>5. Details of Fee applicable and photo copies of Fee receipts</li>
                <li>6. Photo copy of allotment/enrollment/application from Institution</li>
                <li>7. Copy of parents' death certificate</li>
              </ul>
              <p className="text-red-600 font-medium mt-4">
                Important Note: If any declaration or document is found to be false, then your application stands
                rejected and no money will be paid.
              </p>
            </div>
            <Button asChild className="w-full mt-6 bg-red-600 hover:bg-red-700">
              <Link href="/contact">Contact for Orphan Support Application</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
