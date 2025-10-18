import React, { useState } from 'react'

const Projects = () => {
  const [showUnderConstruction, setShowUnderConstruction] = useState(false)

  const handleUnderConstruction = (e) => {
    e.preventDefault()
    setShowUnderConstruction(true)
    setTimeout(() => setShowUnderConstruction(false), 3000)
  }

  const projects = [
    {
      title: 'LLM-based Spreadsheet Processing Agent',
      description: 'Research project exploring the application of Large Language Models in spreadsheet handling and data processing.',
      technologies: ['LLM', 'Research', 'Python', 'Data Analysis'],
      image: '/src/assets/images/UniversityOfNottingham.jpg',
      github: 'https://github.com/GuqiaoLiang',
      demo: '#',
      featured: true
    },
    {
      title: 'Build Your Own World - 2D Maze Game',
      description: 'Java-based 2D maze game with saving/loading functionality and A* algorithm pathfinding implementation.',
      technologies: ['Java', 'A* Algorithm', 'Game Development', 'Software Engineering'],
      image: '/src/assets/images/goldengatebridge.jpg',
      github: 'https://github.com/GuqiaoLiang',
      demo: '#',
      featured: true
    },
    {
      title: 'RISC-V CPU Design',
      description: '2-stage pipelined CPU implementation using Logisim hardware simulator with smart branch prediction.',
      technologies: ['RISC-V', 'Logisim', 'CPU Architecture', 'Hardware Design'],
      image: '/src/assets/images/UniversityOfNottingham.jpg',
      github: 'https://github.com/GuqiaoLiang',
      demo: '#',
      featured: false
    },
    {
      title: 'AI Techniques in 3D Model Generation',
      description: 'Exploration of 3D generative models and creation of animated character simulation using Mixamao and Unity.',
      technologies: ['3D Modeling', 'AI', 'Unity', 'Computer Graphics'],
      image: '/src/assets/images/goldengatebridge.jpg',
      github: 'https://github.com/GuqiaoLiang',
      demo: '#',
      featured: false
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Under Construction Alert */}
        {showUnderConstruction && (
          <div className="fixed top-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg shadow-lg z-50 animate-bounce">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Sorry, this website is under construction!</span>
            </div>
          </div>
        )}
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of my technical projects and creative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-gray mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-british-green to-royal-blue flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-dark-gray mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-british-green/10 text-british-green px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-british-green transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                      <a
                        href="#"
                        onClick={handleUnderConstruction}
                        className="flex items-center text-gray-700 hover:text-royal-blue transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <h2 className="text-3xl font-bold text-dark-gray mb-8 text-center">
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-32 bg-gradient-to-br from-british-green/20 to-royal-blue/20 flex items-center justify-center">
                  <div className="text-british-green text-2xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-gray mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-british-green transition-colors text-sm"
                    >
                      View Code
                    </a>
                    <a
                      href="#"
                      onClick={handleUnderConstruction}
                      className="text-gray-600 hover:text-royal-blue transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-british-green to-royal-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to collaborate on a project?
            </h3>
            <p className="mb-6 text-blue-100">
              If you have an interesting project idea, I'd love to work with you!
            </p>
            <a
              href="/contact"
              className="bg-white text-british-green px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects