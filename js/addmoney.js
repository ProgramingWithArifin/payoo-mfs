document.getElementById("add-money-btn").addEventListener("click",function(){
    let bank = valueFromId("add-money-bank")
    let accountNumber =valueFromId("add-account-number");
    let balance = getBalance();
    let addAmount = Number(valueFromId("add-amount"));
    let pin = valueFromId("add-money-pin");
    if(bank==="Select Bank"){
        alert("Please select a bank");
    }
    else{
        if(accountNumber.length === 11 && !isNaN(accountNumber)) {
            if(pin ==="1234"){
                if(addAmount>0){
                    let newBalance = balance+addAmount;
                    setBalance(newBalance);
                    alert("Add Money Successful");
                }
                else{
                    alert("Enter A Valid Amount")
                }
            }
            else{
                alert("Enter Correct Pin");
            }
        } else {
        alert("Enter A Valid Account Number");
    }
    }
})