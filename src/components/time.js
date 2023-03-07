export const time = ()=>{
    const clock = document.createElement('div')
    clock.setAttribute('class','clock')
    const tcontent = document.createElement('p')
    tcontent.setAttribute('class','timeplay')
    const tdate = document.createElement('p')
    tdate.textContent = new Date().toLocaleDateString()
    const currentTime = new Date().toLocaleTimeString()
    tcontent.textContent = currentTime.slice(0,5)+" "+currentTime.slice(8,11)
    setInterval(()=>{
        const currentTime = new Date().toLocaleTimeString()
        tcontent.textContent = currentTime.slice(0,5)+" "+currentTime.slice(8,11)
    },30000)
    clock.appendChild(tcontent)
    clock.appendChild(tdate)
    return clock;
}