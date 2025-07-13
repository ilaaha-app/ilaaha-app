// This file will contain our app's interactive logic.

// This ensures that the JavaScript code runs only after the entire HTML document has been loaded.

document.addEventListener('DOMContentLoaded', () => {

    // 1. Define our product data (All products now have a 'category' property and 'images' array)

    const products = [

        {

            id: 'monsoon-tunic-1',

            name: 'Emerald Bloom Embroidered Cotton Top',

            description: 'Green cotton top with white embroidery on front, sleeves & border. Features a notch neck and flared sleeves. Soft, breathable & perfect for casual or festive wear.',

            images: ['https://i.postimg.cc/q733jN4f/Tunic.jpg'], // Changed to 'images' array

            colors: ['Cream', 'Navy', 'Mint Green', 'Coral', 'Dusty Pink'],

            price: 'On Request',

            category: 'Top'

        },

        {

            id: 'classic-embroidery-kurti',

            name: 'Black Embroidered Cotton Flex Top',

            description: 'A chic black cotton top featuring elegant rust-orange and white floral embroidery on the neckline, sleeves, and hemline. Made from breathable cotton flex with a flattering V-slit neckline and three-quarter scalloped sleeves.',

            images: ['https://i.postimg.cc/8P7KdvVJ/Generated-Image-July-12-2025-2-19-PM.jpg'], // Changed to 'images' array

            colors: ['Black'],

            price: '₹799',

            category: 'Top'

        },

        {

            id: 'ILCF-1023',

            name: 'Ilaaha Hand-Embroidered Cotton Flex Co-ord Set',

            description: `Elevate your everyday elegance with this beige cotton flex co-ord set featuring intricate black floral embroidery. The top is detailed with pintex on the front panel and a vertical floral motif on one side, adding graceful charm. Paired with straight pants that carry matching floral embroidery on the cuffs, this set combines tradition with contemporary comfort—perfect for casual gatherings or relaxed workwear.

Fabric: Cotton Flex

Color: Beige with Black Embroidery

Available Sizes: S, M, L, XL, XXL`,

            images: ['https://i.postimg.cc/nzsdq96H/file-00000000273061f789f6d7bde0a621bc.png', 'https://via.placeholder.com/300x400?text=Co-ord+Set+Back'], // Example: added a second image URL placeholder

            colors: ['Beige with Black Embroidery'],

            price: '₹1499',

            category: 'Co-ord Set'

        },

        {

            id: 'maroon-floral-top',

            name: 'Maroon Embroidered Cotton Flex Top',

            description: `Elevate your everyday style with this elegant maroon cotton flex top, featuring intricate floral embroidery on the neckline, sleeves, and cuffs. The relaxed fit and tie-up round neckline add a touch of boho charm, while the breathable fabric ensures all-day comfort. Perfect for casual outings or festive gatherings.

Fabric: Cotton Flex

Sleeves: 3/4 Sleeves

Neck: Tie-up Round Neck

Design: Floral Embroidery

Color: Maroon

Ideal for: Casual wear, office, or semi-formal occasions.`,

            images: ['https://i.postimg.cc/mrMwDd7G/file-00000000039c622f99aa0d9728458a9b.png'],

            colors: ['Maroon'],

            price: '₹799',

            category: 'Top'

        },

        {

            id: 'ILA-102',

            name: 'Light Pink Embroidered Cotton Flex Kurti',

            description: `A stylish and elegant cotton flex women's kurti featuring detailed floral embroidery in the front. The kurti is designed in a soft, pastel shade with quarter sleeves and a simple round neckline, making it perfect for casual as well as semi-formal wear. The fabric provides comfort and breathability, ideal for all-day wear in warm climates.

Fabric: Cotton Flex

Work: Embroidered

Color: Light Pink

Available Sizes: M, L, XL, XXL`,

            images: ['https://i.postimg.cc/qBt8MDrD/file-000000007294622faa34e7a534045b37.png'],

            colors: ['Light Pink'],

            price: '₹999',

            category: 'Kurti'

        },

        {

            id: 'elegant-kurti-cream-navy',

            name: 'Elegant Cotton Flex Kurti',

            description: `Discover elegance in simplicity with our beautifully crafted Cotton Flex Kurti featuring intricate thread embroidery on the yoke. The design blends traditional motifs with a modern silhouette, making it perfect for casual outings or festive gatherings. Soft, breathable fabric ensures all-day comfort.`,

            images: ['https://i.postimg.cc/PrWvPBRy/file-00000000d40061f99085267ae0fe3356.png'],

            colors: ['Cream', 'Navy Blue'],

            price: 'On Request',

            category: 'Kurti'

        },

        {

            id: 'ethnic-kurti-set-tribal',

            name: 'Ethnic Embroidery Kurti Set',

            description: `Elevate your everyday style with this elegant Cotton Flex Embroidered Kurti Set by ILAAHA. Featuring intricate white tribal-inspired embroidery on the front, sleeves, and pant hem, this outfit is crafted from breathable cotton flex fabric—perfect for both comfort and style.

Fabric: Cotton Flex

Style: Straight kurti with 3/4th sleeves and matching pants

Fit: Relaxed and comfortable

Occasion: Casual, office wear, or daily elegance

Sizes: M to XXL`,

            images: ['https://i.postimg.cc/vBtC185M/file-00000000200461fdaeba7b04426c9ca8.png'],

            colors: ['Purple', 'Maroon', 'Navy Blue'],

            price: '₹1499',

            category: 'Co-ord Set'

        },

        // --- NEW PLACEHOLDER PRODUCTS FOR FUTURE CATEGORIES ---

        {

            id: 'placeholder-pyjama-001',

            name: 'Future Pyjama Collection',

            description: 'Placeholder product for our upcoming comfortable and stylish pyjama sets.',

            images: ['https://via.placeholder.com/300x400?text=Pyjama+Collection'],

            colors: ['Various'],

            price: 'Coming Soon',

            category: 'Pyjama'

        },

        {

            id: 'placeholder-mens-001',

            name: 'Future Menswear Line',

            description: 'Placeholder product for our exciting new collection for men, combining comfort and elegance.',

            images: ['https://via.placeholder.com/300x400?text=Mens+Collection'],

            colors: ['Various'],

            price: 'Coming Soon',

            category: 'Mens'

        },

        {

            id: 'placeholder-children-001',

            name: 'Future Children\'s Wear',

            description: 'Placeholder product for our adorable and comfortable children\'s clothing line.',

            images: ['https://via.placeholder.com/300x400?text=Childrens+Collection'],

            colors: ['Various'],

            price: 'Coming Soon',

            category: 'Children'

        }

    ];

    // Get references to HTML elements used throughout the app

    const appDiv = document.getElementById('app');

    const modalOverlay = document.getElementById('productModalOverlay');

    const closeButton = document.querySelector('.close-button');

    const modalImage = document.getElementById('modal-product-image');

    const modalName = document.getElementById('modal-product-name');

    const modalDescription = document.getElementById('modal-product-description');

    const modalColors = document.getElementById('modal-product-colors');

    const modalPrice = document.getElementById('modal-product-price');

    const modalInquireButton = document.getElementById('modal-inquire-button');

    // Elements for image gallery inside modal

    const modalImageContainer = document.querySelector('.modal-image-gallery');

    const prevImageButton = document.getElementById('prev-image-button');

    const nextImageButton = document.getElementById('next-image-button');

    const imageDotsContainer = document.getElementById('image-dots-container');

    let currentImageIndex = 0; // To keep track of which image is currently displayed

    // Basic check for all required elements. Log an error if any critical ones are missing.

    if (!appDiv || !modalOverlay || !closeButton || !modalImage || !modalName || !modalDescription || !modalColors || !modalPrice || !modalInquireButton || !modalImageContainer || !prevImageButton || !nextImageButton || !imageDotsContainer) {

        console.error("Critical Error: One or more required HTML elements for the app or modal were not found. Please check your index.html file and ensure all IDs and classes match.");

        if (appDiv) { // If appDiv exists, try to put an error message inside it

            appDiv.innerHTML = "<h1>App encountered a critical error!</h1><p>Some components could not be loaded. Please ensure your `index.html` file is completely correct and all elements have their expected IDs.</p>";

        } else { // Fallback if appDiv itself is missing

            document.body.innerHTML = "<h1>App Load Error!</h1><p>The main app container was not found. Please check your `index.html` file.</p>";

        }

        return; // Stop execution if critical elements are missing

    }

    // Function to display products based on category

    function displayProducts(filterCategory) {

        const productListContainer = document.getElementById('product-list');

        productListContainer.innerHTML = ''; // Clear current products

        const filteredProducts = products.filter(product => {

            return filterCategory === 'All' || product.category === filterCategory;

        });

        if (filteredProducts.length === 0) {

            productListContainer.innerHTML = `<p style="text-align: center; color: #888; margin-top: 50px;">No products found in this category.</p>`;

            return;

        }

        filteredProducts.forEach(product => {

            const productCard = document.createElement('div');

            productCard.className = 'product-card';

            productCard.dataset.productId = product.id; // Store product ID on the card itself for easy lookup when clicked

            const colorsHtml = product.colors.map(color => `<span class="color-chip">${color}</span>`).join('');

            // Display the *first* image from the 'images' array for the main card view

            productCard.innerHTML = `

                <img src="${product.images[0]}" alt="${product.name}" class="product-image">

                <h3>${product.name}</h3>

                <p>${product.description.split('\n')[0]}</p> <p><strong>Price:</strong> ${product.price}</p>

            `;

            productListContainer.appendChild(productCard);

            // Add click listener to the entire product card to open modal

            productCard.addEventListener('click', () => openProductModal(product));

        });

    }

    // Function to open the product detail modal

    function openProductModal(product) {

        // Store the product's images and set initial index

        modalOverlay.currentProduct = product; // Store the product object on the overlay

        currentImageIndex = 0; // Reset to the first image when modal opens

        // Update the image display and dots for the current product

        updateModalImageGallery();

        modalName.textContent = product.name;

        modalDescription.textContent = product.description;

        modalColors.innerHTML = product.colors.map(color => `<span class="color-chip">${color}</span>`).join('');

        modalPrice.textContent = product.price;

        // Set up the WhatsApp inquire button within the modal

        const whatsappMessage = encodeURIComponent(`Hello ILAAHA, I'm interested in the "${product.name}" (${product.id}). Could you please provide more details?`);

        modalInquireButton.onclick = () => {

            window.open(`https://wa.me/918432294313?text=${whatsappMessage}`, '_blank');

        };

        modalOverlay.classList.add('active'); // Show the modal

        document.body.style.overflow = 'hidden'; // Prevent background scrolling

    }

    // Function to update the image in the modal gallery

    function updateModalImageGallery() {

        const product = modalOverlay.currentProduct;

        if (!product || !product.images || product.images.length === 0) {

            modalImage.src = ''; // Clear image

            modalImage.alt = 'No image available';

            return;

        }

        modalImage.src = product.images[currentImageIndex];

        modalImage.alt = product.name;

        // Update dots

        imageDotsContainer.innerHTML = '';

        if (product.images.length > 1) { // Only show dots if there's more than one image

            product.images.forEach((_, index) => {

                const dot = document.createElement('span');

                dot.className = 'image-dot';

                if (index === currentImageIndex) {

                    dot.classList.add('active');

                }

                dot.addEventListener('click', () => {

                    currentImageIndex = index;

                    updateModalImageGallery();

                });

                imageDotsContainer.appendChild(dot);

            });

        }

        // Show/hide navigation buttons based on number of images

        if (product.images.length > 1) {

            prevImageButton.style.display = 'block';

            nextImageButton.style.display = 'block';

        } else {

            prevImageButton.style.display = 'none';

            nextImageButton.style.display = 'none';

        }

    }

    // Event listeners for image navigation buttons

    prevImageButton.addEventListener('click', () => {

        const product = modalOverlay.currentProduct;

        if (product && product.images && product.images.length > 0) {

            currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;

            updateModalImageGallery();

        }

    });

    nextImageButton.addEventListener('click', () => {

        const product = modalOverlay.currentProduct;

        if (product && product.images && product.images.length > 0) {

            currentImageIndex = (currentImageIndex + 1) % product.images.length;

            updateModalImageGallery();

        }

    });

    // Function to close the product detail modal

    function closeModal() {

        modalOverlay.classList.remove('active'); // Hide the modal

        document.body.style.overflow = ''; // Restore background scrolling

    }

    // Event listeners for modal close

    closeButton.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (event) => {

        // Close if clicked directly on the overlay, not on the content itself

        if (event.target === modalOverlay) {

            closeModal();

        }

    });

    // --- Main App Rendering Function ---

    function renderAppContent() {

        appDiv.innerHTML = ''; // Clear everything first

        // 1. Add Logo and Main Headings

        appDiv.innerHTML += `

            <img src="https://i.ibb.co/bMCc00QC/IMG-20250711-WA0055.jpg" alt="ILAAHA Brand Logo" class="brand-logo">

            <h1>Discover ILAAHA!</h1>

            <p>Your destination for elegant and handcrafted garments.</p>

            <h2>Our Products</h2>

        `;

        // 2. Add Filter Buttons

        const categories = ['All', ...new Set(products.map(product => product.category))].filter(Boolean); // Filter out any undefined categories

        const filterButtonsContainer = document.createElement('div');

        filterButtonsContainer.className = 'filter-buttons';

        categories.forEach(category => {

            const button = document.createElement('button');

            button.textContent = category;

            button.className = 'filter-button';

            button.dataset.category = category; // Store category on button for filtering

            filterButtonsContainer.appendChild(button);

        });

        appDiv.appendChild(filterButtonsContainer);

        // Add a container specifically for products that can be cleared and refilled

        const productListDiv = document.createElement('div');

        productListDiv.id = 'product-list'; // Give it an ID to target later

        appDiv.appendChild(productListDiv);

        // Initial display of all products

        displayProducts('All');

        // Add event listeners to filter buttons

        filterButtonsContainer.querySelectorAll('.filter-button').forEach(button => {

            button.addEventListener('click', function() {

                // Remove 'active' class from all buttons to reset styling

                filterButtonsContainer.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));

                // Add 'active' class to the clicked button

                this.classList.add('active');

                displayProducts(this.dataset.category); // Filter and display products

            });

        });

        // Set 'All' button as active initially when the app loads

        const allButton = filterButtonsContainer.querySelector('.filter-button[data-category="All"]');

        if (allButton) {

            allButton.classList.add('active');

        }

        // 3. Add Contact Information Section

        const contactSection = document.createElement('div');

        contactSection.className = 'contact-section';

        contactSection.innerHTML = `

            <h2>Contact Us</h2>

            <p>We'd love to hear from you!</p>

            <div class="contact-links">

                <a href="https://www.ilaaha.com" target="_blank" class="contact-button website-button">Visit Our Website</a>

                <a href="tel:+918432294313" class="contact-button phone-button">Call Us</a>

                <a href="https://wa.me/918432294313" target="_blank" class="contact-button whatsapp-button">WhatsApp Us</a>

                <a href="mailto:care@ilaaha.com" class="contact-button email-button">Email Us</a>

            </div>

        `;

        appDiv.appendChild(contactSection);

        // 4. Add About Us Section

        const aboutSection = document.createElement('div');

        aboutSection.className = 'about-section';

        aboutSection.innerHTML = `

            <h2>About ILAAHA</h2>

            <p>At ILAAHA, we celebrate the timeless elegance of **women's garments**, meticulously crafted to perfection. Our journey began from the ground level, with a passion for traditional artistry and a vision to create something truly unique.</p>

            <p>We are proud to manufacture our exquisite collections right here in the heart of **Rajasthan's vibrant textile industry**, blending rich heritage with contemporary designs.</p>

            <p>From humble beginnings, ILAAHA has grown into a recognized brand, **dealing with both international and domestic clientele**. We are committed to offering unparalleled quality and design, bringing the artistry of Rajasthan to customers worldwide. We started with a dream, and now we are the brand ILAAHA – a testament to dedication and enduring style.</p>

        `;

        appDiv.appendChild(aboutSection);

        // Event listener for the Call Us button (remains the same)

        const callButton = document.querySelector('.phone-button');

        if (callButton) {

            callButton.addEventListener('click', function(event) {

                alert("Attempting to call +918432294313");

            });

        }

    }

    // Call the main app rendering function when the DOM is loaded

    renderAppContent();

}); // End of DOMContentLoaded event listener