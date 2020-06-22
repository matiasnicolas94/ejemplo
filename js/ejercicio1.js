
var n1 = parseInt(prompt("introduce el primer numero", 0));
var n2 = parseInt(prompt("introduce el segundo numero", 0));

console.log(n1,n2);



if(n1==n2){
    var res1;
    res = "son iguales";
}else{
    if(n1>n2){
        res = "el numero mayor es "+""+n1;
    }else{
        res= "el numero mayor es"+ n2;
    }
}

console.log(res);