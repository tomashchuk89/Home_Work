//#1
let names = prompt('Input your name?');
let str = ''; 
for (i = 1; i <= 4; i++) {
    if(i===3) str +='Happy birthday, dear ' +  names + '\n';
    else str += 'Happy birthday to you \n';
}
console.log(str); 
//#2
let number = prompt('Input number 2');
let result1 = "";
  for (let i = 0; i < number; i++) {
    result1 += ".#";
  }
  console.log(result1);

 //#3
  let number2 = prompt ('Input number 3');
  let sum = 0;
  if (!number2) {
    number2 = prompt('Invalid. You should enter a number');
  }
  for (let i = 0; i < number2; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  console.log(sum);
 //#4
  let count = 0;
  let breaker;
  while (true) {
    count += 1;
    breaker = Math.random();
    if (breaker > 0.7) {
      break;
    }
  }
  console.log(`Loop was finished because of: ${breaker} \nNumber of iterations: ${count}`);
 //#5
  for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Div by 5 and 3");
    } else if (i % 3 == 0) {
      console.log("Div by 3");
    } else if (i % 5 == 0) {
      console.log("Div by 5");
    } else {
      console.log(i);
    }
  }
//#6
var date = new Date();

function toLocal (date) {
	var local = new Date(date);
	local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
	return local.toJSON();
}
console.log(toLocal(date));

