var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
    cameraOn = false;
    var balance2;
    if (amount < balance) {
        balance2 = balance - amount;
    }
    return amount;
    cameraOn = true;
    return balance2;
}

var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");
console.log("The new balance is " + balance2);
0