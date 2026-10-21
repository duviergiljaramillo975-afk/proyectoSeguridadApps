export  function validarUsuario(){
    const usuarioActivo = JSON.parse(
        localStorage.getItem("usuarioActivo")
    );
    console.log("soy usuarioActivo de la funcion", usuarioActivo);
    const esEstudiante = usuarioActivo && usuarioActivo.TipoUsuario === "estudiante";
    //me retorna un true o un falce
    //true cuando es verdadera la validacion
    if (esEstudiante) {
        console.log("Ingrese en estudiante");
        const botonesEditar = document.querySelectorA11(".btn-editar");

        console.log("Botones encontrados:", botonesEditar.length);
        document.querySelectorA11(".btn-editar").forEach(btn => {
            btn.disabled = true;
        });
        document.querySelectorA11(".btn-eliminar").forEach(btn => {
            btn.hidden = true;
        });
    }



}