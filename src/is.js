let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario =e.target
    console.log(formulario.children[1].value);
    console.log(formulario.children[3].value);
    console.log(formulario.children[5].value);
}

function validacion(event){
    const valorDelInput = event.target.value;
    if(valorDelInput.length<8){
        event.target.style.border="2px solid red";
    }else{
        event.target.style.border="2px solid green";
    }
}