document.getElementById("cashout-btn").addEventListener("click", function(){
    let agentNumber =valueFromId("agent-number");
    let balance = getBalance();
    let amount = Number(valueFromId("cashout-amount"));
    let pin = valueFromId("cashout-pin");
if(agentNumber.length === 11 && agentNumber.startsWith("01") && !isNaN(agentNumber) && pin ==="1234") {
        if(balance>=amount && amount>0){
            let newBalance = balance-amount;
            setBalance(newBalance);
            alert(`Cashout Successful 
                To:${agentNumber} 
                Amount:${amount}`);
            return;
        }
        else{
            alert("Not Enough Amount");
        }
    } else {
        alert("Enter A Valid Number And Pin");
    }
})


