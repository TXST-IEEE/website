# IEEE TXST Website

The official website for IEEE at Texas State University.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
website/
├── src/
│   ├── app/              # Pages (Next.js App Router)
│   ├── components/       # Reusable components
│   │   ├── ui/          # UI components (buttons, cards, etc.)
│   │   ├── layout/      # Layout components (navbar, footer)
│   │   ├── animations/  # Animation wrappers
│   │   ├── home/        # Homepage components
│   │   └── events/      # Event components
│   └── content/         # Editable content (non-technical friendly)
│       ├── config.ts    # Site-wide settings
│       ├── pages/       # Page content
│       └── data/        # Events and team data
├── public/
│   └── images/          # All images organized by type
│       ├── branding/    # Logos and icons
│       ├── events/      # Event photos
│       ├── team/        # Officer photos
│       └── gallery/     # General photos
└── PRESIDENT_GUIDE.md   # Guide for non-technical content updates
```

## 📖 Content Management

For non-technical users who need to update content, see **[PRESIDENT_GUIDE.md](./PRESIDENT_GUIDE.md)**

### Quick Updates:
- **Contact Info:** Edit `/src/content/config.ts`
- **Events:** Edit `/src/content/data/events.ts`
- **Officers:** Edit `/src/content/data/team.ts`
- **Homepage Text:** Edit `/src/content/pages/home.ts`

## 🎨 Features

- ✨ Modern, animated UI with smooth transitions
- 🎯 3D tilt effects on officer and event cards
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js
- 📝 Easy content management for non-technical users
- 🎨 IEEE brand colors and design system

## 🌐 Pages

- **Home** (`/`) - Landing page with about section and social links
- **Events** (`/events`) - Browse events with category filters
- **Officers** (`/officers`) - Meet the team with 3D animated cards
- **Membership** (`/membership`) - How to join information
- **About** (`/about`) - About IEEE TXST

## 🔧 Configuration

### Updating Site Settings

Edit `/src/content/config.ts` to update:
- Organization name and tagline
- Contact information (email, social media)
- Meeting schedule and location
- Navigation links
- Call-to-action URLs

### Adding Images

Images from external URLs must be configured in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-image-host.com',
    },
  ],
}
```

Local images in `/public` work automatically.

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Next.js and deploy

### Manual Deployment

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` and `npm run build`
4. Submit a pull request

## 📄 License

Copyright © 2026 IEEE Texas State University

## 📞 Support

For technical issues or questions:
- Check [PRESIDENT_GUIDE.md](./PRESIDENT_GUIDE.md) for content updates
- Check [FILE_STRUCTURE.md](./FILE_STRUCTURE.md) for architecture details
- Contact the web team lead

---