<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



MIT License

Copyright (c) 2025 Lord Anantam Resort

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

#Project Structure

lord-anantam/
│
├── public/
│   └── images/
│       ├── hero/          # 8 hero slider images
│       ├── rooms/         # 4 room images
│       ├── gallery/       # 24 gallery images
│       └── banquet/       # 11 banquet images
│
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── Welcome.jsx
│   │   ├── Facilities.jsx
│   │   ├── RoomsSection.jsx
│   │   ├── GallerySection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── CursorGlow.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── pages/             # Individual pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Rooms.jsx
│   │   ├── Dining.jsx     # Coming Soon
│   │   ├── Banquet.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   ├── Wedding.jsx    # Coming Soon
│   │   ├── Decoration.jsx # Coming Soon
│   │   ├── Catering.jsx   # Coming Soon
│   │   └── NotFound.jsx
│   │
│   ├── styles/            # CSS files per component
│   ├── utils/
│   │   └── images.js      # Centralized image paths
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── LICENSE
├── README.md
├── package.json
└── vite.config.js

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/lord-anantam.git

# Navigate to project
cd lord-anantam

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

---

## 📄 Pages

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | ✅ Live |
| About | `/about` | ✅ Live |
| Rooms & Suites | `/rooms` | ✅ Live |
| Gallery | `/gallery` | ✅ Live |
| Banquet | `/banquet` | ✅ Live |
| Contact | `/contact` | ✅ Live |
| Dining | `/dining` | 🚧 Coming Soon |
| Wedding | `/wedding` | 🚧 Coming Soon |
| Decoration | `/decoration` | 🚧 Coming Soon |
| Catering | `/catering` | 🚧 Coming Soon |

---

## 📞 Contact & Support

**Lord Anantam Resort**
- 📍 Salaiya, Bhopal, Madhya Pradesh
- 📞 +91 96697 52322
- 📧 lordanantam@gmail.com
- 📘 [Facebook](https://www.facebook.com/share/1CrxJke46y/?mibextid=wwXIfr)
- 📸 [Instagram](https://www.instagram.com/tantwayshelesh)

---

## 👨‍💻 Developer

Built with ❤️ for Lord Anantam Resort

> This project was developed as a professional hotel website with
> modern UI/UX, animations and WhatsApp business integration.

---

## 📝 License

This project is licensed under the **MIT License** —
see the [LICENSE](LICENSE) file for details.

---

## 🔮 Upcoming Features

- [ ] Online Room Booking System
- [ ] Admin Dashboard
- [ ] Backend API (Node.js + Express)
- [ ] MongoDB Database Integration
- [ ] Email Notification System
- [ ] Dining Menu Page
- [ ] Wedding Packages Page
- [ ] Client Photo Gallery Updates
- [ ] SEO Optimization
- [ ] Performance Optimizations
=======
# lord-anantan
🏨 Official website for Lord Anantan Resort, Bhopal — Built with React, Vite &amp; GSAP animations. Features WhatsApp integration, Google Maps, image gallery with lightbox, room booking, banquet inquiry and fully responsive design.
>>>>>>> 4ed5e1c3c55ec7db2450b56b4e94530636f81961
