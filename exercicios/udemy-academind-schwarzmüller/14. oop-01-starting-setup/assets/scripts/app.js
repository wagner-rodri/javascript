
const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pillows_on_a_hotel_bed.jpg/220px-Pillows_on_a_hotel_bed.jpg',
            price: 19.99,
            description: 'A soft pillow!'
    
        },
        {
            title: 'A Carpet',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/220px-Ardabil_Carpet.jpg',
            price: 59.99,
            description: 'A carpet you may like!'
    
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const produEl = document.createElement('li');
            produEl.className = 'product-item';
            produEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}">
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(produEl);
        }
        renderHook.append(productList);
    }
};

productList.render();