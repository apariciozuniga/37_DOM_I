
/* Abre el archivo js/main.js y completa la función validateForm, se deben hacer las siguientes validaciones en los campos:
Todos los campos son obligatorios, excepto los dos últimos.
Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
Para los campos nombre y apellido la primera letra debe ser mayúscula
Validar que el campo email tenga un formato válido. Ej: name@domain.com
El campo password debe tener al menos 6 caracteres
El campo password no puede ser igual a "password" ó "123456" ó "098754"
El valor seleccionado de bicis, debe ser una de las opciones presentadas
Si algún campo presenta error debe informarse al usuario por medio de un alert. */

function validateForm(){
	
var nombre=document.getElementById("name").value;
var apellido=document.getElementById("lastname").value;	
var email=document.getElementById("input-email").value;
var password=document.getElementById("input-password").value;
var indice = document.getElementsByTagName("select").value;


	//NOMBRE
		
	if (nombre.length == 0 || /^\s+$/.test(nombre)){
		alert("El campo de nombre esta vacio");
		return false;
	}
	else if (!(/^[a-zA-Z\s]*$/.test(nombre))){
		alert("Solo acepta caracteres de la A-Z");
		return false;
		
	}
	else if (!(/^[A-Z\s]*$/.test(nombre[0]))){
		alert("Escribe tu nombre con mayuscula");
		return false;
		
	}

	 
	 //APELLIDO
	
	if (apellido.length == 0 || /^\s+$/.test(apellido)){
		alert("El campo de apellido esta vacio");
		return false;
	
	}
	else if (!(/^[a-zA-Z\s]*$/.test(apellido))){
		alert("Solo acepta caracteres de la A-Z");
		
	}
	else if (!(/^[A-Z\s]*$/.test(apellido[0]))){
		alert("Escribe tu apellido con mayuscula");
		
	

	}
	
	 //PASSWORD
	if (password.length == 0 || /^\s+$/.test(password)) {
			alert("Escribe tu contraseña");
			return false;
	}
 
	else if(!(password([6]))){
	 	alert("Tu password debe tener al menos 6 caracteres");
	 	
	 }
	else if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(password))) {	
		alert("introduce caracteres correctos");								
  		
	}
	
	 
	 //EMAIL
	 if (email.length == 0 || /^\s+$/.test(email)) {
	 	alert("Escribe tu correo")
	 }

	else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/).test(email))  {
		alert("La direccion de email es correcta");
	}
	else if(email == 0){
		alert("Los campos de password no pueden quedar vacios");
	}
	
	
	//LISTA
	if(indice.length == 0 ) {
  		alert("Debe elegir una opcion");
  	}	
 
}





