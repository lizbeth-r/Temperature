function multiplication(mynumber) {
    document.write("<p>" + mynumber * 5 + "</p>");
}

function taxesCalculation() {
    var product = prompt("Enter the product's name:");
    var price = Number(prompt("Enter the price:"));
    var qty = Number(prompt("Enter the qty:"));
    const taxes = 1.08;
    var subtotal = price * qty;
    var total = subtotal * taxes;

    console.log(product);
    console.log(subtotal);
    console.log(total);

    //document.write("<p> Name:" + product+ "</p>" +"<p> Subtotal:" + subtotal + "</p>" + "<p>Total:"+total+"</p>");
    // document.write(`
    //     <p> Name: ${product} </p>
    //     <p> Subtotal: ${subtotal} </p>
    //     <p> Total: ${total} </p>
    // `);
    document.getElementById("products").innerHTML += `
        <div class="product-item">
            <h3>My store</h3>
            <p> Name: ${product} </p>
            <p> Subtotal: ${subtotal} </p>
            <p> Total: ${total} </p>
        </div>
    `;
}

