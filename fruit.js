const fruitEl = document.getElementById("fruit-products");
const basketEl = document.getElementById("basket-items");

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
    let show_hide_basket = document.getElementById("basket-items");
    if (show_hide_basket.style.display === "block") {
        show_hide_basket.style.display = "none";
    } else {
        show_hide_basket.style.display = "block";
    }
});

const basket = [];
const addToBasket = (id) => {
    if (basket.some((fruit) => fruit.id === id)) {
        alert("Already in the Basket!");
    } else {
        const fruit_in_cart = fruits.find((fruit) => fruit.id === id);
        basket.push(fruit_in_cart);
    }

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
                            <div class="btn minus" onclick="changeNumberOfUnits('minus', ${fruit.id})">-</div>
                            <div class="number">${fruit.count}</div>
                            <div class="btn plus" onclick="changeNumberOfUnits('plus', ${fruit.id})">+</div>           
                        </div>
                                <h4><small>£</small>${fruit.price}</h4>
                                <h5 class="btn-del">X</h5>                    
                        </div>
                        
                    
                `;
        });
    };
    displayBasket();
};
