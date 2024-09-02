'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'

// Animated background component
const AnimatedBackground = () => (
  <motion.div
    className="absolute inset-0 z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Animated particles code here */}
  </motion.div>
)

// Navigation component
const Navigation = () => (
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">HealthTech</div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
        <a href="#" className="text-gray-800 hover:text-blue-500">About</a>
        <a href="#" className="text-gray-800 hover:text-blue-500">Products</a>
        <a href="#" className="text-gray-800 hover:text-blue-500">Solutions</a>
        <a href="#" className="text-gray-800 hover:text-blue-500">Contact</a>
      </div>
    </div>
  </nav>
)

// Footer component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center mb-2"><Mail className="mr-2" size={18} /> info@healthtech.com</p>
          <p className="flex items-center mb-2"><Phone className="mr-2" size={18} /> +1 (123) 456-7890</p>
          <p className="flex items-center"><MapPin className="mr-2" size={18} /> 123 Health St, Tech City, TC 12345</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><Facebook size={24} /></a>
            <a href="#" className="hover:text-blue-500"><Twitter size={24} /></a>
            <a href="#" className="hover:text-blue-500"><Linkedin size={24} /></a>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <form className="flex">
            <input type="email" placeholder="Enter your email" className="flex-grow p-2 rounded-l-md" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 HealthTech. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

// Main component
const HealthTechWebsite = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const products = [
    { icon: '🧬', title: 'AI Diagnostics', description: 'Advanced AI-powered diagnostic tools for accurate and rapid results.' },
    { icon: '📱', title: 'Telemedicine Platform', description: 'Secure and user-friendly platform for remote consultations and follow-ups.' },
    { icon: '⌚', title: 'Health Wearables', description: 'Smart devices for continuous health monitoring and early detection of issues.' },
  ]

  const benefits = [
    { icon: '🚀', title: 'Cutting-edge Technology', description: 'Leveraging the latest advancements in AI and machine learning.' },
    { icon: '🔒', title: 'Data Security', description: 'Ensuring the highest standards of data protection and privacy.' },
    { icon: '👥', title: 'Patient-Centric Approach', description: 'Designing solutions with the patient&apos;s needs at the forefront.' },
    { icon: '🌐', title: 'Global Reach', description: 'Providing accessible healthcare solutions worldwide.' },
  ]

  const testimonials = [
    { quote: "HealthTech&apos;s AI Diagnostics tool has revolutionized our clinic&apos;s efficiency.", author: "Dr. Jane Smith, Chief of Radiology" },
    { quote: "The telemedicine platform has made it possible for us to reach patients in remote areas.", author: "Dr. John Doe, Rural Health Specialist" },
    { quote: "Health wearables have significantly improved our ability to monitor patients&apos; conditions in real-time.", author: "Nurse Sarah Johnson" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="relative min-h-screen bg-blue-50">
      <AnimatedBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Revolutionizing Healthcare Through Technology</h1>
          <p className="text-xl md:text-2xl mb-8">Empowering patients and providers with innovative solutions</p>
          <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">Learn More</button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-4">
              At HealthTech, we are passionate about leveraging cutting-edge technology to improve healthcare outcomes. Our team of experts is dedicated to creating innovative solutions that empower both patients and providers.
            </p>
            <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">Read More</button>
          </div>
          <div className="w-full md:w-1/2">
            <Image src="/placeholder.svg" alt="Doctor using technology" width={400} height={300} className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="relative">
            <div className="text-center">
              <p className="text-xl italic mb-4">&quot;{testimonials[currentIndex].quote}&quot;</p>
              <p className="font-semibold">- {testimonials[currentIndex].author}</p>
            </div>
            <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)} className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)} className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src="/placeholder.svg" alt={`News ${item}`} width={300} height={200} className="w-full" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Latest Health Tech Innovation</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="text-blue-500 font-semibold hover:underline">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HealthTechWebsite