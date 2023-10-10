


let menu = document.getElementById('menu-action')


// Hàm thực thi hiệu ứng:

const openMenu = () => {
    let listMenu = document.getElementById('show-menu-action')
    // Khi bấm vào menu thì thêm class show-menu
    menu.addEventListener('click', (event) => {
        listMenu.style.transition='all 0.7s ease-in-out'
        listMenu.classList.add('show-menu')
        listMenu.style.background = '#333'
    })
}
openMenu()
const closeMenu = () => {
    let listMenu = document.getElementById('show-menu-action')
    // Khi bấm vào menu thì thêm class show-menu
    let closeMenuAction = document.getElementById('close-menu-action')
    closeMenuAction.addEventListener('click', () => {
        listMenu.classList.remove('show-menu')
    })
}
closeMenu()



