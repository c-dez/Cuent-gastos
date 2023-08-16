const todayIs = ()=>{
     const fecha = new Date()
     const today = fecha.getDate()
     const month = ()=>{
        switch (fecha.getMonth()){
            case 0:
                return 'Enero'
                break;
            case 1:
                return 'Febrero'
                break;
                case 2:
                return 'Marzo'
                break;
                case 3:
                return 'Abril'
                break;
                case 4:
                return 'Mayo'
                break;
                case 5:
                return 'Junio'
                break;
                case 6:
                return 'Julio'
                break;
                case 7:
                return 'Agosto'
                break;
                case 8:
                return 'Septiembre'
                break;
                case 9:
                return 'Octubre'
                break;
                case 10:
                return 'Noviembre'
                break;
                case 11:
                return 'Diciembre'
                break;
        }


     }
     return `${today} de ${month()}`

 }
const date = ()=>{
    const text = todayIs();
    const element = document.createElement('div')
    element.classList.add('date')
    element.textContent = text;
    element.style.fontSize = '24px'

    return element
}

 export { date }
