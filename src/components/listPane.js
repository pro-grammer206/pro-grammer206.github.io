import { customWindow } from "./window"
import {windowData} from '../data'

export const listOptions= (optionName,windowDataToDisplay)=>{
    const option =document.createElement('section')
    option.setAttribute('class','smenuitem')
    option.addEventListener('click',()=>{
        const wall = document.querySelector('.wall')
        const pwindow = document.querySelector(`#${windowDataToDisplay.id}`)
        if(!pwindow)wall.appendChild(customWindow(optionName,windowDataToDisplay.content,windowDataToDisplay.id))
        const startBar = document.querySelector('.startpane')
        if(startBar) startBar.remove()
    })
    const text = document.createElement('p')
    text.textContent = optionName
    option.appendChild(text) 
    return option;
}