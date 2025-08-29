document.addEventListener('DOMContentLoaded',()=>{
    const cart = [ ];
    const products=[
        {
            id:1,name:"Product1",price:29.99
        },{
            id:2,name:"Product2",price:19.99
        },{
            id:3,name:"Product3",price:59.99
        },
    ]

    const productlist = document.getElementById('product-list');
    products.forEach(product => {
        const productdiv = document.createElement('div');
        productdiv.classList.add('product');
        productdiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to Cart</button>
        `;
        productlist.appendChild(productdiv);
    });
    productlist.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON'){
            const productId = parseInt(e.target.dataset.id);
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCart();
        }
    });

    function updateCart() {
        const cartContainer = document.querySelector('.cart');
        cartContainer.innerHTML = '<h2>Shopping Cart</h2>';
        let total = 0;

        cart.forEach(item => {
            const p = document.createElement('p');
            p.innerText = item.name;
            cartContainer.appendChild(p);
            total += item.price;
        });

        const totalDiv = document.createElement('div');
        totalDiv.classList.add('total-amount');
        totalDiv.innerHTML = `<span> Total: $${total.toFixed(2)}</span>`;
        cartContainer.appendChild(totalDiv);
        
        const checkoutBtndiv= document.createElement('button');
        checkoutBtndiv.classList.add('checkout-btn');
        checkoutBtndiv.innerText = 'Checkout';
        cartContainer.appendChild(checkoutBtndiv);
    }
})
