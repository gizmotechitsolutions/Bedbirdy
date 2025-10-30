# Bedbirdy - A Sustainable Bedding E-commerce Website

This project is a front-end implementation of a modern, responsive e-commerce website for a fictional sustainable bedding brand called "Bedbirdy". It is built using pure HTML, CSS, and JavaScript, focusing on creating a dynamic and interactive user experience without relying on external frameworks.

## Live Demo

*(https://gizmotechitsolutions.github.io/Bedbirdy)*

## Features

*   **Fully Responsive Design:** The layout adapts seamlessly to various screen sizes, from mobile phones to desktop monitors.
*   **Multi-Page Layout:**
    *   **Homepage (`index.html`):** A welcoming landing page featuring hero section, brand highlights, featured products, and company information.
    *   **Products Page (`product.html`):** A comprehensive product listing page.
*   **Interactive Product Filtering:** Users can filter the product grid by category (Fitted Sheets, Duvet Sets, etc.).
*   **Dynamic Product Details:** Clicking "View Details" on a product dynamically populates a detailed section with the correct information, images, and variants for that specific product.
*   **Dynamic Price Calculation:** The displayed price in the product detail section updates in real-time as the user selects different product variants (e.g., size, thread count).
*   **Modern UI/UX:**
    *   Interactive image gallery with thumbnails.
    *   Smooth scrolling for anchor links.
    *   Subtle animations that trigger on scroll.
    *   Functional mobile navigation menu.
    *   Quantity selector for products.
    *   Placeholder "Add to Cart" functionality with a confirmation message.

## Technologies Used

*   **HTML5:** For the structure and content of the web pages.
*   **CSS3:** For all styling, responsiveness, and animations.
    *   **CSS Variables (Custom Properties):** Used for easy theming and maintenance of colors and styles.
    *   **Flexbox & Grid:** For creating modern, robust layouts.
*   **JavaScript (ES6+):** For all interactivity and dynamic content.
    *   **DOM Manipulation:** To update the page content without reloads.
    *   **Event Handling & Delegation:** To manage user interactions efficiently, even on dynamically created elements.
    *   **Data-Driven UI:** Product information is stored in a central JavaScript object, which is used to dynamically generate and update the UI.

## File Structure

```
Bedbirdy_V2/
├── index.html          # The main homepage
├── product.html        # The product listing and detail page
├── bedbirdy.css        # All styles for the website
├── bedbirdy.js         # All JavaScript logic for interactivity
└── README.md           # Project information
```

## How to Run Locally

Since this is a static website, you can run it without any special tools.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Open `index.html` in your browser:**
    *   Simply double-click the `index.html` file in your file explorer.
    *   **Recommended:** For a better development experience that avoids potential issues with file paths, use a live server. If you are using Visual Studio Code, you can install the Live Server extension, right-click on `index.html`, and select "Open with Live Server".

## Key JavaScript Concepts Implemented

*   **Data-Driven UI:** The `productsData` object in `bedbirdy.js` acts as a mini-database. The UI reads from this object to display product details, preventing the need to hardcode the same information multiple times.
*   **Event Delegation:** Instead of adding event listeners to every single thumbnail and variant button (many of which are created dynamically), listeners are attached to parent containers (`#product-detail`, `.thumbnail-list`). This is a more efficient pattern that ensures events work even for elements added to the page later.

*   **Dynamic Price Calculation:** The `updatePrice()` function demonstrates how to calculate a final price by combining a `basePrice` with `modifier` values from selected variants, providing an interactive shopping experience.
