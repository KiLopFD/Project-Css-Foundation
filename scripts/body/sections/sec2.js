
const listProducts = [
    {
        id:1,
        name: "Đồng hồ jlkdjfsklfjsdlklkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
        price: 500000,
    },
    {
        id:2,
        name: "Đồng hồ",
        price: 800000,
    },
    {
        id:4,
        name: "Đồng hồ",
        price: 600000,
    },
    {
        id:5,
        name: "Đồng hồ",
        price: 600000,
    },
    {
        id:6,
        name: "Đồng hồ",
        price: 600000,
    },
    {
        id:7,
        name: "Đồng hồ",
        price: 600000,
    },
    {
        id:8,
        name: "Đồng hồ",
        price: 600000,
    },
]


let sec2 = document.getElementById('content-sec-2')

// sec2.innerHTML = ""

let filter = document.getElementById('filter-value')

const drawProduct = (list = listProducts) => {
    let html = ""
    list.forEach((value, index) => {
        html += `
        <div class="card card-${index + 1}">
            <div class="inner-wrap list-product">
                <div class="overflow-hidden">
                    <img src="./assets/images/product/p${value.id}.jpg" alt="">
                </div>
                <div class="intro overflow-hidden">
                    <p class="name text-center">${value.name.length > 20 ? value.name.slice(0,20) + '...' : value.name}</p>
                    <p class="price text-center">${value.price+'$'}</p>
                </div>
                <div class="btn-group">
                    <button class="add-to-cart cart-${value.id}">Thêm Vào Giỏ</button>
                    <button>Mua Ngay</button>
                </div>
            </div>
        </div>`
        // console.log(html);
    })
    // let row = `<div class="flex flex-wrap">${html}</div>`
    // console.log(html);
    sec2.innerHTML = html
}

filter.addEventListener('change', (event) => {
    if (event.target.value == 'inc') {
        let newList = [...listProducts]
        newList.sort((a, b) => {
            return a.price - b.price
        })
        console.log(newList);
        drawProduct(newList)
    }
    if (event.target.value == 'desc') {

        // ...[1,2,3] => 1,2,3
        let newList = [...listProducts]
        newList.sort((a, b) => {
            return b.price - a.price
        })
        console.log(newList);
        drawProduct(newList)
    }
    if (event.target.value == 'clear') {
        console.log(listProducts);
        drawProduct(listProducts)
    }
})

drawProduct()


let btnAddToCart = document.getElementsByClassName("add-to-cart");
let numberCart = document.getElementById('number-carts');
let listCart = JSON.parse(localStorage.getItem('listCart'));

if (listCart === null || listCart === undefined) {
    listCart = []
}


[...btnAddToCart].forEach((value, index) => {
    
    // console.log(splitName);
    value.addEventListener('click', () => {
        let splitName = value.className.split('-')
        let id = Number(splitName[splitName.length - 1])

        let findProduct = listProducts.find((value, index) => value.id === id)
        listCart.push(findProduct)
        localStorage.setItem('listCart', JSON.stringify(listCart));

        numberCart.innerHTML = String(listCart.length)
    })


})