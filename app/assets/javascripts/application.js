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
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require select2

$(document).ready(function(){
  //multiple select
  $( "#js-emoji-select" ).select2();

  $(".show-item").click(function(){;
    $(".card").toggleClass('flipped');
  });

  //slide show
  $( "#js-slideshow > div:gt(0)" ).hide();
  setInterval(function() {
    $('#js-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#js-slideshow');
  }, 3000);

  // $('.form-group').mouseover(function(){
  //   var flag = $(this).hasClass("changed");
  //   if(!flag){
  //     $(this).find('label').hide().text('how was your feeling?').fadeIn('slow');
  //     $(this).addClass("changed");
  //   }
  // })

  // CHART
  function createDonutCharts() {
    $("<style type='text/css' id='dynamic' />").appendTo("head");
    $("div[chart-type*=donut]").each(function () {
        var d = $(this);
        var id = $(this).attr('id');
        var max = $(this).data('chart-max');
        if ($(this).data('chart-text')) {
            var text = $(this).data('chart-text');
        } else {
            var text = "";
        }
        if ($(this).data('chart-caption')) {
            var caption = $(this).data('chart-caption');
        } else {
            var caption = "";
        }
        if ($(this).data('chart-initial-rotate')) {
            var rotate = $(this).data('chart-initial-rotate');
        } else {
            var rotate = 0;
        }
        var segments = $(this).data('chart-segments');

        for (var i = 0; i < Object.keys(segments).length; i++) {
            var s = segments[i];
            var start = ((s[0] / max) * 360) + rotate;
            var deg = ((s[1] / max) * 360);
            if (s[1] >= (max / 2)) {
                d.append('<div class="large donut-bite" data-segment-index="' + i + '"> ');
            } else {
                d.append('<div class="donut-bite" data-segment-index="' + i + '"> ');
            }
            var style = $("#dynamic").text() + "#" + id + " .donut-bite[data-segment-index=\"" + i + "\"]{-moz-transform:rotate(" + start + "deg);-ms-transform:rotate(" + start + "deg);-webkit-transform:rotate(" + start + "deg);-o-transform:rotate(" + start + "deg);transform:rotate(" + start + "deg);}#" + id + " .donut-bite[data-segment-index=\"" + i + "\"]:BEFORE{-moz-transform:rotate(" + deg + "deg);-ms-transform:rotate(" + deg + "deg);-webkit-transform:rotate(" + deg + "deg);-o-transform:rotate(" + deg + "deg);transform:rotate(" + deg + "deg); background-color: " + s[2] + ";}#" + id + " .donut-bite[data-segment-index=\"" + i + "\"]:BEFORE{ background-color: " + s[2] + ";}#" + id + " .donut-bite[data-segment-index=\"" + i + "\"].large:AFTER{ background-color: " + s[2] + ";}";
            $("#dynamic").text(style);
        }

        d.children().first().before("<div class='donut-hole'><span class='donut-filling'>" + text + "</span></div>");
        d.append("<div class='donut-caption-wrapper'><span class='donut-caption'>" + caption + "</span></div>");
    });
  }
  createDonutCharts();
});
