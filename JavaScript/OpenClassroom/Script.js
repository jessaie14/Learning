//* Exercices sur nombres ****

let numberOfSeasons;
let numberOfEpisodes;
let episodeTime = 45;
let commercialTime = 5;
let totalShowTime;

numberOfSeasons = 6;
numberOfEpisodes = 12;

//numberOfSeasons++;
//console.log(numberOfSeasons);

//numberOfEpisodes -= 5;
//console.log(numberOfEpisodes);

totalShowTime =
  numberOfEpisodes * (episodeTime + commercialTime) * numberOfSeasons;
console.log(totalShowTime);

//**** String interpollation ****/

let episodeTitle = "Buffy";
let episodeDuration = 30;
let hasBeenWatched = true;

const myName = "Alexander";
const salutation = `Bienvenue ${myName}`; // bien utiliser le guillemet du 7
console.log(salutation);

//* Objet paire clé valeurs */

let episode = {
  title2: "La riviere",
  duration2: "30",
  hasBeenWatched2: "false",
};
console.log(episode);

//* notation pointée
let episodeTitleBis = episode.title2;
let episodeDurationBis = episode.duration2;
let episodeHasBeenWatchedBis = episode.hasBeenWatched2;
//* notation bracket
let propertyToAccess = "title";
let episodeTitleBiss = episode[propertyToAccess];

episode.title2 = "Les rivieres";
episode.duration2 = "60";
episode.hasBeenWatched2 = "true";
console.log(episode);

//* classes

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}
//* Créer une nouvelle instance de la classe
let myBooks = new Book("La riri", "moi", "10");
console.log(myBooks);

//* Array

let Guests = ["Emelyne", "Guillaume", "Owen", "Eleonor"];

let firstGuest = Guests[0];
let thirdGuest = Guests[2];
let undefinedGuest = Guests[12];

console.log(thirdGuest, undefinedGuest);

let howManyGuests = Guests.length;
Guests.push("rectomis"); // pousse l'élément à la fin du tableau
Guests.unshift("Sirla"); // place l'élément au début du tableau
Guests.pop();
console.log(Guests);

//* IF, ELSE, SWITCH

let userLoggedIn = true;
if (userLoggedIn) {
  console.log("l'utilisateur est connecté");
} else {
  console.log("Alerte, intrus!");
}

let numberOfGuests = 0;
let numberOfSeats = 0;

if (numberOfGuests == numberOfSeats) {
  // tous les sièges sont occupés
} else if (numberOfGuests < numberOfSeats) {
  // autoriser plus d'invités
} else {
  // ne pas autoriser de nouveaux invités
}

5 == "5"; // TRUE on compare la valeur pareil pour !=
5 === "5"; // FALSE on compare la valeur et le type pareil pour !==

let userHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

userLoggedIn && userHasPremiumAccount; // true ** ET logique les deux sont vraies
userLoggedIn && userHasMegaPremiumAccount; // false

userLoggedIn || userHasPremiumAccount; // true ** OU logique l'un des deux est vrai
userLoggedIn || userHasMegaPremiumAccount; // true

!userLoggedIn; // false ** NON logique on vérifie que ce n'est pas vrai
!userHasMegaPremiumAccount; // true

let firstUser = {
  name: "Will Alexander",
  age: 33,
  accountLevel: "normal",
};

let secondUser = {
  name: "Sarah Kate",
  age: 21,
  accountLevel: "premium",
};

let thirdUser = {
  name: "Audrey Simon",
  age: 27,
  accountLevel: "mega-premium",
};

switch (firstUser.accountLevel) {
  case "normal":
    console.log("You have a normal account!");
    break;
  case "premium":
    console.log("You have a premium account!");
    break;
  case "mega premium":
    console.log("You have a mega premium account!");
    break;
  default:
    console.log("Unknown account!");
}

// Boucles FOR et WHILE
// FOR
const numberOfPassengers = 10;
for (let i = 0; i < numberOfPassengers; i++) {
  console.log("Passager embarqué");
}
console.log("Tous les passagers sont embarqués");
// FOR IN
const passengers = ["Will", "Kate", "Tron"];
for (let i in passengers) {
  console.log("Embarquement du passager " + passengers[i]);
}
//FOR OF (si l'indice précis d'un élément n'est pas nécessaire)
const passengers2 = ["Will", "Kate", "Tron"];
for (let i of passengers2) {
  console.log("Embarquement du passager " + passengers2);
}
// While

let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
  passengersBoarded++;
  seatsLeft--;
  passengersStillToBoard--;
}
console.log(passengersBoarded);

// Functions
let sum = 0;

const calculateAverageRating = (ratings) => {
  if (ratings.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }

  return sum / ratings.length;
};

class bankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  showBalance() {
    console.log("Solde : " + this.balance + " EUR");
  }
}
const newAccount = new bankAccount("Will", 500);
newAccount.showBalance();

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  showBalance() {
    console.log("Solde: " + this.balance + " EUR");
  }

  deposit(amount) {
    console.log("Dépôt de " + amount + " EUR");
    this.balance += amount;
    this.showBalance();
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Retrait refusé !");
    } else {
      console.log("Retrait de " + amount + " EUR");
      this.balance -= amount;
      this.showBalance();
    }
  }
}

// statique
const randomNumber = Math.random(); // crée un nombre aléatoire sur l'intervalle [0, 1]
const roundMeDown = Math.floor(495.966); // arrondit vers le bas à l'entier le plus proche, renvoie 495

class BePolite {
  static sayHello() {
    console.log("Hello!");
  }

  static sayHelloTo(name) {
    console.log("Hello " + name + "!");
  }

  static add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }
}

BePolite.sayHello(); // imprime "Hello!""
BePolite.sayHelloTo("Will"); // imprime "Hello Will!""

const sum2 = BePolite.add(2, 3); // sum = 5

//variable de différentes personnes
let personne1 = "Jean";
let personne2 = "Paul";
let personne3 = "Marcel";

function saluer(prenom) {
  //On met la première lettre en majuscule, on salue la personne et on donne le nombre de lettre dans son prénom
  const monPrenom = prenom[0].toUpperCase() + prenom.substr(1);
  const longueurPrenom = monPrenom.length;
  console.log(
    `Bonjour ${monPrenom}, ton prénom contient ${longueurPrenom} lettres`
  );
}

//On salue les 3 personnes
saluer(personne1);
saluer(personne2);
saluer(personne3);

//tableau des âges des élèves dans la classe

const agesElevesDeClasse = [14, 14, 15, 14, 16, 14, 14, 13];

// Nombre d'élèves

const nombreEleves = agesElevesDeClasse.length;

// variable pour calculer la somme des âges

let sommeAges = 0;

for (let age of agesElevesDeClasse) {
  sommeAges += age;
}

//moyenne d'âge dans la classe

const moyenneAgesDeClasse = sommeAges / nombreEleves;

console.log(
  "Il y a " +
    nombreEleves +
    " élèves dans la classe et la moyenne d'âge est " +
    moyenneAgesDeClasse
);

// renvoyer une erreur à la console
console.error("mince alors");
