export {array,sumObj, gastos, fechaActual}


const array = [];

//creo que necesito hacer objeto dia-mes{array}

let fechaActual = new Date()
.toString()
.split('2')[0]


const gastos = {
    [fechaActual] :[]
}
const sumObj = ()=>{
    const suma = gastos[fechaActual].reduce((total, item)=>{
        return parseInt(total) + parseInt(item)
    },0)
    return suma;    
}
