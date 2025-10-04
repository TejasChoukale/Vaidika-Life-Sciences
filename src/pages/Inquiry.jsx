// Inquiry.jsx
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  MessageSquare,
  BookOpen,
  Search as SearchIcon,
  MapPin
} from 'lucide-react'
import emailjs from 'emailjs-com'



const Inquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [userType, setUserType] = useState('') // 'industry' | 'student' | ''
  const [selectedModules, setSelectedModules] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const searchRef = useRef(null)

  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm()
  const watchedInterest = watch('interest')
  const watchedLocation = watch('location')
  const watchedOtherLocation = watch('otherLocation')

  
  const trainingModules = [
    'Regulatory Affairs – CTD/eCTD dossiers, DMF, lifecycle management',
    'Quality & Compliance – QMS, SOPs, GMP/GDP, audit readiness',
    'Quality Control & Analytical – Stability studies, method validation, GLP',
    'Manufacturing & Validation – Equipment/utility qualification, tech transfer',
    'Pharmacovigilance – Case processing, signal detection, global safety reports',
    'Computer System Validation (CSV) – GAMP 5, 21 CFR Part 11, Annex 11, Data Integrity',
    'Clinical Research – Trial phases, GCP compliance, clinical data basics',
    'Medical Writing – Regulatory documents, scientific publications, PV writing',
    'Market Access – Product launch strategy, global market entry overview',
    'Career Development – Resume building, interviews, soft skills & professional grooming'
  ]

  const academiaServices = [
    'Mentorship Programs – Personal guidance for career readiness and skill-building',
    'Placement Assistance – Connecting students to pharmaceutical opportunities',
    'Technical Interview Training – Mock sessions and industrial knowledge support',
    'Ongoing Professional Support – Lifelong mentorship to support career growth and entrepreneurship',
    'Soft skills & professional grooming for pharma careers',
    'CV preparation & interview guidance',
    'Live case studies & mini-projects aligned with pharmaceutical industry',
    'Internship support with exposure to regulatory & technical documentation'
  ]

  // preserve original Interests list for when no profile selected
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

  // Locations (Maharashtrian-first, then others)
  const locations = [
    'Mumbai',
    'Pune',
    'Nashik',
    'Nagpur',
    'Aurangabad',
    'Thane',
    'Pimpri-Chinchwad',
    'Kolhapur',
    'Solapur',
    'Latur',
    'Other'
  ]

  // Industry types for industry/professional profile
  const industryTypes = [
    'Pharmaceutical Finished Dosage Form (FDF) Manufacturer',
    'Active Pharmaceutical Ingredient (API) Manufacturer',
    'Pharmaceutical Excipient Manufacturer / Supplier',
    'Primary Packaging Materials Manufacturer / Supplier'
  ]

  // handle clicks outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    // keep react-hook-form value synced for email + validation
    setValue('interest', selectedModules.join('; '))
  }, [selectedModules, setValue])

  const handleModuleToggle = (module) => {
    setSelectedModules(prev => {
      if (prev.includes(module)) return prev.filter(m => m !== module)
      return [...prev, module]
    })
  }

  const handleUserTypeSelect = (type) => {
    if (userType === type) {
      // toggle off
      setUserType('')
      setSelectedModules([])
      setDropdownOpen(false)
      setValue('interest', '')
    } else {
      setUserType(type)
      setSelectedModules([])
      setDropdownOpen(true)
      // focus search when opening
      setTimeout(() => searchRef.current?.focus?.(), 50)
    }
  }

  const handleClearSelected = () => {
    setSelectedModules([])
    setValue('interest', '')
  }

  const onSubmit = async (data) => {
    // If profile selected, ensure at least one module is chosen
    if (userType && selectedModules.length === 0) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Map fields so template receives sensible values depending on profile
      const templateParams = {
        from_name: data.fullName,
        from_email: data.email,
        phone: data.phone,
        // course: for students keep course; for industry use location (so admin can see location in that field)
        course: userType === 'industry' ? (data.location === 'Other' ? (data.otherLocation || 'Other') : (data.location || 'Not specified')) : (data.course || 'Not specified'),
        // experience: for students keep experience; for industry use industryType
        experience: userType === 'industry' ? (data.industryType || 'Not specified') : (data.experience || 'Not specified'),
        interest: userType ? (selectedModules.length ? selectedModules.join('; ') : 'none') : (data.interest || 'none'),
        message: data.message,
        user_type: userType || 'not specified',
        to_email: 'admin@vaidikalifesciences.com'
      }

      await emailjs.send(
        'service_d3md64e', // EmailJS service ID (unchanged)
        'template_z4sjsie', // EmailJS template ID
        templateParams,
        '84mtcLykrc-7b6G5C' // EmailJS user ID
      )

      setSubmitStatus('success')
      reset()
      setUserType('')
      setSelectedModules([])
      setDropdownOpen(false)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const courses = ['B.Pharm', 'M.Pharm', 'D.Pharm', 'Pharm.D', 'Other']

  // Dropdown multi-select component UI helpers
  const optionsToShow = userType === 'industry' ? trainingModules : userType === 'student' ? academiaServices : []
  const [searchTerm, setSearchTerm] = useState('')
  const filteredOptions = optionsToShow.filter(o => o.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen py-20">
      <div className="w-full max-w-screen-2xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Start Your Pharma Journey</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your pharmaceutical career? Fill out the inquiry form below and our expert team will get in touch with you within 24 hours.
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-full">
              <CheckCircle className="mr-2" size={20} /> Free Consultation Available
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Inquiry Form</h2>

                {/* Two bold profile options (replaces "I am") */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2 font-medium">
                    Select your profile type to see tailored options:
                  </p>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleUserTypeSelect('student')}
                      className={`px-4 py-3 rounded-md font-semibold transition-shadow ${
                        userType === 'student' ? 'bg-primary-700 text-white shadow-lg' : 'bg-white text-gray-800 border border-gray-200 hover:shadow-sm'
                      }`}
                      style={{ minWidth: 220 }}
                    >
                      Academia &amp; Students
                    </button>

                    <button
                      type="button"
                      onClick={() => handleUserTypeSelect('industry')}
                      className={`px-4 py-3 rounded-md font-semibold transition-shadow ${
                        userType === 'industry' ? 'bg-primary-700 text-white shadow-lg' : 'bg-white text-gray-800 border border-gray-200 hover:shadow-sm'
                      }`}
                      style={{ minWidth: 220 }}
                    >
                      Industry / Professional
                    </button>

                    {/* quick clear if any selected */}
                    <button
                      type="button"
                      onClick={handleClearSelected}
                      className="ml-auto text-sm text-gray-500 hover:text-gray-700"
                      title="Clear selections"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name / Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline mr-2" size={16} /> Full Name *
                      </label>
                      <input
                        {...register('fullName', { required: 'Full name is required' })}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline mr-2" size={16} /> Email Address *
                      </label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
                        })}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Phone / Qualification or Location */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline mr-2" size={16} /> Phone Number *
                      </label>
                      <input
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: { value: /^[0-9+\-\s()]{10,}$/, message: 'Invalid phone number' }
                        })}
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+91 XXXXXXXXXX"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                      {/* If userType is 'industry', show Location; otherwise show Qualification (Course) */}
                      {userType === 'industry' ? (
                        <>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <MapPin className="inline mr-2" size={16} /> Location *
                          </label>

                          <select
                            {...register('location', { required: 'Please select your location' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select your city</option>
                            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                          </select>
                          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}

                          {/* If Other selected, show text input to type location */}
                          {watchedLocation === 'Other' && (
                            <div className="mt-3">
                              <input
                                {...register('otherLocation', { required: 'Please enter your city' })}
                                type="text"
                                placeholder="Enter your city"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                              />
                              {errors.otherLocation && <p className="text-red-500 text-sm mt-1">{errors.otherLocation.message}</p>}
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <BookOpen className="inline mr-2" size={16} /> Qualification *
                          </label>
                          <select
                            {...register('course', { required: userType !== 'industry' ? 'Course is required' : false })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select your course</option>
                            {courses.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                          {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Experience or Industry Type */}
                  <div>
                    {userType === 'industry' ? (
                      <>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Industry Type *</label>
                        <select
                          {...register('industryType', { required: 'Please select your industry type' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select industry type</option>
                          {industryTypes.map(it => <option key={it} value={it}>{it}</option>)}
                        </select>
                        {errors.industryType && <p className="text-red-500 text-sm mt-1">{errors.industryType.message}</p>}
                      </>
                    ) : (
                      <>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
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
                      </>
                    )}
                  </div>

                  {/* Area of Interest (improved dropdown panel) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area of Interest *</label>

                    {/* If no profile chosen, show original single-select */}
                    {!userType && (
                      <select
                        {...register('interest', { required: 'Please select an area of interest' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select your area of interest</option>
                        {interests.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    )}

                    {/* If profile chosen, show the custom dropdown */}
                    {userType && (
                      <div className="relative" ref={dropdownRef}>
                        {/* Input-like control */}
                        <button
                          type="button"
                          onClick={() => { setDropdownOpen(prev => !prev); setTimeout(() => searchRef.current?.focus?.(), 60) }}
                          className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg bg-white flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          aria-expanded={dropdownOpen}
                        >
                          <div className="flex-1 flex flex-wrap gap-2">
                            {selectedModules.length === 0 ? (
                              <span className="text-gray-500">Choose modules (click to open)</span>
                            ) : (
                              selectedModules.map(m => (
                                <span key={m} className="inline-flex items-center bg-primary-100 text-primary-800 px-2 py-1 rounded-md text-sm">
                                  <span className="truncate max-w-[260px]">{m}</span>
                                </span>
                              ))
                            )}
                          </div>

                          <div className="ml-3 text-gray-400">
                            <svg className={`w-5 h-5 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </button>

                        {/* Dropdown panel */}
                        {dropdownOpen && (
                          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                            <div className="p-3 border-b border-gray-100 flex items-center gap-2">
                              <SearchIcon size={16} className="text-gray-400" />
                              <input
                                ref={searchRef}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search modules..."
                                className="flex-1 px-2 py-1 focus:outline-none"
                              />
                              <button type="button" onClick={() => { setSelectedModules(optionsToShow); setValue('interest', optionsToShow.join('; ')) }} className="text-sm text-primary-600 hover:underline">Select All</button>
                            </div>

                            <div style={{ maxHeight: 300 }} className="overflow-auto p-3 grid gap-2">
                              {filteredOptions.length === 0 && (
                                <div className="text-sm text-gray-500 px-2 py-4">No modules match “{searchTerm}”</div>
                              )}

                              {filteredOptions.map(opt => {
                                const selected = selectedModules.includes(opt)
                                return (
                                  <label key={opt} className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={selected}
                                      onChange={() => handleModuleToggle(opt)}
                                      className="mt-1"
                                    />
                                    <div className="text-sm leading-tight">
                                      <div className="font-medium text-gray-800">{opt}</div>
                                    </div>
                                  </label>
                                )
                              })}
                            </div>

                            <div className="flex items-center justify-between p-3 border-t border-gray-100">
                              <div className="text-sm text-gray-600">{selectedModules.length} selected</div>
                              <div className="flex gap-2">
                                <button type="button" onClick={() => { setSelectedModules([]); setValue('interest', '') }} className="text-sm text-gray-600 hover:underline">Clear</button>
                                <button type="button" onClick={() => setDropdownOpen(false)} className="px-3 py-1 rounded bg-primary-600 text-white text-sm">Done</button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        {/* hidden form input used by react-hook-form for validation/email */}
                        <input
                          type="hidden"
                          {...register('interest', { validate: value => (selectedModules.length > 0) || 'Please select at least one module' })}
                          value={selectedModules.join('; ')}
                        />
                      </div>
                    )}
                    {errors.interest && <p className="text-red-500 text-sm mt-1">{errors.interest.message}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2"><MessageSquare className="inline mr-2" size={16} /> Message</label>
                    <textarea {...register('message')} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" placeholder="Tell us more about your goals and how we can help you..."></textarea>
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary-600 to-primary-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center justify-center">
                    {isSubmitting ? (<><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div> Submitting...</>) : (<><span>Submit Inquiry</span><Send className="ml-2" size={20} /></>)}
                  </button>

                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center">
                      <CheckCircle className="mr-3 text-green-500" size={20} />
                      <div><p className="font-semibold">Inquiry Submitted Successfully!</p><p className="text-sm">We'll get back to you within 24 hours.</p></div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center">
                      <AlertCircle className="mr-3 text-red-500" size={20} />
                      <div><p className="font-semibold">Submission Failed</p><p className="text-sm">Please try again or contact us directly.</p></div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Info panel (unchanged) */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-8 h-fit">
                <h3 className="text-2xl font-bold mb-6">Why Choose Vaidika Life Sciences?</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3"><CheckCircle className="text-green-400 mt-1" size={20} /><p>Expert mentorship from industry professionals</p></div>
                  <div className="flex items-start space-x-3"><CheckCircle className="text-green-400 mt-1" size={20} /><p>Comprehensive 60-day training program</p></div>
                  <div className="flex items-start space-x-3"><CheckCircle className="text-green-400 mt-1" size={20} /><p>Job placement assistance</p></div>
                  <div className="flex items-start space-x-3"><CheckCircle className="text-green-400 mt-1" size={20} /><p>Lifetime career support</p></div>
                  <div className="flex items-start space-x-3"><CheckCircle className="text-green-400 mt-1" size={20} /><p>International regulatory guidelines</p></div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-2">Quick Response</h4>
                  <p className="text-sm opacity-90">Our team responds to all inquiries within 24 hours. For urgent matters, call us directly.</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3"><Phone size={18} /><span>+91 9892249478</span></div>
                  <div className="flex items-center space-x-3"><Mail size={18} /><span>admin@vaidikalifesciences.com</span></div>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Free Introduction Session</h4>
                <p className="text-gray-600 mb-4">Join our FREE PMP introduction session every Sunday!</p>
                <a href="https://www.linkedin.com/company/vaidika-life-sciences" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-accent-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-600 transition-colors">
                  Register Free Session <Send className="ml-2" size={16} />
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
