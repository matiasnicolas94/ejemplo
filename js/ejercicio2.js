var suma=0;
var cont=0;

do{
    var num1 =parseInt(prompt("introduce numeros hasta que pongas un negativo", 0));

    if(isNaN(num1)){
        num1= 0;
    }else if(num1>=0){
        suma = suma + num1;
        cont++;

        
        console.log(suma);
        console.log(cont);
    }
}while(num1 >=0)

    alert("la suma de todos los numeros es "+ suma);
    alert("la media es"+(suma/cont));
