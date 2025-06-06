# MiniGuardTech - Cybersecurity Landing Page

A modern, responsive Vue.js landing page for MiniGuardTech, a cybersecurity company focused on providing simple, affordable security solutions for small businesses.

## 🚀 Project Overview

MiniGuardTech offers "Big Protection. Always Got Your Back" - cybersecurity made simple for small businesses. This landing page showcases their services, pricing, and allows potential customers to book free consultations through integrated Calendly scheduling.

## ✨ Features

### 🎨 Modern Design

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Professional slate/yellow color scheme
- **Smooth Animations**: Custom CSS animations and transitions
- **Interactive Elements**: Hover effects, scale transforms, and micro-interactions

### 📱 User Experience

- **Scroll Progress Indicator**: Visual feedback for page navigation
- **Mobile-Optimized Navigation**: Collapsible menu for mobile devices
- **Accessibility**: Semantic HTML and ARIA considerations
- **Performance**: Optimized assets and lazy-loaded components

### 🔧 Functionality

- **Calendly Integration**: Direct booking for free consultations
- **Google Forms Integration**: Contact form submissions stored in Google Sheets
- **Contact Methods**: Click-to-call and email functionality
- **Success Modals**: User feedback for form submissions

## 🛠️ Technical Stack

- **Framework**: Vue 3 with Composition API
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Vite
- **Icons**: Heroicons + Custom SVG components
- **Form Handling**: Google Forms (no-cors mode)
- **Scheduling**: Calendly Widget API

## 📋 Services & Pricing

### Core Services

- **Password & Wi-Fi Setup**: Secure password management and network configuration
- **Network Security**: Comprehensive protection and monitoring
- **Data Backup**: Automated backup solutions
- **Antivirus Protection**: Advanced threat detection

### Service Packages

1. **Free Security Snapshot** - $0

   - Quick cybersecurity status review
   - Basic vulnerability identification
   - Tailored recommendations

2. **One-Time Cyber Tune-Up** - $297

   - Comprehensive vulnerability scan
   - Security patches and updates
   - System optimization
   - Security audit report

3. **Monthly Health Plan** - $197/month (Most Popular)
   - Monthly system reviews
   - Security health checks
   - Remote support sessions
   - Monthly reports

### Premium Add-Ons

- **Cloud Backup Setup** - $197
- **Email Setup + 2FA** - $147
- **Network/Wi-Fi Optimization** - $147
- **Remote Monitoring** - $25-$50/month per device
- **Linux Migration Package** - $250-$950 per device

## 🏗️ Project Structure

```
src/
├── components/
│   ├── AboutSection.vue      # Why choose us section
│   ├── ContactSection.vue    # Contact form with Google Forms integration
│   ├── FooterSection.vue     # Footer with company info
│   ├── HeroSection.vue       # Main hero with Calendly CTA
│   ├── Navbar.vue           # Navigation header
│   ├── PricingSection.vue    # Service packages and pricing
│   ├── ScrollProgressIndicator.vue  # Page scroll progress
│   ├── ServicesSection.vue   # Core services overview
│   └── SuccessModal.vue      # Form submission feedback
├── assets/
│   └── icons/               # Custom SVG icon components
├── App.vue                  # Main application component
├── main.ts                  # Application entry point
└── style.css               # Custom animations and styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ismaeel06/Mini-Guard-Landing-Page.git
   cd CyberSecurityLandingPage
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## ⚙️ Configuration

### Calendly Integration

Update the Calendly URL in components that use scheduling:

```typescript
const CALENDLY_URL = "https://calendly.com/miniguardtech-info/10min";
```

### Google Forms Integration

Replace the form URL and entry IDs in [`ContactSection.vue`](src/components/ContactSection.vue):

```typescript
const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScyX6lkYQzzqKpRmC-zD1lcOV7O6PUzlz3YXJWqai3R-c8_Ow/formResponse";
// Update entry IDs to match your form fields
formData.append("entry.XXXXXX", form.value.firstName);
```

### Contact Information

Update contact details in:

- [`ContactSection.vue`](src/components/ContactSection.vue) - Phone and email links
- [`FooterSection.vue`](src/components/FooterSection.vue) - Footer contact info

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Key responsive features:

- Adaptive text sizes and spacing
- Mobile-optimized navigation
- Touch-friendly interactive elements
- Optimized form layouts

## 🎨 Customization

### Colors

The site uses a professional color scheme defined in Tailwind:

- **Primary**: Yellow (yellow-400, yellow-500)
- **Background**: Slate (slate-800, slate-900)
- **Text**: White, slate variations
- **Accents**: Green for success states

### Animations

Custom animations are defined in [`style.css`](src/style.css):

- Fade in/up animations
- Text shimmer effects
- Hover transforms
- Pulse animations

## 🔒 Security Features

- **SSL Ready**: Prepared for HTTPS deployment
- **Form Validation**: Client-side and server-side validation
- **No-CORS Forms**: Secure Google Forms integration
- **Privacy Focused**: No unnecessary tracking

## 🛠️ Troubleshooting

### TypeScript Build Errors

If you encounter TypeScript errors during build:

1. **Calendly Type Errors**: Ensure `src/types/calendly.d.ts` exists with proper type declarations
2. **Unused Variables**: Remove or comment out unused imports and variables
3. **Missing Types**: Install missing type definitions: `npm install --save-dev @types/node`

### Build Command

```bash
# Clean build
npm run build

# Type check only
npx vue-tsc --noEmit

# Development with type checking
npm run dev
```

## 📞 Contact Information

- **Phone**: (443) 319-3515
- **Email**: info@miniguardtech.com
- **Service Area**: Nationwide (Remote Support)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is proprietary to MiniGuardTech. All rights reserved.

## 🆘 Support

For technical support or questions about the website:

- Email: info@miniguardtech.com
- Phone: (443) 319-3515

---

**MiniGuardTech** - _Cybersecurity made simple for small business_
