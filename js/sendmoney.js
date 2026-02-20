document.getElementById("send-money-btn").addEventListener("click", function(){
    let reciverNumber =valueFromId("send-money-number");
    let balance = getBalance();
    let amount = Number(valueFromId("send-money-amount"));
    let pin = valueFromId("send-money-pin");
if(reciverNumber.length === 11 && reciverNumber.startsWith("01") && !isNaN(reciverNumber) && pin ==="1234") {
        if(balance>=amount && amount>0){
            let newBalance = balance-amount;
            setBalance(newBalance);
            alert(`Send Money Successful
                To:${reciverNumber} 
                Amount:${amount}`);
        }
        else{
            alert("Not Enough Amount");
        }
    } else {
        alert("Enter A Valid Number And Pin");
    }
})
