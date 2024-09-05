//Product Model contains structure of Pizza 
//Pizza Object id name desc price image
class product{
    constructor(id, name, description, price, url){ 
        //this-keyword contains current calling object reference
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.url=url;
        this.isAddedInCart= false;
        this.quantity=0;
    }
}
export default product;