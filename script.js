var gbDiv = document.getElementById("guestbook-div");
var confrmMsg = document.getElementById("confirmationMessage");
var email1 = document.getElementById("emailEntry");
var email2 = document.getElementById("confirmEmail");

var showMsg = true;
var canSubmit = false;
var showDiv = false;

var amount = document.querySelector("#guestbookCounter");
const GBBTN = document.querySelector("#guestbookButton");
//add in functionality to confirm button
const CONFRMBTN = document.querySelector("#confirmButton");


confrmMsg.style.display = "none";
gbDiv.style.display = "none";
CONFRMBTN.style.background = "gray";
CONFRMBTN.disabled = true


GBBTN.addEventListener("click", function() {
     if (showDiv === false) {
         gbDiv.style.display = "block";
         showDiv = true;
     }
     else if (showDiv === true) {
         gbDiv.style.display ="none";
         showDiv = false;

    }
});
[email1 , email2].forEach(function(element) {
    element.addEventListener("change", function(){
        if (email1.value === email2.value && email1.value != "" && email2.value != "") {
                showMsg = true;
                canSubmit = true;
                showTxt("green", "green", "block", "Emails match!");
                CONFRMBTN.disabled = false
                
        } else if (email1.value === "" || email2.value === "") {
                showMsg = true;
                canSubmit = false;
                showTxt("gray", "red", "block", "Please enter missing Email")
                CONFRMBTN.disabled = true

        } else if (email1 != email2) {
                showMsg = true;
                canSubmit = false;
                showTxt("gray", "red", "block", "Emails do not match.")
                CONFRMBTN.disabled = true
        } else {
                showMsg = false;
                CONFRMBTN.style.background = "gray";
                confrmMsg.style.display = "none";
                CONFRMBTN.disabled = true
            }
    });
});

function showTxt(color1, color2, display, msg) {
    if (showMsg === true) {
            CONFRMBTN.style.background = color1;
            confrmMsg.style.display = display;
            confrmMsg.style.color = color2;
            confrmMsg.innerText = msg;      
        }
    else {
            CONFRMBTN.style.background = "gray";
            confrmMsg.style.display = "none";
        }

};