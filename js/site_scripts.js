//Day2-Add Partners' six images//
var photos =[]; //declare an empty array to store iamge 
var fileNames=[];//declare an empty element to store image file names
var imageList =[];//declare an empty array to store html list that contain an image
var image;//declare an empty variable to store the assembled image list codes
var openList="<li class='partner'>";//declare a var to contain open list tag
var closeList="</li>"//declare a var to contain close list tag

//create a loop to create 6 images strating with index of 0
for (var i=0;i<6;i++){
fileNames.push("partner"+(i+1));
photos.push('<img src="images/'+fileNames[i]+'.png">'); //assemble file name into image element and store in an array
image = openList+photos[i]+closeList;
imageList.push(image);
}
//display all six image codes stored in the array
document.getElementById("partners").innerHTML=imageList.join(" ");