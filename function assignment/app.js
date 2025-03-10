// Question 1
// function date(){
//  let firstQuestion =  new Date();
// document.write(firstQuestion)
// }
// date()

// Question 2

// function name1 (first ,last){
//     let firstName =first
//     let lastName = last
//     document.write(firstName,lastName)
// }

// name1(prompt("Enter your firstName"),prompt("Enter your LastName"))


// Question 3
// function add(number, num3) {
//     let num1 = number;
//     let num2 = num3;
//     document.write(num1+num2)

// }
// add(+prompt("enter a value"), +prompt("enter a opertor"))



// Question 4


function calc(number1, number2, opertor) {

    if (opertor === "+") {
        number1 + number2
        return
    }
    else if (opertor ==="-") {
        number1 - number2
        return
    }
    else if(opertor === "*"){
        number1 *number2
        return
    }
    else if(opertor === "/"){
number1 /number2
return
    }
    else if(opertor ==="%"){
number1 % number2
return
    }
    else{
        document.write("invalid number")
    }
    
}
 let result =calc(+prompt("enter your firstvalue"),+prompt("enter your second value"),prompt("enter your opertor "))

 document.write(result)