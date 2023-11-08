
let account = {
    username: "user",
    password: "123"
}


let formLogin = document.getElementById('login')

formLogin.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(window.URL);

    // name của ô input
    console.log(event.target)
    if (event.target.username.value !== account.username) {
        return 
    }
    if (event.target.password.value !== account.password) {
        return
    }
    localStorage.setItem("isLogin", JSON.stringify(true))
    window.location.href = 'http://127.0.0.1:5500/'
})