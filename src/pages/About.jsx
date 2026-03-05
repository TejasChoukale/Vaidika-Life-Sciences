import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Globe,
  BookOpen,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  MapPin,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description:
        "We are driven by a deep commitment to pharmaceutical excellence and student success.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Student-Centric Approach",
      description:
        "Every decision we make prioritizes the growth and success of our students.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description:
        "We maintain international quality standards in all our training and services.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "We believe in lifelong learning and continuous professional development.",
      color: "from-purple-500 to-violet-600",
    },
  ];

  const achievements = [
    { number: "2024", label: "Founded with Vision", icon: Building },
    { number: "11-50", label: "Team Members", icon: Users },
    { number: "1,00,000+", label: "Target Students", icon: Target },
    { number: "11", label: "Core Services", icon: Briefcase },
  ];

  const benefits = [
    "Flexible Working Hours",
    "Mental Health Benefits",
    "Work From Home Options",
    "Hybrid Workplace",
    "Location-Independent Pay",
    "Professional Development",
  ];

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
            <h1 className="hero-heading mb-6">About Vaidika Life Sciences</h1>
            <p className="lead mb-8 max-w-4xl mx-auto opacity-90">
              Vaidika Life Sciences is a next-generation pharmaceutical company
              committed to delivering affordable, high-quality ICU and CCU
              medicines across India and emerging nations. Our model integrates
              healthcare accessibility with regulatory excellence and strategic
              pharmaceutical growth..
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Founded 2024</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Nashik, Maharashtra</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Hybrid Workplace</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-6 bg-white">
        <div className="w-full max-w-screen-2xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-1">
                <div className="bg-white rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center mr-4">
                      <Star className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Founder's Vision
                      </h3>
                      <p className="text-primary-600">
                        Dynamic Indian Woman Entrepreneur
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "I founded Vaidika Life Sciences with a simple yet powerful
                    belief: India's pharmaceutical future lies in the hands of
                    our talented youth. My mission is to bridge the gap between
                    what students learn and what the industry demands, creating
                    a generation of confident, skilled pharmapreneurs."
                  </blockquote>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Founding Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Vaidika Life Sciences was born from a vision to transform how
                pharmaceutical education connects with industry reality. Our
                founder, a dynamic Indian woman entrepreneur, recognized the gap
                between academic knowledge and industry requirements.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With years of industry experience and a passion for mentoring,
                she established Vaidika Life Sciences to empower students with
                practical skills, regulatory knowledge, and entrepreneurial
                mindset needed to excel in the pharmaceutical sector.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we stand as a beacon of hope for thousands of pharmacy
                students across India, providing them with the tools, knowledge,
                and confidence to become successful pharmapreneurs.
              </p>
              <Link
                to="/inquiry"
                className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Join Our Mission
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To become a trusted pharmaceutical partner delivering affordable
              critical care medicines while enabling Indian manufacturers to
              achieve global regulatory excellence.{" "}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Improve access to quality ICU medicines, reduce healthcare cost
                burden, strengthen compliance standards, and enable global
                pharmaceutical expansion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                  <Eye className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a trusted pharmaceutical partner delivering affordable
                critical care medicines while enabling Indian manufacturers to
                achieve global regulatory excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white">
        <div className="w-full max-w-screen-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Vaidika Life
              Sciences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="w-full max-w-screen-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Vaidika Life Sciences by Numbers
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Building a strong foundation for pharmaceutical excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <achievement.icon className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  {achievement.number}
                </h3>
                <p className="text-lg opacity-90">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-6 bg-white">
        <div className="w-full max-w-screen-2xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Workplace Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Vaidika Life Sciences, we foster a hybrid work environment
                that balances productivity with flexibility. Our workplace
                policy is designed to support both on-site and off-site work,
                enabling our team to perform their best while maintaining a
                strong professional ethic.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <MapPin className="inline mr-2 text-primary-600" size={24} />
                  Our Headquarters
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  436, Business Point, Trimurti Kamatwada Road
                  <br />
                  Nashik, Maharashtra 422009, India
                </p>
                <div className="mt-4 text-sm text-gray-600">
                  <strong>Workplace Type:</strong> Hybrid (Flexible) <br />
                  <strong>Time on-site:</strong> Flexible based on role
                  requirements
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Employee Benefits & Features
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
                  <h4 className="font-semibold text-primary-800 mb-2">
                    Equal Opportunity Employer
                  </h4>
                  <p className="text-sm text-primary-700">
                    Employee location does not impact pay. We believe in fair
                    compensation based on skills and contribution, regardless of
                    geographic location.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="w-full max-w-screen-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Be part of the transformation that's shaping the future of
              pharmaceutical education and entrepreneurship in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/inquiry"
                className="bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
