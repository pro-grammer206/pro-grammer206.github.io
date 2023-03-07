const Header = (title,content)=>{
    const header = document.createElement('header')
    const heading = document.createElement('h3')
    heading.textContent = title;
    header.appendChild(heading)
    return header
}