// Updated product data with actual images
const products = [
  {
    id: 1,
    name: "Rose Face Cream",
    price: 19.99,
    image: "https://example.com/images/rose-face-cream.jpg"
  },
  {
    id: 2,
    name: "Aloe Vera Gel",
    price: 14.99,
    image: "https://example.com/images/aloe-vera-gel.jpg"
  },
  {
    id: 3,
    name: "Lavender Body Lotion",
    price: 22.99,
    image: "https://example.com/images/lavender-body-lotion.jpg"
  },
  {id: 4, 
  name: "Rose Face Cream", 
  price: 19.99, 
  image: "https://example.com/images/rose-face-cream.jpg"
},
  {
    id: 5,
    name: "Cucumber Eye Gel",
    price: 12.99,
    image: "https://example.com/images/cucumber-eye-gel.jpg"
  },
 
    {
      id: 6, 
    name: "Tea Tree Oil", 
    price: 9.99, 
    image: "https://example.com/images/tea-tree-oil.jpg"
  },
    {
    id: 7, 
    name: "Charcoal Face Mask", 
    price: 15.99, 
    image: "https://example.com/images/charcoal-face-mask.jpg"
  },
    {
    id: 8, 
    name: "Vitamin C Serum", 
    price: 29.99, 
    image: "https://example.com/images/vitamin-c-serum.jpg"
  },
    {id: 9, 
   name: "Hyaluronic Acid Moisturizer", 
   price: 24.99, 
   image: "https://example.com/images/hyaluronic-acid-moisturizer.jpg"
  },
    {
      id: 10, 
      name: "Sunscreen SPF 50", 
      price: 18.99, 
      image: "https://example.com/images/sunscreen-spf-50.jpg"
    },
    {
    id: 11, 
    name: "Exfoliating Scrub", 
    price: 16.99, 
    image: "https://example.com/images/exfoliating-scrub.jpg"
  },
    {
    id: 12, 
    name: "Nourishing Hair Oil", 
    price: 21.99, 
    image: "https://example.com/images/nourishing-hair-oil.jpg"
  },
    {
      id: 13, 
      name: "Lip Balm", 
      price: 5.99, 
      image: "https://example.com/images/lip-balm.jpg"
    },
    {
    id: 14, 
    name: "Foot Cream", 
    price: 11.99, 
    image: "https://example.com/images/foot-cream.jpg"
  },
    {
      id: 15, 
    name: "Hand Cream", 
    price: 13.99, 
    image: "https://example.com/images/hand-cream.jpg"
  },
    {
      id: 16, 
      name: "Body Wash", 
      price: 17.99, 
      image: "https://example.com/images/body-wash.jpg"
    },
    {
    id: 17, 
    name: "Shampoo", 
    price: 19.99, 
    image: "https://example.com/images/shampoo.jpg"
  },
    {
      id: 18, 
      name: "Conditioner", 
      price: 19.99, 
      image: "https://example.com/images/conditioner.jpg"
    },
    {
      id: 19, 
      name: "Face Wash", 
      price: 14.99, 
      image: "https://example.com/images/face-wash.jpg"
    },
    {
      id: 20, 
    name: "Makeup Remover", 
    price: 12.99, 
    image: "https://example.com/images/makeup-remover.jpg"
  },
    {
      id: 21, 
      name: "Facial Toner", 
      price: 15.99, 
      image: "https://example.com/images/facial-toner.jpg"
    },
    {
      id: 22, 
    name: "Moisturizing Cream", 
    price: 20.99, 
    image: "https://example.com/images/moisturizing-cream.jpg"
  },
    {
      id: 23, 
      name: "Anti-Aging Serum", 
      price: 29.99, 
      image: "https://example.com/images/anti-aging-serum.jpg"
    },
    {
    id: 24, 
    name: "Brightening Cream", 
    price: 24.99, 
    image: "https://example.com/images/brightening-cream.jpg"
  },
    {
      id: 25, 
      name: "Peeling Gel", 
      price: 18.99, 
      image: "https://example.com/images/peeling-gel.jpg"
    },
 
];

// Cart array to store selected products
let cart = [];

// Function to display products dynamically
function displayProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ""; // Clear existing content

  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartTotal.textContent = total.toFixed(2);
}

// Function to toggle the cart modal visibility
function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

// Function to clear the cart
function clearCart() {
  cart = [];
  updateCartUI();
}

// Function to handle checkout
function checkout() {
  alert("Thanks for your purchase!");
  clearCart();
  toggleCart();
}

// Call the displayProducts function on page load
window.onload = displayProducts;
