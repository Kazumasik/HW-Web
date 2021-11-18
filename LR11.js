//Завдання 1
function readNumber() {
    check = true;
    while(check){
        check = false;
        num = prompt("Vvedite chislo", "num");
        if (num == null || num == '') {
            return null;
        } 
        else if (!isNaN(num)) {
            return +num;
        } 
        else {
            check = true;
        }
    }
}
console.log(readNumber())
//Завдання 2
function random(min, max) {
  return min + Math.random() * (max - min);
}
alert(random(1, 2));
//Завдання 3
let x1 = +prompt("Введите первое число", "");
let x2 = +prompt("Введите второе число", "");

console.log(x1 + x2);
//Завдання 4
let mass=[ 
"Спочатку JavaScript був створений, щоб зробити веб-сторінки живими ", 
"Різні двигуни мають різні «кодові імена».",
 "Коли JavaScript створювався, він мав інше ім'я – «LiveScript» ",
 "Повна інтеграція з HTML/CSS "
]
for(let i = 0; i < mass.length; i++) {
  if(mass[i].indexOf("JavaScript") > -1) {
    console.log(mass[i])
  }
}
//Завдання 5
function register(str){
    let strnew = str.toLowerCase();
    str = strnew[0].toUpperCase() + strnew.slice(1);
    console.log(str);
    return str;
}

register("бУквА")