function validarDatos() {
	var num1 = parrafoerrores.value;
	var num2 = 1;
  var suma;
  if(primero.value === ""){
	}if(segundo.value === ""){
	}if(tercero.value === ""){
	}if(cuarto.value === ""){
		document.getElementById('nobacio').className = "visible";
			$("#nobacio").fadeOut(4000);
		return;
	}

	if(primero.value === "S"){
	}if(segundo.value === "U"){
	}if(tercero.value === "A"){
	}if(cuarto.value === "V"){
	}if(quinto.value === "E"){
		alert("CORRECTO!");
		document.getElementById('siguiente').className = "visible";
		var num3 = inputmonedas.value;
		var num4 = 5;
  	var res;
  	res = parseInt(num3)+parseInt(num4);
   	document.getElementById("inputmonedas").value = res;
		if (typeof(Storage) !== "undefined") {
   		localStorage.setItem("monedas", res);
		}
	}else{
		document.getElementById('x').className = "visible";
      	$("#x").fadeOut(2000);
    suma = parseInt(num1)+parseInt(num2);
    document.getElementById("parrafoerrores").value = suma;
	}if(parrafoerrores.value == "5"){
		document.getElementById("primero").value = "S";
	}if(parrafoerrores.value == "10"){
		alert("PISTA: Se nota con el tacto.");
	}
}
document.getElementById("inputmonedas").value = localStorage.getItem("monedas");

function restarMonedas() {
	if(inputmonedas.value <= 4){
		alert("Necesita 5 monedas o mas para conseguir una letra, si quiere pude ver un video y conseguir 5 monedas mas dandole al play.");
	}else{
		var num4 = inputmonedas.value;
		var num5 = 5;
  	var res;
  	res = parseInt(num4)-parseInt(num5);
   	document.getElementById("inputmonedas").value = res;
		document.getElementById("quinto").value = "E";
	}
}

function monedasVideo() {
		var num5 = inputmonedas.value;
		var num6 = 5;
  	var res;
  	res = parseInt(num5)+parseInt(num6);
   	document.getElementById("inputmonedas").value = res;
		if (typeof(Storage) !== "undefined") {
   		localStorage.setItem("monedas", res);
		}
}