document.addEventListener("DOMContentLoaded", () => {
    // --- Navigation & Scroll Effects ---
    const header = document.getElementById("header");
    const navMenu = document.getElementById("nav-menu");
    const menuToggle = document.getElementById("menu-toggle");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");

    // Shrink header on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Hamburger Toggle
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const isActive = navMenu.classList.contains("active");
            
            // Toggle hamburger / close icons
            if (isActive) {
                hamburgerIcon.style.display = "none";
                closeIcon.style.display = "block";
            } else {
                hamburgerIcon.style.display = "block";
                closeIcon.style.display = "none";
            }
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            if (hamburgerIcon && closeIcon) {
                hamburgerIcon.style.display = "block";
                closeIcon.style.display = "none";
            }
        });
    });

    // --- Theme Toggling (Light / Dark Mode) ---
    const themeToggle = document.getElementById("theme-toggle");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');

    // Function to apply theme
    function applyTheme(theme) {
        // theme is either 'light' or 'dark' or 'system'
        let actualTheme = theme;
        if (theme === "system" || !theme) {
            actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }

        document.documentElement.setAttribute("data-theme", actualTheme);
        if (colorSchemeMeta) {
            colorSchemeMeta.content = actualTheme;
        }

        // Toggle Icons
        if (actualTheme === "dark") {
            sunIcon.style.display = "block";
            moonIcon.style.display = "none";
        } else {
            sunIcon.style.display = "none";
            moonIcon.style.display = "block";
        }
    }

    // Initialize Theme
    const savedTheme = localStorage.getItem("color-scheme") || "system";
    applyTheme(savedTheme);

    // Event listener for theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            
            localStorage.setItem("color-scheme", newTheme);
            applyTheme(newTheme);
        });
    }

    // Listen for OS system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        const currentSavedTheme = localStorage.getItem("color-scheme") || "system";
        if (currentSavedTheme === "system") {
            applyTheme("system");
        }
    });

    // --- Scroll-driven Animation Fallback ---
    // CSS uses `@supports ((animation-timeline: view()) and (animation-range: entry))`
    // If not supported natively, we use IntersectionObserver to add classes.
    const supportsScrollTimeline = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');
    
    if (!supportsScrollTimeline) {
        const animatedElements = document.querySelectorAll(".scroll-reveal");
        
        // Mark initially hidden
        animatedElements.forEach(el => el.classList.add("reveal-hidden"));

        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -10% 0px", // Trigger when element is 10% inside viewport
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                    // Once animated, we don't need to track it anymore
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => observer.observe(el));
    }
});