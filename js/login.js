document.getElementById("login-btn").addEventListener("click", function(){
// number input 
    let inputNum = valueFromId("number");
// pin input    
    let inputPin = valueFromId("pin");
// validate number and pin
    if(inputNum === "01234567890" && inputPin ==="1234"){
        window.location.assign("home.html")
    }
    else{
        alert("Enter a valid number and pin");
        return;
    }
})