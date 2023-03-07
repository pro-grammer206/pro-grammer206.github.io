import { AboutContent} from "../data"
export const About = ()=>{
    const Page = document.createElement('div')
    Page.setAttribute('class','page')
    const header = document.createElement('h3')
    header.textContent="About this web app"
    Page.appendChild(header)

    AboutContent.para.forEach(p=>{
        const article = document.createElement('article')
        const subheading = document.createElement('h4')
        const para = document.createElement('p')
        subheading.textContent = p.subheading
        para.textContent =p.content
        article.appendChild(subheading)
        article.appendChild(para)
        Page.appendChild(article)
    })


    return Page
}