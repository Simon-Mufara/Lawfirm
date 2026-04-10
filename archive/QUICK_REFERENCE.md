# QUICK REFERENCE - Essential Customizations

## 🚀 Top 5 Things to Change

### 1. **Firm Name** (5 locations)
Search `index.html` for "Rhulani Baloyi" and replace with your firm name

### 2. **Contact Information** (contact section)
```html
<!-- Phone -->
<a href="tel:+27XXXXXXXXX">+27 (0)XX XXX XXXX</a>

<!-- Email -->
<a href="mailto:info@yourfirm.co.za">info@yourfirm.co.za</a>

<!-- Address -->
<p>127 Fox Street & Eloff Street<br>Johannesburg, Gauteng<br>South Africa</p>
```

### 3. **WhatsApp Number** in `script.js`
```javascript
const whatsappNumber = '27XXXXXXXXX'; // Line 190
```

### 4. **Google Maps Embed** in `index.html`
Get from: maps.google.com → Share → Embed a map

### 5. **Contact Form Setup**
Use Formspree (formspree.io) or Web3Forms (web3forms.com)
Update form action URL in HTML

---

## 🎨 Color Customization

**File: `styles.css` (Lines 1-10)**

Change from gold (`#d4af37`) to your brand color:
- Navy Blue: `#003366`
- Deep Purple: `#2d1b3d`
- Emerald Green: `#1a4d3d`
- Burgundy: `#5d3a3a`

Replace all `--accent-gold: #d4af37` with your color.

---

## 📱 Key File Locations

```
index.html      → Content & Structure
  └─ Hero Section: Line 31
  └─ Practice Areas: Line 62
  └─ About: Line 101
  └─ Why Us: Line 142
  └─ Testimonials: Line 181
  └─ Contact: Line 221

styles.css      → Design & Layout
  └─ Colors: Line 1
  └─ Typography: Line 45
  └─ Components: Line 100+

script.js       → Functionality
  └─ WhatsApp: Line 190
  └─ Contact Form: Line 145
```

---

## 🔗 External Links to Configure

- [ ] Phone number (href="tel:+27...")
- [ ] Email address (href="mailto:...")
- [ ] WhatsApp link (wa.me/27...)
- [ ] Google Maps iframe
- [ ] Social media links
- [ ] Website URL (in footer)

---

## 🖼️ Images to Add

1. **Hero Background** (`images/hero-bg.jpg`)
   - Size: 1920×1080px min
   - Format: JPG or WebP
   - Type: Professional office/legal imagery

2. **About Section** (`images/about-image.jpg`)
   - Size: 500×600px
   - Format: JPG or PNG
   - Type: Team photo or office

3. **Logo** (`images/logo.png`)
   - Format: PNG with transparency
   - Size: 200×200px min
   - Optional but recommended

---

## ✅ Testing Before Go-Live

```
□ Desktop view (1920px+)
□ Tablet view (1024px)
□ Mobile view (375px)
□ Contact form sends email
□ WhatsApp link works
□ Google Maps loads
□ All links functional
□ Images display
□ Load time < 3 seconds
□ No console errors
□ Lighthouse score > 90
```

Run Lighthouse: DevTools (F12) → Lighthouse → Analyze

---

## 🚀 Deployment Steps

1. **Prepare Files**
   - Update all customizations
   - Test locally
   - Verify all links work

2. **Choose Platform**
   - Netlify (easiest)
   - GitHub Pages (free)
   - Traditional hosting

3. **Deploy**
   - Connect repo/upload files
   - Point domain to hosting
   - Enable HTTPS

4. **Post-Launch**
   - Set up Google Analytics
   - Enable form submissions
   - Monitor performance

---

## 📞 Support & Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Check file path and /images/ folder |
| Form not sending | Verify Formspree/Web3Forms config |
| Mobile menu broken | Check script.js hamburger code |
| Colors look wrong | Clear browser cache (Ctrl+Shift+Del) |
| Links not working | Use full URLs (https://...) |

---

**Duration to Complete:** 30-60 minutes
**Difficulty Level:** Beginner-friendly
**Help Available:** See README.md or SETUP.md
