import React from 'react'

const Resume = () => {
  const skills = {
    '前端技术': ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    '后端技术': ['Node.js', 'Python', 'Express.js', 'RESTful APIs'],
    '工具与平台': ['Git', 'GitHub', 'VS Code', 'Docker', 'AWS'],
    '数据库': ['MongoDB', 'MySQL', 'PostgreSQL']
  }

  const experiences = [
    {
      title: '全栈开发实习生',
      company: '科技公司',
      period: '2023年6月 - 2023年9月',
      description: [
        '参与开发企业级Web应用程序',
        '使用React和Node.js构建用户界面和后端API',
        '优化应用性能，提升用户体验'
      ]
    },
    {
      title: '自由职业开发者',
      company: '个人项目',
      period: '2022年至今',
      description: [
        '为多个客户开发定制化Web解决方案',
        '使用现代技术栈构建响应式网站',
        '提供技术咨询和解决方案设计'
      ]
    }
  ]

  const education = [
    {
      degree: '计算机科学学士',
      institution: '英国诺丁汉大学',
      period: '2020年9月 - 2024年6月',
      description: [
        '主修计算机科学，GPA: 3.8/4.0',
        '相关课程：算法与数据结构、软件工程、人工智能、数据库系统',
        '毕业项目：基于机器学习的智能推荐系统'
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
              href="/GuqiaoLIANG_CV.pdf"
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
                工作经历
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
                教育背景
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
              <h2 className="text-2xl font-bold text-dark-gray mb-6">专业技能</h2>
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
              <h2 className="text-2xl font-bold text-dark-gray mb-6">语言能力</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">中文 (母语)</span>
                    <span className="text-british-green font-medium">精通</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-british-green h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">英语</span>
                    <span className="text-british-green font-medium">流利</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-british-green h-2 rounded-full w-4/5"></div>
                  </div>
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