let name ={
    firstName : "Bapan",
    lastName : "Ghosh",
}

let printFullName = function(city){
    console.log(this.firstName+" "+this.lastName+" "+city)
}

printFullName.call(name,"kolkata");

let name2 = {
    firstName: "Nirmal",
    lastName: "Ghosh"
}

// function borrowing  :::::::=> we can borrow the function by using call method
printFullName.call(name2,"kolkata")


// Apply is sm as upper but we just have to pass arguments in array
//                                                 list ["Kolkata"] 

printFullName.apply(name2,["kolkata"])

// bind method
let printMyName = printFullName.bind(name2,"Kolkata"); // this will bind a fn
printMyName(); // this is just calling the fn