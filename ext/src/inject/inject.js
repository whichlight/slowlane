chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

        $(document).ready(function(){
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. Scripts successfully injecteud ");
		// ----------------------------------------------------------




          slowlyIncludeImages();
        setup();
         slowScroll();
          slowMouse();
          addSnailImg();
        setTimeout(function(){showComcastPopup()},Math.random()*5000);

        });
	}
	}, 10);
});


var yinit = 0;
var mousex=0;
var mousey=0;
var absMouseX=0;
var absMouseY=0;

var setup= function(){

    //add and hide elements
    //
    //comcast popup
    $('body').append('<img id="comcast-popup" src="http://i.imgur.com/tWw60Iw.png">');
    $("#comcast-popup").hide();


    $('body').append('<img id="mouse-img" src="http://i.imgur.com/2oYKqUM.png">');

    //snail animate side to side
    $("#snail-img").hide();


}

var showComcastPopup = function(){
    var a = $("#comcast-popup")[0]
    $(a).dialog();
    setTimeout(function(){$(a).dialog("close")
        setTimeout(function(){showComcastPopup()},2000+ Math.random()*7000);
    },2000);
}

var addSnailImg = function(){
    $('h1').prepend('<div id="snail-img"><img src="http://i.imgur.com/gqn1XCQ.png"></div>');

    if($('h1').length == 0){
     $('h2').prepend('<div id="snail-img"><img src="http://i.imgur.com/gqn1XCQ.png"></div>');
    }
}

var slowlyIncludeImages = function(){

   var imgs = $('img');
   $.each(imgs, function(i, img){
     $(img).data("src",img.src);
     img.src = "http://i.imgur.com/9ErjBsv.gif";
     setTimeout(function(){
       img.src = $(img).data("src");
       $(img).show();
     },i*1000*Math.random());
   });

}


var slowScroll = function(){
    yinit= $(window).scrollTop();
  $(window).on("scroll", function(){
    var ypos = $(window).scrollTop();
    var ydiff = (ypos - yinit)/50;
    window.scrollTo(0,yinit+ydiff);
     console.log('yay');
     yinit = ypos;

});

}

var slowMouse = function(){

   $("a").css("cursor","none");
   $("#mouse-img").css("position","absolute");
   $("#mouse-img").css("z-index","10");
   $('body').css('cursor', 'none');
    mousex = $(window).width()/2;
     mousey = $(window).height()/2;
     $("#mouse-img").css("left",mousex);
     $("#mouse-img").css("top",mousey);

   setInterval(function(){
     mousex += (absMouseX - mousex)/100;
     mousey += (absMouseY - mousey)/100;
     $("#mouse-img").css("left",mousex);
     $("#mouse-img").css("top",mousey);
   $('body').css('cursor', 'none');
   },10);

   $(window).on("mousemove", function(e){
     absMouseX= e.pageX;
     absMouseY= e.pageY;
   });


}
