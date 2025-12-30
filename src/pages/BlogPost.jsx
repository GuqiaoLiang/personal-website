import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import MarkdownRenderer from '../components/MarkdownRenderer'

const BlogPost = () => {
  const { id } = useParams()
  const { language } = useLanguage()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 博客文章元数据
  const blogMeta = {
    1: {
      title: language === 'en' ? 'Getting Started with React and Vite' : 'React 和 Vite 入门指南',
      date: '2025-12-15',
      category: language === 'en' ? 'Web Development' : 'Web 开发',
      readTime: language === 'en' ? '5 min read' : '5 分钟阅读',
      file: 'react-vite-guide.md'
    },
    2: {
      title: language === 'en' ? 'Understanding Large Language Models' : '理解大型语言模型',
      date: '2025-12-10',
      category: language === 'en' ? 'AI & Machine Learning' : 'AI 与机器学习',
      readTime: language === 'en' ? '8 min read' : '8 分钟阅读',
      file: 'llm-guide.md'
    },
    3: {
      title: language === 'en' ? 'Building a RISC-V CPU from Scratch' : '从零开始构建 RISC-V CPU',
      date: '2025-12-05',
      category: language === 'en' ? 'Computer Architecture' : '计算机架构',
      readTime: language === 'en' ? '10 min read' : '10 分钟阅读',
      file: 'riscv-cpu.md'
    },
    4: {
      title: language === 'en' ? 'My Journey in Computer Science' : '我的计算机科学之旅',
      date: '2025-11-28',
      category: language === 'en' ? 'Personal' : '个人感悟',
      readTime: language === 'en' ? '6 min read' : '6 分钟阅读',
      file: 'cs-journey.md'
    },
    5: {
      title: language === 'en' ? 'Guide to Making Baozi (Chinese Steamed Buns)' : '包包子指南：从零开始的家常美味',
      date: '2025-12-30',
      category: language === 'en' ? 'Food & Cooking' : '美食烹饪',
      readTime: language === 'en' ? '12 min read' : '12 分钟阅读',
      file: 'baozi-guide.md'
    }
  }

  const post = blogMeta[id]

  useEffect(() => {
    const fetchMarkdown = async () => {
      if (!post || !post.file) {
        setError(language === 'en' ? 'Article content coming soon...' : '文章内容即将发布...')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/blog/${post.file}`)
        if (!response.ok) {
          throw new Error('Failed to load article')
        }
        const text = await response.text()
        setContent(text)
        setLoading(false)
      } catch (err) {
        setError(language === 'en' ? 'Failed to load article content' : '加载文章内容失败')
        setLoading(false)
      }
    }

    fetchMarkdown()
  }, [id, post, language])

  if (!post) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-dark-gray mb-4">
            {language === 'en' ? 'Article Not Found' : '文章未找到'}
          </h1>
          <Link 
            to="/blog" 
            className="text-british-green hover:text-royal-blue transition-colors"
          >
            {language === 'en' ? '← Back to Blog' : '← 返回博客'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        {/* 返回按钮 */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-british-green hover:text-royal-blue transition-colors mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {language === 'en' ? 'Back to Blog' : '返回博客'}
        </Link>

        {/* 文章头部 */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* 标题区域 */}
          <div className="bg-gradient-to-r from-british-green to-royal-blue text-white p-8 md:p-12">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-white/90 gap-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* 文章内容 */}
          <div className="p-8 md:p-12">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-british-green"></div>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-xl text-gray-600 mb-4">{error}</p>
                <p className="text-gray-500">
                  {language === 'en' 
                    ? 'This article is being written and will be published soon.' 
                    : '这篇文章正在撰写中，即将发布。'}
                </p>
              </div>
            ) : (
              <MarkdownRenderer content={content} />
            )}
          </div>

          {/* 文章底部 */}
          <div className="border-t border-gray-200 p-8 bg-gray-50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-600">
                {language === 'en' ? 'Share this article:' : '分享这篇文章：'}
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-british-green text-white rounded-lg hover:bg-royal-blue transition-colors">
                  {language === 'en' ? 'Twitter' : '推特'}
                </button>
                <button className="px-4 py-2 bg-royal-blue text-white rounded-lg hover:bg-british-green transition-colors">
                  {language === 'en' ? 'LinkedIn' : '领英'}
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* 相关文章推荐 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-dark-gray mb-6">
            {language === 'en' ? 'More Articles' : '更多文章'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(blogMeta)
              .filter(([key]) => key !== id)
              .slice(0, 2)
              .map(([key, article]) => (
                <Link
                  key={key}
                  to={`/blog/${key}`}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
                >
                  <div className="text-sm text-british-green mb-2">{article.category}</div>
                  <h3 className="text-xl font-bold text-dark-gray mb-2 group-hover:text-british-green transition-colors">
                    {article.title}
                  </h3>
                  <div className="text-sm text-gray-500">
                    {article.date} • {article.readTime}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
