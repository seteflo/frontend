var EstaMal = true;
console.log(EstaMal);
console.log("hola");
var a = []; // se usa Array <[tipo de dato]> = [] para crear una tupla
a.push(2);
a.push(5);
a.push(7);
a.push(9);
console.log(a);
//Compuestos -> Se le denomina información exacta 
var docenteCompuesto = { nombre: "Juan", apellido: "Torres", edad: 25 };
console.log(docenteCompuesto);
//Constante
var usuario = "u20191a458";
console.log(usuario);
//Solo se usará null como valor nulo
//Funciones
function promedio(a, b) {
    return (a + b) / 2;
}
var promedioFuncion = function (a, b) {
    if (b == undefined) {
        return a / 2;
    }
    else {
        return (a + b) / 2;
    }
};
console.log(promedioFuncion(4));
//interfaces
//sin usar interfaces
function mT(tarea) {
    console.log(tarea.descripcion + ", " + tarea.estado);
}
mT({ descripcion: "Presentar Sillabus", status: "ealizado" });
var TareaExplicita = { descripcion: "Presentar Sillabus", status: "ealizado" };
mT(TareaExplicita);
function mostrarITarea(tarea) {
    console.log(tarea.descripcion + " - " + tarea.estado);
}
//clases
var Alumno = /** @class */ (function () {
    function Alumno(codigo, nombreCompleto, ciclo) {
        this.codigo = codigo;
        this.nombreCompleto = nombreCompleto;
        this.ciclo = ciclo;
    }
    Alumno.prototype.registrar = function () {
        console.log(this.nombreCompleto + " quedó registrado");
    };
    return Alumno;
}());
var alumno;
alumno = new Alumno(2001862, "Sebastian T", 5);
console.log(alumno);
alumno.registrar();
