export {boton}

import { totalText } from './index.js'
import { array, sum,sumObj, gastos, fechaActual } from "./array.js";
// import { total} from './total.js'


function BtnObj(name,value){
    this.name = name;
    this.value = value;
    this.array = function()
    {
        array.push(this.value)
    }
    // this.sum = function()
    // {
    //     sum()
    // }
    // this.total = function(){
    //     total()
    // }
    
}


const boton = (name, value)=>
{
    const obj = new BtnObj(name, value)

    const element = document.createElement('button');
    element.classList.add(`btn${obj.value}`)
    element.textContent = obj.name;
    element.style.height = '100px'
    element.style.width = '100px'

    element.style.borderRadius = '50%'
    element.style.border = '3px solid white'
    element.style.backgroundColor = '#f3ea72'
    element.style.color = 'black'
    element.style.fontSize = '18px'

    element.addEventListener('click', ()=>
    {
        // obj.array()
        
        // obj.sum()
        // obj.total()
        ////////
        gastos[fechaActual].push(obj.value)
        console.table(gastos)
        totalText.textContent = sumObj()

        //////

        // console.log(array)
    })
    return element;

}





