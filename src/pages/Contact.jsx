import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  User,
  MessageSquare,
  Building,
  Globe,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Star,
  Users
} from 'lucide-react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('84mtcLykrc-7b6G5C')
  }, [])

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Map contact form fields to match inquiry template structure
      const templateParams = {
        from_name: data.fullName,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        course: 'Contact Form', // Static value since this is from contact page
        experience: 'N/A', // Not applicable for contact form
        interest: data.subject, // Map subject to interest field
        message: data.message,
        to_email: 'admin@vaidikalifesciences.com'
      }

      // Use emailjs.send with proper initialization (no user ID needed)
      await emailjs.send(
        'service_d3md64e', // EmailJS service ID
        'template_z4sjsie', // EmailJS template ID
        templateParams
        // Note: No need to pass user ID here after initialization
      )

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91 9892249478',
      description: 'Available 9 AM - 6 PM (Mon-Fri)',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'admin@vaidikalifesciences.com',
      description: 'We respond within 24 hours',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: '436, Business Point, Trimurti Kamatwada Road',
      description: 'Nashik, Maharashtra 422009, India',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',
      description: 'Flexible hybrid workplace',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const quickLinks = [
    {
      title: 'Personal Mentorship Program',
      description: 'Join our 60-day intensive training program',
      link: '/inquiry',
      icon: Users
    },
    {
      title: 'Free Introduction Session',
      description: 'Every Sunday - Register now',
      link: 'https://lnkd.in/d2K-PDkF',
      external: true,
      icon: Star
    },
    {
      title: 'Regulatory Services',
      description: 'EU-GMP, US-FDA compliance support',
      link: '/services',
      icon: Building
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="full-bleed w-full py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white px-0">
        <div className="inner-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-heading mb-6">
              Contact Us
            </h1>
            <p className="lead mb-8 max-w-4xl mx-auto opacity-90">
              Ready to transform your pharmaceutical career? Get in touch with our expert team 
              for personalized guidance and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">24-Hour Response</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Free Consultation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Expert Guidance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="w-full max-w-screen-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect with our pharmaceutical experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center min-w-[280px]"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center`}>
                  <info.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-800 font-medium mb-2 text-sm break-words break-all max-w-full whitespace-normal">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="w-full max-w-screen-2xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Have a specific question or need personalized guidance? Fill out the form below 
                  and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline mr-2" size={16} />
                        Full Name *
                      </label>
                      <input
                        {...register('fullName', { required: 'Name is required' })}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Enter your name"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline mr-2" size={16} />
                        Email Address *
                      </label>
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline mr-2" size={16} />
                        Phone Number
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        {...register('subject', { required: 'Subject is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select subject</option>
                        <option value="PMP Inquiry">PMP Program Inquiry</option>
                        <option value="Regulatory Services">Regulatory Services</option>
                        <option value="Technical Dossier">Technical Dossier</option>
                        <option value="Audit Support">Audit Support</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Partnership">Partnership Opportunity</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="inline mr-2" size={16} />
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center"
                    >
                      <CheckCircle className="mr-3 text-green-500" size={20} />
                      <div>
                        <p className="font-semibold">Message sent successfully!</p>
                        <p className="text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center"
                    >
                      <AlertCircle className="mr-3 text-red-500" size={20} />
                      <div>
                        <p className="font-semibold">Failed to send message</p>
                        <p className="text-sm">Please try again or call us directly.</p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Office Info & Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Office Location */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium">436, Business Point</p>
                      <p>Trimurti Kamatwada Road</p>
                      <p>Nashik, Maharashtra 422009</p>
                      <p>India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="text-yellow-400" size={20} />
                    <p>Business Consulting and Services</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-yellow-400" size={20} />
                    <p>11-50 employees</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Hybrid Workplace</h4>
                  <p className="text-sm opacity-90">
                    We foster a flexible work environment that balances productivity with 
                    flexibility. Flexible time on-site based on role requirements.
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-gray-900">Quick Actions</h3>
                {quickLinks.map((item, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-4 hover:border-primary-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                          <item.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      {item.external ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-800 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      ) : (
                        <Link
                          to={item.link}
                          className="text-primary-600 hover:text-primary-800 transition-colors"
                        >
                          <ArrowRight size={20} />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">
                    436, Business Point, Trimurti Kamatwada Road<br />
                    Nashik, Maharashtra 422009, India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="w-full max-w-screen-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can you respond to inquiries?",
                answer: "We respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly at +91 9892249478."
              },
              {
                question: "What is the Personal Mentorship Program?",
                answer: "PMP is a 60-day intensive training program for B.Pharm and M.Pharm freshers, providing industry exposure and lifetime career support."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! We offer free initial consultations to understand your needs and provide guidance on the best path forward for your pharmaceutical career or business."
              },
              {
                question: "What regulatory standards do you support?",
                answer: "We support EU-GMP, US-FDA, WHO-GMP, and other international regulatory standards for pharmaceutical compliance and quality assurance."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="w-full max-w-screen-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Don't wait to transform your pharmaceutical career. Connect with us today 
              and take the first step towards success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919421441032"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Call Now: +91 9892249478
              </a>
              <a
                href="mailto:admin@vaidikalifesciences.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Send Email
              </a>
            </div>
            
            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-lg mb-4">Connect with us on social media</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/company/vaidika-life-sciences/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://lnkd.in/d2K-PDkF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact