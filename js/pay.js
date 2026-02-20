document.getElementById("pay-btn").addEventListener("click",function(){
    let select = valueFromId("select-pay")
    let accountNumber =valueFromId("pay-account-number");
    let balance = getBalance();
    let payAmount = Number(valueFromId("pay-amount"));
    let pin = valueFromId("pay-pin");
    console.log(select)
    if(select==="Select"){
        alert("Please select a feild to pay");
    }
    else{
        if(accountNumber.length === 11 && !isNaN(accountNumber)) {
            if(pin ==="1234"){
                if(balance>=payAmount && payAmount>0){
                    let newBalance = balance-payAmount;
                    setBalance(newBalance);
                    alert(`Pay Bill Successful
                        To:${select}
                        Account Number:${accountNumber} 
                        Amount:${payAmount}`);
                    let history = (`Pay Bill To:${select} Account Number:${accountNumber} Amount:${payAmount}`);
                    sethistory(history)
                }
                else{
                    alert("Not Enough Balance")
                }
            }
            else{
                alert("Enter Correct Pin");
            }
        } else {
        alert("Enter A Valid Biller Account Number");
    }
    }
})