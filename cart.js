function productAdd(id) {
    let productData = productsData[id-1];
    const productBoxContent = document.querySelector('.product-box__content');
    const productContent = document.createElement('div');
    const productContentLeft = document.createElement('div');
    productContentLeft.classList.add("productLeft");
    const productContentRight = document.createElement('div');
    productContentRight.classList.add("productRight");
    productContent.classList.add('product');
    const productContent_img=document.createElement('img');
    productContent_img.classList.add('product_img');
    const productContent_des=document.createElement('h2');
    const productContent_price = document.createElement('p');

    const productContent_price_left = document.createElement('span');
    const productContent_price_right = document.createElement('span');
    productContent_price_right.classList.add('productContent_price_right');
    
    const productContent_color=document.createElement('p');
    const productContent_quantity = document.createElement('p');
    const productContent_size = document.createElement('p');
    const productContentClose=document.createElement('img');

    productContent_img.src=productData.img;
    productContent_des.textContent = productData.name;
    productContent_price_left.textContent = "price: ";
    productContent_price_right.textContent = "$"+ productData.price;
    productContent_size.textContent = "size: " + productData.size;
    productContent_color.textContent = "color: " + productData.color;
    productContent_quantity.textContent = "quantity: " + productData.quantity;
    productContentClose.src="./img/close.svg";
    productContentClose.classList.add("close_button");


    productContent_price.appendChild(productContent_price_left);
    productContent_price.appendChild(productContent_price_right);

    productContentLeft.appendChild(productContent_img);
    productContentRight.appendChild(productContent_des);
    productContentRight.appendChild(productContent_price);
    productContentRight.appendChild(productContent_color);
    productContentRight.appendChild(productContent_size);
    productContentRight.appendChild(productContent_quantity);
    productContentRight.appendChild(productContentClose);
    productContent.appendChild(productContentLeft);
    productContent.appendChild(productContentRight);
    productBoxContent.appendChild(productContent);
    if((id-1)==1){
        productContent_img.style.background = "#f7e4e2";
    }
};

function addProductCard() {
    const cart = document.createElement('section');
    cart.classList.add('product-box');
    cart.classList.add('contenier');
    const cardList = document.createElement('div');
    cardList.classList.add('product-box__content');
    const h2 = document.createElement('h2');
    h2.classList.add('product-box__heading');
    h2.textContent = 'Cart Items';
    cart.appendChild(h2);
    cart.appendChild(cardList);
    document.querySelector('.Two_part').before(cart);
}

function closeButtonToggle(box) {
    box.classList.toggle('hidden');
}

const buttonAddToCard=document.querySelectorAll('.hide_button');
buttonAddToCard.forEach(button => {
    button.addEventListener('click', () => {
        if(!document.querySelector('.product-box')){
            addProductCard();
        }
        productAdd(button.id);
    });
});

// удаление элементов и блока на коестике
document.querySelector('body').addEventListener('click', (ev) => {
    if(ev.target.className === 'close_button'){
        ev.target.parentElement.parentElement.remove();
        if(document.querySelectorAll('.close_button').length === 0)// если один товар - удалить блок
            document.querySelector('.product-box').remove();
    }
});
