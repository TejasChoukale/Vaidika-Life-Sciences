// Inquiry.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare, BookOpen } from 'lucide-react'
import emailjs from 'emailjs-com'

const Inquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: data.fullName,
        from_email: data.email,
        phone: data.phone,
        course: data.course,
        experience: data.experience,
        interest: data.interest,
        message: data.message,
        to_email: 'info@vaidikalifesciences.com'
      }

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'service_d3md64e', // EmailJS service ID
        'template_z4sjsie', // EmailJS template ID
        templateParams,
        '84mtcLykrc-7b6G5C' // EmailJS user ID
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

  const courses = [
    'B.Pharm',
    'M.Pharm',
    'D.Pharm',
    'Pharm.D',
    'Other'
  ]

  const interests = [
    'Personal Mentorship Program (PMP)',
    'Regulatory Compliance Services',
    'Technical Dossier Preparation',
    'Audit Preparation & Compliance',
    'Pharmacovigilance Services',
    'Packaging Technical Services',
    'Career Guidance',
    'Other Services'
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      {/* Page wrapper: centered content with wide max width */}
      <div className="w-full max-w-screen-2xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Start Your Pharma Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your pharmaceutical career? Fill out the inquiry form below and 
              our expert team will get in touch with you within 24 hours.
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-full">
              <CheckCircle className="mr-2" size={20} />
              Free Consultation Available
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Inquiry Form</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline mr-2" size={16} />
                        Full Name *
                      </label>
                      <input
                        {...register('fullName', { required: 'Full name is required' })}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
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
                        Phone Number *
                      </label>
                      <input
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9+\-\s()]{10,}$/,
                            message: 'Invalid phone number'
                          }
                        })}
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+91 XXXXXXXXXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <BookOpen className="inline mr-2" size={16} />
                        Course/Qualification *
                      </label>
                      <select
                        {...register('course', { required: 'Course is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select your course</option>
                        {courses.map((course) => (
                          <option key={course} value={course}>{course}</option>
                        ))}
                      </select>
                      {errors.course && (
                        <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level
                    </label>
                    <select
                      {...register('experience')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select experience level</option>
                      <option value="fresher">Fresher (0-1 years)</option>
                      <option value="junior">Junior (1-3 years)</option>
                      <option value="mid">Mid-level (3-5 years)</option>
                      <option value="senior">Senior (5+ years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Interest *
                    </label>
                    <select
                      {...register('interest', { required: 'Please select an area of interest' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select your area of interest</option>
                      {interests.map((interest) => (
                        <option key={interest} value={interest}>{interest}</option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p className="text-red-500 text-sm mt-1">{errors.interest.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="inline mr-2" size={16} />
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your goals and how we can help you..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
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
                        <p className="font-semibold">Inquiry Submitted Successfully!</p>
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
                        <p className="font-semibold">Submission Failed</p>
                        <p className="text-sm">Please try again or contact us directly.</p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-8 h-fit">
                <h3 className="text-2xl font-bold mb-6">Why Choose Vaidika Life Sciences?</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 mt-1" size={20} />
                    <p>Expert mentorship from industry professionals</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 mt-1" size={20} />
                    <p>Comprehensive 60-day training program</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 mt-1" size={20} />
                    <p>Job placement assistance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 mt-1" size={20} />
                    <p>Lifetime career support</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 mt-1" size={20} />
                    <p>International regulatory guidelines</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-2">Quick Response</h4>
                  <p className="text-sm opacity-90">
                    Our team responds to all inquiries within 24 hours. 
                    For urgent matters, call us directly.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone size={18} />
                    <span>+91 94214 41032</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={18} />
                    <span>info@vaidikalifesciences.com</span>
                  </div>
                </div>
              </div>

              {/* PMP Highlight */}
              <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Free Introduction Session
                </h4>
                <p className="text-gray-600 mb-4">
                  Join our FREE PMP introduction session every Sunday!
                </p>
                <a
                  href="https://www.linkedin.com/company/vaidika-life-sciences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-accent-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-600 transition-colors"
                >
                  Register Free Session
                  <Send className="ml-2" size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Inquiry
