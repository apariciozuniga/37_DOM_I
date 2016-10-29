
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
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var indice= document.getElementsByTagName("option").selectedIndex;


	//NOMBRE
		
	if (nombre.length == 0 || /^\s+$/.test(nombre)) {	
		alert("El campo de nombre esta vacio");
		return false;	
	}
	else if (!(/^[a-zA-Z\s]*$/.test(nombre))){
		alert("El campo nombre solo acepta caracteres de la A-Z :)");
		return false;		
	}
	else if (!(/^[A-Z\s]*$/.test(nombre[0]))){
		alert("Escribe tu nombre con mayuscula");
		return false;	
	}

	 
	 //APELLIDO
	
	if (apellido.length == 0 || /^\s+$/.test(apellido)) {
		alert("El campo de apellido esta vacio");
		
	}
	else if (!(/^[a-zA-Z\s]*$/.test(apellido))){
		alert("El campo apellido solo acepta caracteres de la A-Z :)");
		return false;
		
	}
	else if (!(/^[A-Z\s]*$/.test(apellido[0]))){
		alert("Escribe tu apellido con mayuscula");
		return false;
	}

	
	 //PASSWORD
	if (password.length == 0 || /^\s+$/.test(password)) {
			alert("Escribe tu contraseña");
			return false;
	}
 
	else if(password==/^\d{6}$/){
	 	alert("Tu contraseña debe tener al menos 6 caracteres");
	 	return false;
	 	
	 }
	else if (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(password)) {	
		alert("introduce caracteres correctos");
		return false;								
  		
 	}
	else if(!(password == password || password==123456 || password == 098754)){
		alert("Prueba otra contraseña")
	}
	
	 
	 //EMAIL
	 if (email.length == 0 || /^\s+$/.test(email)) {
	 	alert("Escribe tu correo");
	 	return false;
	 }
	
	//LISTA
	if(indice == null || indice == 0){
  		alert("Debe elegir una opcion");
  		return false;
  	}
 
}





