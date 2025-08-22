"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  CreditCard,
  Smartphone,
  Building,
  QrCode,
  Shield,
  Users,
  Utensils,
  GraduationCap,
  Stethoscope,
} from "lucide-react"

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState("")
  const [donationCause, setDonationCause] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Make a Donation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous contribution helps us continue our mission of serving those in need. Every donation, no matter
            the size, makes a meaningful difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-6 w-6 text-red-500" />
                  Donation Details
                </CardTitle>
                <CardDescription>Choose your donation amount and cause</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Cause */}
                <div>
                  <Label htmlFor="cause">Select a Cause</Label>
                  <Select value={donationCause} onValueChange={setDonationCause}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose where your donation will help most" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Fund - Where needed most</SelectItem>
                      <SelectItem value="food">Food Assistance Program</SelectItem>
                      <SelectItem value="medical">Medical Emergency Fund</SelectItem>
                      <SelectItem value="education">Education Support</SelectItem>
                      <SelectItem value="emergency">Emergency Relief</SelectItem>
                      <SelectItem value="orphan">Orphan Care Program</SelectItem>
                      <SelectItem value="housing">Housing Assistance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Donation Amount */}
                <div>
                  <Label>Donation Amount (PKR)</Label>
                  <div className="grid grid-cols-3 gap-3 mt-2 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={donationAmount === amount.toString() ? "default" : "outline"}
                        onClick={() => setDonationAmount(amount.toString())}
                        className="h-12"
                      >
                        ₨{amount.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Enter custom amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>

                {/* Payment Methods */}
                <div>
                  <Label>Payment Method</Label>
                  <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="easypaisa">EasyPaisa</TabsTrigger>
                      <TabsTrigger value="jazzcash">JazzCash</TabsTrigger>
                      <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                      <TabsTrigger value="card">Credit Card</TabsTrigger>
                    </TabsList>

                    <TabsContent value="easypaisa" className="mt-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3 mb-4">
                            <Smartphone className="h-8 w-8 text-green-600" />
                            <div>
                              <h3 className="font-semibold">EasyPaisa</h3>
                              <p className="text-sm text-gray-600">Pay using your EasyPaisa account</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor="easypaisa-number">EasyPaisa Account Number</Label>
                              <Input id="easypaisa-number" placeholder="03009077229" />
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <p className="text-sm text-gray-700 mb-2">
                                <strong>Send money to:</strong>
                              </p>
                              <p className="font-bold text-green-700">03009077229</p>
                              <p className="text-sm text-gray-600">Sultan Zeb Khan (General Secretary)</p>
                              <p className="text-sm text-gray-600">KFT Official Account</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="jazzcash" className="mt-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3 mb-4">
                            <Smartphone className="h-8 w-8 text-purple-600" />
                            <div>
                              <h3 className="font-semibold">JazzCash</h3>
                              <p className="text-sm text-gray-600">Pay using your JazzCash account</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor="jazzcash-number">JazzCash Account Number</Label>
                              <Input id="jazzcash-number" placeholder="03009077229" />
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                              <p className="text-sm text-gray-700 mb-2">
                                <strong>Send money to:</strong>
                              </p>
                              <p className="font-bold text-purple-700">03009077229</p>
                              <p className="text-sm text-gray-600">Sultan Zeb Khan (General Secretary)</p>
                              <p className="text-sm text-gray-600">KFT Official Account</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="bank" className="mt-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3 mb-4">
                            <Building className="h-8 w-8 text-blue-600" />
                            <div>
                              <h3 className="font-semibold">Bank Transfer</h3>
                              <p className="text-sm text-gray-600">Direct bank transfer</p>
                            </div>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="space-y-2 text-sm">
                              <p>
                                <strong>Account Title:</strong> Sultan Zeb Khan
                              </p>
                              <p>
                                <strong>General Secretary:</strong> Khegarha Falahi Tanzeem
                              </p>
                              <div className="mt-4 space-y-2">
                                <p>
                                  <strong>HBL Barikot Swat:</strong> 1718-7100035103
                                </p>
                                <p>
                                  <strong>UBL Barikot Swat:</strong> 1637-246003966
                                </p>
                                <p>
                                  <strong>IBN Number:</strong> PK85UNIL0109000246003966
                                </p>
                              </div>
                            </div>
                            <div className="mt-4">
                              <img
                                src="/banking-details.jpg"
                                alt="Banking Details"
                                className="w-full max-w-md mx-auto rounded-lg shadow-md"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="card" className="mt-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3 mb-4">
                            <CreditCard className="h-8 w-8 text-indigo-600" />
                            <div>
                              <h3 className="font-semibold">Credit/Debit Card</h3>
                              <p className="text-sm text-gray-600">Secure online payment</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor="card-number">Card Number</Label>
                              <Input id="card-number" placeholder="1234 5678 9012 3456" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <Input id="expiry" placeholder="MM/YY" />
                              </div>
                              <div>
                                <Label htmlFor="cvv">CVV</Label>
                                <Input id="cvv" placeholder="123" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Donor Information (Optional)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donor-name">Full Name</Label>
                      <Input id="donor-name" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="donor-email">Email Address</Label>
                      <Input id="donor-email" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="donor-phone">Phone Number</Label>
                    <Input id="donor-phone" placeholder="+92-XXX-XXXXXXX" />
                  </div>
                </div>

                {/* Submit Button */}
                <Button className="w-full h-12 text-lg" size="lg" disabled={!donationAmount || !paymentMethod}>
                  Donate ₨{donationAmount ? Number.parseInt(donationAmount).toLocaleString() : "0"}
                </Button>

                {/* Security Notice */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <Shield className="h-5 w-5 text-green-600" />
                  <p>Your donation is secure and will be used transparently for the selected cause.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
                <CardDescription>See how your donation helps</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Utensils className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-semibold">₨500</p>
                    <p className="text-sm text-gray-600">Feeds a family for a week</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">₨2,000</p>
                    <p className="text-sm text-gray-600">School supplies for one child</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Stethoscope className="h-8 w-8 text-red-600" />
                  <div>
                    <p className="font-semibold">₨5,000</p>
                    <p className="text-sm text-gray-600">Medical treatment support</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* QR Code */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Donate</CardTitle>
                <CardDescription>Scan QR code to donate instantly</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-gray-100 p-8 rounded-lg mb-4">
                  <QrCode className="h-32 w-32 mx-auto text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">Scan with your mobile banking app</p>
              </CardContent>
            </Card>

            {/* Recent Donors */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Donors</CardTitle>
                <CardDescription>Thank you to our generous supporters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium">Anonymous</p>
                      <p className="text-sm text-gray-600">₨10,000 - Food Program</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium">Ahmed K.</p>
                      <p className="text-sm text-gray-600">₨5,000 - Education</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="font-medium">Fatima S.</p>
                      <p className="text-sm text-gray-600">₨2,500 - Medical Fund</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
