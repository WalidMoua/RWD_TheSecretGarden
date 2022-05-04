//Net image following mouse (Made by Bruno)
$(document).mousemove(function (e) {
    $('#net').offset({
        left: e.pageX,
        top: e.pageY + 10

    });
});

//Net changing direction when mouse is moving sides
$(document).mousemove(function (e) {
    let a = e.pageX
    var currentMousePos = { x: -1, y: -1 };

    $(document).mousemove(function (event) {
        currentMousePos.x = event.pageX;


        if (a > currentMousePos.x) {
            jQuery('#net').removeClass('mirror');


        }
        else {
            jQuery('#net').addClass('mirror');
        }

    });


})

//Additional function by Bruno. 
//By clicking on clouds and sun, there's thunder effect applied

$("#cloud").click(function () {
    $("#cloud").attr("src", "images/thunder.png");
    $("body").css("background-color", "#808080");
    setTimeout(function () {
        $("#cloud").attr("src", "images/cloud.png");
        $("body").css("background-color", "lightblue");
    }, 500);
})

//Additional function by Guilherme
//Duck is running to sides when pressing arrow keys 

$(document).keydown(function(move){
    switch (move.which){
    case 37:    // keys left and right
        $("#duck").finish().animate({
            left: "-=10"
        });        

        break;

    case 39:    // key right
        $("#duck").finish().animate({
            left: "+=10"
        });    

        break;
    }
});

function duckBounds(e) {
    let duck = $("#duck");

    if(duck.x < 0) 
    {
        duck.x = 0;
    }
    else if (duck.x > e.pageX || duck.x < e.pageX ) {
        duck.x = e.pageX - duck.width;
    }
}


//jack code start
$(document).ready(function () {
  //apples going to tree
  apples($("#apple1"));
  apples($("#apple2"));
  apples($("#apple3"));
});

//picking apples to basket
$("#apple1").on("click", function(){
  $("#apple1").addClass("shake");
  moveApple( $("#apple1"));
});
$("#apple2").on("click", function(){
  $("#apple2").addClass("shake");
  moveApple( $("#apple2"));
});
$("#apple3").on("click", function()
{
  $("#apple3").addClass("shake");
  moveApple( $("#apple3"));
});

//move apples to basket
function moveApple(apple){
  setTimeout(function(){
    var basketTop=($('.basket').first().position().top);
    var basketLeft=($('.basket').first().position().left);
    var basketWidth=$('.basket').first().width()-100;
    apple.animate({
      'top':basketTop+170+'px','left':basketLeft+Math.round(Math.random() * basketWidth)+30+'px'
    });
  },2000)
}

//apples going to tree 
function apples(target) {
 //console.log($('#tree').position().top);
  var treeTop=($('#tree').position().top);
  var treeLeft=($('#tree').position().left);
  var treeWidth=$('#tree').width()-100;
  var treeHeight=$('#tree').height()/3;
  var posx = Math.round(Math.random() * treeWidth) + treeLeft+50;
  var posy = Math.round(Math.random() * treeHeight) + treeTop;
  target.css({
    "top":  posy+100+'px', "left": posx+'px',zindex:10,
  });
}
//jacks code end


//START Carabus Claudiu Petrica


//We are taking the ID of the butterfly and inserting it in a constant
const butterfly=$("#butterfly");

const birdRight=$("#birdRight");
//Here we are saying to the program to run the functions after the page is loaded 
$(document).ready(function(){

    //Here we are calling and using the function to animate the butterfly
    animateDivButterfly(butterfly);
   animateDivBirdRight(birdRight);
});


//Here we are creating a function to generate a random position for the butterfly
function makeNewPositionButterfly(){
    
    //Here we are making a variable for the max height of our object in this case the butterfly to not go over the screen height
    var h = $(window).height() - 200;
    //Here we are making a variable for the max width of our object in this case the butterfly to not go over the screen wiidth
    var w = $(window).width() - 300;
    
    //Here we are using the function Math.random to create a random height on the screen where  the buttterfly will move to  
    var nh = Math.floor(Math.random(window ) * h);
    //Here we are using the function Math.random to create a random width on the screen where  the buttterfly will move to  
    var nw = Math.floor(Math.random(window ) * w);
    
    //At the end of this function here are the coordonates where the butterfly will move 
    return [nh,nw];    
}


//Here we are creating a function to make the butterfly move
function animateDivButterfly(myclass){
    //We are implementing our previous function for generating a random position for the butterfly
    var newq = makeNewPositionButterfly();
    //Here we are taking the coordonates for height and width and implement them inside this function giving also the speed of the butterffly
    $(myclass).animate({ top: newq[0], left: newq[1] }, 3000,   function(){
        //At the end of this function we are recalling it to create an loop for the butterfly to never stop 
      animateDivButterfly(myclass);        
    });
    
};

//Here we are using jqerry t set a function when to mouse will hover over the butterfly
$('#butterfly').mouseover(function(){
    //Again we are using the random position function 
    var neww = makeNewPositionButterfly();

    //Here we are making the buttterfly move and where to stop after it was hovered on him with a faster speed 
    $("#butterfly").stop(true).delay(50).animate({top : neww[0], left: neww[1]},300).animateDiv;
    //Here we are saying how it will be displayed on the screen to not just dissapear from his current position 
    //and apper o another part of the screen ,bassically we are doing the moving animation 
    setTimeout(animateDivButterfly(butterfly), 500)
});
//Here we are creating a function to generate a random position for the bird
function makeNewPositionBirdRigh(){
     //Here we are making a variable for the max height of our object in this case the bird to not go over
     // the screen height and also to stay in the top part of the screen
    var h=$(window).height()/10;
    //Here we are making a variable for the max width of our object in this case the bird to not go over the screen width
    var w=$(window).width()-300;
    //Here we are setting height on the screen where  the bird will stay 
    var wh=Math.floor(1*h);
    //Here we are using the function Math.random to create a random width on the screen where  the bird will move to  
    var ww=Math.floor(Math.random(window)*w);
    //At the end of this function here are the coordonates where the bird will move 
    return[wh,ww];
}

//Here we are creating a function to make the bird move
function animateDivBirdRight(myclass){
    //We are implementing our previous function for generating a random position for the bird
    var neww=makeNewPositionBirdRigh();
    //Here we are taking the coordonates for height and width and implement them inside this function giving also the speed of the bird
    $(myclass).animate({ top: neww[0], left: neww[1] }, 1000,   function(){
        //At the end of this function we are recalling it to create an loop for the bird to never stop 
        animateDivBirdRight(myclass);
});
};

//END Carabus Claudiu Petrica




//START Walid code


//Constants to select the respective element
const waterDrops = $(".waterdrop")
const wateringCan = $("#wateringcan") 
const waters = [$("#waterdrop1"),$("#waterdrop2"),$("#waterdrop3")]
const dh = $( document ).height();
const men = $("#fallingMen")

//a counter for every click on the bucket
let clickCounter = 0

//Check if the buck is clicked and call teh functions to set the water to 0  and animate it
wateringCan.click(function(){
  if ($(this).hasClass("rotate")){
    $(this).removeClass("rotate")
  }else{
    $(this).addClass("rotate")
    setWaterDropPosition()
    watering()
    clickCounter++
  }
})

// the waterign function wit ha delayed loop to create a distance  in the different water drops
function watering(){
  let i= 0
  let wateringCanPosition = wateringCan.offset()
  if(clickCounter == 2){
    additionalFunction()
  }

  function delayedLoop(){
    setTimeout(function(){
      waters[i].show()
      waters[i].css({'left': wateringCanPosition.left+Math.round(Math.random() * 20)})
      waters[i].animate({
        'top':dh
      },{duration: 500});
      i++
      if (i < waters.length){
        delayedLoop();
      }
    },300)
}
  delayedLoop()
  
}

//set the water position relative to the watering bucket

function setWaterDropPosition() {
  waterDrops.css(wateringCan.position())
  waterDrops.stop()
  waterDrops.hide()
}

//when the page is load it call this 2 functions

$(document).ready(function () {
  setWaterDropPosition()
  men.hide()
});

//the extra function that when the counter is 3 will call an animation and play an audio track

function additionalFunction(){
  clickCounter = 0

  //I have recycled Jack's code to spawn the men in a random place in the tree
  var treeTop=($('#tree').position().top);
  var treeLeft=($('#tree').position().left);
  var treeWidth=$('#tree').width()-100;
  var treeHeight=$('#tree').height()/3;
  var posx = Math.round(Math.random() * treeWidth) + treeLeft+50;
  var posy = Math.round(Math.random() * treeHeight) + treeTop;
  men.show()
  men.css({
    "top":  posy+100+'px', "left": posx+'px',zindex:10,
  });
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', './audio/menScreaming.mp3');
  audioElement.play();
  men.animate({
    'top':dh
  },{duration: 11000});
}

//END Walid code



