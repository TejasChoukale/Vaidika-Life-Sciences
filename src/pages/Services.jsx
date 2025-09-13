// Services.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  BookOpen, 
  Search, 
  Users, 
  Package, 
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Target,
  Briefcase,
  FileText,
  Globe,
  TrendingUp,
  Zap,
  Eye
} from 'lucide-react'

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'regulatory', name: 'Regulatory', icon: Shield },
    { id: 'technical', name: 'Technical', icon: BookOpen },
    { id: 'training', name: 'Training', icon: Users },
    { id: 'support', name: 'Support', icon: Award }
  ]

  const services = [
    {
      id: 1,
      category: 'regulatory',
      icon: Shield,
      title: 'Regulatory Compliance Services',
      shortDesc: 'Support for formulation, API, and packaging units to comply with global standards',
      fullDesc: 'Comprehensive regulatory compliance support for pharmaceutical companies to meet international standards including EU-GMP, US-FDA, and WHO-GMP requirements.',
      features: [
        'EU-GMP Compliance Support',
        'US-FDA Regulatory Guidance',
        'WHO-GMP Standards Implementation',
        'Quality System Development',
        'Regulatory Strategy Planning',
        'Documentation Review'
      ],
      benefits: [
        'Global Market Access',
        'Reduced Compliance Risks',
        'Expert Regulatory Guidance',
        'Cost-effective Solutions'
      ],
      timeline: '4-12 weeks',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      category: 'technical',
      icon: FileText,
      title: 'Technical Dossier Preparation',
      shortDesc: 'End-to-end preparation and review of CTD/ACTD dossiers for global submissions',
      fullDesc: 'Complete technical dossier preparation services including CTD (Common Technical Document) and ACTD (ASEAN Common Technical Document) for pharmaceutical product registrations worldwide.',
      features: [
        'CTD Module 1-5 Preparation',
        'ACTD Compilation',
        'Quality Overall Summary (QOS)',
        'Clinical Study Reports',
        'Non-clinical Study Reports',
        'Expert Scientific Writing'
      ],
      benefits: [
        'Faster Market Entry',
        'Regulatory Approval Success',
        'Cost-effective Documentation',
        'Expert Technical Writing'
      ],
      timeline: '6-16 weeks',
      color: 'from-green-500 to-green-700'
    },
    {
      id: 3,
      category: 'support',
      icon: Search,
      title: 'Audit Preparation & Compliance Management',
      shortDesc: 'Pre-audit readiness assessments, gap analysis, and on-site audit support',
      fullDesc: 'Comprehensive audit preparation services to ensure your facility is ready for regulatory inspections with gap analysis, remediation plans, and on-site support.',
      features: [
        'Pre-audit Readiness Assessment',
        'Gap Analysis & Remediation',
        'Mock Audit Exercises',
        'On-site Audit Support',
        'CAPA Implementation',
        'Compliance Training'
      ],
      benefits: [
        'Audit Success Assurance',
        'Risk Mitigation',
        'Compliance Confidence',
        'Expert Audit Support'
      ],
      timeline: '2-8 weeks',
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 4,
      category: 'technical',
      icon: Eye,
      title: 'Pharmacovigilance (PV) Services',
      shortDesc: 'Setup and management of PV systems including risk management plans and safety data reporting',
      fullDesc: 'Complete pharmacovigilance services to ensure drug safety monitoring, adverse event reporting, and risk management compliance for pharmaceutical products.',
      features: [
        'PV System Setup',
        'Safety Database Management',
        'Adverse Event Reporting',
        'Risk Management Plans',
        'PSUR/PBRER Preparation',
        'Signal Detection & Evaluation'
      ],
      benefits: [
        'Drug Safety Assurance',
        'Regulatory Compliance',
        'Risk Management',
        'Global PV Standards'
      ],
      timeline: '4-10 weeks',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 5,
      category: 'technical',
      icon: Package,
      title: 'Packaging Technical Services',
      shortDesc: 'Assistance to primary packaging manufacturers to meet regulatory and quality requirements',
      fullDesc: 'Specialized technical services for packaging manufacturers to ensure compliance with pharmaceutical packaging standards and regulatory requirements.',
      features: [
        'Packaging Material Qualification',
        'Extractables & Leachables Studies',
        'Stability Study Design',
        'Packaging System Development',
        'Regulatory Submissions',
        'Quality Specifications'
      ],
      benefits: [
        'Packaging Compliance',
        'Quality Assurance',
        'Regulatory Approval',
        'Technical Excellence'
      ],
      timeline: '3-8 weeks',
      color: 'from-teal-500 to-teal-700'
    },
    {
      id: 6,
      category: 'training',
      icon: Users,
      title: 'Personal Mentorship Program (PMP)',
      shortDesc: '60-day intensive training program for B.Pharm and M.Pharm freshers',
      fullDesc: 'Comprehensive mentorship program designed to bridge the gap between academia and industry, providing hands-on training and lifetime career support.',
      features: [
        'Industrial Expert as Personal Mentor',
        'Live On-field Training Sessions',
        'Mock Interview & Personality Development',
        'Email Writing & AI Prompting',
        'International Regulatory Guidelines',
        'Lifetime Career Support'
      ],
      benefits: [
        'Industry Readiness',
        'Job Placement Support',
        'Lifetime Mentorship',
        'Professional Development'
      ],
      timeline: '60 days',
      color: 'from-indigo-500 to-indigo-700'
    }
  ]

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  const stats = [
    { number: '11', label: 'Core Services', icon: Briefcase },
    { number: '100%', label: 'Success Focus', icon: Target },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: 'Global', label: 'Standards', icon: Globe }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section — full-bleed background with inner constrained content */}
      <section className="full-bleed w-full py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white px-0">
        <div className="inner-max">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="section-title text-white mb-4">Our Services</h1>
              <p className="lead mb-8 max-w-3xl mx-auto">
                Comprehensive pharmaceutical solutions tailored for regulatory compliance, 
                technical excellence, and professional development
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">Regulatory Compliance</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">Technical Dossiers</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">Professional Training</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-8 bg-white">
        <div className="w-full max-w-screen-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <stat.icon className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="opacity-90">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="w-full py-12 bg-white border-b">
        <div className="w-full max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="mr-2" size={20} />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-screen-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              {activeCategory === 'all' ? 'All Services' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional pharmaceutical solutions designed to meet your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                        {service.title}
                      </h3>
                      <div className="flex items-center mt-1">
                        <Clock size={14} className="text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500">{service.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-gray-500 italic">
                          + {service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors group"
                    >
                      Get Quote
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 bg-white">
        <div className="w-full max-w-screen-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep pharmaceutical expertise with personalized service delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Proven Track Record',
                description: 'Successful project delivery with 100% client satisfaction rate',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Industry veterans with 15+ years of pharmaceutical experience',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Zap,
                title: 'Fast Turnaround',
                description: 'Efficient processes ensuring timely project completion',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Globe,
                title: 'Global Standards',
                description: 'Compliance with international regulatory requirements',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}>
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="full-bleed w-full py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white px-0">
        <div className="inner-max">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Let's discuss how our pharmaceutical expertise can help you achieve 
                regulatory compliance and business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/inquiry"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 flex items-center justify-center"
                >
                  Join PMP Program
                  <Users className="ml-2" size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Services
