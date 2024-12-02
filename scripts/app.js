
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('products-container');
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <h2>${product.product_name}</h2>
                <img src="${product.image_url}" alt="${product.product_name}">
                <p>${product.description}</p>
                <p>Price: ₹${product.price}</p>
                <p>Status: ${product.stock_status}</p>
            `;
            container.appendChild(productDiv);
        });
    })
    .catch(err => console.error('Error loading products:', err));
