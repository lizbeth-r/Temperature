function temp() {
    var temperature = Number(prompt("Enter temperature in Celsius:"));
    var fahrenheit = (temperature * 9/5) + 32;

    console.log(temperature);
    console.log(fahrenheit);

    document.getElementById("result").innerHTML += `
        <div class="text-result">
            <p>The conversion of Celsius ${temperature}º to Fahrenheit is ${fahrenheit}º</p>
        </div>
    `;
}
