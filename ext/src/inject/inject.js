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


        setTimeout(function(){showComcastPopup()},2000);
          slowlyIncludeImages();
          addSnailImg();
        });
	}
	}, 10);
});


var setup= function(){

    //add and hide elements
    //
    //comcast popup
    $('body').append('<img id="comcast-popup" src="http://i.imgur.com/tWw60Iw.png">');
    $("#comcast-popup").hide();


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
     $(img).hide();
     setTimeout(function(){
       $(img).show();
     },i*1000);
   });
}
