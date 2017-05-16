//para eliminar la llamada onclick="agregar()" del elemento #boton, se puede agregar:
window.onload = function(){
	document.getElementById("boton").addEventListener("click", agregar);
}

function agregar(){
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = ""; // recupera el texto ingresado en textarea y limpia textarea

	var cont = document.getElementById("contenedor"); // indica donde van a estar las tareas que recupere de textarea
	
	//creamos checkbox e iconos, les damos atributo y clases
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class", "check");
	var nuevasTareas = document.createElement("div"); // con esto estamos creando nuevos nodos elementos
	var textoNuevaTarea = document.createTextNode("tareas");
	var elementoContenedor = document.createElement("span");

	elementoContenedor.appendChild(textoNuevaTarea);
	cont.appendChild(nuevasTareas);

	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");

	//asignamos padres a nodos creados
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(elementoContenedor);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	/*agregamos un evento al hacer click, para que elimine o agregue la 
	clase "tachado" al elementoContenedor*/
	chck.addEventListener("click", function(){
		elementoContenedor.classList.toggle("tachado");
	})

	//removemos el icono basura al hacer click sobre el
	basura.addEventListener("click", function(){
		cont.removeChild(nuevasTareas);
	})

	//creamos funcion click para el corazon y le asignamos la clase red de css
	cora.addEventListener("click", function(){
		cora.classList.toggle("red");
	})
	//valida que textarea no este vacia al presionar boton aceptar
	if(tareas == null || tareas.length == 0){
		alert("¡Error ! Debe ingresar tarea");
		return false;
	}
	
}







