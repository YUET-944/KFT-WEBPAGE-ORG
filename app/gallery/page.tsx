"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Ramazan Package Distribution",
      description: "Distributing essential food packages during the holy month of Ramazan",
      link: "https://www.facebook.com/share/p/1F3hZTtFyZ/?mibextid=wwXIfr",
      image: "/images/ramazan-packages-prepared.jpg",
    },
    {
      title: "Eid Package Distribution",
      description: "Special Eid packages for families in need",
      link: "https://www.facebook.com/share/p/16mjgiZnQA/?mibextid=wwXIfr",
      image: "/images/eid-1.jpg",
    },
    {
      title: "Wedding Assistance Program",
      description: "Supporting families with wedding expenses and arrangements",
      link: "https://www.facebook.com/share/p/16hrteBH8R/?mibextid=wwXIfr",
      image: "/images/wedding-household-items.jpg",
    },
    {
      title: "Mosque Renovation Project",
      description: "Community mosque renovation and improvement project",
      link: "https://web.facebook.com/KHEGARHAFALAHITANZEEM/photos",
      image: "/images/masjid-interior.jpg",
    },
  ]

  const allImages = [
    // Mosque Renovation Images
    { src: "/images/masjid-interior.jpg", alt: "Mosque Renovation - Beautiful Completed Interior", category: "Mosque" },
    {
      src: "/images/masjid-construction-materials.jpg",
      alt: "Mosque Renovation - Construction Materials and Cement",
      category: "Mosque",
    },
    {
      src: "/images/masjid-flooring-work.jpg",
      alt: "Mosque Renovation - Marble Flooring Installation",
      category: "Mosque",
    },
    {
      src: "/images/masjid-tiles-materials.jpg",
      alt: "Mosque Renovation - Ceramic Tiles and Materials",
      category: "Mosque",
    },

    // Medical & Healthcare Images
    {
      src: "/images/medical-camp-banner.jpg",
      alt: "Free Medical Camp - Specialist Doctors Available",
      category: "Medical",
    },
    {
      src: "/images/wheelchair-support-new.jpg",
      alt: "Wheelchair Support - Making a Difference for PWDs",
      category: "Medical",
    },

    // Orphan & Education Images
    { src: "/images/orphan-program.jpg", alt: "Orphan Program - Educational Support Visit", category: "Education" },

    // Eid Images
    { src: "/images/eid-1-1.jpg", alt: "Eid Distribution - Community Gathering and Support", category: "Eid" },
    { src: "/images/eid-1.jpg", alt: "Eid Distribution - Family Support and Aid", category: "Eid" },
    { src: "/images/eid-1-2.jpg", alt: "Eid Distribution - Community Event", category: "Eid" },
    { src: "/images/eid-1-3.jpg", alt: "Eid Distribution - Team and Community", category: "Eid" },
    { src: "/images/eid-1-4.jpg", alt: "Eid Distribution - Children and Families", category: "Eid" },
    {
      src: "/images/eid-shoes-distribution.jpg",
      alt: "Eid Shoes Distribution - Gift Boxes for Families",
      category: "Eid",
    },
    { src: "/images/eid-distribution-6.jpg", alt: "Eid Distribution - Community Support Event", category: "Eid" },

    // Wedding Assistance Images
    {
      src: "/images/wedding-household-items.jpg",
      alt: "Wedding Assistance - Household Items and Kitchen Appliances on Cart",
      category: "Wedding",
    },
    {
      src: "/images/wedding-official-with-supplies.jpg",
      alt: "Wedding Assistance - KFT Official with Complete Household Supply Collection",
      category: "Wedding",
    },
    {
      src: "/images/wedding-kitchen-utensils.jpg",
      alt: "Wedding Assistance - Kitchen Utensils and Cookware Set",
      category: "Wedding",
    },
    {
      src: "/images/wedding-appliances-collection.jpg",
      alt: "Wedding Assistance - Large Collection of Household Appliances and Items",
      category: "Wedding",
    },
    {
      src: "/images/wedding-officials-with-items.jpg",
      alt: "Wedding Assistance - KFT Officials with Wedding Support Supplies",
      category: "Wedding",
    },
    {
      src: "/images/wedding-supplies-display.jpg",
      alt: "Wedding Assistance - Organized Display of Household Items and Supplies",
      category: "Wedding",
    },
    {
      src: "/images/wedding-electronic-items.jpg",
      alt: "Wedding Assistance - Electronic Appliances and Kitchen Equipment",
      category: "Wedding",
    },
    {
      src: "/images/wedding-stacked-appliances.jpg",
      alt: "Wedding Assistance - Stacked Boxes of Household Appliances for Distribution",
      category: "Wedding",
    },

    // Ramazan Images
    {
      src: "/images/ramazan-packages-prepared.jpg",
      alt: "Ramazan Packages - White bags prepared for distribution",
      category: "Ramazan",
    },
    {
      src: "/images/ramazan-food-supplies.jpg",
      alt: "Ramazan Food Supplies - Essential items including flour and oil",
      category: "Ramazan",
    },
    {
      src: "/images/ramazan-car-distribution.jpg",
      alt: "Ramazan Distribution - Car loaded with packages for delivery",
      category: "Ramazan",
    },
    {
      src: "/images/ramazan-packed-supplies.jpg",
      alt: "Ramazan Supplies - Organized food packages and boxes",
      category: "Ramazan",
    },
    {
      src: "/images/ramazan-volunteers-organizing.jpg",
      alt: "Ramazan Volunteers - Team organizing packages indoors",
      category: "Ramazan",
    },
    {
      src: "/images/ramazan-flour-sacks.jpg",
      alt: "Ramazan Supplies - Large flour sacks and food items",
      category: "Ramazan",
    },
    {
      src: "/images/ramazan-bulk-supplies.jpg",
      alt: "Ramazan Bulk Supplies - Various food items being prepared",
      category: "Ramazan",
    },
    {
      src: "/images/ramazan-volunteers-sorting.jpg",
      alt: "Ramazan Volunteers - Team sorting packages on floor",
      category: "Ramazan",
    },
    {
      src: "/images/ramazan-volunteer-cash-aid.jpg",
      alt: "Ramazan Aid - Volunteer with cash assistance (PKR 5000)",
      category: "Ramazan",
    },
    {
      src: "/images/ramazan-stacked-packages.jpg",
      alt: "Ramazan Packages - Large collection of branded food supplies",
      category: "Ramazan",
    },

    // Flash Flood Relief Images
    {
      src: "/images/swat-flood-relief-1.jpg",
      alt: "Flash Flood Relief - KFT Officials Meeting with Community",
      category: "Flood Relief",
    },
    {
      src: "/images/swat-flood-relief-2.jpg",
      alt: "Flash Flood Relief - Aid Distribution and Assessment",
      category: "Flood Relief",
    },
    {
      src: "/images/swat-flood-relief-3.jpg",
      alt: "Flash Flood Relief - Community Support and Documentation",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-damage-assessment.jpg",
      alt: "Flash Flood Relief - Damage Assessment and Community Meeting",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-medical-care-1.jpg",
      alt: "Flash Flood Relief - Medical Care for Injured Victims",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-aid-distribution.jpg",
      alt: "Flash Flood Relief - Aid Package Distribution to Families",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-community-gathering.jpg",
      alt: "Flash Flood Relief - Large Community Gathering for Aid",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-medical-care-2.jpg",
      alt: "Flash Flood Relief - Hospital Care for Flood Victims",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-coordination-meeting-1.jpg",
      alt: "Flash Flood Relief - KFT Leadership Coordination Meeting",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-donations-collected.jpg",
      alt: "Flash Flood Relief - Cash Donations Collected for Victims",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-coordination-meeting-2.jpg",
      alt: "Flash Flood Relief - Strategic Planning and Coordination",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-cash-assistance.jpg",
      alt: "Flash Flood Relief - Direct Cash Assistance Distribution",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-volunteer-banner.jpg",
      alt: "Flash Flood Relief - Volunteer Team with Relief Banner",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-hospital-visit.jpg",
      alt: "Flash Flood Relief - Hospital Visits and Medical Support",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-mud-cleanup.jpg",
      alt: "Flash Flood Relief - Mud Cleanup and House Restoration",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-damage-assessment-2.jpg",
      alt: "Flash Flood Relief - Damage Assessment in Affected Areas",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-heavy-machinery.jpg",
      alt: "Flash Flood Relief - Heavy Machinery for Debris Removal",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-medical-care-3.jpg",
      alt: "Flash Flood Relief - Medical Care for Young Victims",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-community-support.jpg",
      alt: "Flash Flood Relief - Community Support and Recovery",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-relief-gathering.jpg",
      alt: "Flash Flood Relief - Large Scale Relief Distribution",
      category: "Flood Relief",
    },
    {
      src: "/images/flood-coordination-efforts.jpg",
      alt: "Flash Flood Relief - Field Coordination and Assessment",
      category: "Flood Relief",
    },

    // Waste Collection Images
    {
      src: "/images/waste-collection-wheelbarrow.jpg",
      alt: "TMA Barikot Collaboration - Door-to-door waste collection with wheelbarrow",
      category: "Environment",
    },
    {
      src: "/images/waste-collection-door-to-door.jpg",
      alt: "TMA Barikot Collaboration - Volunteer collecting waste from residential areas",
      category: "Environment",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying, allImages.length])

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length)
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6">
            <img
              src="/images/kft-logo-new.png"
              alt="KFT Official Logo"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of hope, compassion, and positive change in our community through our various programs and
            initiatives over 8+ years of service.
          </p>
        </div>

        <Card className="max-w-6xl mx-auto overflow-hidden bg-white/60 backdrop-blur-sm mb-12">
          <CardContent className="p-0 relative">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={allImages[currentImageIndex].src || "/placeholder.svg"}
                alt={allImages[currentImageIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Overlay with image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <span className="inline-block bg-green-600 px-4 py-2 rounded-full text-sm font-medium mb-3">
                    {allImages[currentImageIndex].category}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{allImages[currentImageIndex].alt}</h3>
                  <p className="text-sm opacity-90">
                    Image {currentImageIndex + 1} of {allImages.length} • All KFT Programs
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button variant="outline" size="icon" onClick={goToPrevious} className="bg-white/80 hover:bg-white">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>

              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button variant="outline" size="icon" onClick={goToNext} className="bg-white/80 hover:bg-white">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Play/Pause Control */}
              <div className="absolute top-4 right-4">
                <Button variant="outline" size="icon" onClick={togglePlayPause} className="bg-white/80 hover:bg-white">
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-1 p-4 bg-white/50 overflow-x-auto">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors flex-shrink-0 ${
                    index === currentImageIndex ? "bg-green-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View on Facebook
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mosque Renovation Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Mosque Renovation Project</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/images/masjid-interior.jpg", alt: "Mosque Renovation - Beautiful Completed Interior" },
              {
                src: "/images/masjid-construction-materials.jpg",
                alt: "Mosque Renovation - Construction Materials and Cement",
              },
              { src: "/images/masjid-flooring-work.jpg", alt: "Mosque Renovation - Marble Flooring Installation" },
              { src: "/images/masjid-tiles-materials.jpg", alt: "Mosque Renovation - Ceramic Tiles and Materials" },
            ].map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-48 object-cover" />
                  <div className="p-3">
                    <p className="text-xs text-gray-600 text-center">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Medical & Healthcare Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Medical & Healthcare Programs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/images/medical-camp-banner.jpg", alt: "Free Medical Camp - Specialist Doctors Available" },
              { src: "/images/wheelchair-support-new.jpg", alt: "Wheelchair Support - Making a Difference for PWDs" },
              { src: "/images/orphan-program.jpg", alt: "Orphan Program - Educational Support Visit" },
            ].map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ramazan Package Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Ramazan Food Package Distribution</h2>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
            <div className="text-center">
              <h3 className="font-bold text-teal-800 mb-4 text-xl">Holy Month Support Program</h3>
              <p className="text-teal-700 max-w-4xl mx-auto">
                During the blessed month of Ramazan, KFT organizes comprehensive food package distribution to support
                families in need. Our volunteers work tirelessly to prepare and distribute essential food items
                including flour, cooking oil, rice, dates, and other necessities to ensure every family can observe the
                holy month with dignity and proper nutrition.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                src: "/images/ramazan-packages-prepared.jpg",
                alt: "Ramazan Packages - White bags prepared for distribution",
              },
              {
                src: "/images/ramazan-food-supplies.jpg",
                alt: "Ramazan Food Supplies - Essential items including flour and oil",
              },
              {
                src: "/images/ramazan-car-distribution.jpg",
                alt: "Ramazan Distribution - Car loaded with packages for delivery",
              },
              {
                src: "/images/ramazan-packed-supplies.jpg",
                alt: "Ramazan Supplies - Organized food packages and boxes",
              },
              {
                src: "/images/ramazan-volunteers-organizing.jpg",
                alt: "Ramazan Volunteers - Team organizing packages indoors",
              },
              { src: "/images/ramazan-flour-sacks.jpg", alt: "Ramazan Supplies - Large flour sacks and food items" },
              {
                src: "/images/ramazan-bulk-supplies.jpg",
                alt: "Ramazan Bulk Supplies - Various food items being prepared",
              },
              {
                src: "/images/ramazan-volunteers-sorting.jpg",
                alt: "Ramazan Volunteers - Team sorting packages on floor",
              },
              {
                src: "/images/ramazan-volunteer-cash-aid.jpg",
                alt: "Ramazan Aid - Volunteer with cash assistance (PKR 5000)",
              },
              {
                src: "/images/ramazan-stacked-packages.jpg",
                alt: "Ramazan Packages - Large collection of branded food supplies",
              },
            ].map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Eid Distribution Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Eid Gift Distribution Program</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { src: "/images/eid-1-1.jpg", alt: "Eid Distribution - Community Gathering and Support" },
              { src: "/images/eid-1.jpg", alt: "Eid Distribution - Family Support and Aid" },
              { src: "/images/eid-1-2.jpg", alt: "Eid Distribution - Community Event" },
              { src: "/images/eid-1-3.jpg", alt: "Eid Distribution - Team and Community" },
              { src: "/images/eid-1-4.jpg", alt: "Eid Distribution - Children and Families" },
              { src: "/images/eid-shoes-distribution.jpg", alt: "Eid Shoes Distribution - Gift Boxes for Families" },
              { src: "/images/eid-distribution-6.jpg", alt: "Eid Distribution - Community Support Event" },
            ].map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-48 object-cover" />
                  <div className="p-3">
                    <p className="text-xs text-gray-600 text-center">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Wedding Assistance Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Wedding Assistance Program</h2>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <div className="text-center">
              <h3 className="font-bold text-purple-800 mb-4 text-xl">Supporting New Families</h3>
              <p className="text-purple-700 max-w-4xl mx-auto">
                KFT's Wedding Assistance Program provides essential household items, kitchen appliances, and electronic
                equipment to help newly married couples establish their homes. Our comprehensive support includes
                everything from cooking utensils and cookware to electronic appliances, ensuring families have the basic
                necessities to start their new life together with dignity and comfort.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                src: "/images/wedding-household-items.jpg",
                alt: "Wedding Assistance - Household Items and Kitchen Appliances on Cart",
              },
              {
                src: "/images/wedding-official-with-supplies.jpg",
                alt: "Wedding Assistance - KFT Official with Complete Household Supply Collection",
              },
              {
                src: "/images/wedding-kitchen-utensils.jpg",
                alt: "Wedding Assistance - Kitchen Utensils and Cookware Set",
              },
              {
                src: "/images/wedding-appliances-collection.jpg",
                alt: "Wedding Assistance - Large Collection of Household Appliances and Items",
              },
              {
                src: "/images/wedding-officials-with-items.jpg",
                alt: "Wedding Assistance - KFT Officials with Wedding Support Supplies",
              },
              {
                src: "/images/wedding-supplies-display.jpg",
                alt: "Wedding Assistance - Organized Display of Household Items and Supplies",
              },
              {
                src: "/images/wedding-electronic-items.jpg",
                alt: "Wedding Assistance - Electronic Appliances and Kitchen Equipment",
              },
              {
                src: "/images/wedding-stacked-appliances.jpg",
                alt: "Wedding Assistance - Stacked Boxes of Household Appliances for Distribution",
              },
            ].map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Flash Flood Relief Section for Swat and Bunair */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-700">Flash Flood Relief - Swat & Bunair</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="text-center">
              <h3 className="font-bold text-red-800 mb-4 text-xl">Emergency Relief Operations</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-red-700 mb-2">Relief Distribution Summary:</h4>
                  <ul className="text-red-800 space-y-1 text-sm">
                    <li>• Clothes and shoes: 100 pairs each distributed</li>
                    <li>• Cash assistance at Buner: PKR 32,505</li>
                    <li>• Shoes, clothes & kitchen accessories provided</li>
                    <li>• Total cash distributed: PKR 450,020</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-red-700 mb-2">Volunteer Activities:</h4>
                  <ul className="text-red-800 space-y-1 text-sm">
                    <li>• Volunteers worked removing mud from houses</li>
                    <li>• Community assessment and damage evaluation</li>
                    <li>• Direct aid distribution to affected families</li>
                    <li>• Coordination with local authorities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                src: "/images/swat-flood-relief-1.jpg",
                alt: "Flash Flood Relief - KFT Officials Meeting with Community",
              },
              { src: "/images/swat-flood-relief-2.jpg", alt: "Flash Flood Relief - Aid Distribution and Assessment" },
              {
                src: "/images/swat-flood-relief-3.jpg",
                alt: "Flash Flood Relief - Community Support and Documentation",
              },
              {
                src: "/images/flood-damage-assessment.jpg",
                alt: "Flash Flood Relief - Damage Assessment and Community Meeting",
              },
              { src: "/images/flood-medical-care-1.jpg", alt: "Flash Flood Relief - Medical Care for Injured Victims" },
              {
                src: "/images/flood-aid-distribution.jpg",
                alt: "Flash Flood Relief - Aid Package Distribution to Families",
              },
              {
                src: "/images/flood-community-gathering.jpg",
                alt: "Flash Flood Relief - Large Community Gathering for Aid",
              },
              { src: "/images/flood-medical-care-2.jpg", alt: "Flash Flood Relief - Hospital Care for Flood Victims" },
              {
                src: "/images/flood-coordination-meeting-1.jpg",
                alt: "Flash Flood Relief - KFT Leadership Coordination Meeting",
              },
              {
                src: "/images/flood-donations-collected.jpg",
                alt: "Flash Flood Relief - Cash Donations Collected for Victims",
              },
              {
                src: "/images/flood-coordination-meeting-2.jpg",
                alt: "Flash Flood Relief - Strategic Planning and Coordination",
              },
              {
                src: "/images/flood-cash-assistance.jpg",
                alt: "Flash Flood Relief - Direct Cash Assistance Distribution",
              },
              {
                src: "/images/flood-volunteer-banner.jpg",
                alt: "Flash Flood Relief - Volunteer Team with Relief Banner",
              },
              {
                src: "/images/flood-hospital-visit.jpg",
                alt: "Flash Flood Relief - Hospital Visits and Medical Support",
              },
              { src: "/images/flood-mud-cleanup.jpg", alt: "Flash Flood Relief - Mud Cleanup and House Restoration" },
              {
                src: "/images/flood-damage-assessment-2.jpg",
                alt: "Flash Flood Relief - Damage Assessment in Affected Areas",
              },
              {
                src: "/images/flood-heavy-machinery.jpg",
                alt: "Flash Flood Relief - Heavy Machinery for Debris Removal",
              },
              { src: "/images/flood-medical-care-3.jpg", alt: "Flash Flood Relief - Medical Care for Young Victims" },
              {
                src: "/images/flood-community-support.jpg",
                alt: "Flash Flood Relief - Community Support and Recovery",
              },
              {
                src: "/images/flood-relief-gathering.jpg",
                alt: "Flash Flood Relief - Large Scale Relief Distribution",
              },
              {
                src: "/images/flood-coordination-efforts.jpg",
                alt: "Flash Flood Relief - Field Coordination and Assessment",
              },
            ].map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* TMA Barikot Waste Collection Collaboration Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
            TMA Barikot Collaboration - Waste Collection
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="text-center">
              <h3 className="font-bold text-green-800 mb-4 text-xl">Environmental Protection Initiative</h3>
              <p className="text-green-700 max-w-4xl mx-auto">
                In collaboration with TMA (Tehsil Municipal Administration) Barikot, KFT has launched a comprehensive
                door-to-door waste collection program to prevent garbage accumulation and maintain environmental
                cleanliness in our community. Our dedicated volunteers work systematically to collect waste from
                residential areas, ensuring proper disposal and contributing to a cleaner, healthier environment for all
                residents.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                src: "/images/waste-collection-wheelbarrow.jpg",
                alt: "TMA Barikot Collaboration - Door-to-door waste collection with wheelbarrow",
              },
              {
                src: "/images/waste-collection-door-to-door.jpg",
                alt: "TMA Barikot Collaboration - Volunteer collecting waste from residential areas",
              },
            ].map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-80 object-cover" />
                  <div className="p-6">
                    <p className="text-base text-gray-700 text-center font-medium">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-6 text-teal-700">Follow Our Work</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/share/1FunNBzrsY/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Facebook Page
            </a>
            <a
              href="https://www.instagram.com/khegarha.falahi.tanzeem?igsh=MXZtZ3hscGlwMW93MQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
