var numero = parseInt(prompt("Ingrese un numero: "));
if(numero % 2 == 0){
   alert("El numero es par");
   document.write(`<h2> El numero ${numero} es par</h2>`)
}else{
   alert("El numero es impar")
   document.write(`<h2> El numero ${numero} es impar</h2>`)
}