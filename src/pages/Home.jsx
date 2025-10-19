import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import { universityImage } from '../assets/images'

const Home = () => {
  const { language } = useLanguage()
  const t = translations[language]
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-british-green/10 to-royal-blue/10 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={universityImage}
            alt="University of Nottingham"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-british-green/30 to-royal-blue/30"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-dark-gray mb-6">
              {language === 'en' ? 'Welcome to ' : '欢迎来到 '}<span className="text-british-green">Guqiao's</span> {language === 'en' ? 'Magical World!' : '魔法世界！'}
            </h1>
            <p className="text-xl md:text-2xl text-dark-gray mb-8 leading-relaxed italic">
              {t.motto}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="btn-primary">
                {t.viewProjects}
              </Link>
              <Link to="/contact" className="btn-secondary">
                {t.contactMe}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-gray mb-12">
            {language === 'en' ? 'Quick Navigation' : '快速导航'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/about"
              className="card text-center group hover:border-british-green border-2 border-transparent"
            >
              <div className="w-16 h-16 bg-british-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-british-green/20 transition-colors">
                <svg className="w-8 h-8 text-british-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-2">{t.aboutMe}</h3>
              <p className="text-gray-600">{language === 'en' ? 'Learn about my background, skills, and personal story' : '了解我的背景、技能和个人故事'}</p>
            </Link>

            <Link
              to="/resume"
              className="card text-center group hover:border-royal-blue border-2 border-transparent"
            >
              <div className="w-16 h-16 bg-royal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-blue/20 transition-colors">
                <svg className="w-8 h-8 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-2">{t.myResume}</h3>
              <p className="text-gray-600">{language === 'en' ? 'View my professional experience and education' : '查看我的专业经验和教育背景'}</p>
            </Link>

            <Link
              to="/projects"
              className="card text-center group hover:border-british-green border-2 border-transparent"
            >
              <div className="w-16 h-16 bg-british-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-british-green/20 transition-colors">
                <svg className="w-8 h-8 text-british-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-2">{t.myProjects}</h3>
              <p className="text-gray-600">{language === 'en' ? 'Explore my portfolio and technical projects' : '探索我的作品集和技术项目'}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Skillset Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-gray mb-12">
            {t.technicalSkills}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programming Languages */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-british-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-british-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-gray">{t.programmingLanguages}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Java', 'Python', 'C++', 'C', 'Matlab'].map((skill) => (
                  <span key={skill} className="bg-british-green/10 text-british-green px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-royal-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-gray">{t.frontend}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {['React', 'HTML', 'CSS', 'JavaScript'].map((skill) => (
                  <span key={skill} className="bg-royal-blue/10 text-royal-blue px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-british-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-british-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-gray">{t.database}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {['SQL'].map((skill) => (
                  <span key={skill} className="bg-british-green/10 text-british-green px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hardware */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-royal-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-gray">{t.hardware}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {['RISC-V', 'MIPS'].map((skill) => (
                  <span key={skill} className="bg-royal-blue/10 text-royal-blue px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home