import { taskbar } from "./taskbar";
import { startMenu } from "./startmenu";
import mount from '../assets/img/mount.jpg'

export const home = ()=>{
    const mainPage = document.createElement('main')
    const wall = document.createElement('div')
    wall.addEventListener('click',(e)=>{
       if(e.target.className==='wall'){
        const spane = document.querySelector('.startpane')
        if(spane) spane.remove()
        
       }
    })
    wall.setAttribute('class','wall')
    mainPage.appendChild(wall)
    mainPage.appendChild(taskbar())
    return mainPage
  
}