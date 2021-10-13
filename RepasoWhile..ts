function numeroPar(myArrNum:number[]):boolean{
    let comprob: boolean
    let i = 0;
    while (i < myArrNum.length) {
               
        if (myArrNum[i] % 2 != 0){
            comprob = false
        }
        else {
            comprob = true 
            break;
        }          
        i++; 
    }
    return comprob
}
console.log(numeroPar([1,5,99,37,86,45]))

// parte 7
function empiezaPorM (nombres:string[]):boolean{
    let todosPorM:boolean
    let i = 0;
    while (i < nombres.length){
        // console.log(nombres[i][0])
        if (nombres[i][0] == "M"){
            todosPorM = true
        }
        else{
            todosPorM = false;
            break;
        }
        i++;
    }
    return todosPorM
}
console.log(empiezaPorM(["Marta", "Mario", "Laura", "Marina"]))

// Parte 10 Tendría que ir en el archivo de for pero como llama
// a sumaCaracteres que es una función que ya está en ese archivo
// me da un error de duplicidad de funciones
import {sumaCaracteres} from './repaso8';
import parOImpar from './repaso9';
function contarParOImpar(myArr:string[]){
    let numeroLetras: number = 0;
    for (let i = 0; i < myArr.length; i++){
        numeroLetras += sumaCaracteres(myArr[i].split(""))
    }  
    parOImpar(numeroLetras)
}
contarParOImpar(["Casa", "Coche", "Ciudad", "Cesta"]);
contarParOImpar(["Barco", "Baca", "Bicicleta", "Balón", "Bisiesto", "Brasil"]);
contarParOImpar(["Venezuela", "Veneno", "Voltaje"]);