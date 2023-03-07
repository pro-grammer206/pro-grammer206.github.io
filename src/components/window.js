import close from '../assets/img/close.svg'
import maxim from '../assets/img/maximize.png'
import {About} from '../pages/About'
import {mouseMoveHandler} from '../handlers.js'
import { terminalPage } from '../pages/TerminalUi'
export const customWindow = (wtitle,wcontent,id)=>{
     const windowPane = document.createElement('section')
     windowPane.setAttribute('id',id)
     const wall = document.querySelector('.wall')
     windowPane.setAttribute('class','normalWindow')
     windowPane.classList.add('cwindow')
     let Maximize= true;


     //window dragging functionality
     const wallwidth = wall.clientWidth
     const wallHeight =wall.clientHeight
     let x=0,y=0;
     let mousedown = false
     windowPane.addEventListener('mousedown',function(e){
          mousedown = true;
          x = this.offsetLeft -e.clientX;
          y = this.offsetTop - e.clientY;
     },true)

     windowPane.addEventListener('mouseup',function(){
          mousedown = false   
     },true)

     function mouseMoveHandler(e){
          if(mousedown){
               const windowsOpen = document.querySelectorAll('.cwindow')
               windowsOpen.forEach(swindow=>{swindow.style.zIndex ="5"})
               console.log(this)
               this.style.zIndex='1000'
               this.style.left = e.clientX+x+'px';
               this.style.top = e.clientY+y+'px';
          }
  }
windowPane.addEventListener('mousemove',mouseMoveHandler)



     //titlebar
     const titleBar = document.createElement('div')
     titleBar.setAttribute('class','titlebar')


     //window title
     const windowTitle = document.createElement('p')
     windowTitle.setAttribute('class','wtitle')
     windowTitle.textContent = wtitle
     
     const windowControls = document.createElement('section')
     windowControls.setAttribute('class','wincontrols')
     //exit btn
     const closeBtn = document.createElement('button')
     closeBtn.setAttribute('class','cbtn')
     const closeimg = document.createElement('img')
     closeimg.src = close
     closeimg.width=30
     closeimg.height=30
     closeBtn.appendChild(closeimg)
     const maxBtn = document.createElement('button')
     maxBtn.setAttribute('class','cbtn')
     const maxImg = document.createElement('img')
     maxImg.src=maxim
     maxImg.width=30
     maxImg.height = 30
     maxBtn.appendChild(maxImg)

     //event listener for maximise
     maxBtn.addEventListener('click',()=>{
          if(Maximize){
               windowPane.classList.remove('normalWindow')
               windowPane.classList.add('fullWindow')
               windowPane.style.top='0'
               windowPane.style.left='0'
               windowPane.removeEventListener('mousemove',mouseMoveHandler)
               Maximize = !Maximize
               return
          }
          Maximize=!Maximize
          windowPane.classList.remove('fullWindow')
          windowPane.classList.add('normalWindow')
          windowPane.addEventListener('mousemove',mouseMoveHandler)
         
     })

     //event listener for close btn
     closeBtn.addEventListener('click',()=>{
          windowPane.remove()
     })
     windowControls.appendChild(maxBtn)
     windowControls.appendChild(closeBtn)

     titleBar.appendChild(windowTitle)
     titleBar.appendChild(windowControls)
     const content =document.createElement('article')

     wtitle==="Terminal"?content.setAttribute('class','terminal'):content.setAttribute('class','contentwindow');
     
    
   switch(wtitle){
     case "About":
          content.appendChild(About());
          break;
     case "Terminal":
          content.appendChild(terminalPage())
   }
     windowPane.appendChild(titleBar)
     windowPane.appendChild(content)
     return windowPane
}