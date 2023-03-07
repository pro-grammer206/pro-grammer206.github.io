import {time} from './time'
import windows from '../assets/img/wing.svg'
import { startMenu } from './startmenu'
export const taskbar = ()=>{
    const tbar = document.createElement('section')
    tbar.setAttribute('id',"tbar")
    const startMenuBtn = document.createElement('button')
    startMenuBtn.setAttribute('class',"sbtn")
    const winlogo = document.createElement('img')
    winlogo.setAttribute('class','winlogo')
    winlogo.src = windows;
    startMenuBtn.appendChild(winlogo)
    startMenuBtn.addEventListener('click',(e)=>{
        const wall = document.querySelector('.wall')
        const pane = document.querySelector('.startpane')
        if(!pane){
            wall.appendChild(startMenu())
        }else{
            pane.remove()
        }
    })
    tbar.appendChild(startMenuBtn)
    tbar.appendChild(time())
    return tbar;
}