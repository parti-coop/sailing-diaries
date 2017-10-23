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

$(document).ready(function(){

  // make some waves.
  var ocean = document.getElementById("ocean"),
    waveWidth = 10,
    waveCount = Math.floor(window.innerWidth/waveWidth),
    docFrag = document.createDocumentFragment();
  for(var i = 0; i < waveCount; i++){
    var wave = document.createElement("div");
    wave.className += " wave";
    docFrag.appendChild(wave);
    wave.style.left = i * waveWidth + "px";
    wave.style.webkitAnimationDelay = (i/100) + "s";


    }
  ocean.appendChild(docFrag);

});
