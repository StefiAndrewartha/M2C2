var sexo = prompt("Ingrese su sexo: ");
var edad = parseInt(prompt("Ingrese su edad:"));
if(sexo == "hombre" && edad >= 65){
   alert("Estás en edad de jubilarte");
   document.write("Estás en edad de jubilarte");
}else if(sexo == "mujer" && edad >=60){
   alert("Estás en edad de jubilarte");
   document.write("Estás en edad de jubilarte");
}else{
   alert("No Estás en edad de jubilarte");
   document.write("No Estás en edad de jubilarte");
}