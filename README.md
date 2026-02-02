# Vatix Protocol Landing Page

Pre-launch landing page for Vatix Protocol - the first fully open-source prediction market platform built on Stellar blockchain.

## 🚀 Live Site

[vatix-landing.vercel.app](https://vatix-landing.vercel.app)

## 📋 About

This is the official landing page for Vatix Protocol, featuring:

- Project overview and value proposition
- Development roadmap and progress tracking
- Email waitlist for early access
- Links to open-source repositories
- Information about the Stellar blockchain integration

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email Collection:** Mailchimp
- **Deployment:** Vercel

## 🏃‍♂️ Running Locally
```bash
# Clone the repository
git clone https://github.com/vatix-protocol/vatix-landing.git
cd vatix-landing

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Mailchimp credentials

# Start development server
pnpm dev
```

Visit `http://localhost:5173` to see the site.

## 📦 Build
```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🔧 Environment Variables

Create a `.env` file with:
```env
VITE_MAILCHIMP_SERVER_PREFIX=your-server-prefix
VITE_MAILCHIMP_AUDIENCE_ID=your-audience-id
VITE_MAILCHIMP_U=your-u-parameter
```

## 📝 Project Structure
```
vatix-landing/
├── src/
│   ├── components/
│   │   ├── sections/      # Page sections (Hero, Problem, etc.)
│   │   └── ui/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── assets/            # Images and static assets
│   ├── App.tsx            # Main app component
│   └── index.css          # Global styles
├── public/                # Static files
└── README.md
```

## 🤝 Contributing

This is the marketing site for Vatix Protocol. For contributing to the core protocol:

- [Smart Contracts](https://github.com/vatix-protocol/vatix-contract)
- [Backend](https://github.com/vatix-protocol/vatix-backend)
- [Documentation](https://github.com/vatix-protocol/vatix-docs)

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

## 🔗 Links

- [Main Website] *(coming soon)*
- [GitHub Organization](https://github.com/vatix-protocol)
- [Documentation](https://github.com/vatix-protocol/vatix-docs)