function init(){
	var total = document.getElementById("total");
	var submit = document.getElementById("confirmar");
	var cuenta = document.getElementById("pedido");
	var divcomentario = document.getElementById('divComentario');
	var comentario = document.getElementById('comentario');
	var html = "";
	var id
	var subtotal = 0;
	var cantidad = 0;
	var checkbox = document.getElementsByClassName("opciones");
	var cantidades = document.getElementsByClassName("cantidad");
	var i;
	submit.addEventListener("click", realizarPedido, false);
	divcomentario.addEventListener('click', function(event){
			event.preventDefault()
	    	comentario.style.display = "block";
	    	divcomentario.style.display = "none";
	});
	document.addEventListener('keydown', function(event) {
	  	if (event.ctrlKey && event.key === 'e') {
	    	event.preventDefault()
	    	comentario.style.display = "block";
	    	divcomentario.style.display = "none";
	  	}
	  	if(event.ctrlKey && event.key === 's'){
	  		event.preventDefault()
	  		divcomentario.innerHTML += "<p>"+ comentario.value +"</p>";
	  		comentario.value = "";
	  		comentario.style.display = "none";
	    	divcomentario.style.display = "block";
	  	}
	});
	for(i = 0; i < 13; i++){
		checkbox[i].addEventListener("change", validaCheckbox, false);
	}
	function realizarPedido(){
		for(i = 0; i < 13; i++){
		  if(checkbox[i].checked){
		  	var descripcion = "";
		  	switch(checkbox[i].id){
				case "superC":
					var nombre = "Super combo";
					var valor = 7.25;
					descripcion = " (tres piezas de pollo, ensalada, papas fritas y bebida grande de su elección) ";
				break;
				case "personalC":
					var nombre = "Combo personal";
					var valor = 5.75;
					descripcion = " (dos piezas de pollo, papa frita y bebida mediana)";
				break;
				case "infantilC":
					var nombre = "Combo infantil";
					var valor = 3.50;
					descripcion = " (1 pieza de pollo, papas fritas y una bebida pequeña)";
				break;
				case "ensalada":
					var nombre = "Ensalada";
					var valor = 1.50;
					descripcion = " (ensalada pequeña con adereso)";
				break;
				case "papaFrita":
					var nombre = "Papas fritas";
					var valor = 1.25;
					descripcion = " (orden de papas fritas con adereso)";
				break;
				case "piezaG":
					var nombre = "Pieza de pollo grande";
					var valor = 1.75;
				break;
				case "piezaM":
					var nombre = "Pieza de pollo mediana";
					var valor = 1.50;
				break;
				case "piezaP":
					var nombre = "Pieza de pollo pequeña";
					var valor = 1.25;
				break;
				case "bebidaG":
					var nombre = "Bebida grande";
					var valor = 1.50;
				break;
				case "bebidaM":
					var nombre = "Bebida mediana";
					var valor = 1.25;
				break;
				case "bebidaP":
					var nombre = "Bebida pequeña";
					var valor = 1.00;
				break;
				case "cafe":
					var nombre = "Café";
					var valor = 0.50;
				break;
				case "postre":
					var nombre = "Postre";
					var valor = 1.25;
				break;
			}
			comprados = checkbox[i].value / valor; 
			html += "<p>" + comprados +" "+ nombre + descripcion +" $"+ valor +" --- $"+ checkbox[i].value + "</p>";
		  }
		}
		html += "<p> total: $" + total.value +"</p>";
		cuenta.innerHTML = html;
	}
	function validaCheckbox()
	{
		switch(this.id){
			case "superC":
				var nombre = "Super combo";
				var valor = 7.25;	
			break;
			case "personalC":
				var nombre = "Combo personal";
				var valor = 5.75;
			break;
			case "infantilC":
				var nombre = "Combo infantil";
				var valor = 3.50;
			break;
			case "ensalada":
				var nombre = "Ensalada";
				var valor = 1.50;	
			break;
			case "papaFrita":
				var nombre = "Papas fritas";
				var valor = 1.25;
			break;
			case "piezaG":
				var nombre = "Pieza de pollo grande";
				var valor = 1.75;
			break;
			case "piezaM":
				var nombre = "Pieza de pollo mediana";
				var valor = 1.50;
			break;
			case "piezaP":
				var nombre = "Pieza de pollo pequeña";
				var valor = 1.25;
			break;
			case "bebidaG":
				var nombre = "Bebida grande";
				var valor = 1.50;
			break;
			case "bebidaM":
				var nombre = "Bebida mediana";
				var valor = 1.25;
			break;
			case "bebidaP":
				var nombre = "Bebida pequeña";
				var valor = 1.00;
			break;
			case "cafe":
				var nombre = "Café";
				var valor = 0.50;
			break;
			case "postre":
				var nombre = "Postre";
				var valor = 1.25;
			break;
			default:
			break;
		}
	  var checked = this.checked;
	  if(checked){
	  	cantidad += prompt("Ingrese la cantidad que necesita de "+ nombre);
	  	if(cantidad == 0){
	  		this.checked = false;
	  	}
	  	else{
	  		if(isNaN(cantidad)){
	  			alert("la cantidad ingresada no es un número valido");
	  			this.checked = false;
	  		}
	  		else{
	  			subtotal += Number(this.value) * Number(cantidad);
	  			this.value = Number(this.value) * Number(cantidad);
	  			cantidad = 0;
	    		total.value = subtotal;
	  		}
	  	}

	  }
	  else{
	  	subtotal -= Number(this.value);
	  	this.value = valor;
	    total.value = subtotal;
	  }
	}
}	
window.onload = init;

