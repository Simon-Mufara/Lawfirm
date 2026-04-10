# DEPLOYMENT GUIDE - Choose Your Platform

## 🌐 Platform Comparison

| Platform | Cost | Difficulty | Setup Time | Custom Domain |
|----------|------|-----------|-----------|---------------|
| Netlify | Free | Very Easy | 5 min | Yes |
| Vercel | Free | Very Easy | 5 min | Yes |
| GitHub Pages | Free | Easy | 10 min | Yes |
| Bluehost | $2-12/mo | Medium | 30 min | Yes |
| Hostinger | $2-8/mo | Medium | 30 min | Yes |
| GoDaddy | $3-10/mo | Medium | 30 min | Yes |

---

## 🚀 Netlify (Recommended for Beginners)

### Why Netlify?
✅ Free for basic sites
✅ Automatic HTTPS
✅ Fast global CDN
✅ Form handling included
✅ One-click deployment
✅ Git integration

### Setup (5 minutes)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Law firm website"
   git branch -M main
   git remote add origin https://github.com/yourusername/law-firm.git
   git push -u origin main
   ```

2. **Connect Netlify**
   - Go to **netlify.com**
   - Click "New site from Git"
   - Select GitHub
   - Choose your repository
   - Click Deploy

3. **Add Custom Domain** (Optional)
   - In Site Settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., yourfirm.co.za)
   - Update DNS at your domain registrar

4. **Enable Form Handling**
   - Add `netlify` attribute to form:
   ```html
   <form netlify>
   ```
   - Submissions auto-send to email

---

## 📄 Vercel (Alternative to Netlify)

### Setup (5 minutes)

1. **Push to GitHub** (same as above)

2. **Connect Vercel**
   - Go to **vercel.com**
   - Click "New Project"
   - Import GitHub project
   - Deploy

3. **Add Domain**
   - Project Settings → Domains
   - Add your domain

---

## 🐙 GitHub Pages (Free & Simple)

### Setup (10 minutes)

1. **Repository Setup**
   ```bash
   # For user/org site, name repo: yourusername.github.io
   # For project site, name it anything (e.g., law-firm)

   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

2. **Enable Pages**
   - Go to GitHub repo Settings
   - Scroll to "GitHub Pages"
   - Select "main" branch
   - Click Save

3. **Custom Domain** (Optional)
   - In Pages section, click "Add a domain"
   - Add your domain
   - Update DNS records:
     - Go to your domain registrar
     - Add these A records:
       ```
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
       ```

4. **Update Files**
   - Any push to main automatically deploys

---

## 🏢 Traditional Hosting (Bluehost, GoDaddy, Hostinger)

### Setup (30 minutes)

1. **Purchase Hosting**
   - Buy hosting + domain from registrar
   - Get FTP/cPanel credentials

2. **Upload Files**
   - Use FileZilla (free FTP client) or cPanel File Manager
   - Upload all files to public_html/ folder

3. **Set Up Email** (Optional)
   - Use cPanel to create email accounts
   - Add email links in contact section

4. **Enable HTTPS**
   - cPanel → AutoSSL or Let's Encrypt
   - Force HTTPS redirect

---

## ☁️ AWS S3 + CloudFront

### For Advanced Users

1. **Create S3 Bucket**
   ```bash
   # AWS CLI
   aws s3 mb s3://yourfirm-website
   aws s3 cp . s3://yourfirm-website --recursive
   ```

2. **Enable Static Website Hosting**
   - S3 Settings → Static website hosting
   - Index document: index.html

3. **CloudFront Distribution**
   - Create distribution pointing to S3
   - Add SSL certificate via ACM
   - Point domain CNAME to CloudFront

---

## 🔐 DNS Configuration for Custom Domain

### Example: Using Nameservers (Easiest)

1. **At Netlify/Vercel, copy nameservers:**
   ```
   ns1.netlify.com
   ns2.netlify.com
   ns3.netlify.com
   ns4.netlify.com
   ```

2. **At Domain Registrar:**
   - Go to DNS/Nameservers settings
   - Replace default nameservers with above
   - Save changes (takes 24-48 hours to propagate)

### Example: Using A Records (For cPanel Hosting)

1. **Get hosting IP address** from provider
2. **At domain registrar DNS settings:**
   - Create A record pointing to IP
   - Example:
     ```
     Type: A
     Name: @
     Value: 192.0.2.123 (your hosting IP)
     ```

---

## 📧 Form Submission Handling

### Option 1: Netlify Forms (If using Netlify)
Already included! Just add `netlify` attribute:
```html
<form netlify>
    <!-- form fields -->
</form>
```

### Option 2: Formspree (Any Host)
1. Sign up: **formspree.io**
2. Get form ID
3. Update HTML form action:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Option 3: Web3Forms (Any Host)
1. Sign up: **web3forms.com**
2. Get access key
3. Add to form:
```html
<form method="POST" action="https://api.web3forms.com/submit">
    <input type="hidden" name="access_key" value="YOUR_KEY">
```

---

## ✅ Pre-Deployment Checklist

### Content
- [ ] All contact information correct
- [ ] Phone numbers working
- [ ] Email address verified
- [ ] Google Maps updated
- [ ] Testimonials updated
- [ ] Practice areas accurate

### Technical
- [ ] All images loaded
- [ ] All links work
- [ ] Forms tested
- [ ] Mobile responsive
- [ ] No console errors
- [ ] HTTPS enabled

### SEO
- [ ] Meta descriptions updated
- [ ] Title tags correct
- [ ] Sitemap created
- [ ] robots.txt configured
- [ ] Analytics code added

### Security
- [ ] No sensitive data in code
- [ ] HTTPS certificate installed
- [ ] Form validation enabled
- [ ] Contact info protected

---

## 🚀 Deployment Checklist

### Pre-Deployment
```bash
# Test locally
npm install -g http-server
http-server
# Visit http://localhost:8080

# Check everything works
# Then commit to git
git add .
git commit -m "Ready for deployment"
git push origin main
```

### After Deployment
1. **Verify Site**
   - Visit URL
   - Check all pages
   - Test contact form
   - Verify mobile view

2. **Monitor**
   - Check for errors
   - Monitor uptime
   - Track analytics
   - Check form submissions

3. **Optimize**
   - Run Lighthouse
   - Check Page Speed
   - Monitor Core Web Vitals
   - Optimize images if needed

---

## 🔗 Popular Registrars for Domain

- **Namecheap** - namecheap.com
- **GoDaddy** - godaddy.com
- **Bluehost** - bluehost.com
- **Google Domains** - domains.google.com (closing, migrate to Squarespace)
- **Hostinger** - hostinger.com
- **Ionos** - ionos.com

### South Africa Specific
- **Xneelo** - xneelo.co.za
- **Afrihost** - afrihost.com
- **Internet.co.za** - internet.co.za

---

## 📊 Recommended Setup Flow

**For Technical Users:**
Netlify + GitHub + Formspree
- Deploy in 5 minutes
- Free tier
- Professional results

**For Beginners:**
Bluehost/Hostinger + cPanel
- All-inclusive hosting
- Site builder available
- Support included

**For Developers:**
AWS/Google Cloud + GitHub Actions
- Most control
- Best for scaling
- Learning curve

---

## 🆘 Troubleshooting Deployment

| Problem | Solution |
|---------|----------|
| Site shows 404 | Check index.html in root folder |
| Images broken | Verify image paths use ./ not ../ |
| Forms don't work | Verify service configured (Netlify/Formspree) |
| Domain not working | Wait 24-48 hours for DNS propagation |
| HTTPS not working | Check SSL certificate installed |
| Custom domain redirects wrong | Verify DNS records are correct |

---

## 📞 Deployment Summary

Choose based on your needs:
- **Start Simple:** Netlify (5 min setup)
- **Most Popular:** Bluehost (30 min, included domain)
- **Most Control:** GitHub Pages (10 min, free)
- **Enterprise:** AWS (complex, scalable)

**Recommended: Netlify** - Best balance of ease and features.

---

**Last Updated:** April 2025
**Next Step:** Follow your chosen platform's detailed setup instructions
