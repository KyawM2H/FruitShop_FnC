const fruitEl = document.getElementById("fruit-products");
const basketEl = document.getElementById("basket-container");
const totalItemsInCartEl = document.getElementById("total-items-in-cart");
const subTotal = document.getElementById("subtotal-items");



const displayFruits = () => {
  fruits.forEach((fruit) => {
    fruitEl.innerHTML += `
                
                    <div class="item">
                    <div class="item-container">
                        <div class="fruit-img">
                            <img src="${fruit.imgUrlSrc}" alt="${fruit.name}">
                        </div>
                        <div class="desc">
                            <h2>${fruit.name}</h2>
                            <h2><small>£</small>${fruit.price}</h2>                            
                        </div>                        
                        <div class="add-to-basket" onclick="addToBasket(${fruit.id})">
                        <button>Add To Basket</button>
                        </div>
                     </div>
                     </div>
                
            `;
  });
};
displayFruits();

const basket_area = document.getElementById("basket");

basket_area.addEventListener("click", function () {
  let show_hide_basket = document.getElementById("basket-container");
  if (show_hide_basket.style.display === "block") {
    show_hide_basket.style.display = "none";
  } else {
    show_hide_basket.style.display = "block";
  }
});

let basket = [];
const addToBasket = (id) => {
  if (basket.some((fruit) => fruit.id === id)) {
    alert("Already in the Basket!");
  } else {
    const fruit_in_cart = fruits.find((fruit) => fruit.id === id);
    basket.push(fruit_in_cart);
    totalItemsInCartEl.classList.add("total-items-in-cart");
    updateBasket();
    
    }
    console.log(basket);
    
};

const displayBasket = () => {
  basketEl.innerHTML = " ";
  basket.forEach((fruit) => {
    basketEl.innerHTML += `                  
            
                        <div class="basket-container">
                            <div class="fruit-img">
                                <img src="${fruit.imgUrlSrc}" alt="${fruit.name}">
                                <p>${fruit.name}</p>
                            </div>
                            <div class="units">
                            <div class="btn minus" onclick="changeNumberOfUnits('remove', ${fruit.id})">-</div>
                            <div class="number">${fruit.unit}</div>
                            <div class="btn plus" onclick="changeNumberOfUnits('add', ${fruit.id})">+</div>           
                        </div>
                                <h4 id="totalPriceForEachItem"><small>£</small>${(fruit.price * fruit.unit).toFixed(2)}</h4>
                                <h5 class="btn-del" onclick="removeItemFromBasket(${fruit.id})">X</h5>                    
                        </div>
                        
                    
                `;
  });
    
};

// update cart
const updateBasket = () => {
  displayBasket();
  renderTotalItems();
  renderSubTotal();
  
};

// calculate and render subtotal
const renderTotalItems = () => {
  let totalItems = 0;

  basket.forEach((fruit) => {
    totalItems += fruit.unit;
  });

  totalItemsInCartEl.innerHTML = totalItems;
};

const renderSubTotal = () => {
  let totalPrice = 0;

  basket.forEach((fruit) => {
    totalPrice += fruit.price * fruit.unit;
  });

  subTotal.innerHTML = `🆂🆄🅱🆃🅾🆃🅰🅻 : <small>£</small>${totalPrice.toFixed(2)}`;
};

const removeItemFromBasket = (id) => {
  basket = basket.filter((fruit) => fruit.id !== id);
  updateBasket();
  if (basket.length === 0) {
    basketEl.innerHTML = `<div class="basket-items">Your Shopping Basket is Empty!</div>"`;
    
  }
};

const changeNumberOfUnits = (action, id) => {
  basket = basket.map((fruit) => {
    let numberOfUnits = fruit.unit;

    if (fruit.id === id) {
      if (action === "remove" && numberOfUnits > 1) {
        fruit.unit--;
      } else if (action === "add" && numberOfUnits < 9) {
        fruit.unit++;
      }
    }

    return {
      ...fruit,
    };
  });
  updateBasket();
};
