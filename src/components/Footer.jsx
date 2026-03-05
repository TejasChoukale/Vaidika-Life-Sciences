import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Heart } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Inquiry', path: '/inquiry' },
  ]

  const services = [
    'Regulatory Compliance',
    'Technical Dossier Preparation',
    'Audit Preparation',
    'Pharmacovigilance Services',
    'Personal Mentorship Program',
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="inner-max px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-white">
                  Vaidika Life Sciences
                </h3>
                <p className="text-sm text-primary-300">Pharma Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming pharmaceutical education and entrepreneurship through
              expert mentorship and comprehensive industry support..
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} />
                <span className="text-sm">+91 9892249478</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} />
                <span className="text-sm">admin@vaidikalifesciences.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin size={18} className="mt-1" />
                <span className="text-sm">
                  436, Business Point, Trimurti Kamatwada Road,<br />
                  Nashik, Maharashtra 422009, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* PMP Program */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-6">PMP Program</h4>
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-4 mb-4 shadow-sm">
              <h5 className="font-semibold mb-2 text-white">Personal Mentorship Program</h5>
              <p className="text-sm mb-3 opacity-90 text-white/90">
                60-day intensive training for pharma professionals
              </p>
              <a
                href="https://www.linkedin.com/company/vaidika-life-sciences"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white bg-white/10 px-3 py-2 rounded-full text-xs font-medium hover:bg-white/20 transition-colors"
              >
                Free Session
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Join our FREE Introduction Session every Sunday!
            </p>
            <Link
              to="/inquiry"
              className="bg-accent-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-colors inline-block"
            >
              Register Now
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© 2024 Vaidika Life Sciences, Developed by Tejas Choukale and Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>for Pharma Excellence</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow Us:</span>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
