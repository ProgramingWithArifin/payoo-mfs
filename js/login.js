document.getElementById("login-btn").addEventListener("click", function(){
// number input 
    let num = document.getElementById("number")
    let inputNum = num.value;
// pin input    
    let pin = document.getElementById("pin")
    let inputPin = pin.value;
// validate number and pin
    if(inputNum === "01234567890" && inputPin ==="1234"){
        window.location.assign("home.html")
    }
    else{
        alert("Enter a valid number and pin");
        return;
    }
})