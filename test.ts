let EstaMal: boolean = true

console.log(EstaMal)
console.log("hola")

let a:Array<number> = []// se usa Array <[tipo de dato]> = [] para crear una tupla

a.push(2)
a.push(5)
a.push(7)
a.push(9)

console.log(a);

//Compuestos -> Se le denomina información exacta 

let docenteCompuesto = {nombre: "Juan", apellido:"Torres", edad: 25}
console.log(docenteCompuesto)


//Constante

const usuario: string = "u20191a458"

console.log(usuario);

//Solo se usará null como valor nulo

//Funciones
function promedio(a:number, b:number):number{
    
    return (a+b)/2
}
let promedioFuncion =function(a:number, b?:number):number{
    if (b==undefined){
        return a/2;
    }
    else{
        return (a+b)/2
    }
    
}

console.log(promedioFuncion(4))
