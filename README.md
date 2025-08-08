# Mukul Gupta Portfolio

A modern, interactive portfolio website built with Next.js, featuring real-time analytics and query management.

## Features

- 🎨 Modern glassmorphism design with dark mode
- 📊 Real-time visitor analytics
- 💬 Query submission system
- 🎵 Interactive audio elements
- 📱 Fully responsive design
- 🔒 Privacy-focused tracking

## Database Setup (Optional)

The website works out of the box with local storage fallback. For persistent data storage in production:

### Vercel KV Setup

1. **Create KV Database**
   - Go to your [Vercel Dashboard](https://vercel.com/dashboard)
   - Navigate to Storage → Create Database → KV
   - Choose a name for your database

2. **Get Environment Variables**
   - Copy `KV_REST_API_URL` and `KV_REST_API_TOKEN`
   - Add them to your project's environment variables

3. **Environment Variables**
   \`\`\`bash
   KV_REST_API_URL=your_kv_url_here
   KV_REST_API_TOKEN=your_kv_token_here
   \`\`\`

4. **Deploy**
   - Redeploy your application
   - The website will automatically use Vercel KV for persistent storage

## Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## Features Overview

### Analytics System
- **Visitor Tracking**: Anonymous visitor counting
- **Daily Statistics**: Track daily unique visitors
- **Privacy-First**: No personal data collection
- **Fallback Storage**: Works without database setup

### Query Management
- **Form Submission**: User-friendly query form
- **Priority System**: Automatic priority assignment
- **Status Tracking**: Pending/Reviewed/Responded states
- **Persistent Storage**: Queries saved to database or fallback

### Interactive Elements
- **3D Hero Section**: Three.js powered animations
- **Audio Feedback**: Sound effects for interactions
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Works on all devices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: Vercel KV (Redis) with fallback
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Audio**: Web Audio API
- **Deployment**: Vercel

## Project Structure

\`\`\`
├── app/
│   ├── api/database/          # Database API routes
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── sections/            # Page sections
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── analytics.ts         # Analytics logic
│   └── database.ts          # Database client
└── hooks/
    └── use-audio.tsx        # Audio hook
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project as inspiration for your own portfolio!
