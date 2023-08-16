export {array, sum}


const array = [];
const sum = ()=>{
    
    const suma = array.reduce((total, item)=>{
        return parseInt(total) + parseInt(item)
    },0)
    
console.log(suma)
}