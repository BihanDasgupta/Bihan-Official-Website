# 🌸 Bihan Dasgupta - Personal Portfolio Website

A modern, responsive personal portfolio website built with **React**, **TypeScript**, and **CSS3**. This website showcases my skills, projects, and professional information in an elegant and dreamy manner, inspired by the aesthetic of [PoppyNest](https://poppynest.netlify.app/).

## ✨ Features

- **Modern React Architecture**: Built with React 18 and TypeScript for type safety
- **Dreamy Aesthetic**: Celestial, pastel-inspired design with neon pink accents
- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Interactive Elements**: Smooth scrolling, mobile navigation, hover effects
- **Portfolio Showcase**: Dedicated section displaying your projects
- **Skills Display**: Organized presentation of your technical expertise
- **Contact Form**: Professional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Netlify Ready**: Optimized for deployment on Netlify

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: CSS3 with custom animations and effects
- **Build Tool**: Create React App
- **Deployment**: Netlify (configured)
- **Icons**: Emoji-based icons for a playful touch

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with profile
│   ├── About.tsx       # About me section
│   ├── Skills.tsx      # Skills and technologies
│   ├── Portfolio.tsx   # Project showcase
│   ├── Contact.tsx     # Contact information and form
│   └── Footer.tsx      # Footer with social links
├── App.tsx             # Main app component
├── index.tsx           # App entry point
├── index.css           # Global styles
└── App.css             # App-specific styles

public/
├── index.html          # Main HTML file
└── favicon.ico         # Site favicon

netlify.toml            # Netlify deployment config
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Neon Pink (#ff69b4)
- **Secondary**: Deep Pink (#ff1493)
- **Background**: Dark blue gradients (#1a1a2e, #16213e, #0f3460)
- **Text**: White and light blue (#b8c5d6)
- **Accents**: Gold (#ffd700), Light Blue (#87ceeb), Light Green (#98fb98)

### Visual Elements
- **Floating animations**: Gentle floating elements and sparkles
- **Glow effects**: Neon pink glows and shadows
- **Gradient backgrounds**: Smooth color transitions
- **Hover interactions**: Smooth transforms and color changes
- **Responsive design**: Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bihan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🌐 Deployment

### Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Deploy on Netlify**
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `build`
   - Deploy!

3. **Custom Domain** (Optional)
   - Add your custom domain in Netlify settings
   - Configure DNS records

### Other Platforms

- **Vercel**: Connect GitHub repo, automatic deployment
- **GitHub Pages**: Enable Pages in repository settings
- **Traditional hosting**: Upload `build` folder to your server

## 🎯 Customization

### Personal Information

Update the following files with your information:

- **Hero Section**: `src/components/Hero.tsx`
- **About Section**: `src/components/About.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Portfolio**: `src/components/Portfolio.tsx`
- **Contact**: `src/components/Contact.tsx`

### Styling

- **Colors**: Update CSS variables in `src/index.css`
- **Animations**: Modify keyframes and transitions
- **Layout**: Adjust grid layouts and spacing

### Adding Your Headshot

Replace the placeholder in `src/components/Hero.tsx`:

```tsx
// Replace this:
<div className="profile-placeholder">
  <span className="profile-icon">👩‍💻</span>
</div>

// With your actual image:
<img 
  src="/path/to/your/headshot.jpg" 
  alt="Bihan Dasgupta" 
  className="profile-image"
/>
```

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first approach**
- **Flexible grid layouts**
- **Adaptive typography**
- **Touch-friendly interactions**
- **Optimized for all screen sizes**

## 🎨 Animation System

- **Scroll-triggered animations**: Elements animate as they come into view
- **Hover effects**: Interactive elements respond to user interaction
- **Staggered animations**: Sequential animation delays for smooth entrance
- **Floating elements**: Gentle floating animations for dreamy effect

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Structure

- **Components**: Functional components with TypeScript interfaces
- **CSS Modules**: Scoped styling for each component
- **Props**: Type-safe component props
- **State**: React hooks for state management

## 🌟 Performance Features

- **Lazy loading**: Components load as needed
- **Optimized images**: Compressed and optimized assets
- **Minified CSS/JS**: Production builds are optimized
- **CDN ready**: External resources use CDNs
- **Caching**: Proper cache headers for static assets

## 🔒 Security

- **HTTPS**: Secure connections recommended
- **Input validation**: Form validation on client side
- **XSS protection**: React's built-in XSS protection
- **Secure links**: External links open in new tabs

## 📈 SEO & Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **Meta tags**: Optimized for search engines
- **Alt text**: Image descriptions for screen readers
- **Keyboard navigation**: Full keyboard accessibility
- **ARIA labels**: Proper accessibility attributes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🙏 Credits

- **Design Inspiration**: [PoppyNest](https://poppynest.netlify.app/)
- **Icons**: Emoji-based icons for universal compatibility
- **Fonts**: System fonts for optimal performance
- **Animations**: Custom CSS animations and transitions
