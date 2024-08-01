function convertTemperatureRange(){
    let startValue = Number(prompt("Enter a start value"));
    let endValue = Number(prompt("Enter an end value:"));
    var scale = prompt("Enter 'C' for Celsius or 'F' for Fahrenheit:")

    for(i=startValue; i<=endValue; i++){
        if (scale == 'C' || scale == 'c') {
            var fahrenheit = (i * 9 / 5) + 32;
            document.getElementById("result").innerHTML += `
            <div class="text-result">
            <p>The conversion of Celsius ${i}º to Fahrenheit is ${fahrenheit}º</p>
            </div>
            `;
        } else {
            var celsius = (i - 32) * 5 / 9
            document.getElementById("result").innerHTML += `
            <div class="text-result">
            <p>The conversion of Fahrenheit ${i}º to  is Celsius ${celsius}º</p>
            </div>
            `;
        }
    }
 } 
