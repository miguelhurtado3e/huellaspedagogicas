validar.addEventListener("click",(e)=>{
	e.preventDefault()


	if (usuario.value == "Pruebas.Admision.Fagua"){
		if (contraseña.value =="1598753")
			window.location.href = "index.html"
		else
			alert("usuario no valido")
	} else if (usuario.value == "InstitucionEducativaFagua"){
		if (contraseña.value =="123")
			window.location.href = "index.html"
		else
			alert("usuario no valido")
	} else if (usuario.value == "Educando"){
		if (contraseña.value =="235711")
			window.location.href = "index.html"
	    else
			alert("usuario no valido")
	} else {
		alert("usuario no valido")
	}
} )
