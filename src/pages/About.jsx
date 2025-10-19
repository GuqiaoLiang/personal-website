import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import { selfieImage } from '../assets/images'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            {t.aboutTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' ? 'A passionate developer dedicated to creating meaningful solutions through technology' : '一位充满热情的开发者，致力于通过技术创造有意义的解决方案'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-48 h-48 bg-gradient-to-br from-british-green to-royal-blue rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={selfieImage}
                  alt="梁谷乔"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-center text-dark-gray mb-4">
                梁谷乔 (Guqiao Liang)
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Computer Science Student | AI Enthusiast
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-british-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>University of Nottingham, UK</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-royal-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Computer Science</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-british-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>UK & China</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-dark-gray mb-6 flex items-center">
                <svg className="w-6 h-6 text-royal-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                {t.education}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-royal-blue/5 rounded-lg border-l-4 border-royal-blue">
                  <div className="w-8 h-8 bg-royal-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray">{t.university}, United Kingdom</h4>
                    <p className="text-gray-600">{language === 'en' ? 'One-year Exchange Program' : '一年交换项目'}</p>
                    <p className="text-sm text-gray-500">Sept 2025 - Jun 2026</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-british-green/5 rounded-lg border-l-4 border-british-green">
                  <div className="w-8 h-8 bg-british-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-british-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray">{t.university}, Ningbo China</h4>
                    <p className="text-gray-600">{t.degree}</p>
                    <p className="text-sm text-gray-500">{t.graduation} | GPA: 4.0/4.0 (81/100)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-dark-gray mb-6 flex items-center">
                <svg className="w-6 h-6 text-british-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {t.profile}
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="italic">
                  {t.profileText}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-british-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-british-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{language === 'en' ? 'Full-stack web development with modern frameworks' : '使用现代框架的全栈Web开发'}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-british-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-british-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{language === 'en' ? 'AI and machine learning applications' : '人工智能和机器学习应用'}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-british-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-british-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{language === 'en' ? 'Hardware design and computer architecture' : '硬件设计和计算机架构'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-dark-gray mb-6 flex items-center">
                <svg className="w-6 h-6 text-royal-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t.interests}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.interestsList.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-8 h-8 bg-royal-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About