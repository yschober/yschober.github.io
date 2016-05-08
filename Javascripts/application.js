

$("#enterBTN").click(function(){
  	event.preventDefault();
  	$("#enterBTN").fadeOut(800);
  	$("#landingPage").fadeOut(1700);
  	$("#burningManMap").addClass("showMap");
  	setTimeout(function() {
  	$(".photosLG").addClass("showPhoto");
	}, 500);
	setTimeout(function() {
  	$(".photosLG").addClass("addPhoto");
	}, 3000);
});

$("#startSlideShow").click(function(){
    event.preventDefault();
    runSlideShow();
})

var runSlideShow = function() {

  	    setInterval(function() {
            var number = 1;
            $(".addPhoto").css({backgroundImage : 'url(/images/photo' + number + '.jpg)'});
            number.value = number + 1;
            },3000);
};

