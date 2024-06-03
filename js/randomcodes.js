//function to generate combination of characters
function generateCode(){
    var code = ' ';//initialize to null value
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

//disable button
function disableButton(){
    document.getElementById("submit").disabled = true;
}
//activate function
disableButton();
