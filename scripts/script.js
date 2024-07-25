var num1 = prompt("Enter your number");
var num2 = prompt("Enter yout number 2");
var operation = prompt("Menu: 1.Sum | 2.Sub | 3.Div | 4.Mult");

if(operation=="1"){
    var sum=Number(num1)+Number(num2);
    document.write(num1 + "+" + num2 + "=" + sum);
    console.log("Sum:"+sum);
}

if(operation=="2"){
    var sub=Number(num1)-Number(num2);
    document.write(num1 + "-" + num2 + "=" + sub);
    console.log("Subtraction:"+sub);
}

if(operation=="3"){
    var div=Number(num1)/Number(num2);
    document.write(num1 + "/" + num2 + "=" + div);
    console.log("Division:"+div);
}

if(operation=="4"){
    var mult=Number(num1)*Number(num2);
    document.write(num1 + "*" + num2 + "=" + mult);
    console.log("Multiplication:"+mult);
}
