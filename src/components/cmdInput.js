export const cmdInput = ()=>{
    const cmdPrompt = document.createElement('section')
    cmdPrompt.setAttribute('class','Prompt')
    const prompt = document.createElement('p')
    const inputCmd = document.createElement('input')
    let uid = 0;
    inputCmd.setAttribute('id',uid)
    inputCmd.type='text'

    prompt.textContent='C:\\Users\\vipin>'
    cmdPrompt.appendChild(prompt)
    cmdPrompt.appendChild(inputCmd)
    inputCmd.onchange = (e)=>{
        uid=Number(e.target.id)+1
        const PromptBox =document.querySelector('.cmd')
        PromptBox.appendChild(cmdInput())
        const currentPrompt = document.querySelectorAll('.Prompt input') 
       }
    
    return cmdPrompt;
}