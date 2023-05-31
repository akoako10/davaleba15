function fun (x,y) {
    a = prompt ("შეიყვანეთ ოპერატორი:")
    if(a=="+") {
        console.log(`${x} + ${y} = ${x+y}`)

    }else {
        if(a=="-") {
            console.log(`${x} - ${y} = ${x-y}`)
        }else {
            if(a=="*") {
                console.log(`${x} * ${y} = ${x*y}`)
            }else {
                if(a=="/") {
                    console.log(`${x} / ${y} = ${x/y}`)
                }else {
                    console.log("invalid operator")
                }
            }
        }

    }
}


var circle = {
    radius: 11,
    countS: function() {
        const pi=3.14
        console.log(pi*(Math.pow(this.radius,2)))
    }
}
circle.countS()




function car(make,model,year) {
    this.make = make
    this.model = model
    this.year = year
    this.showCarInfo = function() {
        console.log("მანქანის მარკა და მოდელი არის:",make,model,"გამოშვების წელი -",year)
    }
}

var car1 = new car("mercedes","s_class","2019")
console.log(car1)

var car2 = new car("bmw","f10","2010")
console.log(car2)