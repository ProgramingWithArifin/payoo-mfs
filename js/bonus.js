document.getElementById("bonus-btn").addEventListener("click",function(){
    let bonus = valueFromId("bonus-cupon")
    let balance = getBalance();
    if(bonus ==='taka100'){
        let newBalance = balance+100;
        setBalance(newBalance);
        alert('You Got Bonus 100 Taka');
    }
    else{
        alert("Enter A Valid Cupon")
    }
            
})