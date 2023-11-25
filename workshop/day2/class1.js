var a=10;
var b=10;
//const for declaring constant values
const d=20;
var c;
c=a+b;
console.log(c);

function add(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;

    var c = parseInt(a)+parseInt(b)
    document.getElementById("ans").value=c;
}

function sub(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;

    var c = parseInt(a)- parseInt(b)
    document.getElementById("ans").value=c;
}
function mul(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;

    var c = parseInt(a)* parseInt(b)
    document.getElementById("ans").value=c;
}
function div(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;

    var c = parseInt(a)/ parseInt(b)
    document.getElementById("ans").value=c;
}