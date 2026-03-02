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

const services = [
  // A. Regulatory Affairs Support
  {
    id: 'regulatory-affairs',
    category: 'regulatory',
    icon: Shield,
    title: 'Regulatory Affairs Support',
    shortDesc: 'Preparation & submission of CTD/eCTD dossiers (ANDA, NDA, DMF, MA).',
    fullDesc:
      'A. Regulatory Affairs Support\n1. Preparation & submission of CTD/eCTD dossiers (ANDA, NDA, DMF, MA).\n2. Global regulatory strategy (US FDA, EMA, MHRA, WHO, TGA, CDSCO, GCC, etc.).\n3. Lifecycle management: variations, renewals, labeling, post-approval changes.\n4. Gap analysis & regulatory intelligence.',
    features: [
      'Preparation & submission of CTD/eCTD dossiers (ANDA, NDA, DMF, MA).',
      'Global regulatory strategy (US FDA, EMA, MHRA, WHO, TGA, CDSCO, GCC, etc.).',
      'Lifecycle management: variations, renewals, labeling, post-approval changes.',
      'Gap analysis & regulatory intelligence.'
    ],
    benefits: ['Global market access', 'Faster approvals', 'Reduced regulatory risk'],
    timeline: '4-16 weeks',
    color: 'from-blue-500 to-blue-700'
  },

  // B. Quality & Compliance Services
  {
    id: 'quality-compliance',
    category: 'support',
    icon: FileText,
    title: 'Quality & Compliance Services',
    shortDesc: 'QMS (Quality Management System) development & implementation.',
    fullDesc:
      'B. Quality & Compliance Services\n1. QMS (Quality Management System) development & implementation.\n2. Drafting, reviewing & updating SOPs, Policies, and Work Instructions.\n3. GxP compliance support (GMP, GLP, GDP, GCP).\n4. Audit readiness & mock inspections (USFDA, EMA, MHRA, WHO audits).\n5. CAPA (Corrective & Preventive Actions) management.',
    features: [
      'QMS (Quality Management System) development & implementation.',
      'Drafting, reviewing & updating SOPs, Policies, and Work Instructions.',
      'GxP compliance support (GMP, GLP, GDP, GCP).',
      'Audit readiness & mock inspections (USFDA, EMA, MHRA, WHO audits).',
      'CAPA (Corrective & Preventive Actions) management.'
    ],
    benefits: ['Improved compliance', 'Audit success', 'Operational robustness'],
    timeline: '3-12 weeks',
    color: 'from-orange-500 to-orange-700'
  },

  // C. Pharmaceutical Development Support
  {
    id: 'pharma-dev',
    category: 'technical',
    icon: BookOpen,
    title: 'Pharmaceutical Development Support',
    shortDesc: 'Formulation development & technology transfer.',
    fullDesc:
      'C. Pharmaceutical Development Support\n1. Formulation development & technology transfer.\n2. Process optimization & scale-up support.\n3. Analytical method development & validation.\n4. Stability study design & review as per ICH guidelines.\n5. Technical dossier writing (CMC, QOS, Module 3).',
    features: [
      'Formulation development & technology transfer.',
      'Process optimization & scale-up support.',
      'Analytical method development & validation.',
      'Stability study design & review as per ICH guidelines.',
      'Technical dossier writing (CMC, QOS, Module 3).'
    ],
    benefits: ['Robust product development', 'Regulatory-ready documentation'],
    timeline: '6-20 weeks',
    color: 'from-green-500 to-green-700'
  },

  // D. Manufacturing & Operational Excellence
  {
    id: 'manufacturing',
    category: 'technical',
    icon: Package,
    title: 'Manufacturing & Operational Excellence',
    shortDesc: 'Facility design review for GMP compliance.',
    fullDesc:
      'D. Manufacturing & Operational Excellence\n1. Facility design review for GMP compliance.\n2. Equipment qualification (IQ, OQ, PQ).\n3. Utility qualification (HVAC, Water System, Compressed Air).\n4. Tech transfer documentation & execution support.\n5. Lean manufacturing & cost optimization projects.',
    features: [
      'Facility design review for GMP compliance.',
      'Equipment qualification (IQ, OQ, PQ).',
      'Utility qualification (HVAC, Water System, Compressed Air).',
      'Tech transfer documentation & execution support.',
      'Lean manufacturing & cost optimization projects.'
    ],
    benefits: ['GMP-compliant facilities', 'Improved throughput', 'Lower costs'],
    timeline: '4-20 weeks',
    color: 'from-teal-500 to-teal-700'
  },

  // E. Pharmacovigilance & Drug Safety
  {
    id: 'pharmacovigilance',
    category: 'technical',
    icon: Eye,
    title: 'Pharmacovigilance & Drug Safety',
    shortDesc: 'Setup of pharmacovigilance system.',
    fullDesc:
      'E. Pharmacovigilance & Drug Safety\n1. Setup of pharmacovigilance system.\n2. Case processing & safety data management.\n3. Signal detection & risk management plans.\n4. Periodic safety update reports (PSURs/PBRERs).\n5. Global safety compliance (EudraVigilance, FDA FAERS).',
    features: [
      'Setup of pharmacovigilance system.',
      'Case processing & safety data management.',
      'Signal detection & risk management plans.',
      'Periodic safety update reports (PSURs/PBRERs).',
      'Global safety compliance (EudraVigilance, FDA FAERS).'
    ],
    benefits: ['Patient safety', 'Regulatory compliance', 'Global reporting readiness'],
    timeline: '4-12 weeks',
    color: 'from-purple-500 to-purple-700'
  },

  // F. Training & Capability Building
  {
    id: 'training-capability',
    category: 'training',
    icon: Users,
    title: 'Training & Capability Building',
    shortDesc: 'GxP training programs for employees.',
    fullDesc:
      'F. Training & Capability Building\n1. GxP training programs for employees.\n2. Data integrity training.\n3. Audit & inspection handling workshops.\n4. Customized technical training (QMS, Regulatory, PV).',
    features: [
      'GxP training programs for employees.',
      'Data integrity training.',
      'Audit & inspection handling workshops.',
      'Customized technical training (QMS, Regulatory, PV).'
    ],
    benefits: ['Skilled staff', 'Audit readiness', 'Improved compliance'],
    timeline: '1-8 weeks',
    color: 'from-indigo-500 to-indigo-700'
  },

  // G. Market Access & Strategic Consulting
  {
    id: 'market-access',
    category: 'support',
    icon: Target,
    title: 'Market Access & Strategic Consulting',
    shortDesc: 'Market entry strategy for regulated & emerging markets.',
    fullDesc:
      'G. Market Access & Strategic Consulting\n1. Market entry strategy for regulated & emerging markets.\n2. Competitor intelligence & product lifecycle planning.\n3. Global product launch support.\n4. Licensing & partnering advisory.',
    features: [
      'Market entry strategy for regulated & emerging markets.',
      'Competitor intelligence & product lifecycle planning.',
      'Global product launch support.',
      'Licensing & partnering advisory.'
    ],
    benefits: ['Improved market positioning', 'Strategic launch support'],
    timeline: '4-12 weeks',
    color: 'from-yellow-500 to-yellow-600'
  },

  // H. Computer System Validation (CSV) & Data Integrity
  {
    id: 'csv',
    category: 'support',
    icon: Shield,
    title: 'Computer System Validation (CSV) & Data Integrity',
    shortDesc: 'Validation strategy (GAMP 5, 21 CFR Part 11, Annex 11)',
    fullDesc:
      'H. Computer System Validation (CSV) & Data Integrity\n1. Validation strategy (GAMP 5, 21 CFR Part 11, Annex 11)\n2. URS, FS, IQ, OQ, PQ, UAT & validation reports\n3. Data integrity audits & remediation (ALCOA+)\n4. Training on CSV & data integrity principles',
    features: [
      'Validation strategy (GAMP 5, 21 CFR Part 11, Annex 11)',
      'URS, FS, IQ, OQ, PQ, UAT & validation reports',
      'Data integrity audits & remediation (ALCOA+)',
      'Training on CSV & data integrity principles'
    ],
    benefits: ['Validated systems', 'Compliance to Part 11 / Annex 11'],
    timeline: '4-12 weeks',
    color: 'from-yellow-500 to-yellow-600'
  },

  // Personal Mentorship Program (PMP) — concise card-style like others
  {
    id: 'pmp',
    category: 'training',
    icon: Users,
    title: 'Personal Mentorship Program (PMP)',
    shortDesc: '60-day intensive training program for B.Pharm and M.Pharm freshers',
    fullDesc: '',
    features: [
      'Industrial Expert as Personal Mentor',
      'Live On-field Training Sessions',
      'Mock Interview & Personality Development',
      'Email Writing & AI Prompting',
      'International Regulatory Guidelines',
      'Lifetime Career Support'
    ],
    benefits: ['Industry Readiness', 'Job Placement Support', 'Lifetime Mentorship'],
    timeline: '60 days',
    color: 'from-indigo-600 to-indigo-800'
  }
]

// categories (same as your original)
const categories = [
  { id: 'all', name: 'All Services', icon: Globe },
  { id: 'regulatory', name: 'Regulatory', icon: Shield },
  { id: 'technical', name: 'Technical', icon: BookOpen },
  { id: 'training', name: 'Training', icon: Users },
  { id: 'support', name: 'Support', icon: Award }
]

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all')

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
              All Services
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
                      {service.icon ? <service.icon className="text-white" size={24} /> : <FileText className="text-white" size={24} />}
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
              Patient-first philosophy, regulatory-driven execution, inspection readiness expertise, ethical sourcing, risk mitigation approach, and integrated technical-commercial support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: TrendingUp,
              title: 'Proven Track Record',
              description: 'Successful project delivery with 100% client satisfaction rate'
            }, {
              icon: Users,
              title: 'Expert Team',
              description: 'Industry veterans with 15+ years of pharmaceutical experience'
            }, {
              icon: Zap,
              title: 'Fast Turnaround',
              description: 'Efficient processes ensuring timely project completion'
            }, {
              icon: Globe,
              title: 'Global Standards',
              description: 'Compliance with international regulatory requirements'
            }].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
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
