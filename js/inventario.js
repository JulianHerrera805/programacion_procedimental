let categoria = document.getElementById("CategoriaProducto").value;
let Nombre = document.getElementById("NombreProducto").value;
let precioUnitario = document.getElementById("PrecioUnitario").value;
let cantidad = document.getElementById("CantidadProducto").value;
let codigo = document.getElementById("CodigoProducto").value;
let marca = document.getElementById("Marcaproducto").value;
let UnidadDeMedida = document.getElementById("unidadMedida").value;

function ValidarDatos() {
    if (CategoriaProducto != '' || NombreProducto != '') {
        if (CategoriaProducto == /^[^\d]*$/) {
            console.log("los datos ingresados son incorrectos")
        }
        if (NombreProducto == /^[^\d]*$/) {
            console.log("los datos ingresados son incorrectos")
        }
    }
    else {
        console.log("ingrese todos los datos")
    }

    if (PrecioUnitario != '' || CantidadProducto != '') {
        if (PrecioUnitario == /[a-zA-Z]/) {
            console.log("los datos ingresados son incorrectos")
        }
        if (CantidadProducto == /[a-zA-Z]/) {
            console.log("los datos ingresados son incorrectos")
        }
        else {
            console.log("ingrese todos los datos")
        }
    }                                           

    if (CodigoProducto != '' || MarcaProducto != '') {
        if (CodigoProducto == /[a-zA-Z]/) {
            console.log("los datos ingresados son incorrectos")
        }
        if (MarcaProducto == /^[^\d]*$/) {
            console.log("los datos ingresados son incorrectos")
        }
        else {
            console.log("ingrese todos los datos")
        }

        if (UnidadDeMedida != '') {
            if (UnidadDeMedida == /[a-zA-Z]/) {
                console.log("los datos son incorrectos")
            }
            else {
                console.log("ingrese todos los datos ")
            }
        }
    }
}

