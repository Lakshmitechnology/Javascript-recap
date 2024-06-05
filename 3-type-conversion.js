let val;
//number to string

val = String(5555);
console.log(typeof val);

//boolean
val = String(true);
console.log(typeof val);

//array to string

val = String([1, 2, 3, 4, 5]);
console.log(typeof val);

//string to number

val = Number("5+5"); //Nan not a number
console.log(typeof val);

// Boolean to number
val = Number(true);
val = Number(false);
val = Number("hello world"); //Nan
val = Number([1, 2, 3]); //Nan
console.log(typeof val);

// It takes hole vale
val = parseInt("400.3");
console.log(val);
val = parseFloat("5500.6");
console.log(val);
