<div align="center">
<img src="public/favicon.svg" width="100" height="100" alt="Portfolio Logo">

# 🚀 Premium Full-Stack Developer Portfolio & PWA
### Mostafa Attia El-Beltagy | مصطفى عطية البلتاجي
**Version v1.0.0**
*Modern portfolio template with bilingual support, dark/light themes, and installable PWA.*
*قالب سيرة ذاتية برمجية احترافي مع دعم ثنائي اللغة والوضع الداكن/الفاتح و PWA قابل للتثبيت.*

[![Generic badge](https://img.shields.io/badge/Platform-Web%20%7C%20PWA-blue.svg)](https://vitejs.dev)
[![Generic badge](https://img.shields.io/badge/Framework-React%2019%20%2B%20TypeScript-61DAFB.svg)](https://react.dev)
[![Generic badge](https://img.shields.io/badge/Build-Vite%206-646CFF.svg)](https://vitejs.dev)
[![Generic badge](https://img.shields.io/badge/Language-Arabic%20%7C%20English-green.svg)]()
[![Generic badge](https://img.shields.io/badge/Theme-Dark%20%26%20Light-cyan.svg)]()
[![Generic badge](https://img.shields.io/badge/Deploy-GitHub%20Pages-orange.svg)](https://pages.github.com)
[![Generic badge](https://img.shields.io/badge/PWA-Installable%20%26%20Offline--Ready-important.svg)]()
[![Generic badge](https://img.shields.io/badge/Price-%242%2C600%20USD-gold.svg)]()

</div>

---

## 📖 Overview | نبذة عامة

**Premium Full-Stack Developer Portfolio** is a modern, production-ready portfolio template built with React 19, TypeScript, and Vite 6. Designed as an installable Progressive Web App (PWA) with offline support, bilingual Arabic/English interface with full RTL, and automated deployment to GitHub Pages.

**قالب السيرة الذاتية البرمجية الاحترافي** هو قالب بورتفوليو حديث وجاهز للإنتاج مبني باستخدام React 19 و TypeScript و Vite 6. مصمم كتطبيق ويب تقدمي (PWA) قابل للتثبيت مع دعم العمل دون إنترنت، وواجهة ثنائية اللغة عربي/إنجليزي مع دعم كامل لـ RTL، ونشر تلقائي على GitHub Pages.

---

## ✨ Core Features | أبرز المميزات

### 🌍 Bilingual Support (Arabic / English) | دعم ثنائي اللغة كامل
- Real RTL support with `dir="rtl"` and CSS Logical Properties for zero alignment issues.
- Type-safe translation dictionaries with TypeScript strict mode.
- Instant language switching with persistent preference storage in `localStorage`.
- دعم حقيقي للاتجاه من اليمين لليسار (`dir="rtl"`) مع خصائص CSS Logical Properties.
- قواميس ترجمة صارمة النوع باستخدام TypeScript Strict.
- تبديل فوري للغة مع حفظ التفضيل في `localStorage`.

### 🌓 Dark & Light Theme | الوضع الداكن والفاتح
- Curated color palettes respecting WCAG 2.2 AA contrast standards.
- Auto-detection of system preference with persistent user override.
- Smooth transitions between themes with CSS custom properties.
- لوحات ألوان متوازنة ومتباينة تحترم معايير WCAG 2.2 AA.
- كشف تلقائي لتفضيل النظام مع حفظ تفضيل المستخدم.
- انتقالات سلسة بين الأوضاع عبر CSS Custom Properties.

### 📱 PWA – Installable & Offline-Ready | تطبيق ويب تقدمي قابل للتثبيت
- Complete `manifest.webmanifest` with high-resolution icons (192×192, 512×512, Maskable).
- Service Worker with Workbox caching strategies and auto-update.
- Custom install prompts for Desktop, Android, and iOS Safari.
- Dedicated offline fallback page (`offline.html`) and `OfflineToast` notifications.
- ملف `manifest.webmanifest` متكامل مع أيقونات عالية الدقة.
- مشغل خدمة Service Worker مع استراتيجيات التخزين المؤقت عبر Workbox.
- إرشادات تثبيت مخصصة للمتصفحات وسطح المكتب و Android و iOS.
- صفحة بديلة مخصصة عند انقطاع الاتصال وتنبيهات `OfflineToast`.

### ⚡ GitHub Pages Static Architecture | معمارية ساكنة لـ GitHub Pages
- Relative base path (`base: './'`) works on root domain and subdirectory deployments.
- Zero secrets or API keys leaked in the frontend bundle.
- Secure contact form using `mailto:` protocol — no false success claims without a backend.
- Automated CI/CD via GitHub Actions workflow (`deploy.yml`).
- مسار نسبي يعمل تلقائياً على النطاق الجذري أو المجلد الفرعي.
- أمان فائق: لا تسريب لأي مفاتيح خاصة في الواجهة الأمامية.
- نشر تلقائي عبر GitHub Actions.

### 📐 Responsive Mobile-First Design | تصميم متجاوب بالكامل
- Fluid typography with `clamp()` for seamless scaling from 320px to 4K screens.
- CSS Grid and Flexbox layouts with media queries at 768px, 600px, and 380px breakpoints.
- Touch-optimized interactions for mobile devices.
- خطوط مرنة باستخدام `clamp()` تتكيف من 320px حتى شاشات 4K.
- تخطيطات CSS Grid و Flexbox مع نقاط توقف متعددة.
- تفاعلات محسنة لشاشات اللمس.

### 🛠️ Clean & Reusable Code | كود نظيف وقابل لإعادة الاستخدام
- Complete separation between logic, UI, and developer data in `src/data/`.
- Automated tests via `Vitest` for translation integrity and data validation.
- فصل كامل بين المنطق والواجهة والبيانات المركزية في مجلد `src/data/`.
- اختبارات آلية جاهزة عبر `Vitest`.

---

## 📱 Main Sections | الأقسام الرئيسية

| Section | Description | الوصف |
| :--- | :--- | :--- |
| Hero | Dynamic hero with avatar, status badge, and code snippet card | قسم البطل مع الصورة والحالة وبطاقة الكود |
| About | Professional summary with core pillars and highlights | ملخص مهني مع ركائز الأداء والمميزات |
| Skills | Categorized technical skills with tabs and proficiency levels | المهارات التقنية مصنفة بتبويبات ومستويات إتقان |
| Projects | Filterable project cards with images, modals, and GitHub links | بطاقات مشاريع مع صور وتفاصيل وروابط GitHub |
| Experience | Timeline-based career history with achievements | الخبرات المهنية بنظام المخطط الزمني |
| Education | Academic qualifications with honors and coursework | المؤهلات الأكاديمية والمقررات الدراسية |
| Certifications | Professional certifications with verification links | الشهادات المهنية مع روابط التحقق |
| Achievements | Key milestones with metrics and links | الإنجازات البارزة والمحطات المهمة |
| Contact | Contact form with email, socials, pricing, and location | نموذج تواصل مع البريد والسوشيال والسعر والموقع |

---

## 🎨 Design System | نظام التصميم

The application uses a premium modern UI with adaptive light/dark themes, glassmorphism effects, smooth micro-animations, and curated color tokens.

يستخدم التطبيق واجهة حديثة فاخرة مع أوضاع داكن/فاتح متكيفة وتأثيرات Glassmorphism وحركات دقيقة وألوان مختارة بعناية.

### 🎯 Color Palette | لوحة الألوان

| Color Name | Hex Code | Usage | الاستخدام |
| :--- | :---: | :--- | :--- |
| Background Base (Dark) | `#0a0f1d` | Main dark page background | خلفية الصفحة الداكنة |
| Background Subtle | `#0f172a` | Subtle dark sections | الأقسام الداكنة الفرعية |
| Card Background | `rgba(18,26,47,0.75)` | Card surfaces with blur | أسطح البطاقات مع الضبابية |
| Accent Cyan | `#38bdf8` | Primary accent, links, highlights | اللون الأساسي والروابط |
| Accent Indigo | `#818cf8` | Gradient secondary accent | تدرج اللون الثانوي |
| Accent Emerald | `#34d399` | Success states, status badges | حالات النجاح والشارات |
| Accent Amber | `#fbbf24` | Warning accents | تنبيهات |
| Text Main | `#f8fafc` | Primary text color (Dark) | لون النص الرئيسي |
| Text Secondary | `#94a3b8` | Secondary text and subtitles | النص الثانوي |
| Background (Light) | `#f8fafc` | Main light page background | خلفية الصفحة الفاتحة |
| Accent Cyan (Light) | `#0284c7` | Primary accent in light mode | اللون الأساسي في الوضع الفاتح |
| Card BG (Light) | `rgba(255,255,255,0.88)` | Light card surfaces | أسطح البطاقات الفاتحة |

### 🔤 Typography | الخطوط

| Font | Usage | الاستخدام |
| :--- | :--- | :--- |
| **Inter** | English UI text | نص الواجهة الإنجليزية |
| **Cairo** | Arabic UI text | نص الواجهة العربية |
| **JetBrains Mono** | Code snippets and badges | مقاطع الكود والشارات |

---

## 🛠️ Tech Stack | مجموعة التقنيات

### Core Framework | الإطار الأساسي
- React 19 with Hooks & Context API
- TypeScript 5.7+ (Strict Mode)
- Vite 6 with Hot Module Replacement

### UI & Icons | الواجهة والأيقونات
- Lucide React (Icon Library)
- CSS Custom Properties (Design Tokens)
- CSS Logical Properties (RTL/LTR)
- Google Fonts (Inter, Cairo, JetBrains Mono)

### PWA & Offline | التطبيق التقدمي
- vite-plugin-pwa with Workbox
- Service Worker (CacheFirst + Runtime Caching)
- Web App Manifest (Standalone Display)
- workbox-window for SW Registration

### Testing | الاختبارات
- Vitest (Unit & Integration Tests)

### Deployment | النشر
- GitHub Actions CI/CD Pipeline
- GitHub Pages Static Hosting

---

## 🖼️ Projects Showcase | معرض المشاريع

### 1. CartDash — E-Commerce Platform | منصة التجارة الإلكترونية
> Full-featured modern e-commerce solution with dynamic cart state management and secure checkout.
> 
> منصة تجارة إلكترونية متكاملة مع إدارة سلة المشتريات وتجربة دفع آمنة.

| Tech Stack | GitHub |
| :--- | :--- |
| React.js, Node.js, Express, MongoDB, Redux, REST APIs | [CartDash](https://github.com/mostafa-atya308/CartDash) |

### 2. PlanCraft — Project & Task Planning Suite | أداة إدارة وتخطيط المشاريع
> Collaborative project planning with interactive Kanban boards and team productivity tracking.
>
> منصة تعاونية لتخطيط المشاريع مع لوحات كانبان تفاعلية وتتبع إنتاجية الفريق.

| Tech Stack | GitHub |
| :--- | :--- |
| React.js, TypeScript, Node.js, Express, PostgreSQL, Docker | [PlanCraft](https://github.com/mostafa-atya308/PlanCraft) |

### 3. MealDash — Food Delivery & Ordering System | منصة طلب وتوصيل الوجبات
> On-demand food ordering platform with restaurant menus and real-time order management.
>
> منظومة لطلب وتوصيل الوجبات مع قوائم المطاعم ومتابعة الطلبات.

| Tech Stack | GitHub |
| :--- | :--- |
| React.js, Node.js, Express, MongoDB, REST APIs, CSS3 | [MealDash](https://github.com/mostafa-atya308/MealDash) |

### 4. FlashCart — High-Speed Shopping Engine | نظام الشراء السريع
> Ultra-fast, lightweight shopping cart with instant state transitions and high mobile conversion.
>
> واجهة تسوق فائقة السرعة وخفيفة الحجم مع تفاعل فوري.

| Tech Stack | GitHub |
| :--- | :--- |
| React.js, TypeScript, Tailwind CSS, Redux Toolkit, Vite | [FlashCart](https://github.com/mostafa-atya308/FlashCart) |

### 5. TradeNexus — Marketplace & Trading Hub | منصة التبادل التجاري
> High-throughput trading gateway with secure authentication and robust data integrity.
>
> بوابة تبادل تجاري مع توثيق آمن وضمان اتساق البيانات.

| Tech Stack | GitHub |
| :--- | :--- |
| Node.js, Express, PostgreSQL, Redis, JWT, REST APIs | [TradeNexus](https://github.com/mostafa-atya308/TradeNexus) |

---

## 📂 Project Structure | هيكل المشروع

```text
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD — GitHub Pages Auto-Deploy
├── public/
│   ├── projects/                   # Project screenshot images
│   │   ├── cartdash.jpg
│   │   ├── plancraft.jpg
│   │   ├── mealdash.jpg
│   │   ├── flashcart.jpg
│   │   └── tradenexus.jpg
│   ├── favicon.svg                 # SVG Favicon
│   ├── pwa-192x192.png             # PWA Icon 192×192
│   ├── pwa-512x512.png             # PWA Icon 512×512
│   ├── apple-touch-icon.png        # Apple Touch Icon
│   ├── og-image.png                # Open Graph Image for SEO
│   ├── offline.html                # Offline Fallback Page
│   └── robots.txt                  # Search Engine Directives
├── src/
│   ├── __tests__/                  # Automated Tests (Vitest)
│   ├── components/                 # UI Components
│   │   ├── Navbar.tsx              # Navigation & Mobile Drawer
│   │   ├── Hero.tsx                # Hero Section with Avatar & Code Card
│   │   ├── About.tsx               # About & Core Pillars
│   │   ├── Skills.tsx              # Skills with Tabs & Categories
│   │   ├── Projects.tsx            # Projects Grid with Filters & Modal
│   │   ├── Experience.tsx          # Timeline Career History
│   │   ├── Education.tsx           # Academic Qualifications
│   │   ├── Certifications.tsx      # Professional Certifications
│   │   ├── Achievements.tsx        # Key Milestones
│   │   ├── Contact.tsx             # Contact Form & Details
│   │   ├── Footer.tsx              # Footer Section
│   │   ├── PwaInstallBanner.tsx    # PWA Install Prompt & Guide
│   │   ├── OfflineToast.tsx        # Offline/Online Toast Notifications
│   │   └── SocialIcons.tsx         # Social SVG Icons (GitHub, LinkedIn, Facebook)
│   ├── context/                    # React Contexts
│   │   ├── LanguageContext.tsx      # Language & RTL Management
│   │   └── ThemeContext.tsx         # Dark/Light Theme Management
│   ├── data/                       # Centralized Data (Single Source of Truth)
│   │   ├── siteConfig.ts           # Identity, Contact, Pricing, Preferences
│   │   ├── projects.ts             # Projects with GitHub Links & Images
│   │   ├── skills.ts               # Categorized Technical Skills
│   │   ├── experience.ts           # Career Timeline & Achievements
│   │   ├── education.ts            # Academic Background
│   │   ├── certifications.ts       # Professional Certifications
│   │   └── achievements.ts         # Key Milestones & Metrics
│   ├── i18n/                       # Translation Dictionaries (AR / EN)
│   ├── types/                      # TypeScript Interfaces & Types
│   │   └── index.ts                # All shared type definitions
│   ├── App.tsx                     # Main Application Assembly
│   ├── index.css                   # Design System & Tokens (37KB+)
│   ├── main.tsx                    # Entry Point & PWA Registration
│   └── vite-env.d.ts               # Vite Type Declarations
├── vite.config.ts                  # Vite Config — Build, PWA, Base Path
├── tsconfig.json                   # TypeScript Configuration
└── package.json                    # Dependencies & Scripts
```

---

## ⚙️ Getting Started | البدء السريع

### Prerequisites | المتطلبات
- Node.js 18+ (LTS recommended)
- npm 9+ or yarn/pnpm

### Install & Run | التثبيت والتشغيل

```bash
# 1. Clone the repository | استنساخ المستودع
git clone https://github.com/mostafa-atya308/portfolio.git
cd portfolio

# 2. Install dependencies | تثبيت الحزم
npm install

# 3. Start development server | تشغيل السيرفر المحلي
npm run dev

# 4. Run automated tests | تشغيل الاختبارات
npm test

# 5. Build for production | بناء نسخة الإنتاج
npm run build

# 6. Preview production build | معاينة نسخة الإنتاج
npm run preview
```

---

## 🌐 Deploy to GitHub Pages | النشر على GitHub Pages

1. Create a new GitHub repository (e.g., `portfolio`).
   
   أنشئ مستودع جديد على GitHub (مثلاً: `portfolio`).

2. Push the project code:

   ارفع كود المشروع:
   ```bash
   git add .
   git commit -m "feat: initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
   git push -u origin main
   ```

3. Configure GitHub Pages:

   اضبط إعدادات GitHub Pages:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Source**: **GitHub Actions**.
   - اذهب إلى **Settings** > **Pages** واختر **GitHub Actions** كمصدر البناء.

4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy to:

   سيتم النشر تلقائياً على:
   ```
   https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/
   ```

---

## 🎓 Developer Information | معلومات المطور

| Field | Details | التفاصيل |
| :--- | :--- | :--- |
| **Name** | Mostafa Attia El-Beltagy | مصطفى عطية البلتاجي |
| **Title** | Full-Stack Software Engineer | مهندس برمجيات Full-Stack |
| **Education** | B.Sc. Computer Science & Software Engineering | بكالوريوس الحاسبات والمعلومات |
| **University** | Faculty of Computers and Information | كلية الحاسبات والمعلومات |
| **Period** | 2020 – 2024 | 2020 – 2024 |
| **Honors** | Class of 2024 — Distinction with Honors | دفعة 2024 بتقدير امتياز مع مرتبة الشرف |
| **Location** | Egypt / Available for Remote Worldwide | مصر / متاح للعمل عن بُعد عالمياً |
| **Project Price** | $2,600 USD | 2,600 دولار أمريكي |

### 🔗 Links | الروابط

| Platform | URL |
| :--- | :--- |
| **GitHub** | [github.com/mostafa-atya308](https://github.com/mostafa-atya308) |
| **LinkedIn** | [linkedin.com/in/mostafa-attia-elbeltagy](https://linkedin.com/in/mostafa-attia-elbeltagy) |
| **Facebook** | [facebook.com/mostafa-atya308](https://www.facebook.com/mostafa-atya308) |
| **Email** | mostafaatya51026@gmail.com |

---

## 🏆 Certifications | الشهادات المهنية

| Certificate | Issuer | Year |
| :--- | :--- | :---: |
| AWS Certified Developer – Associate | Amazon Web Services (AWS) | 2023 |
| Meta Front-End Developer Professional | Meta / Coursera | 2022 |

---

## 🔧 Customization Guide | دليل التخصيص

### Step 1: Update Your Identity | تحديث الهوية
Edit `src/data/siteConfig.ts` to replace with your own name, title, contact info, pricing, and avatar URL.

عدّل ملف `src/data/siteConfig.ts` واستبدل البيانات ببياناتك الشخصية.

### Step 2: Update Your Projects | تحديث المشاريع
Edit `src/data/projects.ts` to add your own projects with GitHub links and images.

عدّل ملف `src/data/projects.ts` وأضف مشاريعك مع الروابط والصور.

### Step 3: Update Your Skills | تحديث المهارات
Edit `src/data/skills.ts` to reflect your technical expertise.

عدّل ملف `src/data/skills.ts` ليعكس خبراتك التقنية.

### Step 4: Update Experience & Education | تحديث الخبرات والتعليم
Edit `src/data/experience.ts` and `src/data/education.ts` with your career and academic history.

عدّل ملفات الخبرات والتعليم ببياناتك المهنية والأكاديمية.

### Step 5: Add Project Images | إضافة صور المشاريع
Place project screenshots in `public/projects/` and reference them in `projects.ts` via the `imageUrl` field.

ضع صور المشاريع في `public/projects/` واربطها في `projects.ts` عبر حقل `imageUrl`.

---

## 📋 Available Scripts | الأوامر المتاحة

| Script | Command | Description | الوصف |
| :--- | :--- | :--- | :--- |
| Development | `npm run dev` | Start local dev server with HMR | تشغيل السيرفر المحلي |
| Build | `npm run build` | TypeScript check + production build | بناء نسخة الإنتاج |
| Preview | `npm run preview` | Preview production build locally | معاينة نسخة الإنتاج |
| Test | `npm test` | Run automated tests via Vitest | تشغيل الاختبارات |

---

## 🌟 Summary | الخلاصة

This portfolio template is built with modern web technologies to deliver a premium, production-ready online presence. It combines a React-powered component architecture, PWA offline capabilities, automated GitHub Pages deployment, and a beautiful bilingual design to create a professional digital identity.

هذا القالب مبني بأحدث تقنيات الويب لتقديم حضور رقمي فاخر وجاهز للإنتاج. يجمع بين معمارية مكونات React، وقدرات PWA للعمل بدون إنترنت، ونشر تلقائي على GitHub Pages، وتصميم ثنائي اللغة احترافي لبناء هوية رقمية مميزة.

---

<div align="center">

**Built with ❤️ by [Mostafa Attia El-Beltagy](https://github.com/mostafa-atya308)**

*Full-Stack Software Engineer | مهندس برمجيات Full-Stack*

**💰 Project Value: $2,600 USD | سعر المشروع: 2,600 دولار أمريكي**

</div>
# my-portfolio
# my-portfolio
# my-portfolio
# my-portfolio
# my-portfolio
