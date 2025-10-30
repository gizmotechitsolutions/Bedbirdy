// Data store for product details
const productsData = {
    'fitted-sheets': {
        name: 'Premium Fitted Sheet',
        basePrice: 1499,
        description: 'Our premium fitted sheets are designed for the perfect fit and ultimate comfort. Made with sustainably sourced 100% cotton, they feature deep pockets to securely fit mattresses up to 16 inches thick.',
        images: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        ],
        variants: {
            'Thread Count': [
                { name: '225TC', modifier: 0 },
                { name: '300TC', modifier: 500 },
                { name: '400TC', modifier: 1000 }
            ],
            'Size': [
                { name: 'Single', modifier: 0 },
                { name: 'Double', modifier: 200 },
                { name: 'Queen', modifier: 400 },
                { name: 'King', modifier: 600 }
            ],
            'Color': [
                { name: 'White', modifier: 0 },
                { name: 'Beige', modifier: 0 },
                { name: 'Sky Blue', modifier: 50 },
                { name: 'Sage Green', modifier: 50 }
            ]
        }
    },
    'duvet-sets': {
        name: 'Elegant Duvet Set',
        basePrice: 3999,
        description: 'Transform your bedroom with our elegant duvet sets. This set includes a duvet cover and two matching pillow shams, crafted from breathable, soft-touch cotton for a luxurious feel.',
        images: [
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
            'https://images.unsplash.com/photo-1629078892104-41724b63277b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        ],
        variants: {
            'Pattern': [
                { name: 'Solid', modifier: 0 },
                { name: 'Striped', modifier: 300 },
                { name: 'Floral', modifier: 500 }
            ],
            'Size': [
                { name: 'Double', modifier: 0 },
                { name: 'Queen', modifier: 500 },
                { name: 'King', modifier: 1000 }
            ],
            'Color': [
                { name: 'Ivory', modifier: 0 },
                { name: 'Charcoal', modifier: 0 },
                { name: 'Navy Blue', modifier: 100 }
            ]
        }
    },
    'pillow-cases': {
        name: 'Soft Pillow Cases (Set of 2)',
        basePrice: 499,
        description: 'Add the final touch to your bedding with our soft pillow cases. Woven from long-staple cotton, they are gentle on your skin and hair, ensuring a comfortable night\'s sleep.',
        images: [
            'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
            'https://images.unsplash.com/photo-1617353244033-b11b89dea422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
            'https://images.unsplash.com/photo-1592229505412-5a063ac5159a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        ],
        variants: {
            'Thread Count': [
                { name: '225TC', modifier: 0 },
                { name: '300TC', modifier: 200 },
                { name: '400TC', modifier: 400 }
            ],
            'Style': [
                { name: 'Standard', modifier: 0 },
                { name: 'Oxford', modifier: 100 }
            ],
            'Color': [
                { name: 'White', modifier: 0 },
                { name: 'Beige', modifier: 0 },
                { name: 'Sky Blue', modifier: 25 },
                { name: 'Sage Green', modifier: 25 }
            ]
        }
    },
    'comforters': {
        name: 'All-Season Comforter',
        basePrice: 4499,
        description: 'Our all-season comforter provides the perfect lightweight warmth. Filled with a sustainable, hypoallergenic down-alternative, it\'s designed for year-round comfort.',
        images: [
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
            'https://images.unsplash.com/photo-1604328455053-441137c8839c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
            'https://images.unsplash.com/photo-1567440938443-3b3415a4005c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        ],
        variants: {
            'Fill': [{ name: 'Lightweight', modifier: 0 }, { name: 'Medium-weight', modifier: 1000 }],
            'Size': [{ name: 'Single', modifier: 0 }, { name: 'Double', modifier: 500 }, { name: 'Queen', modifier: 1000 }, { name: 'King', modifier: 1500 }],
            'Color': [{ name: 'White', modifier: 0 }, { name: 'Light Grey', modifier: 0 }]
        }
    }
};

// Function to update the product detail section
function updateProductDetail(productId) {
    const product = productsData[productId];
    if (!product) return;

    const detailSection = document.getElementById('product-detail');
    if (!detailSection) return;

    // Update text content
    // Store the current product ID on the detail section itself for later reference
    detailSection.dataset.currentProduct = productId;

    detailSection.querySelector('.product-info h2').textContent = product.name;
    detailSection.querySelector('.product-info > p:nth-of-type(2)').textContent = product.description;

    // Update images
    detailSection.querySelector('.main-image img').src = product.images[0];
    const thumbnailList = detailSection.querySelector('.thumbnail-list');
    thumbnailList.innerHTML = ''; // Clear existing thumbnails
    product.images.forEach((imgSrc, index) => {
        const thumbDiv = document.createElement('div');
        thumbDiv.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbDiv.innerHTML = `<img src="${imgSrc}" alt="Product Thumbnail ${index + 1}">`;
        thumbnailList.appendChild(thumbDiv);
    });

    // Update variants
    const variantsContainer = detailSection.querySelector('.product-info');
    // Remove old variants, but keep h2, price, p, and actions
    variantsContainer.querySelectorAll('.product-variants').forEach(el => el.remove());
    const actions = variantsContainer.querySelector('.product-actions');
    for (const variantName in product.variants) {
        const variantGroup = document.createElement('div');
        variantGroup.className = 'product-variants';
        let buttonsHTML = `<h4>${variantName}:</h4>`;
        product.variants[variantName].forEach((variant, index) => {
            buttonsHTML += `<button class="variant-btn ${index === 0 ? 'active' : ''}">${variant.name}</button>`;
        });
        variantGroup.innerHTML = buttonsHTML;
        // Insert before the actions div
        variantsContainer.insertBefore(variantGroup, actions);
    }

    // Set the initial price
    updatePrice(productId);
}

// Function to calculate and update the price based on selected variants
function updatePrice(productId) {
    const product = productsData[productId];
    if (!product) return;

    let currentPrice = product.basePrice;

    const detailSection = document.getElementById('product-detail');
    const variantGroups = detailSection.querySelectorAll('.product-variants');

    variantGroups.forEach(group => {
        const variantType = group.querySelector('h4').textContent.replace(':', '');
        const activeBtn = group.querySelector('.variant-btn.active');
        if (activeBtn) {
            const selectedOptionName = activeBtn.textContent;
            const variantData = product.variants[variantType].find(v => v.name === selectedOptionName);
            if (variantData) {
                currentPrice += variantData.modifier;
            }
        }
    });

    detailSection.querySelector('.product-info .price').textContent = `₹${currentPrice.toLocaleString('en-IN')}`;
}

// Mobile Menu Toggle
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

    // Product Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                productCards.forEach(product => {
                    if (filter === 'all' || product.getAttribute('data-category') === filter) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
    }

    // Thumbnail Gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');
    
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => {
                    t.classList.remove('active');
                });
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Update main image
                const thumbSrc = this.querySelector('img').getAttribute('src');
                mainImage.setAttribute('src', thumbSrc);
            });
        });
        // Re-delegate events for dynamically added thumbnails
        document.querySelector('.thumbnail-list').addEventListener('click', function(e) {
            if (e.target.closest('.thumbnail')) {
                document.querySelectorAll('.thumbnail-list .thumbnail').forEach(t => t.classList.remove('active'));
                const clickedThumb = e.target.closest('.thumbnail');
                clickedThumb.classList.add('active');
                mainImage.src = clickedThumb.querySelector('img').src;
            });
        });
    }

    // Product Variants
    const variantButtons = document.querySelectorAll('.variant-btn');
    
    if (variantButtons.length > 0) {
        variantButtons.forEach(button => {
            button.addEventListener('click', function() {
                const parent = this.parentElement;
                
                // Remove active class from all buttons in the same group
                parent.querySelectorAll('.variant-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
            });
        });
        // Re-delegate events for dynamically added variant buttons
        document.getElementById('product-detail').addEventListener('click', function(e) {
            if (e.target.classList.contains('variant-btn')) {
                const clickedButton = e.target;
                const variantGroup = clickedButton.closest('.product-variants');
                variantGroup.querySelectorAll('.variant-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                clickedButton.classList.add('active');
                // Update the price whenever a variant changes
                const currentProductId = document.getElementById('product-detail').dataset.currentProduct;
                updatePrice(currentProductId);
            }
        });
    }

    // Quantity Selector
    const quantityButtons = document.querySelectorAll('.quantity-btn');
    
    if (quantityButtons.length > 0) {
        quantityButtons.forEach(button => {
            button.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.quantity-input');
                let value = parseInt(input.value);
                
                if (this.textContent === '+') {
                    value++;
                } else if (this.textContent === '-' && value > 1) {
                    value--;
                }
                
                input.value = value;
            });
        });
    }

    // View Details Button
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    
    if (viewDetailsButtons.length > 0) {
        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get product ID and update the detail section
                const productId = this.getAttribute('data-product-id');
                updateProductDetail(productId);

                const productDetailSection = document.getElementById('product-detail');
                if (productDetailSection) {
                    productDetailSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

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
});

// Add to Cart functionality (placeholder)
function addToCart(productId, quantity) {
    // This would typically connect to a shopping cart system
    console.log(`Added ${quantity} of product ${productId} to cart`);
    
    // Show confirmation message
    const confirmation = document.createElement('div');
    confirmation.textContent = 'Product added to cart!';
    confirmation.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        z-index: 1001;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(confirmation);
    
    setTimeout(() => {
        confirmation.remove();
    }, 3000);
}

// Initialize add to cart buttons
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn[class*="fa-shopping-cart"]');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.closest('.product-info').querySelector('h2').textContent;
            const quantity = this.closest('.product-actions').querySelector('.quantity-input').value;
            
            addToCart(productId, quantity);
        });
    });
});