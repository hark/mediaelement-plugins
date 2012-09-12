(function($){
  MediaElementPlayer.prototype.buildlogo = function(player, controls, layers, media){
    var loop = $('<div class="mejs-button mejs-logo-button">' +
    	'<span>' + player.options.logo.text + '</span>' +
    	'</div>')
      // append it to the toolbar
      .appendTo(controls)
      // add a click toggle event
      .click(function(){
        window.open(player.options.logo.link, '_blank');
      });
  }
})(jQuery);
