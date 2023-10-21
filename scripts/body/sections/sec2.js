
const listProducts = [
    {
        id:1,
        name: "Đồng hồ",
        price: 500000,
    },
    {
        id:2,
        name: "Đồng hồ",
        price: 800000,
    },
    {
        id:3,
        name: "Đồng hồ",
        price: 600000,
    },
    {
        id:3,
        name: "Đồng hồ",
        price: 600000,
    },
    {
        id:3,
        name: "Đồng hồ",
        price: 600000,
    },
    {
        id:3,
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
        html += `<div class="card card-${index + 1}">
        <div class="overflow-hidden">
        <img src="./assets/images/product/p${value.id}.jpg" alt="">
        </div>
        <div class="intro">
        <p class="name text-center">${value.name}</p>
        <p class="price text-center">${value.price}</p>
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