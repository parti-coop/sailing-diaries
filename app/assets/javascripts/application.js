// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require select2

$(document).ready(function(){
  //multiple select
  $( "#js-emoji-select" ).select2();

  $('.form-group').mouseover(function(){
    var flag = $(this).hasClass("changed");
    if(!flag){
      $(this).find('label').hide().text('how was your feeling?').fadeIn('slow');
      $(this).addClass("changed");
    }
  })
});
