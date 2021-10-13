// parte 3
function imprimirImpares (num:number):void{
    for (let i = 0; i < num; i++){
        if (i % 2 != 0){
            console.log(i)
        }
    }
}
imprimirImpares(56)

// parte 4 (lo pongo como bucle porque no sé cómo clasificarlo)
function revertir (myArr:string[]):string[]{
    return myArr.reverse()
}
console.log(revertir(["Italia", "Inglaterra", "Alemania", "Francia", "Suiza"]));


// parte 5
let arcoiris: string[] = ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"]
function comprobarArcoiris (colores:string[]): void {
    for (let i = 0; i < colores.length; i++){
        if (arcoiris.includes(colores[i])){
            console.log("El color " + colores[i] + " está en el arcoiris")
        }
        else console.log("El color " + colores[i] + " NO está en el arcoiris")
    }
}
comprobarArcoiris(["negro", "blanco", "gris", "verde"])

// parte 8

function sumaCaracteres(myArr:string[]):number{
    let suma: number = 0;
    for (let i = 0; i < myArr.length; i++){
        suma += myArr[i].length
    }
    return suma
}

console.log(sumaCaracteres(["Italia", "Inglaterra", "Alemania", "Francia", "Suiza"]))