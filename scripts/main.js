

let isLogin = JSON.parse(localStorage.getItem("isLogin"))

let numberCart = document.getElementById('number-carts');
window.addEventListener('load', () => {
    let listCart = JSON.parse(localStorage.getItem('listCart'))
    if (listCart && listCart.length > 0) {
        numberCart.innerHTML = String(listCart.length)
    }
    else {
        numberCart.innerHTML = "0"    
    }
})