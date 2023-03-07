
export const login = ()=>{
    const loginElement = document.createElement('div')
    const loginmessage = document.createElement('h2')
    const loginButton = document.createElement('button')
    loginmessage.textContent = "Welcome Vipin";
    loginmessage.style.color = 'black'
    loginmessage.style.fontFamily='terminalbold'
    loginmessage.style.fontSize="2rem"
    loginElement.classList.add('login')
    loginButton.textContent = "Sign in"
    loginButton.setAttribute('class','lbtn')
    loginElement.appendChild(loginmessage)
    loginElement.appendChild(loginButton)
    loginButton.addEventListener('click',(e)=>{
        loginElement.classList.add('disappear')
        setTimeout(()=>{
            loginElement.style.display='none'
        },500)
    })
    return loginElement
}