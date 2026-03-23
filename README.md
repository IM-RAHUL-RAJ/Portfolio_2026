# 🚀 Portfolio-2.0

<p align="center">
  <strong>A modern, developer-focused portfolio built with Next.js 14</strong>
</p>

<p align="center">
  Fast • Responsive • Customizable • Production-Ready
</p>

---

## 📋 Overview

**Portfolio-2.0** is a fully-featured software developer portfolio template designed to showcase your work, skills, and achievements professionally. Built with modern web technologies, it provides everything you need to create an impressive online presence.

### Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Framer Motion** for animations
- **Lucide Icons** for beautiful icons

### Key Features

- ✅ No backend required
- ✅ Fully responsive design
- ✅ Dark theme optimized
- ✅ SEO friendly
- ✅ Easy deployment to Vercel
- ✅ Contact form with multiple options
- ✅ Integrated coding stats (LeetCode & GitHub)

---

## 🎯 Features

### Design & UX
- **Elegant dark theme** with professional aesthetics
- **Sticky navigation** with smooth scrolling
- **Mobile-friendly** hamburger menu
- **Animated sections** using Framer Motion
- **Responsive layout** that works on all devices

### Content Sections
- **Hero section** with profile and CTA
- **About me** with bio and highlights
- **Skills showcase** with categorized badges
- **Coding statistics** (LeetCode & GitHub integration)
- **Project gallery** with filtering capabilities
- **Certifications & achievements** display
- **Interactive timeline** (work experience & education)
- **Testimonials** from clients/colleagues
- **Contact form** with multiple integration options
- **Footer** with social links

---

## 📁 Project Structure

```
portfolio-2.0/
│
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page
│   └── (sections)/
│       ├── Hero/               # Landing section
│       ├── About/              # About me section
│       ├── Skills/             # Skills display
│       ├── Stats/              # LeetCode & GitHub stats
│       ├── Projects/           # Project showcase
│       ├── Certifications/     # Achievements
│       ├── Timeline/           # Work & education
│       ├── Testimonials/       # Client testimonials
│       └── Contact/            # Contact form
│
├── components/
│   ├── Navbar.tsx              # Navigation component
│   ├── Footer.tsx              # Footer component
│   └── ui/                     # shadcn/ui components
│
├── lib/
│   ├── constants.ts            # Site configuration
│   └── utils.ts                # Utility functions
│
├── public/
│   ├── profile.jpg             # Your profile photo
│   └── resume.pdf              # Your resume
│
├── styles/
│   └── globals.css             # Global styles
│
├── tailwind.config.ts          # Tailwind configuration
├── next.config.mjs             # Next.js configuration
└── package.json                # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/Portfolio-2.0.git
cd Portfolio-2.0
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:3000
```

---

## ⚙️ Customization

### 1. Personal Information

Edit `lib/constants.ts` to update:
- Your name and title
- Bio and description
- Profile photo path
- Resume link
- Social media URLs (GitHub, LinkedIn, Twitter, etc.)
- Email address

### 2. Skills

Add or modify your skills in categories:
- Programming languages
- Frameworks & libraries
- Tools & platforms
- Soft skills

### 3. Projects

Update the projects array with:
- Project title and description
- Technologies used
- Live demo URL
- GitHub repository link
- Project images

### 4. Timeline

Add your work experience and education:
- Company/institution name
- Role/degree
- Date range
- Responsibilities and achievements

### 5. Certifications

List your certifications and achievements:
- Certificate name
- Issuing organization
- Date obtained
- Credential link

### 6. Testimonials

Add testimonials from:
- Clients
- Colleagues
- Managers
- Include name, role, and photo

---

## 📧 Contact Form Setup

### Option 1: Mailto (Quick Setup)

The simplest option - clicking the contact form opens the user's default email client.

```typescript
// In Contact component
const handleSubmit = (e) => {
  window.location.href = `mailto:your.email@example.com`;
};
```

### Option 2: EmailJS (Recommended)

Client-side email service with no backend required.

1. **Sign up at [EmailJS](https://www.emailjs.com/)**

2. **Create `.env.local` file**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. **Install EmailJS**
```bash
npm install @emailjs/browser
```

4. **Configure in Contact component** following EmailJS documentation

---

## 📊 Coding Stats Integration

### LeetCode Stats

Set your LeetCode username in `constants.ts`:
```typescript
leetcode: {
  username: "your_leetcode_username"
}
```

### GitHub Stats

Set your GitHub username in `constants.ts`:
```typescript
github: {
  username: "your_github_username"
}
```

**Note:** The portfolio includes graceful fallbacks if APIs are unavailable or rate-limited.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Build your project**
```bash
npm run build
```

2. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your portfolio is live

### Environment Variables

If using EmailJS, add your environment variables in Vercel:
- Go to Project Settings → Environment Variables
- Add your `NEXT_PUBLIC_*` variables

---

## 🐛 Troubleshooting

### Email form opens Outlook/Mail app
- Configure EmailJS for proper form submission
- Or update browser's default email handler

### Missing dependencies error
```bash
npm install
```

### shadcn/ui components not found
```bash
npx shadcn-ui@latest init
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 🔮 Future Enhancements

Potential features for future versions:

- 📝 **MDX Blog** - Write blog posts with code highlighting
- 🌓 **Theme Toggle** - Light/dark mode switch
- 🌍 **i18n Support** - Multi-language portfolio
- 📈 **Analytics** - Visitor tracking dashboard
- 🎯 **CMS Integration** - Content management system
- 🎨 **Theme Presets** - Multiple color schemes
- 📱 **PWA Support** - Progressive web app features

---

## 🙏 Credits

This project is built with amazing open-source technologies:

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful icons

---

## 📄 License

This project is free for **personal portfolio use**. Feel free to customize it for your own portfolio.

For commercial use or redistribution, please check the licenses of the underlying technologies.

---

## ⭐ Support

If this portfolio template helped you create an awesome portfolio:

- Star the repository on GitHub
- Share it with fellow developers
- Consider contributing improvements

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📧 Contact

Have questions or suggestions? Feel free to reach out or open an issue on GitHub.

---

<p align="center">
  Built with ❤️ by Rahul Raj, for developers
</p>

<p align="center">
  <strong>Ready to showcase your work? Get started now!</strong>
</p>
# Portfolio_2026
