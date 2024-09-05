//Glue bw View and Model
//Controller UI i/O
//Data exchange bw view and model
import productOperations from "../services/product-operations.js";
async function loadPizzas(){
    const pizzas= await productOperations.loadProducts();
    console.log("Pizzas are: " ,pizzas);
    for(let pizza of pizzas){
        preparePizzaCard(pizza);
    }
}
loadPizzas();
//HTML Code
function addToCart(){
    //this - keyword current calling object reference
    console.log("Add to cart called", this);
    const currentButton= this;
    const pizzaId= currentButton.getAttribute('product-id');
    console.log("Pizza ID is ", pizzaId);
    productOperations.searchProducts(pizzaId);
    printBasket();
}
export function printBasket(){
    const cartProducts= productOperations.getProductsInCart();
    const basket= document.querySelector('#basket');
    basket.innerHTML= '';
    let priceTotal=0;
    for(let product of cartProducts){
        const li= document.createElement('li');
        li.innerText='Pizza Name: '+ ` ${product.name}` +' $'+ `${product.price}`+' x '+`${product.quantity}`; 
        priceTotal= priceTotal + Number(product.price)*product.quantity; 
        basket.appendChild(li);
        
    }
    const paymentTotal= document.createElement('p');
    paymentTotal.innerText= 'Your Total Price Is:  $'+ priceTotal.toFixed(2);
    basket.appendChild(paymentTotal);
    console.log(priceTotal);
    return Math.round(priceTotal*100);
}

function preparePizzaCard(pizza){
    const outputDiv= document.querySelector('#output');
    const colDiv= document.createElement('div');
    colDiv.className= 'col-4';
    colDiv.style='margin:0;';
    const cardDiv= document.createElement('div');
    cardDiv.className= 'card';
    cardDiv.style= 'margin:0; width: 18rem;';
    colDiv.appendChild(cardDiv);
    const img= document.createElement('img');
    img.src= pizza.url;
    img.className= 'card-img-top';
    cardDiv.appendChild(img);
    const cardBodyDiv= document.createElement('div');
    cardBodyDiv.className= 'card-body';
    cardBodyDiv.style= 'margin:0; background-image: radial-gradient(#A8FF70 3px, transparent 3px);background-size: 48px 48px;background-color: #E0BD7E;'
    cardDiv.appendChild(cardBodyDiv);
    const h5 =document.createElement('h5');
    h5.className='card-title';
    h5.innerText=pizza.name;
    const ptag= document.createElement('p');
    ptag.className='card-text';
    ptag.innerText= pizza.description;
    const butAndPrice= document.createElement('div');
    butAndPrice.className= 'row';
    const button = document.createElement('button');
    button.setAttribute('product-id' ,pizza.id);
    button.innerText='Add to Cart';
    button.className='btn btn-primary row col-5';
    button.style= 'margin:0;';
    const priceTag= document.createElement('p');
    priceTag.className= 'col-4';
    priceTag.style= 'text-align:left; margin:auto; width:50%'
    priceTag.innerText= '$'+pizza.price;
    butAndPrice.appendChild(button);
    butAndPrice.appendChild(priceTag);
    button.addEventListener('click',addToCart); //Event Bind
    cardBodyDiv.appendChild(h5);
    cardBodyDiv.appendChild(ptag);
    cardBodyDiv.appendChild(butAndPrice); 
    outputDiv.appendChild(colDiv);
}

//background-color:#EDEADC
