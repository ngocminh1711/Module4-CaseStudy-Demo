let cart = null;

export class CartModel {


    // static save(product) {
    //     if (cart) {
    //         const existingProductIndex = cart.products.findIndex(p => p.id == product.id) // check product existing in cart
    //         console.log('existingProductIndex: ', existingProductIndex)
    //         if (existingProductIndex >= 0) { // exist in cart already
    //             const existingProduct = cart.products[existingProductIndex];
    //             existingProduct.quantityForSale += 1;
    //             cart.totalPrice += product.price;
    //
    //         } else { //not exist
    //             product.quantityForSale = 1;
    //             cart.products.push(product);
    //             cart.totalPrice += product.price
    //         }
    //     }
    //     else {
    //         cart = {
    //             products: [], totalPrice: 0
    //         }
    //         product.quantityForSale = 1;
    //         cart.products.push(product);
    //         cart.totalPrice = product.price;
    //     }
    // }
    // static getCart(){
    //     return cart;
    // }
}