import React from 'react'

const Resume = () => {
  const skills = {
    'Programming Languages': ['Java', 'Python', 'C++', 'C', 'Matlab', 'SQL', 'RISC-V', 'MIPS', 'Haskell'],
    'Development Tools': ['GitHub', 'GitLab', 'IntelliJ', 'VS Code', 'Unity'],
    'AI & Machine Learning': ['PyTorch', 'Vision Transformer', 'LLM Applications'],
    'Software Engineering': ['Agile Methodologies', 'DevOps Principles', 'Operating Systems', 'Concurrency']
  }

  const experiences = [
    {
      title: 'LLM-based Spreadsheet Processing Agent',
      company: 'University of Nottingham',
      period: 'Sept 2025 – Present',
      description: [
        'Elected as group administrator, responsible for meeting arrangement and project progress supervision',
        'Conducted background research on LLM applications in spreadsheet handling',
        'Created pitch video highlighting limitations of existing products and presenting proposed framework'
      ]
    },
    {
      title: 'Build Your Own World – CS61B Course Project',
      company: 'University of California, Berkeley',
      period: 'Jun 2025 – Aug 2025',
      description: [
        'Built a 2D maze game with features of saving and loading game states using Java visualization library',
        'Applied software engineering principles through modularizing game components',
        'Implemented heuristic search (A* algorithm) for avatar pathfinding'
      ]
    },
    {
      title: 'Creating RISC-V CPU - CS61C Course Project',
      company: 'University of California, Berkeley',
      period: 'Jun 2025 – Aug 2025',
      description: [
        'Designed a 2-stage pipelined CPU using Logisim hardware simulator',
        'Built CPU components (control unit, ALU, instruction memory, register files) from elementary logic gates',
        'Handled control hazard through smart branch prediction'
      ]
    }
  ]

  const education = [
    {
      degree: 'One-year Exchange Program',
      institution: 'University of Nottingham, United Kingdom',
      period: 'Sept 2025 - Jun 2026',
      description: [
        'Key Modules: Developing Maintainable Software (Agile method and DevOps principles), Operating System and Concurrency'
      ]
    },
    {
      degree: 'BS in Computer Science',
      institution: 'University of Nottingham, Ningbo China',
      period: 'Sept 2023 - Jun 2027',
      description: [
        'Current GPA: 4.0/4.0 (81/100)',
        'Key Modules: Software Engineering, Programming Paradigm, Introduction to Artificial Intelligence (95/100), Mathematics for Computer Science (93/100)'
      ]
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            Resume
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional experience, skills, and education background
          </p>
          <div className="mt-6">
            <a
              href="/content/assets/GuqiaoLIANG_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-dark-gray mb-6 flex items-center">
                <svg className="w-6 h-6 text-royal-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Technical Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-british-green pl-6">
                    <h3 className="text-xl font-semibold text-dark-gray">{exp.title}</h3>
                    <p className="text-royal-blue font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <div className="w-1.5 h-1.5 bg-british-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-dark-gray mb-6 flex items-center">
                <svg className="w-6 h-6 text-royal-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-royal-blue pl-6">
                    <h3 className="text-xl font-semibold text-dark-gray">{edu.degree}</h3>
                    <p className="text-british-green font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                    <ul className="space-y-2">
                      {edu.description.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <div className="w-1.5 h-1.5 bg-royal-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Skills Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-dark-gray mb-6">Technical Skills</h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-royal-blue mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="bg-british-green/10 text-british-green px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-dark-gray mb-6">Language Proficiency</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">IELTS</span>
                    <span className="text-british-green font-medium">8/9</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-british-green h-2 rounded-full w-5/6"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Reading: 9 | Listening: 9 | Writing: 7 | Speaking: 6</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">German</span>
                    <span className="text-british-green font-medium">A2</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-british-green h-2 rounded-full w-1/3"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Taking interfaculty German Course at University of Nottingham</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
