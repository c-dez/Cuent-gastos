export { createDatos}
import { gastos, sumObj, fechaActual } from './array.js'

const createDatos = ()=>{
    const element = document.createElement('div')
    element.textContent = `${fechaActual} : ${gastos[fechaActual]}`

    return element;
}