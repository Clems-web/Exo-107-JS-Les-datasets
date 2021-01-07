// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
p1.dataset.nombre = (parseInt(p1.dataset.nombre) + 10).toString();
console.log(p1.dataset.nombre);

let p2 = document.getElementById('p2');
p2.dataset.text = p2.dataset.text.length.toString();
console.log(p2.dataset.text);

let p3 = document.getElementById('p3');
let tableau = p3.dataset.table.split("|");
for (let contenu of tableau) {
    p3.innerHTML += ", " + contenu.trim();
}

let p4 = document.getElementById('p4');
let booleanTest = p4.dataset.boolean;
if (booleanTest) {
    p4.innerHTML += " : la valeur vaut false";
}
else {
    p4.innerHTML += " : la valeur vaut true";
}

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
p5.dataset.number = '42';
console.log(p5.dataset.number);

let p6 = document.getElementById('p6');
p6.dataset.number = '58';
console.log(p6.dataset.number);

let p7 = document.getElementById('p7');
p7.dataset.number = '64';
console.log(p7.dataset.number);

let p8 = document.getElementById('p8');
p8.dataset.number = '23';
console.log(p8.dataset.number);