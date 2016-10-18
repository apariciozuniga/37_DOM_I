	// document.getElementById("name");
	// document.getElementById("lastname");
	// document.getElementById("input-email");
	// document.getElementById("input-password");
	// document.getElementById("input-social");
	// document.getElementById("form-group");

	// var name = document.getElementById("name").value;
	// if (name == null || name.length == 0 || /^\s+$/.test(name) ) {
	// 	return false;
	// }


	// var imput-email = document.getElementById("input-email").value;
	// /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	// if (document.form.input-email.value.length==0){
	// alert("Escribe bien tu correo");
	// document.form.imput-email.focus();
	// return 0;
 	// if (errores>0) {
	 // 	alert(mensaje);
	 // 	return false;
	 // }
	 // return true;
	

	// }
function validateForm(){
	var apellido = getElementById("lastname").value;
	var nombre=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var password=document.getElementById("input-password");
	var mensaje ="";
	var errores = true;

	if (!regexEmail.test(email)) {
		mensaje+="Esta mal email";
		errores=false;

	}
	 
	 if(!regexNombre.test(nombre)){
	 	mensaje+="Esta mal";

	 }
	 if (!errores) {
	 	alert(mensaje);
	 	return errores;
	 }


	

	
	

! negacion


/* Abre el archivo js/main.js y completa la función validateForm, se deben hacer las siguientes validaciones en los campos:
Todos los campos son obligatorios, excepto los dos últimos.
Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
Para los campos nombre y apellido la primera letra debe ser mayúscula
Validar que el campo email tenga un formato válido. Ej: name@domain.com
El campo password debe tener al menos 6 caracteres
El campo password no puede ser igual a "password" ó "123456" ó "098754"
El valor seleccionado de bicis, debe ser una de las opciones presentadas
Si algún campo presenta error debe informarse al usuario por medio de un alert. */