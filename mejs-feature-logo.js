/*!
* mejs-feature-logo.js
* Add any logo to your players for MediaElement.js.
* http://www.hark.com/
*
* Copyright 2012, Hark.com (http://www.hark.com/)
* Licensed under the MIT license.
*/
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
  };
})(jQuery);
