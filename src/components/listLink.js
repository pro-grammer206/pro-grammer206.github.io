

export const link =(title,url)=>{
    const link = document.createElement('a')
    const option =document.createElement('p')
    link.setAttribute('class','smenuitem')
    option.textContent=title
   link.href=url
   link.target="_blank"
    link.appendChild(option)
    return link;
}