export {boton}
import { array, sum } from "./array.js";


function BtnObj(name,value){
    this.name = name;
    this.value = value;
    this.fun = function()
    {
        array.push(this.value)
    }
    this.test = function(){
        sum()
    }
    
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

    element.addEventListener('click', ()=>{
        obj.fun()
        obj.test()
        // console.log(array)
    })
    return element;

}





