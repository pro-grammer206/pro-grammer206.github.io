

export function mouseMoveHandler(event){
        if(mousedown){
             const windowsOpen = document.querySelectorAll('.cwindow')
             windowsOpen.forEach(swindow=>{swindow.style.zIndex ="5"})
             this.style.zIndex='100'
             this.style.left = e.clientX+x+'px';
             this.style.top = e.clientY+y+'px';
        }
}