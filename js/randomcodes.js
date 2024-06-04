//function to generate combination of characters
function generateCode(){
    var code = ' ';//initialize to null value
    var getCode =' ';//store entered code
    var btnvalue; //for button boolean value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //generate charater multiple times using a loop
    for (i=1;i<=8;i++){
       var char =Math.random()*str.length;
       code += str.charAt(char) //accumulate the generated character into a string of 8 chartacters 
    }
    return code;
}
//get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//determine when to able or disable button
function disableButton(btnvalue){
    document.getElementById("submit").disabled = btnvalue;//able/disable button
    if(btnvalue==true){//test if button is disabled or enabled
        document.getElementById("submit").style.backgroundColor ="rgba(73,119,209,0.3)";
        document.getElementById("submit").style.color="rgba(255,255,255,0.5)";
    } else{
        document.getElementById("submit").style.backgroundColor="rgba(73,119,209,1)";
        document.getElementById("submit").style.color="rgba(255,255,255,1)";
    }
}
//listen to user input code
var codebox = document.getElementById("codes"); //get textbox
codebox.addEventListener("input",evaluateCode);//listed to code entered in the box

//run function when detected user had entered a character in textbox
function evaluateCode(){
    getCode=document.getElementById("codes").value
}
//activate function
disableButton();
