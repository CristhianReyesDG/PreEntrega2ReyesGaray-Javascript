//Inicializacion de Variable de Ayuda
let i = 0;
let ingresoUsuario = 0;
let otraAux = 0;
let contLibres = 0;
let contRegulares = 0;
let contRevision = 0;
//Ingreso de Cantidad de elementos a trabajar
let NumeroAlumnos = Number(prompt("ingrese Cant de Alumnos"))
//Se Crea el Array
const Curso = Array.apply(null, Array(NumeroAlumnos))
.map(function () { });
console.log ("----------------------------------------")
console.log("Curso")
console.log ("Resumen de Faltas")
//Se la recorre agregando los datos de cada alumno
for (let contador=0; contador < NumeroAlumnos ; contador += 1){
    let NombrePrueba = prompt("Ingrese un Nombre");
    let ApellidoPrueba = prompt("Ingrese un appellido")
    let Faltas = Number(prompt("Ingrese Cantidad de Faltas"))
    function Alumno(nombre, apellido,faltas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.faltas = faltas;
    }
    const me = new Alumno(NombrePrueba, ApellidoPrueba, Faltas);
    Curso[contador]=me;
}
console.log ("----------------------------------------")
console.table(Curso);

//Se le pregunta al usuario que desea ver, dependiendo de la respuesta, se le mostraran diferentes resultados

let decision = Number(prompt("Seleccione lo que desea ver : Todos Los Alumnos (Ingrese 1) Solo Regulares (Ingrese 2) Libres (Ingrese 3) Con Revision (Ingrese 4)"))
console.log ("----------------------------------------")
switch (decision) {
    case 1 : 
        do { 
            //Ver la lista completa de Alumnos
            let auxFaltas = Number (Curso[i].faltas) ;
            if (auxFaltas > 25){
                console.log(Curso[i].nombre + " " + Curso[i].apellido + " - Es Alumno Libre")
            }else if (auxFaltas >= 15 && auxFaltas <= 25 ){
                console.log(Curso[i].nombre + " " + Curso[i].apellido + " - Se debe revisar la situacion del Alumno")
            }else{
                console.log(Curso[i].nombre + " " + Curso[i].apellido + " - Es Alumno Regular")
            }
            i ++;
        }while (i < Curso.length)
        break;
    case 2 : 
        //Ver solo los Alumnos regulares con menos de 15 faltas
        do { 
            let auxFaltas = Number (Curso[i].faltas) ;
            if (auxFaltas < 15){
                console.log(Curso[i].nombre + " " + Curso[i].apellido + " - Es Alumno Regular con " + Curso[i].faltas + " faltas")      
            }
            i ++;
        }while (i < Curso.length)
        break;
    case 3 : 
        //Aquellos libres, que tienen mas de 25 faltas
        do { 
            let auxFaltas = Number (Curso[i].faltas) ;
            if (auxFaltas > 25 ){
                console.log(Curso[i].nombre + " " + Curso[i].apellido + " - Se encuentra Libre con : " + Curso[i].faltas + " faltas")    
            }
            i ++;
        }while (i < Curso.length)
        break;
    case 4 : 
        //Aquellos alumnos que deben revisar su situacion y si se les podran otorgar mas faltas
        do { 
            let auxFaltas = Number (Curso[i].faltas) ;
            if (auxFaltas >= 15 && auxFaltas <= 25 ){
                console.log(Curso[i].nombre + " " + Curso[i].apellido + " - Debe revisar su condicion con : " + Curso[i].faltas + " faltas")    
            }
            i ++;
        }while (i < Curso.length)
        break;
}
console.log ("----------------------------------------")
i = 0;

// Aca dejamos un resumen de la cantidad de alumnos que hay, y cuantos estan en las diferentes situaciones 
do { 
    let auxFaltas = Number (Curso[i].faltas) ;
    if (auxFaltas > 25){
        contLibres ++;
    }else if (auxFaltas > 15 && auxFaltas <= 25 ){
        contRevision ++;
    }else{
        contRegulares ++;
    }
    i ++;
}while (i < Curso.length)

//En caso de que solo haya un alumno en alguna situacion, se usa el titulo en singular, sino se le agregan "s" y se usa el plural
console.log("En Total hay : " , NumeroAlumnos , "Alumnos")
if(contLibres == 1){ console.log ( contLibres , " Alumno Libre") }else{ console.log( contLibres , " Alumnos Libres")}
if(contRegulares == 1){ console.log ( contRegulares , " Alumno Regular") }else { console.log( contRegulares , " Alumnos Regulares")}
if(contRevision == 1){ console.log ( contRevision , " Alumno en Revision") }else { console.log( contRevision , " Alumnos en Revision")}
