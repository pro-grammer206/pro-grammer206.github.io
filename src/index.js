import './style.css'
import printme from './print.js'
import { login } from './components/login'
import { home } from './components/home'

document.title = "Windows 10"
function render(){
    const body = document.body
     body.appendChild(login())
    body.appendChild(home())
}
render()
