'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, LinkedIn } from 'lucide-react'

// Animated background component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-blue-200 rounded-full"
        style={{
          width: Math.random() * 10 + 5,
          height: Math.random() * 10 + 5,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, Math.random() * 100 - 50],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
)

// Navigation component
const Navigation = () => (
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-3">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-700">HealthTech</div>
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Products', 'Solutions', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
)

// Hero section component
const Hero = () => (
  <div className="relative bg-blue-50 py-20">
    <AnimatedBackground />
    <div className="container mx-auto px-6 relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Revolutionizing Healthcare Through Technology
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8">
        Empowering patients and providers with innovative solutions
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
        Learn More
      </button>
    </div>
  </div>
)

// Products section component
const Products = () => {
  const products = [
    { icon: '🏥', title: 'TeleHealth Platform', description: 'Connect with healthcare providers remotely' },
    { icon: '📊', title: 'Health Analytics', description: 'Gain insights from your health data' },
    { icon: '💊', title: 'Medication Management', description: 'Never miss a dose with smart reminders' },
  ]

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// About Us section component
const AboutUs = () => (
  <div className="bg-gray-50 py-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            At HealthTech, we are passionate about leveraging cutting-edge technology to improve healthcare outcomes.
            Our team of experts is dedicated to creating innovative solutions that empower both patients and providers.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg?height=300&width=400" alt="Doctor using technology" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  </div>
)

// Why Choose Us section component
const WhyChooseUs = () => {
  const benefits = [
    { icon: '🔬', title: 'Cutting-edge Technology', description: 'Stay ahead with our innovative solutions' },
    { icon: '🔒', title: 'Data Security', description: 'Your health information is safe with us' },
    { icon: '👥', title: 'Patient-Centered', description: 'Designed with your needs in mind' },
    { icon: '📈', title: 'Proven Results', description: 'Measurable improvements in health outcomes' },
  ]

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Testimonial component
const Testimonial = () => {
  const testimonials = [
    { quote: "HealthTech has revolutionized the way we manage our patients' care.", author: "Dr. Jane Smith" },
    { quote: "The TeleHealth platform has made it so much easier to connect with my doctor.", author: "John Doe" },
    { quote: "Their analytics tools have given us invaluable insights into our hospital performance.", author: "Sarah Johnson, Hospital Administrator" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-xl italic text-gray-600 mb-4">"{testimonials[currentIndex].quote}"</p>
            <p className="text-gray-800 font-semibold">- {testimonials[currentIndex].author}</p>
          </div>
          <button onClick={prevTestimonial} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ChevronLeft className="text-gray-600" />
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Latest News section component
const LatestNews = () => {
  const news = [
    { title: "HealthTech Launches New AI-Powered Diagnostic Tool", image: "/placeholder.svg?height=200&width=300" },
    { title: "Study Shows Improved Patient Outcomes with Our TeleHealth Platform", image: "/placeholder.svg?height=200&width=300" },
    { title: "HealthTech Partners with Leading Hospital Chain", image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Footer component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">HealthTech</h3>
          <p className="text-gray-400">Revolutionizing healthcare through innovative technology solutions.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="text-gray-400">
            <li className="flex items-center mb-2"><Phone className="mr-2" size={16} /> (123) 456-7890</li>
            <li className="flex items-center mb-2"><Mail className="mr-2" size={16} /> info@healthtech.com</li>
            <li className="flex items-center"><MapPin className="mr-2" size={16} /> 123 Tech Street, Health City</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Twitter /></a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <form className="flex">
            <input type="email" placeholder="Your email" className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none" />
            <button type="submit" className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
)

// Main component
export default function HealthTechWebsite() {
  return (
    <div className="font-sans">
      <Navigation />
      <Hero />
      <Products />
      <AboutUs />
      <WhyChooseUs />
      <Testimonial />
      <LatestNews />
      <Footer />
    </div>
  )
}