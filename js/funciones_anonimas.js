function sumame(num1,num2, sumaymuestra, sumaxdos){
    var suma = num1+num2;

    sumaymuestra(suma);
    sumaxdos(suma);

    return suma;
}

sumame(18, 7, function(dato){
    console.log("la suma es: ",dato);
},
function(dato){
    console.log("la suma multiplicada por dos es", (dato*2));
});