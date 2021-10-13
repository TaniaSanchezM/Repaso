// parte 1

function zodiaco(fechaNac:string):string {
    let dateNac = new Date (fechaNac);
    let mes: number = dateNac.getMonth();
    // console.log(mes)
    let dia: number = dateNac.getDate();
    // console.log(dia)
    if ((mes == 11 && dia > 21) || (mes == 0 && dia < 22)){
        return "Capricornio";
    }
    else if ((mes == 0 && dia > 21) || (mes == 1 && dia < 22)){
        return "Acuario";
    }
    else if ((mes == 1 && dia > 21) || (mes == 2 && dia < 22)){
        return "Piscis";
    }
    else if ((mes == 2 && dia > 21) || (mes == 3 && dia < 22)){
        return "Aries";
    }
    else if ((mes == 3 && dia > 21) || (mes == 4 && dia < 22)){
        return "Tauro";
    }
    else if ((mes == 4 && dia > 21) || (mes == 5 && dia < 22)){
        return "Géminis";
    }
    else if ((mes == 5 && dia > 21) || (mes == 6 && dia < 22)){
        return "Cáncer";
    }
    else if ((mes == 6 && dia > 21) || (mes == 7 && dia < 22)){
        return "Leo";
    }
    else if ((mes == 7 && dia > 21) || (mes == 8 && dia < 22)){
        return "Virgo";
    }
    else if ((mes == 8 && dia > 21) || (mes == 9 && dia < 22)){
        return "Libra";
    }
    else if ((mes == 9 && dia > 21) || (mes == 10 && dia < 22)){
        return "Escorpio";
    }
    else if ((mes == 10 && dia > 21) || (mes == 11 && dia < 22)){
        return "Sagitario";
    } 
}
console.log(zodiaco("1992,9,1"));
console.log(zodiaco("Mayo, 12"));
console.log(zodiaco("1959-03-29"));

// parte 2
let asia: string[] = ["China", "Japón", "Vietnam", "Camboya", "India"];
let europa: string[]  = ["Italia", "Inglaterra", "Alemania", "Francia", "Suiza"]
let africa: string[]  = ["Congo", "Sudáfrica", "Etiopía", "Kenia", "Angola"];
let america: string[]  = ["Canada", "Venezuela", "Colombia", "México", "Chile"];
let oceania: string[]  = ["Australia", "Nueva Guinea", "Nueva Zelanda", "Samoa", "Fiji"]

function continente (pais:string):void{
    if (asia.includes(pais)){
        console.log("Está usted en Asia")
    }
    else if (europa.includes(pais)){
        console.log("Está usted en Europa")
    }
    else if (africa.includes(pais)){
        console.log("Está usted en África")
    }
    else if (america.includes(pais)){
        console.log("Está usted en América")
    }
    else if (oceania.includes(pais)){
        console.log("Está usted en Oceanía")
    }
    else console.log("Escriba un país del listado")
}
continente ("Nueva Zelanda")

// parte 9
function parOImpar(num:number):void{
    if (num % 2 == 0){
        console.log("El número " + num + " es par")
    }
    else{
        console.log("El número " + num + " es impar")
    }
}
parOImpar(817394823)