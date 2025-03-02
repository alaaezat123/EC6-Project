let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;  // Return to first slide
    } else if (index < 0) {
        currentIndex = totalSlides - 1;  // Go to last slide
    } else {
        currentIndex = index;
    }

    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Show the current slide
    slides[currentIndex].classList.add('active');
}

// Show next slide
document.getElementById('next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Show previous slide
document.getElementById('prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

// Initialize the slider
showSlide(currentIndex);
















///////////////////////////////////////////////

function addToCart(product) {
    // Here you can add the code to add the product to the cart
    alert(product + ' has been added to the cart.');
}

function showProductDetails(product) {
    let details = {
        vanilla: 'Ingredients: Milk, Cream, Sugar, Vanilla Extract',
        chocolate: 'Ingredients: Milk, Cream, Sugar, Cocoa Powder',
        strawberry: 'Ingredients: Milk, Cream, Sugar, Strawberries',
    };
    document.getElementById(product + '-details').innerText = details[product];
    document.getElementById(product + '-details').style.display = 'block';
}



function addToCart(product) {
    let productDetails = {
        vanilla: { name: "Vanilla Ice Cream", price: 5.99, image: "images/balls-berry-vanilla-ice-cream-waffle-cone-with-multi-colored-capsules-bottle-blue-background.jpg" },
        chocolate: { name: "Chocolate Ice Cream", price: 6.99, image: "images/appetizing-sweet-fruit-ice-cream-glass.jpg" },
        strawberry: { name: "Strawberry Ice Cream", price: 7.99, image: "images/3d-render-ce-cream-cones-with-cream-cookie-blueberry-red-currant-chocolate-chip-cookie.jpg" }
    };

    let selectedProduct = productDetails[product];
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    localStorage.setItem("quantity", 1);
    window.location.href = "checkout.html";
}