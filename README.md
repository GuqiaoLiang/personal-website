# Guqiao Liang - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, featuring a British Green and Royal Blue color scheme, and a full-featured blog system with Markdown rendering.

## ✨ Features

### 🎨 Design
- **Modern & Clean Design**: Minimalist interface with elegant typography
- **British Green & Royal Blue Theme**: Professional color palette
- **Fully Responsive**: Optimized for all device sizes (desktop, tablet, mobile)
- **Fast Performance**: Built with Vite for optimal loading times
- **Accessible**: WCAG compliant design

### 📝 Blog System
- **Markdown Support**: Write articles in Markdown with full GFM support
- **Rich Content**: Tables, code highlighting, math formulas, images
- **Syntax Highlighting**: GitHub Dark theme for code blocks
- **Math Rendering**: KaTeX for beautiful mathematical formulas
- **Image Optimization**: Lazy loading and responsive images
- **Related Articles**: Automatic related post recommendations
- **Bilingual**: Full Chinese and English support

### 🌐 Internationalization
- **Dual Language**: Switch between English and Chinese
- **Context-based**: Uses React Context for state management
- **Persistent**: Language preference saved in localStorage

## 🚀 Tech Stack

### Core
- **Frontend**: React 18
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS 3
- **Routing**: React Router DOM 6

### Blog System
- **Markdown**: react-markdown
- **GFM Support**: remark-gfm (tables, strikethrough, etc.)
- **Math**: remark-math + rehype-katex
- **Code Highlighting**: rehype-highlight
- **HTML Support**: rehype-raw

### Other
- **Email Service**: EmailJS
- **Icons**: Heroicons (SVG)

## 📁 Project Structure

```
personal-website/
├── public/                          # Public static assets
│   ├── 404.html
│   └── content/                    # Public content
│       ├── assets/
│       │   └── GuqiaoLIANG_CV.pdf
│       └── blog/
│           ├── images/             # Blog article images
│           │   ├── baozi-finished.jpg
│           │   └── baozi-steaming.jpg
│           ├── README.md           # Blog management guide
│           ├── index.json          # Blog posts index
│           └── posts/              # Blog articles
│               ├── baozi-guide.md
│               ├── cs-journey.md
│               ├── llm-guide.md
│               ├── react-vite-guide.md
│               └── riscv-cpu.md
│
├── src/
│   ├── assets/                     # Source assets
│   │   └── images/                 # Website images
│   │       ├── index.js            # Image exports
│   │       ├── selfie.jpg
│   │       ├── UniversityOfNottingham.jpg
│   │       ├── goldengatebridge.jpg
│   │       ├── spreadsheetAgent.png
│   │       ├── 3DModel.png
│   │       ├── buildYourOwnWorld.png
│   │       ├── cpu.png
│   │       └── wechatPublicationAccount.jpg
│   │
│   ├── components/                 # Reusable components
│   │   ├── Header.jsx              # Navigation header
│   │   ├── Footer.jsx              # Site footer
│   │   └── MarkdownRenderer.jsx    # Markdown rendering engine
│   │
│   ├── contexts/                   # React contexts
│   │   └── LanguageContext.jsx     # Language switching
│   │
│   ├── data/                       # Data files
│   │   └── translations.js         # i18n translations
│   │
│   ├── pages/                      # Page components
│   │   ├── Home.jsx                # Landing page
│   │   ├── About.jsx               # About me
│   │   ├── Resume.jsx              # Resume/CV
│   │   ├── Projects.jsx            # Project showcase
│   │   ├── Blog.jsx                # Blog list
│   │   ├── BlogPost.jsx            # Blog article detail
│   │   └── Contact.jsx             # Contact form
│   │
│   ├── styles/                     # Global styles
│   │   └── index.css               # Tailwind base + custom
│   │
│   ├── App.jsx                     # Main app component
│   └── main.jsx                    # Entry point
│
├── docs/ASSETS_MANAGEMENT.md       # Assets management guide
├── docs/EMAILJS_SETUP.md           # EmailJS configuration
├── README.md                       # This file
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── postcss.config.js               # PostCSS config
├── tailwind.config.js              # Tailwind config
└── vite.config.js                  # Vite config
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/GuqiaoLiang/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:3000`

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📄 Pages Overview

### Home
- Hero section with welcome message
- Quick navigation cards (About, Resume, Projects, Contact)
- Skills overview with technology badges

### About
- Personal profile with photo
- Education background (University of Nottingham)
- Personal interests and hobbies

### Resume
- Professional experience timeline
- Education details
- Technical skills categorized
- Downloadable PDF resume

### Projects
- Featured projects showcase
- Technology stacks for each project
- Links to GitHub repositories and live demos
- Project categories: Web Development, AI/ML, Computer Architecture

### Blog
- Article list with categories and tags
- Search and filter functionality
- Reading time estimation
- Markdown articles with rich content support

### Blog Post (Detail)
- Full Markdown rendering
- Table of contents
- Code syntax highlighting
- Math formula rendering
- Image lazy loading
- Related articles recommendations
- Share buttons (Twitter, LinkedIn)

### Contact
- Contact form with EmailJS integration
- Email, phone, social media links
- WeChat QR code
- Location information

## 📝 Blog Management

### Adding a New Article

1. **Create Markdown file** in `public/content/blog/posts/`:
   ```bash
   touch public/content/blog/posts/my-new-article.md
   ```

2. **Write content** with Markdown:
   ```markdown
   # Article Title
   
   ## Introduction
   Your content here...
   
   ### Code Example
   \`\`\`python
   def hello():
       print("Hello, World!")
   \`\`\`
   
   ### Math Formula
   $$
   E = mc^2
   $$
   
   ### Image
   ![Description](/content/blog/images/your-image.jpg)
   ```

3. **Add images** (if needed):
   ```bash
   cp your-image.jpg public/content/blog/images/
   ```

4. **Update metadata** in `public/content/blog/index.json`:
   ```json
   {
     "id": 6,
     "title": { "en": "Your Article Title", "zh": "你的文章标题" },
     "date": "2024-12-30",
     "excerpt": { "en": "Brief description...", "zh": "简短描述..." },
     "category": { "en": "Category Name", "zh": "分类名称" },
     "readTime": { "en": "10 min read", "zh": "10 分钟阅读" },
     "file": "my-new-article.md"
   }
   ```

For detailed instructions, see [`public/content/blog/README.md`](public/content/blog/README.md).

## 🖼️ Assets Management

### Directory Structure
- **Blog images**: `public/content/blog/images/` - Accessed via `/content/blog/images/filename.jpg`
- **Website images**: `src/assets/images/` - Imported via ES6 modules

### Adding Images

**For blog articles**:
```bash
cp your-image.jpg public/content/blog/images/
# Reference in Markdown: ![Alt text](/content/blog/images/your-image.jpg)
```

**For website pages**:
```bash
cp your-image.jpg src/assets/images/
# Export in index.js: export { default as yourImage } from './your-image.jpg';
# Import in component: import { yourImage } from '../../assets/images';
```

### Image Optimization
- **Recommended size**: 800-1200px width for blog images
- **Format**: JPG for photos, PNG for screenshots, WebP for best compression
- **Max file size**: 500 KB for blog images, 1 MB for project screenshots
- **Tools**: TinyPNG, Squoosh, ImageOptim

For detailed guidelines, see [`docs/ASSETS_MANAGEMENT.md`](docs/ASSETS_MANAGEMENT.md).

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
```javascript
colors: {
  'british-green': '#004225',
  'royal-blue': '#002366',
  // ...
}
```

### Content
1. **Personal information**: Edit `src/pages/About.jsx`, `Contact.jsx`
2. **Projects**: Update `src/pages/Projects.jsx`
3. **Resume**: Replace `public/content/assets/GuqiaoLIANG_CV.pdf`
4. **Images**: Add to `src/assets/images/` and export in `index.js`

### Translations
Edit `src/data/translations.js` to add or modify translations:
```javascript
export const translations = {
  en: {
    nav: { home: "Home", about: "About", ... },
    // ...
  },
  zh: {
    nav: { home: "首页", about: "关于", ... },
    // ...
  }
};
```

## 📱 Responsive Design

Breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

All components are fully responsive with Tailwind's responsive utilities.

## 🔧 Available Scripts

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Build for production (output: dist/)
npm run preview   # Preview production build
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Build: `npm run build`
2. Deploy `dist/` folder
3. Configure build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🌐 Environment Variables

For EmailJS integration, create `.env`:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See [`docs/EMAILJS_SETUP.md`](docs/EMAILJS_SETUP.md) for details.

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: ~200 KB (gzipped)

Optimizations:
- Code splitting with React.lazy()
- Image lazy loading
- Vite's built-in optimizations
- Tailwind CSS purging

## 🐛 Troubleshooting

### Images not showing
- Check file path (case-sensitive)
- Verify file exists in correct directory
- Clear browser cache

### Math formulas display incorrectly
- Ensure KaTeX CSS is loaded in `index.html`
- Use single backslash `\` in LaTeX syntax
- Check formula syntax

### Build fails
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (v16+)

## 📚 Documentation

- [Blog Management Guide](public/content/blog/README.md)
- [Assets Management Guide](docs/ASSETS_MANAGEMENT.md)
- [EmailJS Setup Guide](docs/EMAILJS_SETUP.md)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

### Development Guidelines
1. Follow existing code style
2. Write meaningful commit messages
3. Test on multiple devices/browsers
4. Update documentation when adding features

## 📧 Contact

- **Email**: scygl3@nottingham.ac.uk
- **GitHub**: [@GuqiaoLiang](https://github.com/GuqiaoLiang)
- **LinkedIn**: [Guqiao Liang](https://linkedin.com/in/guqiao-liang)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the blazing fast build tool
- All open-source contributors

---

Built with ❤️ using React, Vite, and Tailwind CSS

**Last Updated**: December 30, 2024
