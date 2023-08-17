export {array, sum,sumObj, gastos, fechaActual}


const array = [];
const sum = ()=>
{
    
    const suma = array.reduce((total, item)=>
    {
        return parseInt(total) + parseInt(item)
    },0)
    
    console.log(suma)
    return suma
}

//creo que necesito hacer objeto dia-mes{array}

let fechaActual = new Date()
.toString()
.split('2')[0]
console.log(fechaActual)


const gastos = {
    [fechaActual] :[]
}
const sumObj = ()=>{
    const suma = gastos[fechaActual].reduce((total, item)=>{
        return parseInt(total) + parseInt(item)
    },0)
    return suma;    
}
