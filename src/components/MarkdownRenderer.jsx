import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import 'katex/dist/katex.min.css'
import 'highlight.js/styles/github-dark.css'

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="markdown-content prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw, rehypeHighlight]}
        components={{
          // 自定义标题样式
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold text-dark-gray mb-6 mt-8 pb-3 border-b-2 border-british-green" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-bold text-dark-gray mb-4 mt-6" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-semibold text-dark-gray mb-3 mt-5" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-xl font-semibold text-dark-gray mb-2 mt-4" {...props} />
          ),
          
          // 自定义段落样式
          p: ({ node, ...props }) => (
            <p className="text-gray-700 leading-relaxed mb-4" {...props} />
          ),
          
          // 自定义链接样式
          a: ({ node, ...props }) => (
            <a 
              className="text-british-green hover:text-royal-blue underline transition-colors duration-200" 
              target="_blank" 
              rel="noopener noreferrer" 
              {...props} 
            />
          ),
          
          // 自定义代码块样式
          code: ({ node, inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code 
                  className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono" 
                  {...props}
                >
                  {children}
                </code>
              )
            }
            return (
              <code 
                className={`${className} block bg-gray-900 text-white p-4 rounded-lg overflow-x-auto`} 
                {...props}
              >
                {children}
              </code>
            )
          },
          
          // 自定义预格式化文本样式
          pre: ({ node, ...props }) => (
            <pre className="bg-gray-900 rounded-lg mb-4 overflow-x-auto" {...props} />
          ),
          
          // 自定义表格样式
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-gradient-to-r from-british-green to-royal-blue text-white" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border border-gray-300 px-4 py-3" {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr className="hover:bg-gray-50 transition-colors" {...props} />
          ),
          
          // 自定义列表样式
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="ml-4" {...props} />
          ),
          
          // 自定义引用样式
          blockquote: ({ node, ...props }) => (
            <blockquote 
              className="border-l-4 border-british-green bg-gray-50 pl-4 py-2 mb-4 italic text-gray-700" 
              {...props} 
            />
          ),
          
          // 自定义图片样式
          img: ({ node, ...props }) => (
            <img 
              className="max-w-full h-auto rounded-lg shadow-lg my-6 mx-auto" 
              loading="lazy"
              {...props} 
            />
          ),
          
          // 自定义分隔线样式
          hr: ({ node, ...props }) => (
            <hr className="my-8 border-t-2 border-gray-300" {...props} />
          ),
          
          // 自定义强调样式
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-dark-gray" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-gray-700" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
