const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // Corrected class name to remove
    }) ;
}

        smallimg[0].onclick = function() {
            MainImg.src = smallimg[0].src;
        }

        smallimg[1].onclick = function() {
            MainImg.src = smallimg[1].src;
        }

        smallimg[2].onclick = function() {
            MainImg.src = smallimg[2].src;
        }

        smallimg[3].onclick = function() {
            MainImg.src = smallimg[3].src;
        }


     // Function to add a product to the cart
function addToCart(product) {
    // Get the current cart from local storage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    let existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        // If the product already exists, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // If the product doesn't exist, add it to the cart with quantity 1
        product.quantity = 1;
        cart.push(product);
    }

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart icon with the number of items
    updateCartIcon();
}

