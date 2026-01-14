import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Blog = () => {
  const { language } = useLanguage()
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    let cancelled = false

    const loadPosts = async () => {
      try {
        const response = await fetch('/content/blog/index.json')
        if (!response.ok) {
          throw new Error('Failed to load blog index')
        }
        const data = await response.json()
        if (!cancelled) {
          setBlogPosts(Array.isArray(data?.posts) ? data.posts : [])
        }
      } catch (error) {
        if (!cancelled) {
          setBlogPosts([])
        }
      }
    }

    loadPosts()

    return () => {
      cancelled = true
    }
  }, [])

  const localizedPosts = useMemo(() => (
    blogPosts.map((post) => ({
      ...post,
      title: post.title?.[language] || post.title?.en || post.title?.zh || '',
      excerpt: post.excerpt?.[language] || post.excerpt?.en || post.excerpt?.zh || '',
      category: post.category?.[language] || post.category?.en || post.category?.zh || '',
      readTime: post.readTime?.[language] || post.readTime?.en || post.readTime?.zh || ''
    }))
  ), [blogPosts, language])

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
          {localizedPosts.map((post) => (
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
