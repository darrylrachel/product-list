document.addEventListener('DOMContentLoaded', async () => {
    const productContainer = document.getElementById('product-container');

    try{
        // Fetch product data
        let response = await fetch('src/js/data.json');
        let products = await response.json();

        // Loop through products to generate cards
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product__cards-card', 'card');

            productCard.innerHTML = `
                <img src="${product.image.desktop}" alt="${product.name}" class="product__img">
                <button class="btn outline-light atc-btn" data-id="${product.id}">
                    <img src="/src/assets/images/icon-add-to-cart.svg" alt="" class="cart-icon"> Add To Cart
                </button>
                <div class="product__details">
                  <div class="product__category">${product.category}</div>
                  <div class="product__name">${product.name}</div>
                  <div class="product__price">$${product.price.toFixed(2)}</div>
                </div>`;

            // Append card to container
            productContainer.appendChild(productCard);
        });

        console.log('Products Loaded Successfully!');


    } catch (error) {
        console.log('Error fetching products', error);
    }
})