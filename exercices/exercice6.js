// function isMultiple(n,m) {
//     return n % m === 0
// }

// // let resultat = isMultiple(15,5)
// // console.log(resultat)

// // console.log(isMultiple(6, 36));

// function isEven( i ) {
//     return isMultiple(i, 2)
// }
// let resultat = isEven(7);
// console.log(resultat);

// // console.log(isEven(8))

// // function isPremier{

// // }

// function isMultiple(n, m) {
//     return n % m === 0;
// }

// let estMultiple = function (n, m) {
//     return n % m === 0;
// }
// estMultiple = (8, 3);

// // let isMultiple = (n, m)=> {
//     return n % m === 0;
// }
// letisMultiple = (n, m)=>  n % m === 0;

// function addition(a, b= 0) {
//     return a + b;
// }
// let resultat = addition(3, 6);
// console.log("resultat = " +resultat)
// console.log(`resultat = ${resultat}`);

// function additionner(...unArgument) {
//     let resultat = 0;
//     for (const arg of unArgument) {
//         resultat += arg;        
//     }
//     return resultat;
// }

// resultat = additionner(3, 5, "8", 9)
// console.log(`resultat = ${resultat}`);


// // let multiplication = (a, b) => a * b;

// (function multiplication(a, b) {
//     console.log(a * b);
    
// })(3, 9);


// function auto execute
// 

// let  tableau1 = ["a", "z", "e"];
// console.log(typeof tableau1);

// let tableau2 = ["a", "z", "e"];
// console.log(tableau1 == tableau2);
// console.log(tableau1 === tableau2);

// class compte{
//     numero;
//     solde;   
// }

// let compte1 = new compte();
// compte1.solde = 300;
// compte1.numero = "001"
// console.log(typeof compte1);
// console.log(compte1);

// class compte{
//     numero;
//     solde;
//     // constructor
//     constructor(n) {
//         this.numero = n;
//         this.solde = 50;
//     } 
//     // methode
//     crediter(montant){
//         this.solde += montant;
//     }  
// }
// let compteA = new compte(001);
// console.log(compteA);

// compteA.crediter(5000)

// JSON = javascript Object Notation
let personne = new Object();
personne.prenom = "joachin"
personne.age = 52;

console.log(personne);