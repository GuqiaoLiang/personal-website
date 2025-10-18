# Guqiao Liang - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, featuring a British Green and Royal Blue color scheme.

## 🎨 Design Features

- **Modern & Clean Design**: Minimalist interface with elegant typography
- **British Green & Royal Blue Theme**: Professional color palette
- **Fully Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Vite for optimal loading times
- **Accessible**: WCAG compliant design

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Heroicons (SVG)

## 📁 Project Structure

```
personalWebsite/
├── src/
│   ├── components/     # Reusable components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/         # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Resume.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── styles/        # Global styles
│   │   └── index.css
│   ├── assets/        # Images and static files
│   │   └── images/
│   └── main.jsx       # App entry point
├── public/            # Public assets
└── dist/              # Production build
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:3000`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📄 Pages Overview

### Home
- Hero section with introduction
- Quick navigation cards
- Skills preview

### About
- Personal profile and photo
- Education background
- Personal interests

### Resume
- Professional experience
- Education details
- Technical skills
- Downloadable PDF resume

### Projects
- Featured projects showcase
- All projects grid view
- Technology stacks
- Links to code and demos

### Contact
- Contact form
- Contact information
- Social media links

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **British Green**: `#004225`
- **Royal Blue**: `#002366`
- **Light Gray**: `#f8fafc`
- **Dark Gray**: `#334155`

### Content
To update your personal information:
1. Edit the components in `src/pages/`
2. Update the resume PDF file
3. Add your own images to `src/assets/images/`

### Styling
- Global styles are in `src/styles/index.css`
- Component-specific styles use Tailwind CSS classes
- Custom CSS classes are available for common patterns

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using React and Tailwind CSS