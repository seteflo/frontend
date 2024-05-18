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

class Alumno{
    codigo:number
    nombrecmpleto:string
    ciclo:number

    constructor(codigo:number, nombrecmpleto:string, ciclo:number){
        this.codigo = codigo
        this.ciclo = ciclo
        this.nombrecmpleto = nombrecmpleto
    }

    registrarse():void{
        console.log(this.nombrecmpleto + "Quedó regisrado"
        );
        
    }
}

class Matriculado extends Alumno{
    creditos:number

    constructor(codigo:number, nombrecmpleto:string, ciclo:number, creditos:number){
        super(codigo, nombrecmpleto, ciclo)
        this.creditos=creditos;
    }

    registrarse(): void {
        super.registrarse()
        console.log("Su número de créditos para el ciclo " +this.ciclo + " es "+ this.creditos);
        
    }
}


// Polimorfismo

let alumno2 : Alumno

alumno2 = new Matriculado(20191458, "Sebastian Tejeda", 8, 20)
alumno2.registrarse()


// Encapsulamiento

class Salon{
    private _sillas: number

    constructor(sillas:number){
        this._sillas = sillas
    }

    getSillas():number{
        return this._sillas
    }

    setSillas(sillas:number){
        this._sillas = sillas
    }

    get sillas():number{
        return this._sillas
    }

    set sillas(sillas:number){
        this._sillas = sillas
    }
}

let salon:Salon
salon = new Salon(20)

salon.sillas = 15

console.log(salon.sillas);


//Functional

let arreglo_notas:number[] = Array()
let cant_alumnos: number = 10

let i:number = 0

while(i<cant_alumnos){
    let nota:number
    nota = Math.round(Math.random()*20) // genera numeros aleatorios entre 0 y 20
    arreglo_notas.push(nota)
    i++
}

console.log(arreglo_notas)

let esImpar = function(x:number):boolean{
    return x%2==1
}

let orderAsc = function(num1:number,num2:number):number{
    if(num1 < num2){
        return 1
    }
    else{
        return -1
    }
}


let arreglo_notas_2: number[] = Array(20)
                                .fill(100)
                                .map(
                                    ()=>Math.round(Math.random()*20)
                                )
                                .filter(esImpar)
                                .sort(orderAsc)

console.log(arreglo_notas_2);



