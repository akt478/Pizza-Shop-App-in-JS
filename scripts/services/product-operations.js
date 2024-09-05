//Product CRUD Operations
//C-Create R-Read D-Delete U-Update
import product from "../models/product.js";
import doNetworkCall from "./api-client.js";
const productOperations={
    products:[], //Key:value
async loadProducts(){
    const pizzas= await doNetworkCall();
    const pizzaArray= pizzas['Vegetarian'];
    const productsArray=pizzaArray.map(pizza=>{
        const currentPizza= new product(pizza.id, pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
        return currentPizza;
    })
    console.log(productsArray);
    this.products= productsArray;
    return productsArray; //Wrap in promise
},
getProductsInCart(){
    const productInBasket= this.products.filter(product=>product.isAddedInCart);
    return productInBasket;
},
sortProducts(){

},
searchProducts(pizzaId){
    const product= this.products.find(currentProduct=>currentProduct.id==pizzaId);
    console.log("Product is", product);
    if (product.isAddedInCart) {
        product.quantity++;  // Increase quantity if it's already in the cart
    } else {
        product.isAddedInCart = true;
        product.quantity = 1;  // Initialize quantity when first added
    }
    console.log(this.products);
}
}
export default productOperations;