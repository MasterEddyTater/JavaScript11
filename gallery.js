$(document).ready(function () {
  var preloadImages = [
    "yellow_pompom_mum.jpg",
    "purple_single_mum.jpg",
    "white_double_mum.jpg",
    "pink_single_mum.jpg",
    "sunburst_daisy_mum.jpg",
    "magenta_daisy_mum.jpg",
  ];
  var imgs = [];
  for (var i = 0; i < preloadImages.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = preloadImages[i];
  }
  $("#thumbs img").hover(
    function () {
      $(this).css({
        "border": "2px darkgreen",
        "box-shadow": " 4px 4px 2px darkgreen",
      });
    },
    function () {
      $(this).css({ "border": "", "box-shadow": "" });
    }
  );
  $('#thumbs img').each(function() {
	var imgFile = $(this).attr('src');
    var alt_text = $(this).attr("alt");
    $(this).click(function() {
			$('#lgPic').attr('src', imgFile);
            $("#lgTitle").text(alt_text);
    });
  });
  $("#lgPic").click(function () {
    window.open($(this).attr("src"), "_blank");
  });
});