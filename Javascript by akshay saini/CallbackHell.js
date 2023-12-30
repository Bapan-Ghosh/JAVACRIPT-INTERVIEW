const cart = ["samsung", "iphone", "Moto"]

api.createOrder(cart, function (){
    api.procedToPayment(function(){
        api.showOrderSummary(function(){
                api.wallet()
        })
    })
})

//one call back inside another call back this type of code structure is called call
//back hell . every api is dependent on each other

/*
    1. Issues with callbacks
       a> Callback Hell  (nested complex callbacks)
       b> Inversion of control   (every api is dependend on each others)
 */