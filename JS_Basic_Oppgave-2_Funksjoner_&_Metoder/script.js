/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

const oddEven = (number) => (number % 2 === 0 ? "Partall" : "Oddetall");

console.log(oddEven(3));
console.log(oddEven(8));
console.log(oddEven(0));
console.log(oddEven(-4));
console.log(oddEven(-3));

//Funksjonen sjekka om tallet kan bli delt på 2 og om svaret er 0, er det partall. ellers er det et oddetall

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/
const upperCasing = (text) => {
  return text.trim().toUpperCase() + "!";
};

console.log(upperCasing("dette er kult"));

// gjer om teksta til store bokstava og legg inn et ! på slutten

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

function greeting(name, time) {
  if (!Number.isFinite(time)) {
    return "Ugyldig tid";
  }
  if (time < 0 || time > 23) {
    return "Ugyldig tid";
  }
  if (time <= 5) {
    return `God natt ${name}`;
  }
  if (time <= 11) {
    return `God morgen ${name}`;
  }
  if (time <= 17) {
    return `God dag ${name}`;
  }
  return `God kveld ${name}`;
}

console.log(greeting("Ernst", -1));
console.log(greeting("Ernst", 5));
console.log(greeting("Ernst", 6));
console.log(greeting("Ernst", 11));
console.log(greeting("Ernst", 12));
console.log(greeting("Ernst", 17));
console.log(greeting("Ernst", 18));
console.log(greeting("Ernst", 24));
console.log(greeting("Ernst"));

// returnera en hilsen basert på klokka, eller en feilmelding

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/
const colors = ["Rød", "Grønn", "Blå", "Gul"];
const numbers = ["En", "To", "Tre", "Fire", "Fem", "Seks"];

function removeFirstLast(list) {
  return list.slice(1, -1);
}

const colorsNoEnd = removeFirstLast(colors);
const numbersNoEnd = removeFirstLast(numbers);

console.log(colors, colorsNoEnd);
console.log(numbers, numbersNoEnd);

// returnera en kopi av arrayet uten første og siste element
/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

const improveText = (text) => {
  return text.replaceAll("vanskelig", "gøy").trim();
};

console.log(improveText("       Javascript er vanskelig         "));

// bytta ut "vanskelig" med "gøy" og fjerna mellomrom foran og bak
/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/
items.shift();

// fjerna første elementet

const i = items.indexOf("Viskelær");
if (i !== -1) {
  items.splice(i, 1, "Linjal");
}
console.log(items);

// finn plasseringa til viskelær og erstatta det med linjal

items.splice(0, 2, "Markeringspenn");
console.log(items);

// fjerna fra start indeksen til penn, sletta 2 element, så notatblokk også, og erstatta det med markeringspenn

const string = items.join(" | ");
console.log(string);

// legge til alle elementane i en string med | imellom

const arrayE = items.filter((item) => item.includes("e"));
console.log(arrayE);

// filtrera alle element som inneholder e og laga et nytt array
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

const toggleItem = (array, value) => {
  const index = array.indexOf(value);
  if (index === -1) {
    array.push(value);
  } else {
    array.splice(index, 1);
  }

  return array;
};

console.log(toggleItem(["Rød", "Grønn"], "Blå"));
console.log(toggleItem(["Rød", "Grønn", "Blå"], "Grønn"));
console.log(toggleItem(["En", "To", "Tre"], "Fire"));
console.log(toggleItem(["En", "To", "Tre"], "To"));

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/
function emojies(value) {
  if (typeof value === "string") {
    return `😎${value}😎`;
  }
  if (typeof value === "number") {
    return `😎${String(value * 2)}😎`;
  }
  if (typeof value === "boolean") {
    return value ? "😎Ja😎" : "😎Slapp av😎";
  }

  return "😎Kun primitive verdier😎";
}

console.log(emojies("hei"));
console.log(emojies(42));
console.log(emojies(true));
console.log(emojies(false));
console.log(emojies(null));
console.log(emojies([1, 2]));
console.log(emojies(undefined));
