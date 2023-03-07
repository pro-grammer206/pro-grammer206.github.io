import { cmdInput } from "../components/cmdInput";

export const terminalPage = ()=>{
    const commandLine = document.createElement('section')
    commandLine.setAttribute('class','cmd');
    commandLine.appendChild(cmdInput())
    return commandLine;
}