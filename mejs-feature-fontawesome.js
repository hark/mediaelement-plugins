// Replace Image Controls with FontAwesme
(function($){
  MediaElementPlayer.prototype.buildfontawesome = function(player, controls, layers, media){
    // Speed Up: Make elements and add their class the right way, but ugly.
    $('.mejs-volume-button button', controls).append('<i class="icon-volume-up"></i><i class="icon-volume-off"></i>');
    $('.mejs-playpause-button button', controls).append('<i class="icon-play"></i><i class="icon-pause"></i>');
    $('.mejs-stop-button button', controls).append('<i class="icon-stop"></i>');
    $('.mejs-fullscreen-button button', controls).append('<i class="icon-fullscreen"></i>');
    $('.mejs-unfullscreen-button button', controls).append('<i class="icon-resize-small"></i>');
    $('.mejs-loop-button button', controls).append('<i class="icon-repeat"></i>');
  }
})(jQuery);
