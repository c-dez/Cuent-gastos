export { total }
import { sum } from './array.js'


const total = ()=>{
    const element = document.createElement('div')
    element.textContent = sum()

    return element
}