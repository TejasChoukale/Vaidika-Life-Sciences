import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  BookOpen, 
  Briefcase,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Zap
} from 'lucide-react'

const Home = () => {
  const stats = [
    { number: '1,00,000+', label: 'Students to Impact', icon: Users },
    { number: '11', label: 'Core Services', icon: Award },
    { number: '2024', label: 'Founded', icon: TrendingUp },
    { number: '100%', label: 'Success Focus', icon: Shield },
  ]

  const services = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'EU-GMP, US-FDA, WHO-GMP compliance support',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: BookOpen,
      title: 'Technical Dossier Preparation',
      description: 'CTD/ACTD dossiers for global submissions',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Users,
      title: 'Personal Mentorship Program',
      description: '60-day intensive training for pharma professionals',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Briefcase,
      title: 'Audit Preparation',
      description: 'Gap analysis and on-site audit support',
      color: 'from-orange-500 to-orange-700'
    },
  ]

  const features = [
    'Industrial Expert as Personal Mentor',
    'Live On-field Training Sessions',
    'Mock Interview & Personality Development',
    'Lifetime Career Support',
    'Job Placement Assistance',
    'International Regulatory Guidelines'
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Transforming
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                Pharmaceutical Education
              </span>
              & Entrepreneurship
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering Indian college students to become successful pharmapreneurs through 
              expert mentorship, technical training, and comprehensive industry support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/inquiry"
                className="bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Join PMP Program
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                  <stat.icon className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Bridging the Gap Between 
                <span className="text-primary-600"> Academia & Industry</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by a visionary Indian woman entrepreneur, Vaidika Life Sciences is dedicated 
                to transforming pharmaceutical education and creating the next generation of pharma leaders.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe India's youth hold the potential to redefine the global pharmaceutical 
                landscape through innovation, entrepreneurship, and value-driven ventures.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-gray-700">Expert Mentorship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-gray-700">Industry Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-gray-700">Career Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-gray-700">Global Standards</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Target className="mr-3" size={32} />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg mb-6">
                  To support and skill 1,00,000+ students and professionals to become successful 
                  contributors in India's pharmaceutical innovation and industrial growth story.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Zap className="mr-2 text-yellow-400" size={20} />
                    <span className="font-semibold">Vision 2030</span>
                  </div>
                  <p className="text-sm">
                    Cultivating technically sound, entrepreneurial-minded pharmaceutical 
                    professionals across India.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical solutions tailored for industry excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* PMP Program Highlight */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold mb-6">
              <Star className="mr-2" size={20} />
              Featured Program
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Personal Mentorship Program (PMP)
            </h2>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              60-day intensive training program designed for B.Pharm and M.Pharm freshers 
              to build strong careers in the pharmaceutical industry.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left"
                >
                  <CheckCircle className="text-green-400 mb-2" size={24} />
                  <p className="font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/inquiry"
                className="bg-white text-primary-800 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Register for PMP
              </Link>
              <a
                href="https://lnkd.in/d2K-PDkF"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-800 transition-all duration-300"
              >
                Free Introduction Session
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Ready to Start Your Pharma Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students and professionals who are transforming their careers 
              with Vaidika Life Sciences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/inquiry"
                className="bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home