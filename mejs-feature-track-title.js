(function($){
  MediaElementPlayer.prototype.buildtrack_title = function(player, controls, layers, media){
    var track_title = document.createElement("span");
    track_title.innerHTML = player.options.track_title.text || $(player.domNode).data('title');
    track_title.className = "mejs-track-title";
    track_title.style.width = $('.mejs-time-total', controls).width() + 'px';
    // track_title.style.display = 'none';
    $('.mejs-time-total', controls).css({ 'height': '6px', 'top': '9px' });
    $('.mejs-time-loaded', controls).css({ 'height': '6px' });
    $('.mejs-time-current', controls).css({ 'height': '6px' });
    $('.mejs-time-rail', controls).prepend(track_title);
    $(window).resize(function(){
      $('.mejs-track-title', controls).css({ 'width': $('.mejs-time-total', controls).width() + 'px' });
    });
    $(window).load(function(){
      $('.mejs-track-title', controls).css({ 'width': $('.mejs-time-total', controls).width() + 'px' });
    });
  };
})(jQuery);
