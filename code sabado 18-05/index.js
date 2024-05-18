"use strict";
/*console.log("Hola mundo en TS");

let input_mensaje: HTMLInputElement | null = null;
let lbl: HTMLElement | null = null;

if (document.getElementById("input_mensaje")!=null) {
   input_mensaje = document.getElementById("input_mensaje") as HTMLInputElement
}

if(document.getElementById("lbl_mensaje") != null){
    lbl = document.getElementById("lbl_mensaje")
}

if (input_mensaje && lbl) {
    lbl.innerText = input_mensaje.value;
}*/
//Herencia
class Alumno {
    constructor(codigo, nombrecmpleto, ciclo) {
        this.codigo = codigo;
        this.ciclo = ciclo;
        this.nombrecmpleto = nombrecmpleto;
    }
    registrarse() {
        console.log(this.nombrecmpleto + "Quedó regisrado");
    }
}
class Matriculado extends Alumno {
    constructor(codigo, nombrecmpleto, ciclo, creditos) {
        super(codigo, nombrecmpleto, ciclo);
        this.creditos = creditos;
    }
    registrarse() {
        super.registrarse();
        console.log("Su número de créditos para el ciclo " + this.ciclo + " es " + this.creditos);
    }
}
// Polimorfismo
let alumno2;
alumno2 = new Matriculado(20191458, "Sebastian Tejeda", 8, 20);
alumno2.registrarse();
// Encapsulamiento
class Salon {
    constructor(sillas) {
        this._sillas = sillas;
    }
    getSillas() {
        return this._sillas;
    }
    setSillas(sillas) {
        this._sillas = sillas;
    }
    get sillas() {
        return this._sillas;
    }
    set sillas(sillas) {
        this._sillas = sillas;
    }
}
let salon;
salon = new Salon(20);
salon.sillas = 15;
console.log(salon.sillas);
//Functional
let arreglo_notas = Array();
let cant_alumnos = 10;
let i = 0;
while (i < cant_alumnos) {
    let nota;
    nota = Math.round(Math.random() * 20); // genera numeros aleatorios entre 0 y 20
    arreglo_notas.push(nota);
    i++;
}
console.log(arreglo_notas);
let esImpar = function (x) {
    return x % 2 == 1;
};
let arreglo_notas_2 = Array(20)
    .fill(1100)
    .map(() => Math.round(Math.random() * 20))
    .filter(esImpar)
    .sort(function (num1, num2) {
    if (num1 < num2) {
        return 1;
    }
    else {
        return -1;
    }
});
console.log(arreglo_notas_2);
