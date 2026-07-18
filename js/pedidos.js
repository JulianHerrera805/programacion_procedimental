function ValidarInformacion() {
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("Email").value;
    let MetodoDePago = document.getElementById("MetodoDePago").value;
    let pedido = document.getElementById("pedido").value;
    let nombre = document.getElementById("nombre").value;
    let referencias = document.getElementById("referencias").value;

    if (
        !direccion || !telefono ||
        !email || !MetodoDePago ||
        !pedido || !nombre
    ) {
        console.log(
            `Informacion del Inicio de Sesion: \n
            ${direccion} \n ${telefono} \n
            ${email} \n ${MetodoDePago} \n
            ${pedido} \n ${nombre}`
        );
        Swal.fire({
            title: "campos incompletos",
            text: "rellena los campos",
            icon: "question"
        });
    }
    else {
        console.log(
            `Informacion del Inicio de Sesion: \n
            ${direccion} \n ${telefono} \n
            ${email} \n ${MetodoDePago} \n
            ${pedido} \n ${nombre}`
        );
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Informacion Guardada Correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
    if (!/^\d+$/.test(telefono)) {
        Swal.fire({
            title: "El telefono debe contener numeros",
            icon: "error"
        });
        return;
    }
    if (!/^[a-zA-Z]+$/.test(Nombre)) {
        console.log("El nombre debe tener letras")
        Swal.fire({
            icon: "error",
            text: "El nombre debe tener letras"
        })
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire({
            title: "Ingrese un correo electrónico válido",
            icon: "error"
        });
        return;
    }

}
document.getElementById("btnGuardar").onclick = ValidarInformacion;