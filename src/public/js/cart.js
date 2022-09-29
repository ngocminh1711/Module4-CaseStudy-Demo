let original = window.origin


function addToCart(idProduct){
    $.ajax({
        url: `${original}/add-to-cart`,
        method: 'POST',
        headers: {
            cookie: document.cookie
        },
        data: {
            idProduct: idProduct
        },
        success: (res) => {
            $('#essenceCartBtn').html( ` <img src="/img/core-img/bag.svg" alt=""><span>${res}</span> `)
        }
    })
}

function getCart(){

    $.ajax({
        url: `${original}/get-cart`,
        method: 'GET',
        headers: {
            cookie: document.cookie
        },
        success: (res) => {
            let html = ''
            for (let i = 0; i < res.cartCookie.items.length; i++) {
                console.log(res.cartCookie.items[i])
                html += `<div class="single-cart-item">
                    <a href="#" class="product-image">
                        <img src="${res.cartCookie.items[i].image1}" class="cart-thumb" alt="">
                        <!-- Cart Item Desc -->
                        <div class="cart-item-desc">
                            <span  class="product-remove"><i  onclick="deleteCart('${res.cartCookie.items[i]._id}')" class="fa fa-close" aria-hidden="true"></i></span>
                            <h6>${res.cartCookie.items[i].name}</h6>

                            <p class="price">${res.cartCookie.items[i].price}</p>
                        </div>
                    </a>
                </div>`
            }
            $('#cart-list').html(html)
            $('#quantity-cart').html(res.cartCookie.totalQuantity);
            $('#total-cart').html(res.cartCookie.totalMoney);

        }
    })
}
function deleteCart(idProduct) {
    $.ajax({
        url: `${original}/delete-cart`,
        method: 'DELETE',
        headers: {
            cookie: document.cookie
        },
        data: {
            idProduct: idProduct,
        },
        success: (res) => {
            let html = ''
            for (let i = 0; i < res.cartCookie.items.length; i++) {
                console.log(res.cartCookie.items[i])
                html += `<div class="single-cart-item">
                    <a href="#" class="product-image">
                        <img src="${res.cartCookie.items[i].image1}" class="cart-thumb" alt="">
                        <!-- Cart Item Desc -->
                        <div class="cart-item-desc">
                            <span  class="product-remove"><i  onclick="deleteCart('${res.cartCookie.items[i]._id}')" class="fa fa-close" aria-hidden="true"></i></span>
                            <h6>${res.cartCookie.items[i].name}</h6>

                            <p class="price">${res.cartCookie.items[i].price}</p>
                        </div>
                    </a>
                </div>`
            }

            $('#cart-list').html(html)
            $('#quantity-cart').html(res.cartCookie.totalQuantity);
            $('#total-cart').html(res.cartCookie.totalMoney);
            $('#essenceCartBtn').html( ` <img src="/img/core-img/bag.svg" alt=""><span>${res.cartCookie.totalQuantity}</span> `)
        }
    })
}