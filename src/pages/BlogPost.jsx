import React, { useMemo, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import MarkdownRenderer from '../components/MarkdownRenderer'

const BlogPost = () => {
  const { id } = useParams()
  const { language } = useLanguage()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [postsIndex, setPostsIndex] = useState([])
  const [indexLoading, setIndexLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const loadIndex = async () => {
      try {
        const response = await fetch('/content/blog/index.json')
        if (!response.ok) {
          throw new Error('Failed to load blog index')
        }
        const data = await response.json()
        if (!cancelled) {
          setPostsIndex(Array.isArray(data?.posts) ? data.posts : [])
          setIndexLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setPostsIndex([])
          setIndexLoading(false)
        }
      }
    }

    loadIndex()

    return () => {
      cancelled = true
    }
  }, [])

  const post = useMemo(() => {
    const numericId = Number(id)
    return postsIndex.find((item) => item.id === numericId) || null
  }, [id, postsIndex])

  const postTitle = post?.title?.[language] || post?.title?.en || post?.title?.zh || ''
  const postCategory = post?.category?.[language] || post?.category?.en || post?.category?.zh || ''
  const postReadTime = post?.readTime?.[language] || post?.readTime?.en || post?.readTime?.zh || ''

  useEffect(() => {
    const fetchMarkdown = async () => {
      if (indexLoading) {
        return
      }
      if (!post || !post.file) {
        setError(language === 'en' ? 'Article content coming soon...' : '文章内容即将发布...')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/content/blog/posts/${post.file}`)
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
  }, [id, post, language, indexLoading])

  if (indexLoading) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-british-green"></div>
          </div>
        </div>
      </div>
    )
  }

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
              {postCategory}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {postTitle}
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
                <span>{postReadTime}</span>
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
            {postsIndex
              .filter((item) => item.id !== Number(id))
              .slice(0, 2)
              .map((article) => {
                const articleTitle = article.title?.[language] || article.title?.en || article.title?.zh || ''
                const articleCategory = article.category?.[language] || article.category?.en || article.category?.zh || ''
                const articleReadTime = article.readTime?.[language] || article.readTime?.en || article.readTime?.zh || ''

                return (
                <Link
                  key={article.id}
                  to={`/blog/${article.id}`}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
                >
                  <div className="text-sm text-british-green mb-2">{articleCategory}</div>
                  <h3 className="text-xl font-bold text-dark-gray mb-2 group-hover:text-british-green transition-colors">
                    {articleTitle}
                  </h3>
                  <div className="text-sm text-gray-500">
                    {article.date} • {articleReadTime}
                  </div>
                </Link>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
