import React from 'react'

const About = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate developer dedicated to creating meaningful solutions through technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-32 h-32 bg-gradient-to-br from-british-green to-royal-blue rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                GL
              </div>
              <h2 className="text-2xl font-bold text-center text-dark-gray mb-4">
                Guqiao Liang
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Full Stack Developer | Problem Solver
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
                教育背景
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-royal-blue pl-4">
                  <h4 className="font-semibold text-dark-gray">英国诺丁汉大学</h4>
                  <p className="text-gray-600">计算机科学学士</p>
                  <p className="text-sm text-gray-500">2020 - 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-dark-gray mb-6">个人简介</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  我是一名对技术充满热情的计算机科学毕业生，毕业于英国诺丁汉大学。
                  在学习期间，我深入研究了软件工程、人工智能和Web开发等领域。
                </p>
                <p>
                  我特别擅长使用现代技术栈构建响应式、用户友好的Web应用程序。
                  我的技术栈包括React、JavaScript、TypeScript、Node.js和Python等。
                </p>
                <p>
                  除了技术技能，我还注重代码质量、用户体验和团队协作。
                  我相信好的软件不仅仅是功能的实现，更是优雅的解决方案。
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-dark-gray mb-6">兴趣爱好</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  '编程', '摄影', '旅行', '阅读',
                  '音乐', '运动', '烹饪', '学习新技术'
                ].map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-british-green rounded-full mr-3"></div>
                    {interest}
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