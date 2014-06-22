chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

        $(document).ready(function(){
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. Scripts successfully injecteud ");
		// ----------------------------------------------------------

        setup();


        //setTimeout(function(){showComcastPopup()},2000);
//          slowlyIncludeImages();
 //         addSnailImg();
//         slowScroll();
          slowMouse();

        });
	}
	}, 10);
});


var yinit = 0;

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
  $(window).on("scroll", function(){
    var ypos = $(window).scrollTop();
    var ydiff = (ypos - yinit)/50;
    window.scrollTo(0,yinit+ydiff);
     console.log('yay');
     yinit = ypos;

});

}

var slowMouse = function(){
   $("#mouse-img").css("position","absolute");
   $("#mouse-img").css("z-index","10");
   $("#mouse-img").css("z-index","10");

   $(window).on("mousemove", function(){
     console.log('yay');
     $("#mouse-img").css("z-index","10");
   });
}
