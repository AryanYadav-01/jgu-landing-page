# JG University — Landing Page

A modern, fully responsive landing page for JG University built with **Next.js 14** and **Tailwind CSS**.

## ✨ Features
- Animated hero with floating stat cards
- Scrolling marquee ticker
- About section with bento grid
- Filterable programs grid (UG / PG / Certificate / Doctoral)
- Interactive strengths section
- Testimonials horizontal slider
- Industry partners strip
- Email capture CTA
- Fully responsive (mobile + desktop)
- Scroll-reveal animations throughout

## 🛠 Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS 3**
- **React 18**

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📦 Deploy on Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live in ~60 seconds.

### Option B — Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Leave all settings as default (Next.js is auto-detected)
5. Click **Deploy**

Your live URL will be: `https://jgu-landing-[your-name].vercel.app`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.jsx       # Root layout + metadata
│   ├── page.jsx         # Main page (assembles all sections)
│   └── globals.css      # Global styles + Tailwind imports
└── components/
    ├── Navbar.jsx        # Fixed navbar with mobile menu
    ├── Hero.jsx          # Hero section with counter stats
    ├── Marquee.jsx       # Animated ticker strip
    ├── About.jsx         # About section with bento grid
    ├── Programs.jsx      # Tabbed programs filter grid
    ├── Strengths.jsx     # Why JGU + stat cards
    ├── Testimonials.jsx  # Alumni testimonials slider
    ├── Partners.jsx      # Industry partners strip
    ├── CTA.jsx           # Email capture + CTA
    ├── Footer.jsx        # 4-column footer
    └── useReveal.js      # Scroll-reveal custom hook
```

---

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| `--ink` | `#0a0a0f` |
| `--paper` | `#f5f0e8` |
| `--gold` | `#c9a84c` |
| `--teal` | `#1a5f6e` |
| `--cream` | `#ede8d8` |

Fonts: **Playfair Display** (headings) · **DM Sans** (body) · **Space Mono** (numbers/mono)

---

## 📧 Submission
Send to: **vikas@codingjr.online**
Deadline: 17 May 2026
