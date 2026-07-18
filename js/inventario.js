function ValidarInformacion() {
    let categoria = document.getElementById("CategoriaProducto").value;
    let Nombre = document.getElementById("NombreProducto").value;
    let precioUnitario = document.getElementById("PrecioUnitario").value;
    let cantidad = document.getElementById("CantidadProducto").value;
    let codigo = document.getElementById("codigoProducto").value;
    let marca = document.getElementById("MarcaProducto").value;
    let UnidadDeMedida = document.getElementById("unidadMedida").value;

    if (!categoria || !Nombre || !precioUnitario || !cantidad || !codigo || !marca || !UnidadDeMedida) {
        Swal.fire({
            title: "campos incompletos",
            text: "rellena los campos",
            icon: "question"
        });
    }
    else {
        console.log(
            `Informacion del Producto: \n
            ${categoria} \n
            ${Nombre} \n
            ${precioUnitario} \n
            ${cantidad} \n
            ${codigo} \n
            ${marca} \n
            ${UnidadDeMedida} \n`
        );
        if (!/^[a-zA-Z]+$/.test(categoria)) {
            console.log("La Categoria debe contener letras")
            Swal.fire("La categoria debe tener letras");
            return;
        }
        if (!/^[a-zA-Z]+$/.test(Nombre)) {
            console.log("El nombre del producto debe tener letras")
            Swal.fire({
                icon: "error",
                text: "El nombre del producto debe tener letras"
            })
            return;
        }
        if (!/^\d+$/.test(precioUnitario)) {
            Swal.fire({
                title: "El precio unitario debe contener numeros",
                icon: "error"
            });
            return;
        }
        if (!/^\d+$/.test(cantidad)) {
            Swal.fire({
                title: "La cantidad del producto debe contener numeros",
                icon: "error"
            });
            return;
        }
        if (!/^\d+$/.test(codigo)) {
            Swal.fire({
                title: "El codigo del producto debe contener numeros",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(marca)) {
            console.log("La Marca del producto debe contener letras")
            Swal.fire("La Marca del producto debe tener letras");
            return;
        }
        if (!/^[a-zA-Z]+$/.test(UnidadDeMedida)) {
            console.log("La unidad de medida no debe contener numeros")
            Swal.fire("La unidad de medida no debe contener numeros");
            return;
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Informacion Guardada Correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
}
document.getElementById("btnGuardar").onclick = ValidarInformacion;
