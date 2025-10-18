import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-british-green/10 to-royal-blue/10 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/UniversityOfNottingham.jpg"
            alt="University of Nottingham"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-british-green/30 to-royal-blue/30"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-dark-gray mb-6">
              Hello, I'm <span className="text-british-green">Guqiao Liang</span>
            </h1>
            <p className="text-xl md:text-2xl text-dark-gray mb-8 leading-relaxed">
              Computer Science Student at University of Nottingham | Passionate about AI and Software Engineering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-gray mb-12">
            Quick Navigation
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
              <h3 className="text-xl font-semibold text-dark-gray mb-2">About Me</h3>
              <p className="text-gray-600">Learn about my background, skills, and personal story</p>
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
              <h3 className="text-xl font-semibold text-dark-gray mb-2">Resume</h3>
              <p className="text-gray-600">View my professional experience and education</p>
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
              <h3 className="text-xl font-semibold text-dark-gray mb-2">Projects</h3>
              <p className="text-gray-600">Explore my portfolio and technical projects</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-gray mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Java', 'Python', 'C++', 'C',
              'Matlab', 'SQL', 'RISC-V', 'MIPS'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="font-medium text-dark-gray">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home