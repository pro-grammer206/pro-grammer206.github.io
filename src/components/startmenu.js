import { link } from './listLink';
import {listOptions} from './listPane'
import {linkDetails} from '../data'
import { windowData } from '../data';
const desc = linkDetails[0].desc
const gitlink = linkDetails[0].url
export const startMenu = ()=>{
    const pane = document.createElement('div')
    pane.setAttribute('class','startpane');
    pane.appendChild(listOptions("Projects",windowData[0]))
    pane.appendChild(listOptions('About',windowData[1]))
    pane.appendChild(listOptions('Terminal',windowData[2]))
    pane.appendChild(link(desc,gitlink))
    const button = document.createElement('button')
    return pane
}