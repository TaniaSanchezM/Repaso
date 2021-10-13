
export  function sumaCaracteres(myArr:string[]):number{
    let suma: number = 0;
    for (let i = 0; i < myArr.length; i++){
        suma += myArr[i].length
    }
    return suma
} 
// console.log(sumaCaracteres(["Italia", "Inglaterra", "Alemania", "Francia", "Suiza"]))