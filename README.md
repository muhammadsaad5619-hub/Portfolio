# Muhammad Saad | Portfolio

A modern, fully responsive personal portfolio website built with **Next.js 15** and **React 19**.

🔗 **Live Demo:** [https://portfolio-rho-two-vxmrr8zn4p.vercel.app/](https://portfolio-rho-two-vxmrr8zn4p.vercel.app/)

## 📌 Overview

This is a single-page portfolio site showcasing my background, technical skills, featured projects, and a functional contact form that sends emails via the **Resend** API.

## ✨ Features

- Clean, modern, responsive dark-themed design
- About section with personal introduction
- Skills showcase with categorized tech stack
- Projects gallery with details and tech tags
- **Working contact form** — messages are sent directly to my email via Resend
- SEO optimized with OpenGraph & Twitter meta tags
- Optimized font loading with `next/font`
- Server-side API route for secure email handling

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19
- **Styling:** Vanilla CSS with CSS custom properties
- **Email:** Resend API
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm
- A [Resend](https://resend.com) API key (for the contact form)

### Installation

```bash
# Clone the repository
git clone https://github.com/muhammadsaad5619-hub/Portfolio.git

# Navigate into the project directory
cd Portfolio

# Install dependencies
npm install

# Set up environment variables
# Create a .env.local file with:
# RESEND_API_KEY=your_resend_api_key_here

# Run the development server
npm run dev
```

The app will be running at `http://localhost:3000` by default.

### Build for production

```bash
npm run build
```

This generates an optimized build inside the `.next/` folder.

## 📂 Project Structure

```
Portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js        # API route for contact form emails
│   ├── layout.jsx              # Root layout with metadata & fonts
│   └── page.jsx                # Main page (assembles all components)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useTilt.js
│   ├── assets/                 # Static images (profile pic, etc.)
│   └── index.css               # Global styles
├── public/                     # Static files (favicon, resume, etc.)
├── next.config.mjs
├── package.json
└── .env.local                  # Environment variables (not committed)
```

## 📬 Contact

- **Name:** Muhammad Saad
- **GitHub:** [@muhammadsaad5619-hub](https://github.com/muhammadsaad5619-hub)
- **Email:** muhammadsaad5619@gmail.com

## 📄 License

This project is open source and available for personal reference. Feel free to fork it for inspiration, but please don't copy it as-is for your own portfolio.

---

⭐ If you found this useful, consider giving the repo a star!