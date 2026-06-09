let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let numeroCelular = document.getElementById("numeroCelular").value;
let fechaNacimiento = new date (document.getElementById("fechaN").value);
let direccion = document.getElementById("direccion").value;
let contraseña = document.getElementById("contraseña").value;

function ValidarDatos() {
    if (nombre != '' || email != '') {
        if (nombre == /^[^\d]*$/) {
            console.log("los datos ingresados son incorrectos")
        }
        if (!Email.include('@')) {
            console.log("los datos ingresados son correctos")
        }
    }
    else {
        console.log("ingrese todos los datos")
    }

    if (numeroCelular != '' || fechaN != '') {
        if (numeroCelular.length >= 10) {
            console.log("los datos ingresados son incorrectos")
        }
        if (fechaN == getDate()) {
            console.log("no se aceptan fechas mayores a la actual")
        }
        else {
            console.log("ingrese todos los datos")
        }
    }

    if (direccion != '' || contraseña != '') {
        if (contraseña.length >= 10) {
            console.log("los datos ingresados son incorrectos")
        }
        else {
            console.log("ingrese todos los datos")
        }

    }
}

