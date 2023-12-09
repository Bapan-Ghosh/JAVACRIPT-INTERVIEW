const calculator = {
    total : 0,
    add : function(arg){
        this.total = this.total + arg;
        return this; 
    },
    multiply :function(arg){
        this.total = this.total * arg;
        return this;
    }
}

const result = calculator.add(10).multiply(5)
console.log(result.total)
