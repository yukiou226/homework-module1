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

//Wk5-day3-lab//
/* Open lightbox on button click */
$('.lightbox-toggle img').click(function(){
    $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
    $('.box').fadeIn();

    //Check if lightbox has an image
    if ($('.box').contents('img')) {
        $('.box').contents().remove('img'); //If true, clear image
    }

    //Get text content in attribute
    var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

    if ($altvalue=="Angkor Wat") {
        var img = $('#photo:nth-child(1) img').clone(); //Duplicate DOM element
        $('.box').append(img); //Insert duplicated element in another element
    }
});

/* Click to close lightbox */
$('.close, .backdrop').click(function(){
    $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
        $('.backdrop').css('display', 'none');
    });
    $('.box').fadeOut();
});

