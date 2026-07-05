# Mithila Blooms Pvt Ltd.

> Certified organic agri and exports company — Dutch & Arka savi rose farming, premium coffee beans and cashew exports.

---

## Overview

A fully static, responsive single-page website for **Mithila Blooms Pvt Ltd.**, a medium-scale organic agri and exports company. Built to be hosted on **GitHub Pages** at zero cost with an optional custom domain upgrade later.

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth scroll navigation with active link highlighting
- Scroll-reveal animations (AOS)
- Organic product showcase with Unsplash imagery
- Leadership team section
- Contact form with client-side validation
- Back-to-top button
- No build tools or dependencies to install — open and go

## Pages / Sections

| Section | Description |
|---|---|
| Hero | Full-viewport banner with organic certification badge |
| About | Company story, mission, and organic credentials |
| Products | Dutch Farming, Arkasavi Farming, Coffee Beans, Cashew |
| Why Organic | Six pillars: zero pesticides, soil health, certification, water, health, community |
| Our Team | John (MD), Paul (Director), Joe (Marketing), Bob (Operations) |
| Contact | Address, phone, email, and enquiry form |
| Footer | Links, social icons, copyright |

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 + Bootstrap 5.3 |
| Interactivity | Vanilla JavaScript |
| Animations | AOS.js 2.3 |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts (Playfair Display + Lato) |
| Images | Unsplash (direct CDN URLs) |

All libraries are loaded via CDN — no `npm install` needed.

## Project Structure

```
my-project/
├── index.html        # Single-page site
├── css/
│   └── styles.css    # Custom styles (CSS variables, components, responsive)
├── js/
│   └── main.js       # Navbar scroll, AOS init, form handling
└── README.md
```

## Running Locally

Just open `index.html` in any modern browser — no server required.

For live reload during development, use the [VS Code Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer):

1. Right-click `index.html` in the VS Code Explorer
2. Select **Open with Live Server**

## Hosting on GitHub Pages

1. Initialise a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. In your GitHub repository go to **Settings → Pages**

3. Under **Source**, select **Deploy from a branch**, choose `main` and `/ (root)`

4. Your site will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

## Adding a Custom Domain (Later)

1. Buy a domain from any registrar (GoDaddy, Namecheap, Google Domains, etc.)
2. In GitHub Pages settings, enter your domain under **Custom domain**
3. At your registrar, add a `CNAME` DNS record pointing to `<your-username>.github.io`
4. Enable **Enforce HTTPS** once DNS propagates (usually within 24 hours)

## Customisation

| What | Where |
|---|---|
| Company name / copy | `index.html` — search for `PureHarvest` |
| Colours | `css/styles.css` → `:root` CSS variables |
| Hero background image | `css/styles.css` → `.hero-section` background URL |
| Product images | `index.html` → `<img src="...">` in each product card |
| Team photos | Replace `https://i.pravatar.cc/200?img=N` URLs |
| Contact details | `index.html` → Contact section |
| Social media links | `index.html` → `href="#"` placeholders in Contact and Footer |

## Leadership

| Name | Role |
|---|---|
| John | Managing Director |
| Paul | Director |
| Joe | Marketing Director |
| Bob | Operational Director |

## Contact (Dummy Details)

- **Address:** 42, Agro Industrial Estate, Bangalore Rural District, Karnataka — 562 123, India
- **Phone:** +91 80 4567 8900
- **Email:** info@pureharvestagro.com
- **Hours:** Monday – Saturday, 9:00 AM – 6:00 PM IST

---

*Built with [Claude Code](https://claude.ai/code)*
