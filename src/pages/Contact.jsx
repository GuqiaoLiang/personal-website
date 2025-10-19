import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import { wechatQRCode } from '../assets/images'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // EmailJS configuration
  const EMAILJS_CONFIG = {
    serviceId: 'service_8ox32pu',
    templateId: 'template_k9q3pow',
    publicKey: 'RIx4vHZUL4UQH7gwR'
  }

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'scygl3@nottingham.ac.uk'
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      )

      console.log('Email sent successfully:', result)

      // Show success message
      alert('Thank you for your message! I will get back to you soon.')

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      console.error('Failed to send email:', error)

      // Fallback: Show alert with manual email option
      alert(`Sorry, there was an issue sending your message. Please email me directly at scygl3@nottingham.ac.uk with the following details:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            {t.getInTouch}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' ? "Let's work together! Feel free to reach out for any questions or opportunities." : "让我们合作吧！欢迎随时联系我，有任何问题或机会都可以。"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-dark-gray mb-6">{t.contactInfo}</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-british-green/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-british-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-gray">Email</h3>
                    <p className="text-gray-600">scygl3@nottingham.ac.uk</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-royal-blue/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-gray">Location</h3>
                    <p className="text-gray-600">Nottingham, UK</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-british-green/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-british-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-gray">Phone</h3>
                    <p className="text-gray-600">+44 7379540426</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-dark-gray mb-6">{t.connectWithMe}</h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/GuqiaoLiang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-british-green hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/GuqiaoLiang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white transition-colors"
                  aria-label="WeChat"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.691 2.188C3.891 2.188 0 5.418 0 9.355c0 2.105 1.175 4.02 3.072 5.293a.673.673 0 0 1 .227.926l-.455.787a.673.673 0 0 0 .926.927l1.203-.694a.673.673 0 0 1 .642 0 8.537 8.537 0 0 0 2.876.492c4.8 0 8.691-3.23 8.691-7.167s-3.891-7.167-8.691-7.167zm-2.99 5.04a1.01 1.01 0 1 1 0-2.02 1.01 1.01 0 0 1 0 2.02zm5.98 0a1.01 1.01 0 1 1 0-2.02 1.01 1.01 0 0 1 0 2.02z"/>
                    <path d="M15.309 13.812c-4.8 0-8.691 3.23-8.691 7.167 0 2.105 1.175 4.02 3.072 5.293a.673.673 0 0 1 .227.926l-.455.787a.673.673 0 0 0 .926.927l1.203-.694a.673.673 0 0 1 .642 0 8.537 8.537 0 0 0 2.876.492c4.8 0 8.691-3.23 8.691-7.167s-3.891-7.167-8.691-7.167zm-2.99 5.04a1.01 1.01 0 1 1 0-2.02 1.01 1.01 0 0 1 0 2.02zm5.98 0a1.01 1.01 0 1 1 0-2.02 1.01 1.01 0 0 1 0 2.02z"/>
                  </svg>
                </a>
              </div>

              {/* WeChat QR Code */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-dark-gray mb-4 text-center">
                  {language === 'en' ? 'WeChat Publication Account' : '微信公众号'}
                </h3>
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img
                      src={wechatQRCode}
                      alt={language === 'en' ? 'WeChat Publication Account QR Code' : '微信公众号二维码'}
                      className="w-48 h-48 object-cover rounded"
                    />
                    <p className="text-sm text-gray-600 text-center mt-2">
                      {language === 'en' ? 'Scan to follow my WeChat Publication Account' : '扫码关注我的微信公众号'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-dark-gray mb-6">{t.sendMessage}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-british-green focus:border-transparent transition-colors"
                    placeholder={language === 'en' ? 'Your Name' : '您的姓名'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-british-green focus:border-transparent transition-colors"
                    placeholder={language === 'en' ? 'your.email@example.com' : '您的邮箱地址'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-british-green focus:border-transparent transition-colors"
                  placeholder={language === 'en' ? "What's this about?" : '关于什么？'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-british-green focus:border-transparent transition-colors resize-none"
                  placeholder={language === 'en' ? 'Tell me about your project or question...' : '告诉我您的项目或问题...'}
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.sending}
                  </>
                ) : (
                  t.submit
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact