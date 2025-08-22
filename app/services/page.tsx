import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Stethoscope, GraduationCap, Utensils, ShipWheelIcon as Wheelchair } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
            Our Services & Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive welfare services designed to address the diverse needs of our community members and
            create lasting positive impact. Over 8+ years, we have served 2,000+ families and 2,500+ patients.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <Utensils className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Food Assistance Program</CardTitle>
              <CardDescription>Monthly food packages and emergency food relief</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/ramazan-package-3.jpg"
                  alt="Ramazan Food Packages - Flour, Sugar, Dates and Essential Items"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Providing nutritious food packages to families in need, including rice, flour, oil, lentils, dates, and
                other essential items during Ramazan and throughout the year.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>
                  <strong>Who Qualifies:</strong> Families with monthly income below ₨25,000
                </p>
                <p>
                  <strong>How to Apply:</strong> Submit application with income proof and CNIC
                </p>
                <p>
                  <strong>Distribution:</strong> Monthly at community centers
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/apply-aid?service=food">Apply for Food Aid</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <Stethoscope className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Healthcare Support</CardTitle>
              <CardDescription>Medical assistance and free healthcare services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/medical-camp-banner.jpg"
                  alt="Free Medical Camp with Specialist Doctors"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Covering medical expenses, surgeries, medications, and providing free full body checkups. We have served
                over 2,000-2,500 patients with comprehensive healthcare support including specialist consultations.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>
                  <strong>Coverage:</strong> Up to ₨500,000 per case
                </p>
                <p>
                  <strong>Services:</strong> Free checkups, surgery, medication, diagnostic tests
                </p>
                <p>
                  <strong>Specialists:</strong> Skin, Surgery, Cardiology, Urology, Pediatrics
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/apply-aid?service=medical">Apply for Medical Aid</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <GraduationCap className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Education Support & Orphan Program</CardTitle>
              <CardDescription>Scholarships and educational assistance for orphans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/orphan-program-visit.jpg"
                  alt="Orphan Program - Educational Support Visit"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Supporting students with school fees, books, uniforms, and educational materials. Special focus on
                orphaned children to ensure no child is deprived of education due to financial constraints.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>
                  <strong>Coverage:</strong> School fees, books, uniforms, supplies
                </p>
                <p>
                  <strong>Eligibility:</strong> Orphans and students with good academic record
                </p>
                <p>
                  <strong>Duration:</strong> Full academic year support
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/apply-aid?service=education">Apply for Education Aid</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <Wheelchair className="h-12 w-12 text-pink-600 mb-4" />
              <CardTitle>Wheelchair & Medical Support Program</CardTitle>
              <CardDescription>Support for persons with disabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/wheelchair-support.jpg"
                  alt="Wheelchair Distribution - Making a Difference"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Providing wheelchairs, medical equipment, and comprehensive support for persons with disabilities. Our
                program ensures accessibility and dignity for all community members with special needs.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>
                  <strong>Equipment:</strong> Wheelchairs, crutches, medical aids
                </p>
                <p>
                  <strong>Services:</strong> Medical support, rehabilitation assistance
                </p>
                <p>
                  <strong>Support:</strong> Ongoing care and maintenance
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/apply-aid?service=wheelchair">Apply for Wheelchair Support</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Ramazan & Eid Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Special Seasonal Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-600">Ramazan Food Packages</CardTitle>
                <CardDescription>Special food assistance during the holy month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Image
                    src="/ramazan-package-1.jpg"
                    alt="Ramazan Food Packages"
                    width={150}
                    height={100}
                    className="w-full h-20 object-cover rounded"
                  />
                  <Image
                    src="/ramazan-package-2.jpg"
                    alt="Organized Food Packages"
                    width={150}
                    height={100}
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  During Ramazan, we distribute comprehensive food packages including flour, sugar, dates, and other
                  essential items to help families observe the holy month with dignity.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-600">Eid Gift Distribution</CardTitle>
                <CardDescription>Bringing joy to families during Eid celebrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Image
                    src="/eid-distribution-1.jpg"
                    alt="Eid Gift Distribution"
                    width={150}
                    height={100}
                    className="w-full h-20 object-cover rounded"
                  />
                  <Image
                    src="/eid-shoes-distribution.jpg"
                    alt="Eid Shoes Distribution"
                    width={150}
                    height={100}
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  During Eid, we distribute gifts including shoes, clothing, and other items to ensure every family can
                  celebrate the festival with happiness and new belongings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to Apply for Our Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Submit Application</h3>
              <p className="text-gray-600 text-sm">Fill out the online application form with required details</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Document Verification</h3>
              <p className="text-gray-600 text-sm">Our team verifies submitted documents and eligibility</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Assessment Visit</h3>
              <p className="text-gray-600 text-sm">Field visit to assess the actual need and situation</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Approval & Support</h3>
              <p className="text-gray-600 text-sm">Upon approval, assistance is provided as per program guidelines</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-green-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Need Help? We're Here for You</h2>
          <p className="text-xl mb-6">
            Don't hesitate to reach out if you or someone you know needs assistance. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/apply-aid">Apply for Aid</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
