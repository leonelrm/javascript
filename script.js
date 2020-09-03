// console.log('hello world');

// var firstname;
// firstname= "papa";
// firstname= 42;
// firstname= true
// console.log(typeof(firstname));

//operateur
// var num1= 2, num2= 4, result;
// result= num1 + num2 * num1;
// num1= num1 + 10;
// num1+= 10;
// console.log(num1)

// var a = 2;
// a++;
// console.log(++a);
// console.log(a);

// var age = 60;
// var name= 'Big Joe'
// console.log('Mon Papa est ' + name + '\n et il a ' + age)
// console.log(`mon Papa ${name}
//  est il a ${age} ans`)

//  var val = parseInt(prompt('entrez un nombre : '));

//  console.log(val);
//  console.log(typeof(val));

//  les conditions


// var age = Number(prompt('entrez votre age : '));


// if(age < 18){
//     console.log('tu est Mineur');
// }else if(age == 18){
//     console.log('tu est un vrai Homme');
// }else{
//     console.log('tu est adulte');
// }

// var age = parseInt(prompt('entrez votre age : '));

// (age < 18)?console.log('tu est jeune'): console.log('Vous etes majeur')

// var age = parseInt(prompt('entrez votre age : '));
// var categorie = (age>=18)? "majeur" : "mineur";
// alert("vous etes " + categorie);

// document.getElementById("demo").style.display= 'none';

// var jour = prompt('quel jour on est? ');
//     switch(jour){
//         case "vendredi" : 
//         console.log("yes, c'est bientot le weekend");       
//         case "samedi":
//         case "dimanche":
//         console.log("c'est le weekend");
//         break;
//     default:
//         console.log("c'est quand le weekend")
//     }


// var str = "";
// for ( i = 0; i<9; i++) {
//     if( i == 3){break;}
//     str +=i;    
// }
// console.log(str);

// var str = "";
// for ( i = 0; i<9; i++) {  
//     if( i == 3){continue;}   
//     str +=i;
       
// }
// console.log(str);

// var str = 0;
// for ( i = 0; i<9; i++) {     
//     str +=i;
       
// }
// console.log(str);

// var n = 0;
// while(n<6){
//     n++;
// }

// console.log(n);

// var iter = 1;
// do{
//     console.log("iteration " +  iter);
//     iter++;
// }
// while( iter < 5)

// falsy numbers
//0, NaN, null,"",undefined,false
// var n = undefined;
// var bool = Boolean(n);
// console.log(bool);

// function add(num1, num2){
//     var n = num1 + num2;
//     return n;
// }

// var p = add(2,5);
// var division = 14 / p;
// console.log(division);

// mauvaise formulation
// var soustraction = a - b;
// console.log(soustraction);
// var a = 10, b =5;

// var, let, const

// function add(num1, num2){
//     if(true){
//         var n = num1 + num2;
//         console.log(n);
//     }
    
// }
// add(8, 4);
// function add(num1, num2){
//     if(true){
//         let n = num1 + num2;
        
//     }
//     console.log(n); 
// }
// add(8, 4);

// const name = "aboudou";
// name = "joan";
// console.log(name)

// const name = "aboudou";
// console.log(name);

// var nameV = "glo";
// let nameL = "glo";

// if(true){
//     var nameV = "loc";
//     let nameL = "loc"; 
// }

// console.log(nameV);
// console.log(nameL);

// tableau

 let tab = ["banane",'pomme', 3, 'abricot', 5];
// tab.sort();

// for (let i = 0; i < tab.length; i++) {  
//     console.log(i +' => ' + tab[i]);
// }
// pop() > suprimer a la fin
// shift > suprimer au debut
// unshift >ajouter au debut


// tri alfabetique
// let tab = [4, 8, 3, 7, 5];
// tab.sort();
// console.log( tab );
// // tri numerique
// tab.sort(function (a, b) {
//     if(a < b) {return -1;}
//     else if(a > b){return 1;}
//     else {return 0;}
// });
// console.log( tab );

// parcourt les indexes/propietes
// for(var index in tab) {
//     console.log(index +  "=>" + tab[index]);
// }

// parcour des valeus
// for(var val of tab) {
//     console.log(val);
// }

// affiche les elements
// tab.forEach(
//     maVal => console.log(maVal)
// );

var personne = {
    firstname : "john",
    lastname : "lecodeur",
    age : 40
}

console.log(personne);