import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Blog = () => {
  const { language } = useLanguage()

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: language === 'en' ? 'Getting Started with React and Vite' : 'React 和 Vite 入门指南',
      date: '2024-12-15',
      excerpt: language === 'en' 
        ? 'Learn how to set up a modern React development environment with Vite for blazing fast performance.'
        : '学习如何使用 Vite 搭建现代化的 React 开发环境，获得极速的性能体验。',
      category: language === 'en' ? 'Web Development' : 'Web 开发',
      readTime: language === 'en' ? '5 min read' : '5 分钟阅读'
    },
    {
      id: 2,
      title: language === 'en' ? 'Understanding Large Language Models' : '理解大型语言模型',
      date: '2024-12-10',
      excerpt: language === 'en'
        ? 'An exploration of how LLMs work and their applications in modern software development.'
        : '探索大型语言模型的工作原理及其在现代软件开发中的应用。',
      category: language === 'en' ? 'AI & Machine Learning' : 'AI 与机器学习',
      readTime: language === 'en' ? '8 min read' : '8 分钟阅读'
    },
    {
      id: 3,
      title: language === 'en' ? 'Building a RISC-V CPU from Scratch' : '从零开始构建 RISC-V CPU',
      date: '2024-12-05',
      excerpt: language === 'en'
        ? 'A deep dive into computer architecture and the process of designing a pipelined CPU.'
        : '深入探讨计算机架构以及设计流水线 CPU 的过程。',
      category: language === 'en' ? 'Computer Architecture' : '计算机架构',
      readTime: language === 'en' ? '10 min read' : '10 分钟阅读'
    },
    {
      id: 4,
      title: language === 'en' ? 'My Journey in Computer Science' : '我的计算机科学之旅',
      date: '2024-11-28',
      excerpt: language === 'en'
        ? 'Reflections on my academic journey and the lessons learned along the way.'
        : '回顾我的学术之旅以及一路走来学到的经验教训。',
      category: language === 'en' ? 'Personal' : '个人感悟',
      readTime: language === 'en' ? '6 min read' : '6 分钟阅读'
    },
    {
      id: 5,
      title: language === 'en' ? 'Guide to Making Baozi (Chinese Steamed Buns)' : '包包子指南：从零开始的家常美味',
      date: '2024-12-30',
      excerpt: language === 'en'
        ? 'A comprehensive guide to making delicious Chinese steamed buns from scratch, with step-by-step instructions and tips.'
        : '从零开始制作美味包子的全面指南，包含详细步骤和技巧。',
      category: language === 'en' ? 'Food & Cooking' : '美食烹饪',
      readTime: language === 'en' ? '12 min read' : '12 分钟阅读'
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            {language === 'en' ? 'Blog' : '博客'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Thoughts, tutorials, and insights on technology and software development'
              : '关于技术和软件开发的思考、教程和见解'}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Post Header with gradient */}
              <div className="h-48 bg-gradient-to-br from-british-green to-royal-blue flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                    {post.title}
                  </h2>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readTime}</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <button className="text-british-green font-medium hover:text-royal-blue transition-colors duration-300 flex items-center group">
                  <span>{language === 'en' ? 'Read More' : '阅读更多'}</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-british-green to-royal-blue text-white px-8 py-4 rounded-full shadow-lg">
            <p className="text-lg font-medium">
              {language === 'en' 
                ? '📝 More articles coming soon! Stay tuned.' 
                : '📝 更多文章即将发布！敬请期待。'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
