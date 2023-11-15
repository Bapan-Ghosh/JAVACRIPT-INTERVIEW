// ek function jo object ke andar ho, use method kahte hai

var obj = {
    // Now this baatkaro property is called method
    name:"Bapan", 
    baatkaro : function(){
        console.log(this.name);
    }
}

obj.baatkaro();