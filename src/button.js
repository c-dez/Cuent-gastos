export {boton}


function BtnObj(name,value){
    this.name = name;
    this.value = value;
    this.fun = function()
    {
        console.log(`${this.name} ${this.value}`)
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
        getObj(obj.value)
    })
    return element;

}

const getObj = (value)=>{
    console.log(value)
}



