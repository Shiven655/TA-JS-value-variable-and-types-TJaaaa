// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = Number(prompt("enter a number"));
if (number % 2 === 0){
  alert("number is even");
}else{
alert("number is odd");
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA = prompt("enter numA");
let numB = prompt("enter numB");
if (numA> numB){
  alert(`${numA} is greater`);
}else{
  alert(`${numB} is greater`)
}

// 3. Convert the above code using`?` terniary operator
numA > numB ? (alert(`${numA} is greater`)) : alert(`${numB} is greater`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let housename = prompt("enter the house name from GOT");
if (housename === "stark"){
  alert("winter is coming");
}else if (housename === "lannister"){
  alert("A lannistr always pays his debt");
}else{
  alert("all men must die");
}
// 5. Convert the above code using`?` terniary operator

// Switch
housename === "stark" ? alert("winter is coming") : housename === "lannister" ? alert("A lannistr always pays his debt") : alert("all men must die");

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthName = prompt(`Enter the name of the month`);

switch(monthName){
  case "january":
  alert("The number of days are 31");
  break;
case "february":
  alert("The number of days are 28");
  break;
case "march":
  alert("The number of days are 31");
  break;
  case "April":
  alert("The number of days are 30");
  break;
  case "may":
  alert("The number of days are 31");
  break;
  case "june":
  alert("The number of days are 30");
  break;
  case "july":
  alert("The number of days are 31");
  break;
  case "august":
  alert("The number of days are 31");
  break;
  case "september":
  alert("The number of days are 30");
  break;
  case "october":
  alert("The number of days are 31");
  break;
  case "november":
  alert("The number of days are 30");
  break;
  case "december":
  alert("The number of days are 31");
  break;
  default:
    alert("not a valid input")
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let amount = prompt("Enter your salary");
switch (true){
  case salery <= 20000:{
    let taxedamount= (salery *10)/ 100;
    alert(`your in hand amount $(salery - taxedamount)`);
    break;
  }
    case salery <= 40000:{
    let taxedamount = (salery *20)/ 100;
    alert(`your in hand amount $(salery - taxedamount)`);
    break;
  }
    case salery <= 50000:{
    let taxedamount = (salery *30)/ 100;
    alert(`your in hand amount $(salery - taxedamount)`);
    break;
  }
    default:
      alert(`not a valid input`)

}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("Enter your marks"));
if (marks > 100){
  alert("Marks can't be greater than 100");
}else if(marks > 80 && marks < 100){
  alert("Grade A");
}else if(marks > 50 && marks < 80){
  alert("Grade B");
}else if(marks > 30 && marks < 50){
  alert("Grade C");
}else (marks > 0){
  alert("Grade D");
}



switch(true){
case marks > 100:
alert("Marks can't be greater than 100");
break;
case marks > 80 && marks < 100:
  alert("Grade A");
  break;
case marks > 50 && marks < 80:
alert("Grade B");
 break;
case marks > 30 && marks < 50:
alert("Grade C");
default:
alert("Grade D")
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = ("What is the weather like outside?");
switch(weather){
  case "sunny":
    alert("wear a T-shirt");
    break;
    case "rainy":
    alert("alert`Don't forget to take your raincoat");
    break;
    case "hot":
    alert("Get a hanky");
    break;
    case "freezing":
    alert("Get your sweeter on");
    break;
    default:
    alert("Not a valid input");
    break;
}