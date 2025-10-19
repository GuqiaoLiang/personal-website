import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()

  const navigation = [
    { name: language === 'en' ? 'Home' : '首页', href: '/' },
    { name: language === 'en' ? 'About' : '关于', href: '/about' },
    { name: language === 'en' ? 'Resume' : '简历', href: '/resume' },
    { name: language === 'en' ? 'Projects' : '项目', href: '/projects' },
    { name: language === 'en' ? 'Contact' : '联系', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-british-green hover:text-royal-blue transition-colors"
          >
            Guqiao Liang (Allen)
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-british-green border-b-2 border-british-green'
                    : 'text-dark-gray hover:text-british-green'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 border border-british-green rounded-full text-british-green hover:bg-british-green hover:text-white transition-colors duration-300"
            >
              <span className="text-sm font-medium">{language === 'en' ? '中文' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-gray hover:text-british-green transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-british-green'
                      : 'text-dark-gray hover:text-british-green'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Language Toggle */}
              <button
                onClick={() => {
                  toggleLanguage()
                  setIsMenuOpen(false)
                }}
                className="flex items-center space-x-1 px-3 py-2 border border-british-green rounded-full text-british-green hover:bg-british-green hover:text-white transition-colors duration-300 w-fit"
              >
                <span className="text-sm font-medium">{language === 'en' ? '中文' : 'EN'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header