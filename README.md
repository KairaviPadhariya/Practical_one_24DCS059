# 🚀 Kairavi Padhariya — Portfolio

> Personal portfolio website built with **React + Vite**, featuring multi-page navigation via React Router, reactive state management with `useState`, and a fully responsive design.

**Live Repo:** [github.com/KairaviPadhariya/portfolio-24DCS059](https://github.com/KairaviPadhariya/portfolio-24DCS059)

---

## 📌 About

This is the **Practical 2** implementation extending the Practical 1 portfolio with:

- ⚛️ React Router for client-side multi-page navigation (no full page reloads)
- 🔁 `useState` for reactive UI — controlled form inputs, tooltip toggle, mobile menu
- 🗂️ Modular page components: `Home`, `Projects`, `Contact`
- 📱 Responsive layout with mobile hamburger navigation

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Routing | React Router DOM v6 |
| State | React `useState` hook |
| Styling | Vanilla CSS (custom design system) |
| Build Tool | Vite |
| Version Control | Git & GitHub |

---

## 🗂️ Project Structure

```
portfolio-app/
├── public/
│   └── Kairavi_cv.pdf          # Resume file
├── src/
│   ├── components/
│   │   ├── NavBar.jsx           # Sticky navbar — LinkedIn, GitHub, Resume button
│   │   ├── About.jsx            # About section (used on Home)
│   │   ├── Skills.jsx           # Skills pill list (used on Home)
│   │   └── Footer.jsx           # Site footer
│   ├── pages/
│   │   ├── Home.jsx             # Route: "/"
│   │   ├── Projects.jsx         # Route: "/projects" — project cards with real GitHub links
│   │   └── Contact.jsx          # Route: "/contact" — controlled form + tooltip toggle
│   ├── App.jsx                  # Routes + layout shell
│   ├── App.css                  # All component styles
│   ├── main.jsx                 # Entry point — BrowserRouter wraps App
│   └── index.css                # Global CSS variables & resets
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ useState Usage (Practical Requirement)

| Component | State Variable | Purpose |
|---|---|---|
| `NavBar.jsx` | `menuOpen` | Toggles mobile hamburger menu visibility |
| `Projects.jsx` | `activeCategory` | Filters project cards by category |
| `Contact.jsx` | `formData` | Controlled inputs — captures name, email, message in real time |
| `Contact.jsx` | `showTooltip` | Toggles help tooltip UI element visibility |
| `Contact.jsx` | `submitted` | Shows success card after form submit |

---

## 🔗 React Router Routes

```jsx
<Routes>
  <Route path="/"         element={<Home />}    />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact"  element={<Contact />}  />
</Routes>
```

Navigation uses `<NavLink>` (not `<a>` tags) — no full page reloads.

---

## 📂 Featured Projects

| Project | Domain | GitHub |
|---|---|---|
| ElderSafe | AWS / Cloud \| DevOps | [Link](https://github.com/KairaviPadhariya/ElderSafe) |
| Sentilytics Analyser | DevSecOps \| ML | [Link](https://github.com/KairaviPadhariya/sentilytics-devsecops) |
| Divine ERP Wallet System | Web / Firebase | [Link](https://github.com/KairaviPadhariya/Divine-ERP_wallet-system) |
| Server Manager | DevOps / AWS Lightsail | [Link](https://github.com/KairaviPadhariya/Server-Manager) |
| Portfolio App | React / Frontend | [Link](https://github.com/KairaviPadhariya/portfolio-24DCS059) |

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/KairaviPadhariya/portfolio-24DCS059.git
cd portfolio-24DCS059

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |

---

## 👩‍💻 Author

**Kairavi Padhariya** — 24DCS059  
Computer Science Student | Cloud & DevOps Engineer  
[GitHub](https://github.com/KairaviPadhariya) · [LinkedIn](https://linkedin.com/in/kairavi-padhariya)
