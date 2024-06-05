const firstName = "Lakshmi";
const lastName = "Saravanan";
const age = 26;
const job = "Frontend,Developer ";
const str = "I am doing fullstack developer Mern Stack ";

let val;
val = firstName + lastName;

// ===========================Concontination============================
val =
  " my name is " +
  firstName +
  " and my age is " +
  age +
  " i am doing the " +
  job;

//   =========================apend==============================

val = "Lakshmi";
// val = val + "Phani";
val += "shanmuka pahani";
// ==========================length======================================
val = firstName.length;

// ==============================concat====================================
val = firstName.concat(" ", lastName, " My Dad");

//Chnage Case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

// Index val strat from 0

val = firstName[2];
val = lastName[4]; //it retuns index val

// ==========================CharAt===========================================;
val = firstName.charAt("5"); //it retuns index val
val = firstName.charAt(firstName.length - 1);

// ==========================slice===============================================
const fruits = "Banana";
val = fruits.slice(2, 4);

//===========================split================================================
val = str.split("");
val = job.split(",");
console.log(val);
//==========================Replace==========================================
val = str.replace("Mern", "MERN");
console.log(str);
console.log(val);
