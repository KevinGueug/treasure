const bamse = document.getElementById("bamse");
const bamse1 = document.getElementById("bamse1");

const oks = document.getElementById("oks");
const oks1 = document.getElementById("oks1")

const granat = document.getElementById("granat")
const granat1 = document.getElementById("granat1")

const penger = document.getElementById("penger")
const penger1 = document.getElementById("penger1")

const items = {
    bamse: 0,
    oks: 0,
    granat: 0,
    penger: 0
}

bamse1.innerHTML = items.bamse
oks1.innerHTML = items.oks;
granat1.innerHTML = items.granat;
penger1.innerHTML = items.penger;

bamse.addEventListener("click", ()=>{
    items.bamse = items.bamse +1;
    bamse1.innerHTML = items.bamse;})

penger.addEventListener("click", ()=>{
    items.penger = items.penger +1;
    penger1.innerHTML = items.penger;})

oks.addEventListener("click", ()=>{
    items.oks = items.oks +1;
    oks1.innerHTML = items.oks})

granat.addEventListener("click", ()=>{
    items.granat = items.granat +1;
    granat1.innerHTML = items.granat
})




const button = document.getElementsByTagName("button");
button[0].addEventListener("click", ()=>{
    if (3 > items.bamse) {
        alert("You need at least 3 Teddys")}
    else if (10 > items.granat + items.penger + items.bamse + items.oks){
        alert("You need at least 10 items")
    }
    else {
       document.body.innerHTML="";
        var h1 = document.createElement("h1")
        h1.innerHTML="Congratulations you won the game!";
        document.body.appendChild(h1);
        

    }})

