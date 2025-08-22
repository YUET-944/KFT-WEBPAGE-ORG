import Link from "next/link"
import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">K.F.T</div>
                <div className="text-sm text-gray-400">Khegarha Falahi Tanzeem</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Serving humanity with compassion and dedication since our establishment. We are committed to making a
              positive impact in our community.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1FunNBzrsY/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/khegarha.falahi.tanzeem?igsh=MXZtZ3hscGlwMW93MQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/apply-aid" className="text-gray-400 hover:text-white">
                  Apply for Aid
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-400 hover:text-white">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="text-gray-400 hover:text-white">
                  Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Food Assistance</li>
              <li className="text-gray-400">Healthcare Support</li>
              <li className="text-gray-400">Education Programs</li>
              <li className="text-gray-400">Orphan Care</li>
              <li className="text-gray-400">Wedding Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-600" />
                <span className="text-gray-400">+92-300-907-7229</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Sultan Zeb Khan (Vice Chairman)</p>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-gray-400">khegarha.falahi.tanzeem@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-gray-400">Karim Abad, Barikot, Swat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Khegarha Falahi Tanzeem. All rights reserved.</p>
          <p className="mt-2">Established: 20 August 2017</p>
          <p className="mt-1">Registered under VSWA Ordinance 1961, Government of Khyber Pakhtunkhwa</p>
        </div>
      </div>
    </footer>
  )
}
