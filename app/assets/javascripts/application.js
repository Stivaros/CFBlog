// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
  
  // navigation will scroll then stick to top of page
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 180) {
      $('.nav-menu').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 180) {
      $('.nav-menu').removeClass('navbar-fixed');
    }
  });

  // automatically resize textarea to match article size
  $(function() {
      //  changes mouse cursor when highlighting loawer right of box
      $(document).on('mousemove', 'textarea', function(e) {
      var a = $(this).offset().top + $(this).outerHeight() - 16,	//	top border of bottom-right-corner-box area
        b = $(this).offset().left + $(this).outerWidth() - 16;	//	left border of bottom-right-corner-box area
      $(this).css({
        cursor: e.pageY > a && e.pageX > b ? 'nw-resize' : ''
      });
    })
      //  the following simple make the textbox "Auto-Expand" as it is typed in
      .on('keyup', 'textarea', function(e) {
          //  the following will help the text expand as typing takes place
          while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
              $(this).height($(this).height()+1);
          };
      });
  });
});