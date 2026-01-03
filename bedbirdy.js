// ==========================================
// HOMEPAGE FEATURED PRODUCT SLIDERS
// ==========================================

// Track which image is active per product card on the homepage
let featuredSlideIndex = {};

function initHomepageFeaturedSliders() {
    const cards = document.querySelectorAll('.featured-product-card');
    if (!cards.length) return;

    cards.forEach(card => {
        const productId = card.dataset.productId;
        const product = productsData[productId];
        const imgWrapper = card.querySelector('.product-img');

        if (!product || !imgWrapper) return;

        // Build slideshow inside the product card
        const slideshow = document.createElement('div');
        slideshow.className = 'slideshow homepage-slideshow';

        product.images.forEach((src, idx) => {
            const img = document.createElement('img');
            img.className = 'slide';
            img.src = src;
            img.alt = product.name;
            img.style.display = idx === 0 ? 'block' : 'none';
            slideshow.appendChild(img);
        });

        // Controls: arrows and dots
        const controls = document.createElement('div');
        controls.className = 'featured-slider-controls';

        const prevBtn = document.createElement('button');
        prevBtn.className = 'featured-prev';
        prevBtn.type = 'button';
        prevBtn.innerHTML = '&#10094;'; // <

        const nextBtn = document.createElement('button');
        nextBtn.className = 'featured-next';
        nextBtn.type = 'button';
        nextBtn.innerHTML = '&#10095;'; // >

        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'featured-dots';

        // Auto-play: Change slide every 3 seconds
        let autoSlideInterval = setInterval(() => changeFeaturedSlide(productId, 1), 3000);
        const resetAutoSlide = () => {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(() => changeFeaturedSlide(productId, 1), 3000);
        };

        product.images.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'featured-dot' + (idx === 0 ? ' active' : '');
            dot.dataset.index = idx;
            dot.addEventListener('click', function () {
                setFeaturedSlide(productId, parseInt(this.dataset.index, 10));
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        });

        controls.appendChild(prevBtn);
        controls.appendChild(dotsContainer);
        controls.appendChild(nextBtn);

        imgWrapper.innerHTML = '';
        imgWrapper.appendChild(slideshow);
        imgWrapper.appendChild(controls);

        featuredSlideIndex[productId] = 0;

        prevBtn.addEventListener('click', function () {
            changeFeaturedSlide(productId, -1);
            resetAutoSlide();
        });

        nextBtn.addEventListener('click', function () {
            changeFeaturedSlide(productId, 1);
            resetAutoSlide();
        });

        // Basic swipe support for mobile (left/right)
        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;

        slideshow.addEventListener('touchstart', function (e) {
            const touch = e.changedTouches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
        }, { passive: true });

        slideshow.addEventListener('touchend', function (e) {
            const touch = e.changedTouches[0];
            touchEndX = touch.clientX;
            touchEndY = touch.clientY;

            const diffX = touchEndX - touchStartX;
            const diffY = touchEndY - touchStartY;

            // Only trigger if mostly horizontal movement and above threshold
            if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX < 0) {
                    // swipe left -> next image
                    changeFeaturedSlide(productId, 1);
                } else {
                    // swipe right -> previous image
                    changeFeaturedSlide(productId, -1);
                }
                resetAutoSlide();
            }
        }, { passive: true });
    });
}

function setFeaturedSlide(productId, newIndex) {
    const card = document.querySelector(`.featured-product-card[data-product-id="${productId}"]`);
    if (!card) return;

    const slides = card.querySelectorAll('.product-img .slide');
    const dots = card.querySelectorAll('.featured-dot');
    if (!slides.length) return;

    const maxIndex = slides.length - 1;

    if (newIndex > maxIndex) newIndex = 0;
    if (newIndex < 0) newIndex = maxIndex;

    featuredSlideIndex[productId] = newIndex;

    slides.forEach((slide, idx) => {
        slide.style.display = idx === featuredSlideIndex[productId] ? 'block' : 'none';
    });

    dots.forEach((dot, idx) => {
        if (idx === featuredSlideIndex[productId]) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function changeFeaturedSlide(productId, step) {
    if (typeof featuredSlideIndex[productId] !== 'number') {
        featuredSlideIndex[productId] = 0;
    }
    const current = featuredSlideIndex[productId];
    setFeaturedSlide(productId, current + step);
}

// ==========================================
// PRODUCT DATA
// ==========================================

const productsData = {
    'fitted-sheets': {
        name: 'Premium Fitted Sheet',
        description: 'Premium fitted sheets designed for perfect fit and ultimate comfort. Made with sustainably sourced 100% cotton, featuring deep pockets to securely fit mattresses up to 16 inches thick.',
        images: [
            'product_images/Fitted 1.jpeg',
            'product_images/Fitted 2.jpeg',
            'product_images/Fitted 3.jpeg'
        ]
    },
    'duvet-sets': {
        name: 'Elegant Duvet Set',
        description: 'Elegant duvet sets combining breathable comfort with perfect design. Features a seamless blend of luxury and functionality, ideal for year-round comfort and style.',
        images: [
            'product_images/Duvet 1.jpeg',
            'product_images/Duvet 2.jpeg',
            'product_images/Duvet 3.jpeg'
        ]
    },
    'pillow-cases': {
        name: 'Soft Pillow Cases',
        description: 'The final touch for a perfect night\'s sleep. Our pillow cases feature smooth texture, durable stitching, and premium materials for long-lasting softness and comfort.',
        images: [
            'product_images/Pillow 1.jpeg',
            'product_images/Pillow 2.jpeg',
            'product_images/Pillow 3.jpeg'
        ]
    },
    'comforters': {
        name: 'All-Season Comforter',
        description: 'Lightweight warmth with sustainable fill for year-round comfort. Eco-friendly materials provide exceptional insulation while maintaining breathability and durability.',
        images: [
            'product_images/Comforter 1.jpeg',
            'product_images/Comforter 2.jpeg',
            'product_images/Comforter 3.jpeg'
        ]
    }
};

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.highlight-card, .product-card, .commitment-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.highlight-card, .product-card, .commitment-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize homepage featured product sliders (only on home page)
    if (document.querySelector('.featured-product-card')) {
        initHomepageFeaturedSliders();
    }

    // PURCHASE / CART: Make site display-only
    // Hide any price elements and disable purchase buttons so site does not initiate selling
    document.querySelectorAll('.price, .product-price, .price-tag').forEach(el => el.style.display = 'none');

    const allButtons = Array.from(document.querySelectorAll('.btn'));
    const addToCartButtons = allButtons.filter(btn => btn.querySelector('.fa-shopping-cart'));

    addToCartButtons.forEach(button => {
        // Disable the button and replace with contact text
        try { button.disabled = true; } catch (e) {}
        button.classList.add('disabled');
        // Prefer putting contact text; keep any existing icon removed for clarity
        button.innerHTML = 'Contact to Purchase';

        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Inform users to contact sales — display-only site
            alert('This site is for product display only. To purchase, contact us at business@bedbirdy.com or +91 9137515851.');
        });
    });

});


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(productId, quantity) {
    // Display-only site — do not perform cart operations
    alert('This site is for product display only. To purchase, contact us at business@bedbirdy.com or +91 9137515851.');
}