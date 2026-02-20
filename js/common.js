// getting the value of a id 
function valueFromId(id){
    const input =document.getElementById(id);
    const value =input.value;
    return value;
}
// getting the balance number 
function getBalance(){
    const balanceElement= document.getElementById("balance");
    const balance = Number(balanceElement.innerText);
    return balance;
}
// setting balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

// hide all id only show id that is called 
function showOnly(id){
    // calling all the section to hide 
    const addMoney=document.getElementById("add-money");
    const cashout= document.getElementById("cashout")
    const sendMoney=document.getElementById("send-money")
    const bonus=document.getElementById("get-bonus")
    const bill= document.getElementById("pay-bill")
    const history= document.getElementById("transactions")
    // calling the section to show 
    let show = document.getElementById(id);
    // hiding section 
    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    sendMoney.classList.add("hidden")
    bonus.classList.add("hidden")
    bill.classList.add("hidden")
    history.classList.add("hidden")
    // only show this section 
    show.classList.remove("hidden");
}

// to add transactions
function sethistory(details){
    const history = document.getElementById("history-container");
    const newHistory=document.createElement("div")
    newHistory.innerHTML=`
    <div class="transactions-card p-5 rounded bg-base-100">
        ${details}
    </div>
    `
    history.append(newHistory);
}