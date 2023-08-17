export {totalText}

import {  boton } from "./button.js";
import{ date } from './date.js'
import { createDatos } from "./datos.js";

//fecha container
const fechaContainer = document.querySelector('.fecha')
fechaContainer.appendChild(date())

//botones container
const botonesContainer = document.querySelector('.botones')
const btn10 = boton('$10', '10')
const btn50 = boton('$50','50')
const btn100 = boton('$100', '100')
const btn500 = boton('$500', '500')

botonesContainer.appendChild(btn10)
botonesContainer.appendChild(btn50)
botonesContainer.appendChild(btn100)
botonesContainer.appendChild(btn500)

//total container
const totalContainer = document.querySelector('.total')
const totalText =  document.createElement('div')
totalContainer.appendChild(totalText)

//datos container
const datosContainer = document.querySelector('.datos')
datosContainer.appendChild(createDatos())




