import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6">
            <img
              src="/kft-logo-official.png"
              alt="KFT Official Logo"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
            About KHEGARHA FALAHI TANZEEM
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">Established on 20 August 2017</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Registered under VSWA Ordinance 1961, Government of Khyber Pakhtunkhwa
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-green-600">Name & Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                "Khegarha Falahi Tanzeem (KFT) is a non-profit, non-political organization working to uplift living
                standards in Swat through education, women's welfare, and youth empowerment. Over 8+ years of dedicated
                service, we have helped more than 2,000 families and provided medical care to over 2,500 patients."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Area of Operation */}
        <div className="mb-16">
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl text-blue-600">
                <MapPin className="mr-2 h-6 w-6" />
                Area of Operation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <p className="text-lg text-gray-700 mb-4">Karim Abad, Barikot, Swat, Khyber Pakhtunkhwa, Pakistan</p>
                <a
                  href="https://maps.app.goo.gl/7F7mfziD5nJ5WNQAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View on Google Maps
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Principal Objectives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Principal Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-green-600">I. Women Welfare</h3>
                <p className="text-gray-600">Empowering women through vocational training and skill development.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">II. Recreational Programs</h3>
                <p className="text-gray-600">Programs intended to keep people away from anti-social activities.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-purple-600">III. Welfare of PWDs</h3>
                <p className="text-gray-600">
                  Supporting persons with disabilities through various assistance programs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-orange-600">IV. Youth Welfare</h3>
                <p className="text-gray-600">Developing leadership and entrepreneurship skills among youth.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-red-600">V. Education Development</h3>
                <p className="text-gray-600">Promoting education and supporting orphaned children.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-teal-600">VI. Patient Welfare</h3>
                <p className="text-gray-600">Welfare and rehabilitation of patients through medical support.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Programs & Activities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Programs & Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-600">Women Welfare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sewing & Cutting training</li>
                  <li>• Knitting Hand & Machine</li>
                  <li>• Swati Embroidery</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-600">Youth Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Youth capacity building</li>
                  <li>• Leadership workshops</li>
                  <li>• Entrepreneurship programs</li>
                  <li>• Sports tournaments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-600">Education Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Orphan support programs</li>
                  <li>• School supplies distribution</li>
                  <li>• Educational facilities</li>
                  <li>• Female education awareness</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-orange-600">PWDs Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Wheelchair distribution</li>
                  <li>• Medical camps</li>
                  <li>• Tricycle provision</li>
                  <li>• Accessibility support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Membership */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Membership</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-600">Patron Member</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600 mb-2">Rs. 2,000</p>
                <p className="text-gray-600">One-time contribution</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-600">Ordinary Member</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">Rs. 500</p>
                <p className="text-gray-600">Annual contribution</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-600">Honorary Member</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-600 mb-2">Special</p>
                <p className="text-gray-600">By invitation</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600 mb-4">All paid members have voting privileges in organizational decisions.</p>
          </div>
        </div>

        {/* Our Founders */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Our Founders</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <img
                  src="/iqbal-hussain-founder.jpg"
                  alt="Dr. Iqbal Hussain"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-semibold text-lg mb-2">Dr. Iqbal Hussain</h3>
                <p className="text-green-600 mb-2">Founder</p>
                <p className="text-gray-600 text-sm">
                  Visionary leader and founding member of KFT, dedicated to community development and social welfare.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <img
                  src="/muhammad-zahir-shah-updated.jpg"
                  alt="Dr. Muhammad Zahir Shah"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-semibold text-lg mb-2">Dr. Muhammad Zahir Shah</h3>
                <p className="text-green-600 mb-2">Founder</p>
                <p className="text-gray-600 text-sm">
                  Founding member with extensive experience in social work and community empowerment initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <img
                  src="/abdul-wahab-updated.jpg"
                  alt="Abdul Wahab"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-semibold text-lg mb-2">Abdul Wahab (Late)</h3>
                <p className="text-green-600 mb-2">Founder</p>
                <p className="text-gray-600 text-sm">
                  Late founding member whose vision and dedication continue to inspire our mission and values.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <img
                  src="/ashraf-uddin-founder.jpg"
                  alt="Ashraf Uddin"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-semibold text-lg mb-2">Ashraf Uddin</h3>
                <p className="text-green-600 mb-2">Founder</p>
                <p className="text-gray-600 text-sm">
                  Founding member committed to community welfare and social development initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Current Cabinet */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Our Current Cabinet</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <img
                  src="/adil-zeb-khan-updated.jpg"
                  alt="Adil Zeb Khan"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-semibold text-lg mb-2">Adil Zeb Khan</h3>
                <p className="text-blue-600 mb-2">President</p>
                <p className="text-gray-600 text-sm">
                  Leading the organization with dedication and commitment to serving the community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <img
                  src="/ijaz-hussain-updated.jpg"
                  alt="Ijaz Hussain"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-semibold text-lg mb-2">Ijaz Hussain</h3>
                <p className="text-purple-600 mb-2">Chairman</p>
                <p className="text-gray-600 text-sm">
                  Providing strategic leadership and oversight for all organizational activities and programs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <img
                  src="/sultan-zeb-khan-updated.jpg"
                  alt="Sultan Zeb Khan"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-semibold text-lg mb-2">Sultan Zeb Khan</h3>
                <p className="text-green-600 mb-2">Vice Chairman</p>
                <p className="text-gray-600 text-sm">
                  Providing strategic support and coordinating all welfare programs and community initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registration Certificate */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Official Registration</h2>
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <img
                  src="/registration-certificate.jpg"
                  alt="Registration Certificate"
                  className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Certificate of Registration</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Registration No:</strong> DSW/Khyber Pakhtunkhwa/5233
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Registered:</strong> 19th September 2022
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Expiry:</strong> 19-09-2025
                </p>
                <p className="text-gray-600">
                  Registered under Voluntary Social Welfare Agencies (Registration and Control) Ordinance, 1961
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Registration Footer */}
        <div className="bg-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Official Registration</h2>
          <p className="text-xl mb-2">Registered with Social Welfare Department, KPK</p>
          <p className="text-lg opacity-90">Under VSWA Ordinance 1961, Government of Khyber Pakhtunkhwa</p>
        </div>
      </div>
    </div>
  )
}
