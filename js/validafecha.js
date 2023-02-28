/* Definición de Variables */

let dia = parseInt(prompt("Ingresa un día",0));
let mes = parseInt(prompt("Ingresa un mes",0));
let anio = parseInt(prompt("Ingresa un Año",0));

let anio4 = anio % 4;
let anio100 = anio % 100;
let anio400 = anio % 400;

let fecha = dia + "/" + mes + "/" + anio;
let bisiesto = true;
let fechavalida = true;

/* Fecha Obtenida por Ingreso */
console.log("Ingreso la Fecha",fecha)


/* Validación de la Fecha */

if  (typeof(dia) !== 'number') {

    console.log("No es un día válido");
    fechavalida = false
}

if (dia > 31) {
 
    fechavalida = false;
    console.log("una fecha no puede tener mas de 31 días");
};

if (typeof(mes) !== 'number')  {

    console.log("No es un mes válido");
    fechavalida = false;
};

if (mes > 12 ) {

    fechavalida = false;
    console.log("No existen mas de 12 meses al Año");
};

if  (typeof(anio) !== 'number') {

    fechavalida = false;
    console.log("No es un año válido");
};

if ((anio4 === 0 && anio100 !== 0) || anio400 === 0) {

    bisiesto = true;
    console.log("es un año bisiesto");
} else {

    bisiesto = false;
}

if (dia > 29 && mes === 2)  {
 
    fechavalida = false
} 


if (dia === 29 && mes === 2 && bisiesto)  {
 
    fechavalida = true
} 

if (dia === 29 && mes === 2 && !bisiesto){
    fechavalida = false
};

if (dia === 31 && (mes === 2 || mes === 4 || mes === 6 || mes === 9 || mes === 11))  {
 
    fechavalida = false
   
};

if (Number.isNaN(dia) || Number.isNaN(mes) || Number.isNaN(anio) ) {

    fechavalida = false
}


/* Resultado Final */


if (fechavalida) {

    console.log("Es una fecha Válida");
} else {

    console.log("NO es una fecha válida")
}

