/* normal functtion jismein this ka istemaal ho and app func ko call karte waqt
 new keword ka use karein  */

// suppose there is a biscuit factory and here the function is like
// everything about biscuts and whenever we call the fn by new keyword
// everytime new biscut created

function biscutMaking(){
    this.width = 12;
    this.height = 22;
    this.color = "brown",
    this.taste = "chocolate"
}

new biscut1 = new biscutMaking();
new biscut2 = new biscutMaking();
new biscut3 = new biscutMaking();
new biscut4 = new biscutMaking();

/*
   : Why to use constructure function :
   Jab aapka pass aisa koi bhi mauka ho ke aapko ek jaisi properties waale 
   bohat saare elements banaane hai us waqt aap constructor fnc use kar sakte ho
    
*/
