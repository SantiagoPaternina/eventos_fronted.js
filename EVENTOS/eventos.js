//LOS EVENTOS SON ACCIONES QUE SE AGREGAN A LAS ETIQUETAS 
//DE HTML O LA VENTANA DEL NAVEGADOR, VAN LIGADOS A UNA FUNCION

// addEventListener()
//SELECCIONAR LA ETIQUETA
let boton = document.querySelector("button")
//AGREGAR AL EVENTO
boton.addEventListener("click", function(texto){
    texto = "Hola Carlos";
    mostrarMensaje(texto);
});

boton.addEventListener("dblclick", cambiarColor);
function cambiarColor(texto){
    let div = document.querySelector("div");
    div.style.color = "red";
    texto = "Hola carlos";
    mostrarMensaje(texto);
}
//QUITAR UN EVENTO DE UNA ETIQUETA 
boto.removeEventListener("dblclick", cambiarColor);

//FUNCION PARA MOSTRAR EL MENSAJE 
function mostrarMensaje(nombre){
    let div = document.querySelector("div");
    //VALIDAR SI LA ETIQUETA ESTA OCULTA O NO
    if(div.style.display == "block"){
        div.style.display = "none";
    }else{
        div.style.display = "block";
        div.textContent = nombre;
    }
}