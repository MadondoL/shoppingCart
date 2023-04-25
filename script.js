/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  {
    productId: 24,
    name: "Carton of Cherries",
    price: 4.99,
    quantity: 40,
    imgSrc: "images/cherry.jpg"
  },
  {
    productId: 35,
    name: "Carton of Strawberries",
    price: 10.99,
    quantity: 40,
    imgSrc: "images/strawberry.jpg" 
  }, 
  {
    productId: 47,
    name: "Bag of Oranges",
    price: 7.99,
    quantity: 40,
    imgSrc: "images/orange.jpg"
  }
];

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  const product = products.find(p => p.productId === productId);
  if (!product) {
    (`Product with ${productId} not found`);
    return;
  }

  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
}
addProductToCart(24);
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    (`Product with ${productId} not found in cart`);
  }
}
increaseQuantity(24);
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity--;
    if (cartItem.quantity === 0) {
      const index = cart.indexOf(cartItem);
      cart.splice(index, 1);
    }
  } else {
    (`Product with ${productId} not found in car`);
  }
}
decreaseQuantity(35);
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity = 0;
    const index = cart.indexOf(cartItem);
    cart.splice(index, 1);
  } else {
    (`Product with ${productId}not found in cart`);
  }
}
removeProductFromCart(47)
/* Define the cartTotal function which returns the total price of all items in the cart */
function cartTotal(){
  let total = 0
  for(const item of cart){
    total +=item.price*item.quantity
  }
  return total;
}
cartTotal();
/* Define the emptyCart function which empties the cart array */
function emptyCart(){
  cart.splice(0,cart.length);
}
emptyCart();
/* Define the pay function which takes in an amount and returns the difference between the amount and the total cart price */
function pay(amount){
  return amount-cartTotal();
}
pay();