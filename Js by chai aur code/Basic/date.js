let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.getFullYear());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toDateString());


const currentDate = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
const isoDate = currentDate.toISOString().split('T')[0]; // toISOString() to convart object to string
console.log(isoDate); // This will print the current date in "2015-03-25" format.
