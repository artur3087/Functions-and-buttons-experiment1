let b1 = document.getElementById("plus");
let b2 = document.getElementById("minus");
let h3 = document.getElementById("h3");
let h1 = document.getElementById("h1");

a=20;
b=15;
c=dodaj(a,b);
d=odejmij(a,b);

function pokaz1() {
    console.log("20+15=", c);
    h3.innerHTML = ("20+15=")
    h1.innerHTML = c;
};

function pokaz2() {
    console.log("20-15=", d);
    h3.innerHTML = ("20-15=")
    h1.innerHTML = d;
}


function dodaj() {
    return a+b};
    

 function odejmij() {
    return a-b;

 };

b1.addEventListener("click", pokaz1);
b2.addEventListener("click", pokaz2);
