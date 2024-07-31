function convertTemperature() {
    var type = prompt("Enter 'C' for Celsius or 'F' for Fahrenheit:");
    var temperature = Number(prompt("Enter the temperature:"));
    

    if (type == 'C' || type == 'c') {
        var fahrenheit = (temperature * 9 / 5) + 32;
        document.getElementById("result").innerHTML += `
            <div class="text-result">
                <p>The conversion of Celsius ${temperature}º to Fahrenheit is ${fahrenheit}º</p>
            </div>
        `;
    } else {
        var celsius = (temperature - 32) * 5 / 9
        document.getElementById("result").innerHTML += `
            <div class="text-result">
                <p>The conversion of Fahrenheit ${temperature}º to  is Celsius ${celsius}º</p>
            </div>
        `;
    }
}
