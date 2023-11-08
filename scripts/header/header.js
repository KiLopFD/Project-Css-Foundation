let btnLogin = document.getElementById("header-login")
let avatarUser = document.getElementById('avatar-user')
let showSettingUser = document.getElementById('show-setting-user')

window.addEventListener('load', () => {
    let isLogin = JSON.parse(localStorage.getItem('isLogin'))
    if (isLogin === true) {
        btnLogin.style.display = "none"
        avatarUser.style.display = "block"
    }
})

avatarUser.addEventListener('click', () => {
    console.log(avatarUser);
    showSettingUser.classList.add('show-menu')
})

let closeUser = document.getElementById('close-user')
closeUser.addEventListener('click', () => {
    console.log(1);
    showSettingUser.classList.remove('show-menu')
})