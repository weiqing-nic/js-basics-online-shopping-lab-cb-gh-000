var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    [item]:Math.floor(Math.random()*100 + 1)
  });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length <= 0){
    console.log("Your shopping cart is empty.");
  } else {
    var rv = "In your cart, you have ";

    //first one
    rv += getString(0);

    if (cart.length == 2){
      rv += " and " + getString(1);
    } else if (cart.length > 2){
      for (var i = 1; i < cart.length; i++) {
        rv += ", ";

        if (i === cart.length - 1){
          rv += "and ";
        }

        rv += getString(i);
      }
    }

    console.log(rv + ".");
  }
}

function getString(i){
  var k = Object.keys(cart[i])[0];
  return k + " at $" + cart[i][k];
}

function total() {
  var tot = 0;
  for (var i = 0; i < cart.length; i++) {
    var elem = cart[i];
    tot += elem[Object.keys(elem)];
  }
  return tot;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }

  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
