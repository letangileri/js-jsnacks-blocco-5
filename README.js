const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
names.forEach(elem => console.log(elem));



const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
people.forEach(thisPeople => console.log(thisPeople.name));

const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
const getNumberPlusOne = numbers.map(thisNumber => thisNumber+1)

console.log(getNumberPlusOne);

const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

const getNameOfAuthor = posts.map(thisPost => thisPost.author);

console.log(getNameOfAuthor);



const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
const getNumPari = nums.filter(thisNum => thisNum % 2 == 0)

console.log(getNumPari);


const pencils = [
  { brand: 'Faber-Castell', weight: 8, sizeInCm: 12 },
  { brand: 'Staedtler', weight: 9, sizeInCm: 18 },
  { brand: 'Faber-Castell', weight: 7, sizeInCm: 10 },
  { brand: 'Staedtler', weight: 10, sizeInCm: 16 },
  { brand: 'Faber-Castell', weight: 6, sizeInCm: 14 },
  { brand: 'Derwent', weight: 5, sizeInCm: 20 },
  { brand: 'Derwent', weight: 4, sizeInCm: 11 },
  { brand: 'Staedtler', weight: 6, sizeInCm: 9 },
  { brand: 'Caran d’Ache', weight: 12, sizeInCm: 22 },
  { brand: 'Caran d’Ache', weight: 11, sizeInCm: 13 },
];

// A partire dall'array fornito, crea due array. Uno con le matite lunghe almeno 15cm. L'altro con le restanti.

const getMatite15cm = pencils.filter(thisPencil => thisPencil.sizeInCm >= 15)

console.log(getMatite15cm);

const getMatiteMin15cm = pencils.filter(thisPencil => thisPencil.sizeInCm < 15)

console.log(getMatiteMin15cm);




const students = [
  {
   id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
   id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
   id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
const getStudentId = students.find(thisStudent => thisStudent.id === 2);

console.log(getStudentId);


const students_2 = [
  {
	  id: 1,
    name: 'Marco Lanci',
    age: 32,
    classroom: '3C'
  },
  {
	  id: 2,
    name: 'Mario Banfi',
    age: 34,
    classroom: '4A'
  },
  {
	  id: 3,
    name: 'Luigi Banzi',
    age: 33,
    classroom: '5B'
  },
];

// Recuperare la classe dello studente Marco Lanci

const getStudent = students_2.find(thisStudent => thisStudent.name === 'Marco Lanci');

console.log(getStudent.classroom);

for (let key in getStudent){
  console.log(getStudent.classroom);
}
  
// Snack 1
// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

const car = [
  {
    marca: 'Toyota',
    modello: 'Yaris',
    alimentazione: 'elettrica'
  },
  {
    marca: 'Nissan',
    modello: 'Micra',
    alimentazione: 'metano'
  },  {
    marca: 'Mercedes',
    modello: 'GLC',
    alimentazione: 'benzina'
  },  {
    marca: 'Fiat',
    modello: 'Panda',
    alimentazione: 'benzina'
  },  {
    marca: 'Fiat',
    modello: '500',
    alimentazione: 'elettrica'
  },  {
    marca: 'Audi',
    modello: 'A1',
    alimentazione: 'diesel'
  },  {
    marca: 'Dacia',
    modello: 'Duster',
    alimentazione: 'benzina'
  },  {
    marca: 'Toyota',
    modello: 'Aigo',
    alimentazione: 'benzina'
  },  {
    marca: 'Toyota',
    modello: 'CHR',
    alimentazione: 'elettrica'
  },  {
    marca: 'Fiat',
    modello: 'Mito',
    alimentazione: 'metano'
  },
]
const getcarsBenzina = car.filter(thisCar => thisCar.alimentazione == 'benzina')

console.log(getcarsBenzina);

const getcarsDiesel = car.filter(thisCar => thisCar.alimentazione == 'diesel')

console.log(getcarsDiesel);

const getcarsQualsiasi = car.filter(thisCar => thisCar.alimentazione != 'diesel' && thisCar.alimentazione != 'benzina' )
console.log(getcarsQualsiasi);

const arr1 = [];
const arr2 = [];
const arr3 = [];

for (let i = 0; i < car.length; i++){
  const thisCar = car[i];
  if (thisCar.alimentazione == 'benzina'){
    arr1.push(thisCar);
  } else if (thisCar.alimentazione == 'diesel'){
    arr2.push(thisCar);
  } else {
    arr3.push(thisCar);
  }
}

console.log(arr1);
console.log(arr2);
console.log(arr3);

const arr4 = [];
const arr5 = [];
const arr6 = [];
car.forEach((thisCar)=>{
  if (thisCar.alimentazione == 'benzina'){
    arr4.push(thisCar);
  } else if (thisCar.alimentazione == 'diesel'){
    arr5.push(thisCar);
  } else {
    arr6.push(thisCar);
  }
})

console.log(arr4);
console.log(arr5);
console.log(arr6);



 


// Snack 2
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

// Snack 3
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi


// Snack 4
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.