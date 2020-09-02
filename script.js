console.log('hello world');

var firstname;
firstname= "papa";
firstname= 42;
firstname= true
console.log(typeof(firstname));

//operateur
var num1= 2, num2= 4, result;
// result= num1 + num2 * num1;
// num1= num1 + 10;
num1+= 10;
console.log(num1)

var a = 2;
a++;
console.log(++a);
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

var age = parseInt(prompt('entrez votre age : '));
var categorie = (age>=18)? "majeur" : "mineur";
alert("vous etes " + categorie);