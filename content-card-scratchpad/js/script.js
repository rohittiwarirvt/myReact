(function($){

  var icons = [
    "174848.png",
    "174855.png",
    "174883.png",
    "33447.png"
  ];

  var images = [
    "2g.png",
    "32 updates pending on prod .png",
    "500.png",
    "add chronological view to home page.png",
  ];

  var $card = $(".card-wrapper");
   $card.each(function(index){
    var $this = $(this);
    var imageName = images[index].replace(/ /g, '%20');
    var cssObj = {
      "background-image": "url(assets/img/" + imageName +")",
      "background-size": "contain"
    };
    $this.css(cssObj);
    $this.find("img").hide();
    var $para = $this.find('p');
    var $paraContent = $para.text().trim();
    if ($paraContent.length > 145) {
      $para.data('para', $paraContent);
      $para.text($paraContent.substr(0, 145) + "..").append($("<span class='read-more'>Read More</span>"));
    }
   })

   var $readMore = $('.read-more');
   $readMore.on('click', function(){
    var $this = $(this);
    var paraContent = $this.parent().data('para');
    $this.parent().text(paraContent);
   })
})(jQuery);
