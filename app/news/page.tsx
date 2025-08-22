import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Heart, Users, Stethoscope } from "lucide-react"

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "KFT Launches New Medical Camp Initiative in Remote Areas of Swat",
      excerpt:
        "Our latest medical camp reached over 200 patients in remote villages, providing free healthcare services including specialist consultations and medications.",
      date: "2024-01-15",
      author: "KFT Team",
      category: "Healthcare",
      image: "/medical-camp-banner.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Successful Ramazan Food Package Distribution Completed",
      excerpt:
        "During the holy month of Ramazan, KFT successfully distributed food packages to over 500 families across Barikot and surrounding areas.",
      date: "2024-01-10",
      author: "Sultan Zeb Khan",
      category: "Food Assistance",
      image: "/ramazan-package-3.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "New Wheelchair Support Program Helps 50 Persons with Disabilities",
      excerpt:
        "KFT's wheelchair distribution program has provided mobility support to 50 individuals with disabilities, improving their quality of life significantly.",
      date: "2024-01-05",
      author: "KFT Team",
      category: "Disability Support",
      image: "/wheelchair-support.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Educational Scholarships Awarded to 25 Orphaned Children",
      excerpt:
        "Our education support program has awarded scholarships to 25 orphaned children, covering their school fees, books, and supplies for the entire academic year.",
      date: "2023-12-20",
      author: "Adil Zeb Khan",
      category: "Education",
      image: "/orphan-program-visit.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Community Mosque Renovation Project Successfully Completed",
      excerpt:
        "After months of dedicated work, the community mosque renovation project has been completed, providing a beautiful and functional space for worship.",
      date: "2023-12-15",
      author: "KFT Team",
      category: "Community Development",
      image: "/mosque-completed.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Wedding Assistance Program Helps 15 Families Celebrate with Dignity",
      excerpt:
        "Our wedding assistance program provided essential household items and appliances to 15 families, helping them start their new lives with dignity.",
      date: "2023-12-10",
      author: "Ijaz Hussain",
      category: "Social Welfare",
      image: "/wedding-assistance-1.jpg",
      featured: false,
    },
  ]

  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Healthcare":
        return <Stethoscope className="h-4 w-4" />
      case "Food Assistance":
        return <Heart className="h-4 w-4" />
      case "Education":
        return <Users className="h-4 w-4" />
      default:
        return <Heart className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Healthcare":
        return "bg-blue-100 text-blue-800"
      case "Food Assistance":
        return "bg-green-100 text-green-800"
      case "Education":
        return "bg-purple-100 text-purple-800"
      case "Disability Support":
        return "bg-orange-100 text-orange-800"
      case "Community Development":
        return "bg-teal-100 text-teal-800"
      case "Social Welfare":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6">
            <img
              src="/kft-logo-official.png"
              alt="KFT Official Logo"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            News & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest activities, programs, and impact stories from the field. See how your support
            is making a difference in the lives of families across Swat.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Story</h2>
            <Card className="overflow-hidden shadow-xl bg-white/80 backdrop-blur-sm">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        featuredArticle.category,
                      )}`}
                    >
                      {getCategoryIcon(featuredArticle.category)}
                      <span className="ml-1">{featuredArticle.category}</span>
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredArticle.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      {featuredArticle.author}
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Recent Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <div className="relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        article.category,
                      )}`}
                    >
                      {getCategoryIcon(article.category)}
                      <span className="ml-1">{article.category}</span>
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-green-50 hover:text-green-600 bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates about our programs and impact stories directly in
            your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Follow Us for Real-Time Updates</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/share/1FunNBzrsY/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Facebook Page
            </a>
            <a
              href="https://www.instagram.com/khegarha.falahi.tanzeem?igsh=MXZtZ3hscGlwMW93MQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
