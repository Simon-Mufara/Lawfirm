# SETUP & CUSTOMIZATION GUIDE

## 🎯 Priority Customizations (Do These First!)

### 1. Business Information
**File: `index.html`**

Find and replace all instances:
```
"Rhulani Baloyi" → Your Firm Name
"127 Fox Street & Eloff Street" → Your Address
"+27..." → Your Phone Number
"info@rhulani-baloyi.co.za" → Your Email
```

### 2. Contact Details (Critical)
**File: `index.html` - Contact Section**

Update:
```html
<!-- Phone Number -->
<a href="tel:+27XXXXXXXXX">+27 (0)XX XXX XXXX</a>

<!-- Email -->
<a href="mailto:info@yourfirm.co.za">info@yourfirm.co.za</a>

<!-- WhatsApp -->
<a href="https://wa.me/27XXXXXXXXX?text=..." target="_blank">WhatsApp</a>

<!-- Google Maps - Get embed code from Google Maps -->
<iframe src="https://www.google.com/maps/embed?pb=..."></iframe>
```

### 3. WhatsApp Integration
**File: `script.js` - Line ~190**

```javascript
const whatsappNumber = '27123456789'; // Remove + and add your number
const whatsappMessage = 'Hello, I would like to inquire about your legal services.';
```

---

## 🎨 Branding Customization

### Color Scheme
**File: `styles.css` - Lines 1-10 (CSS Variables)**

```css
:root {
    --primary-dark: #0f1419;      /* Dark background - change for brand color */
    --secondary-dark: #1a1f2e;    /* Slightly lighter dark */
    --tertiary-dark: #252d3d;     /* Lighter still */
    --accent-gold: #d4af37;       /* PRIMARY ACCENT - change to your brand color */
    --accent-light: #e8e8e8;      /* Light accent for contrast */
    --text-primary: #ffffff;      /* Main text (keep white) */
    --text-secondary: #b8bccf;    /* Secondary text (gray) */
}
```

**To completely rebrand:**
1. Choose new primary color (e.g., `#003366` for dark blue)
2. Replace all `--accent-gold: #d4af37` with your color
3. Test on multiple sections to ensure readability

### Practice Areas
**File: `index.html` - Practice Areas Section**

Update to your actual practice areas:
```html
<div class="practice-card">
    <div class="practice-icon">⚖️</div>
    <h3>Civil Litigation</h3>
    <p>Your description here</p>
</div>
```

Available icons (emoji):
- ⚖️ Law/Justice
- 🛡️ Protection
- 👨‍👩‍👧 Family
- 💼 Business
- 📋 Documents
- 📜 Legal
- 🏛️ Court
- 🔨 Justice
- ✓ Checkmark

---

## 👥 Testimonials Setup

**File: `index.html` - Testimonials Section**

Replace with real client testimonials:
```html
<div class="testimonial-card">
    <div class="stars">★★★★★</div>
    <p>"Your actual client testimonial here"</p>
    <div class="testimonial-author">
        <span class="author-name">— Client Name</span>
        <span class="author-title">Service Type (e.g., Civil Litigation)</span>
    </div>
</div>
```

---

## 📧 Contact Form Setup (Required for Leads)

### Option 1: Formspree (Recommended for Beginners)
1. Go to **formspree.io**
2. Sign up (free)
3. Add your form with your email
4. Copy the form ID (e.g., `f_abc123def`)
5. Find this in `index.html`:
```html
<form class="contact-form" id="contactForm">
```
6. Change to:
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Web3Forms (Modern Alternative)
1. Go to **web3forms.com**
2. Create account
3. Get your access key
4. Replace in HTML:
```html
<form class="contact-form" method="POST" action="https://api.web3forms.com/submit">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

### Option 3: Netlify Forms (If hosting on Netlify)
Add `netlify` attribute to form:
```html
<form class="contact-form" netlify>
```

---

## 🗺️ Google Maps Setup

1. Go to **maps.google.com**
2. Search your office location
3. Click Share button (top left)
4. Select "Embed a map"
5. Copy the iframe code
6. Replace the iframe in contact section

Example:
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

---

## 🖼️ Images Setup

### 1. Add Images Folder
```bash
mkdir images
```

### 2. Add Images
Upload these to `/images/`:
- `hero-bg.jpg` (1920x1080 min)
- `about-image.jpg` (500x600)
- `logo.png` (transparent)
- `team.jpg` (optional)

### 3. Update HTML
Replace placeholder SVGs with actual images:

**Hero Section Background:**
```html
<!-- Current (SVG placeholder) -->
<div class="hero-background"></div>

<!-- Change to -->
<div class="hero-background" style="background-image: url('images/hero-bg.jpg')"></div>
```

**About Section Image:**
```html
<!-- Find this in about section -->
<div class="image-placeholder">
    <svg viewBox="0 0 300 400">...</svg>
</div>

<!-- Replace with -->
<div class="image-placeholder">
    <img src="images/about-image.jpg" alt="Law Office">
</div>
```

---

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Free)
1. Push code to GitHub
2. Go to **netlify.com**
3. Click "New site from Git"
4. Connect GitHub repo
5. Deploy automatically

**Custom Domain:**
- Go to Site Settings → Domain Management
- Add your custom domain
- Update DNS records as instructed

### Option 2: GitHub Pages (Free, Limited)
1. Create GitHub repo named `yourusername.github.io`
2. Push code to repo
3. Enable GitHub Pages in Settings
4. Site available at `https://yourusername.github.io`

### Option 3: Traditional Hosting
1. Get hosting from Bluehost, GoDaddy, Namecheap, etc.
2. Upload files via FTP
3. Point domain DNS to hosting

### Option 4: AWS, Azure, Google Cloud
More advanced but scalable. Use if you need enterprise solutions.

---

## 🔧 Advanced Customization

### Change Logo Style
**File: `styles.css` - Lines 155-175**

```css
.logo-text {
    font-family: 'Playfair Display', serif;  /* Change font */
    font-size: 1.5rem;                       /* Change size */
    font-weight: 700;
    color: var(--accent-gold);               /* Change color */
}
```

### Modify Hero Section
**File: `styles.css` - Lines 250-310**

```css
.hero-title {
    font-size: 4.5rem;  /* Change title size */
}

.hero-subtitle {
    font-size: 1.4rem;  /* Change subtitle size */
}
```

### Update Animations
**File: `styles.css` - Search for @keyframes**

Modify animation speeds:
```css
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Change animation in hero-content: */
animation: slideUp 0.8s ease-out;  /* Increase 0.8s for slower animation */
```

---

## ✅ Pre-Launch Checklist

- [ ] All contact details updated
- [ ] Phone number formatted correctly
- [ ] Email address works
- [ ] WhatsApp link functional
- [ ] Google Maps shows correct location
- [ ] Contact form receives submissions
- [ ] All links working (internal and external)
- [ ] Images loading properly
- [ ] Mobile view tested
- [ ] Desktop view tested
- [ ] Tablet view tested
- [ ] Testimonials updated with real clients
- [ ] Practice areas match your firm
- [ ] About section accurate
- [ ] Footer links updated
- [ ] No typos throughout
- [ ] Brand colors applied consistently
- [ ] Logo added (if applicable)
- [ ] Meta description reviewed
- [ ] Title tag updated

---

## 📊 Testing

### Mobile Responsiveness
Test on real devices or use Chrome DevTools:
1. Open DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Test all breakpoints

### Performance Check
1. Go to **PageSpeed Insights** (pagespeed.web.dev)
2. Enter your URL
3. Aim for 90+ score
4. Follow recommendations

### SEO Check
1. Go to **Lighthouse** (built into Chrome DevTools)
2. Run SEO audit
3. Fix any issues

---

## 📞 Support Contacts

### Getting Help
- Email: info@yourfirm.co.za
- Check README.md for detailed info
- Test locally first before deploying

### Common Issues

**Contact form not sending:**
- Check formspree/web3forms configuration
- Verify email address is correct
- Test with test email first

**Images not showing:**
- Check file paths are correct
- Ensure images are in `/images/` folder
- Verify file names match exactly

**Colors looking wrong:**
- Clear browser cache (Ctrl+Shift+Del)
- Check CSS variables are updated
- Test in different browser

---

## 📈 After Launch

### Monitor Performance
- Set up Google Analytics
- Monitor contact form submissions
- Track user behavior
- Check loading times

### Regular Maintenance
- Update testimonials monthly
- Add new practice areas
- Update team information
- Fix any broken links
- Monitor for security issues

### Grow Your Online Presence
- Start a blog
- Share client wins (with permission)
- Post on social media
- Get backlinks from legal directories
- Encourage client reviews

---

**Last Updated:** April 2025
**Questions?** Refer to README.md for comprehensive information.
