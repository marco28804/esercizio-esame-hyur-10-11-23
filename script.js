function analizzaTesto (str){
str=prompt("inserisci la tua stringa");
let minuscolo=str;
console.log("questa e la tua stringa:" + str)
minuscolo=minuscolo.toLowerCase()
console.log("questa e la tua stringa in minuscolo: " + minuscolo)
let senzaSpazi=str;
senzaSpazi= senzaSpazi.trim();
let lunghezza=senzaSpazi.length;
console.log("la tua stringa ha: " +lunghezza +" caratteri")
let s=true;
for(i=0;i<senzaSpazi.length;i++)
{
    if(senzaSpazi.includes("JS") || senzaSpazi.includes("JavaScript"))
    {
        s=false;
        break;
    }
}
if(s==false)
{
    console.log("la tua stringa contiene la parola JS o JavaScript")
}
else{
    console.log("la tua stringa non contiene la parola JS o JavaScript")
}
let inverso="";
for(i=senzaSpazi.length;i>=0;i--){
inverso=inverso+senzaSpazi[i];

}
console.log("la tua stringa inversa " + inverso)
}
let str;
analizzaTesto(str);

function riempiArray(N){
N=prompt("dimmi il numero di elementi");
 numeroElementi=[N];
 valoreMinimo=[1];
valoreMassimo=[1000];
for(let i=0;i<N;i++){
    numeroElementi[i]=Math.floor(Math.random(valoreMinimo)*valoreMassimo)+1;
}
console.log(numeroElementi)
let p=0;
let d=0;
for(let i=0;i<N;i++){
if(numeroElementi[i]%2==0)
{
    p++;
}
else{
    d++;
}
}
console.log("i numeri pari sono "+ p+ " mentre quelli dispari sono "+ d)
}
let N;
riempiArray(N)

window.addEventListener('load',()=>{
const botton=document.querySelector('button');
botton.addEventListener('click', ()=> {

const input = document.getElementById("testoUtente").value;
let p=document.createElement("p");
    if (input === "") {
        alert("Inserisci del testo prima di inviare!");
 
    } else {
        p.textContent = input;
        document.body.appendChild(p);
        //didnmito a e 13
    }
});
});