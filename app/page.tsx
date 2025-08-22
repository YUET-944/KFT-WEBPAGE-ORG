import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, HelpingHand, Stethoscope, GraduationCap, MapPin, ArrowRight, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const achievements = [
    { number: "2,000+", label: "Families Supported", icon: Users, color: "text-blue-600" },
    { number: "2,500+", label: "Patients Treated", icon: Stethoscope, color: "text-green-600" },
    { number: "8+", label: "Years of Service", icon: Heart, color: "text-red-600" },
    { number: "15+", label: "Active Programs", icon: HelpingHand, color: "text-purple-600" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Content */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-teal-200/30 to-green-200/30 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-2xl rotate-12 blur-sm"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-md"></div>
          <div className="absolute bottom-10 left-20 w-28 h-28 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <img
                src="/images/kft-logo-new.png"
                alt="KFT Official Logo - Khegarha Falahi Tanzeem"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Main Heading with Better Typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-green-500 to-blue-600 bg-clip-text text-transparent leading-tight">
            KHEGARHA FALAHI TANZEEM
          </h1>

          {/* Enhanced Tagline */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-700 mb-2">KARIMABAD</h2>
            <p className="text-lg text-gray-600 mb-4">Established: 20 August 2017</p>
            <p className="text-xl text-gray-600 mb-4 font-medium" dir="rtl">
              خیگره فلاحی تنظیم کریم آباد
            </p>
          </div>

          {/* Clear Mission Statement */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Empowering Communities Through Compassionate Service
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              K.F.T provides essential services including{" "}
              <span className="font-semibold text-teal-600">food assistance</span>,{" "}
              <span className="font-semibold text-blue-600">healthcare support</span>,{" "}
              <span className="font-semibold text-purple-600">education programs</span>, and{" "}
              <span className="font-semibold text-green-600">emergency relief</span> to families in remote regions of
              Swat, Pakistan.
            </p>
          </div>

          {/* Action Buttons with Better Design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/donate">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Link href="/apply-aid">
                <HelpingHand className="mr-2 h-5 w-5" />
                Apply for Aid
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statistics with Enhanced Design */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact Since 2017</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Together, we have made a significant difference in our community over 8+ years of dedicated service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${
                      achievement.color === "text-blue-600"
                        ? "from-blue-500 to-blue-600"
                        : achievement.color === "text-green-600"
                          ? "from-green-500 to-green-600"
                          : achievement.color === "text-red-600"
                            ? "from-red-500 to-red-600"
                            : "from-purple-500 to-purple-600"
                    } shadow-lg`}
                  >
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-4xl font-bold ${achievement.color} mb-2`}>{achievement.number}</h3>
                  <p className="text-gray-600 font-medium">{achievement.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive welfare services designed to address the diverse needs of our community members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <HelpingHand className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Food Assistance</h3>
                <p className="text-gray-600 text-sm">Monthly food packages and emergency relief for families in need</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Healthcare Support</h3>
                <p className="text-gray-600 text-sm">Free medical camps and treatment support for 2,500+ patients</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Education Programs</h3>
                <p className="text-gray-600 text-sm">Scholarships and educational support for orphaned children</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Community Outreach</h3>
                <p className="text-gray-600 text-sm">Reaching remote areas of Swat with essential services</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Whether through donations, volunteering, or spreading awareness, you can help us continue serving those in
            need across Swat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/volunteer">
                <Users className="mr-2 h-5 w-5" />
                Become a Volunteer
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
            >
              <Link href="/contact">
                <Heart className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
