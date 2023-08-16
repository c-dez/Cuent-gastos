import {  boton } from "./button.js";


const botonesContainer = document.querySelector('.botones')
const btn10 = boton('$10', '10')
const btn50 = boton('$50','50')
const btn100 = boton('$100', '100')
const btn500 = boton('$500', '500')

botonesContainer.appendChild(btn10)
botonesContainer.appendChild(btn50)
botonesContainer.appendChild(btn100)
botonesContainer.appendChild(btn500)



