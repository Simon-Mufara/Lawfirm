/* ============================================
   PREMIUM LAW FIRM WEBSITE - JAVASCRIPT
   ============================================ */

// ============================================
// NAVBAR & MOBILE MENU
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contactForm');
const formEndpoint = contactForm?.dataset?.formEndpoint || '';
const isPlaceholderFormEndpoint = !/^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(formEndpoint);
const allowedServices = new Set(['civil', 'bail', 'family', 'labour', 'protection', 'contracts', 'other']);
const allowedUrgencies = new Set(['normal', 'urgent', 'critical']);
const turnstileWidget = document.querySelector('.cf-turnstile');
const hasTurnstileConfigured = Boolean(turnstileWidget && turnstileWidget.dataset.sitekey && !/REPLACE_WITH_TURNSTILE_SITE_KEY/i.test(turnstileWidget.dataset.sitekey));

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Update active link on scroll (RAF-throttled for smoother mobile performance)
let isScrollTicking = false;
const updateNavOnScroll = () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', () => {
    if (isScrollTicking) {
        return;
    }
    isScrollTicking = true;
    window.requestAnimationFrame(() => {
        updateNavOnScroll();
        if (scrollToTopBtn) {
            scrollToTopBtn.classList.toggle('show', window.pageYOffset > 300);
        }
        isScrollTicking = false;
    });
}, { passive: true });

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
    });
}

// ============================================
// SMOOTH SCROLL ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const formLoadTimestamp = Date.now();
let lastFormSubmissionAt = 0;
const formThrottleMs = 15000;
const minHumanFillMs = 2500;
const requestTimeoutMs = 10000;
let lastSubmissionFingerprint = '';

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const now = Date.now();
        if (now - formLoadTimestamp < minHumanFillMs) {
            showAlert('Please take a moment to complete the form before submitting.');
            return;
        }

        if (now - lastFormSubmissionAt < formThrottleMs) {
            showAlert('Please wait a few seconds before sending another inquiry.');
            return;
        }

        // Get form data
        const formData = new FormData(contactForm);
        const honeypot = String(formData.get('website') || '').trim();
        if (honeypot) {
            return;
        }
        const turnstileToken = String(formData.get('cf-turnstile-response') || '').trim();
        if (hasTurnstileConfigured && !turnstileToken) {
            showAlert('Please complete the security verification before submitting.');
            return;
        }
        const data = buildSafePayload(formData);
        if (turnstileToken) {
            data['cf-turnstile-response'] = turnstileToken;
        }

        // Validate form
        if (!validateForm(data)) {
            return;
        }

        const payloadFingerprint = `${data.email}|${data.phone}|${data.service}|${data.message.toLowerCase()}`;
        if (payloadFingerprint === lastSubmissionFingerprint && now - lastFormSubmissionAt < 5 * 60 * 1000) {
            showAlert('Duplicate inquiry detected. Please wait a moment before sending the same message again.');
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            if (isPlaceholderFormEndpoint) {
                throw new Error('FORM_ENDPOINT_NOT_CONFIGURED');
            }

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), requestTimeoutMs);
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data),
                mode: 'cors',
                cache: 'no-store',
                redirect: 'error',
                referrerPolicy: 'no-referrer',
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (response.ok) {
                showSuccessMessage(contactForm);
                contactForm.reset();
                lastFormSubmissionAt = Date.now();
                lastSubmissionFingerprint = payloadFingerprint;
                if (window.turnstile && turnstileWidget) {
                    window.turnstile.reset(turnstileWidget);
                }
            } else {
                showErrorMessage(contactForm);
            }

        } catch (error) {
            console.error('Form submission error:', error);
            const setupMessage = 'Form temporarily unavailable. Please call or email us directly while we finalize online submissions.';
            showErrorMessage(contactForm, isPlaceholderFormEndpoint ? setupMessage : undefined);
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Form validation
function validateForm(data) {
    const normalizedName = String(data.fullname || '').trim();
    const normalizedEmail = String(data.email || '').trim();
    const normalizedPhone = String(data.phone || '').trim();
    const normalizedMessage = String(data.message || '').trim();

    // Basic validation
    if (normalizedName.length < 2 || normalizedName.length > 80 || !/^[A-Za-zÀ-ÿ'’\-. ]+$/.test(normalizedName)) {
        showAlert('Please enter a valid name');
        return false;
    }

    if (!isValidEmail(normalizedEmail)) {
        showAlert('Please enter a valid email address');
        return false;
    }

    if (!/^[+\d()\-\s]{7,25}$/.test(normalizedPhone)) {
        showAlert('Please enter a valid phone number');
        return false;
    }

    if (!data.service || !allowedServices.has(data.service)) {
        showAlert('Please select a service');
        return false;
    }

    if (data.urgency && !allowedUrgencies.has(data.urgency)) {
        showAlert('Please select a valid urgency level');
        return false;
    }

    if (normalizedMessage.length < 10 || normalizedMessage.length > 1500) {
        showAlert('Please write a message with at least 10 characters');
        return false;
    }

    if (/(<script|javascript:|<iframe|onerror=|onload=)/i.test(normalizedMessage)) {
        showAlert('Please remove unsupported formatting from your message and try again.');
        return false;
    }

    return true;
}

function normalizeWhitespace(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
}

function buildSafePayload(formData) {
    return {
        fullname: normalizeWhitespace(formData.get('fullname')).slice(0, 80),
        email: normalizeWhitespace(formData.get('email')).slice(0, 120).toLowerCase(),
        phone: normalizeWhitespace(formData.get('phone')).slice(0, 25),
        service: normalizeWhitespace(formData.get('service')),
        message: normalizeWhitespace(formData.get('message')).slice(0, 1500),
        urgency: normalizeWhitespace(formData.get('urgency') || 'normal')
    };
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success message
function showSuccessMessage(form) {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = '✓ Message sent successfully! We\'ll contact you within 24 hours.';
    form.parentElement.insertBefore(message, form);

    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Show error message
function showErrorMessage(form, text) {
    const message = document.createElement('div');
    message.className = 'error-message';
    message.textContent = text || '✗ Oops! Something went wrong. Please try again or call us directly.';
    form.parentElement.insertBefore(message, form);

    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Show alert
function showAlert(text) {
    alert(text);
}

// ============================================
// FORM MESSAGE STYLES
// ============================================

const messageStyle = document.createElement('style');
messageStyle.innerHTML = `
    .success-message,
    .error-message {
        padding: 15px 20px;
        margin-bottom: 20px;
        border-radius: 6px;
        font-weight: 500;
        animation: slideDown 0.3s ease-out;
        z-index: 100;
        position: relative;
    }

    .success-message {
        background: rgba(16, 185, 129, 0.15);
        color: #10b981;
        border-left: 4px solid #10b981;
    }

    .error-message {
        background: rgba(239, 68, 68, 0.15);
        color: #ef4444;
        border-left: 4px solid #ef4444;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(messageStyle);

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .why-item, .testimonial-item, .info-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ============================================
// NUMBER COUNTER ANIMATION
// ============================================

const observerCounter = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const fullText = statNumber.textContent;
            const target = parseInt(fullText, 10);

            if (isNaN(target)) {
                return;
            }

            let current = 0;
            const increment = Math.ceil(target / 30);

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    const hasPlus = fullText.includes('+');
                    statNumber.textContent = hasPlus ? `${target}+` : `${target}`;
                    clearInterval(timer);
                    observerCounter.unobserve(entry.target);
                } else {
                    statNumber.textContent = `${current}`;
                }
            }, 30);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    observerCounter.observe(stat);
});

// ============================================
// SERVICE CARDS INTERACTION - IMMEDIATE SCROLL TO CONTACT
// ============================================

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    const learnMoreLink = card.querySelector('.learn-more');
    if (learnMoreLink) {
        learnMoreLink.addEventListener('click', (e) => {
            e.preventDefault();

            // Track which service was selected
            const serviceTitle = card.querySelector('h3').textContent;
            trackEvent('service_selected', {
                service: serviceTitle,
                timestamp: new Date().toISOString()
            });

            // Get the service field and update it
            const serviceField = document.getElementById('service');
            const serviceMap = {
                'Civil Litigation': 'civil',
                'Bail Applications': 'bail',
                'Family Law': 'family',
                'Labour Law & CCMA': 'labour',
                'Protection Orders': 'protection',
                'Contract Drafting': 'contracts'
            };

            if (serviceField && serviceMap[serviceTitle]) {
                serviceField.value = serviceMap[serviceTitle];
            }

            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                setTimeout(() => {
                    contactSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
                    // Focus on the form for accessibility
                    const fullnameField = document.getElementById('fullname');
                    if (fullnameField) {
                        fullnameField.focus();
                    }
                }, 100);
            }
        });
    }
});

// ============================================
// KEYBOARD NAVIGATION SUPPORT
// ============================================

document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// FORM INPUT FORMATTING
// ============================================

const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 0) {
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 3) + ' ' + value.slice(3);
            } else if (value.length <= 10) {
                value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6);
            } else {
                value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 10);
            }
        }

        e.target.value = value;
    });
}

// ============================================
// ANALYTICS & TRACKING (optional)
// ============================================

function trackEvent(eventName, eventData) {
    // Add your analytics code here (Google Analytics, Mixpanel, etc.)
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
}

// Track CTA clicks
document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
        const text = btn.textContent.trim();
        const href = btn.getAttribute('href');
        trackEvent('cta_click', {
            button_text: text,
            link_target: href,
            timestamp: new Date().toISOString()
        });
    });
});

// Track form submission
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        trackEvent('contact_form_submit', {
            timestamp: new Date().toISOString()
        });
    });
}

// ============================================
// SERVICE CARD FOCUS - HIGHLIGHT CONTACT FORM
// ============================================

document.querySelectorAll('.learn-more, .scenario-action').forEach(link => {
    link.addEventListener('click', function(e) {
        // Highlight the contact form when a service is clicked
        setTimeout(() => {
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                contactForm.style.transition = 'all 0.4s ease';
                contactForm.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.4)';
                contactForm.style.borderColor = '#d4af37';

                // Remove highlight after 3 seconds
                setTimeout(() => {
                    contactForm.style.boxShadow = '';
                    contactForm.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                }, 3000);
            }
        }, 500);
    });
});

// ============================================
// SETUP ACCESSIBILITY
// ============================================

function setupAccessibility() {
    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('button, input, textarea, select');
    interactiveElements.forEach(el => {
        if (!el.getAttribute('tabindex')) {
            el.setAttribute('tabindex', '0');
        }
    });
}

// ============================================
// PAGE LOAD INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupAccessibility();

    // Log page load time
    window.addEventListener('load', () => {
        if (window.performance) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            if (window.gtag && pageLoadTime > 0) {
                gtag('event', 'timing_complete', {
                    name: 'page_load',
                    value: pageLoadTime
                });
            }
        }
    });
});

// ============================================
// END OF JAVASCRIPT
// ============================================
