$(function(){
  $('.toolbar').toggle();
})

$('li[data-command="forepalette"]').on('click', function(e){
  e.stopPropagation();
  $('#colorPalette').trigger('click');
});

$('li[data-command="backpalette"]').on('click', function(e){
  e.stopPropagation();
  $('#bgColorPalette').trigger('click');
});
 
$('#colorPalette').change(function(){
  var currentTextColor = $(this).val();
  $('.colorPalette').css('color', currentTextColor);
  document.execCommand('forecolor', false, currentTextColor);
});

$('#bgColorPalette').change(function(){
  var currentBgColor = $(this).val();
  $('.bgColorPalette').css('background', currentBgColor);
  document.execCommand('backcolor', false, currentBgColor);
});

$('#colorPalette, #bgColorPalette').on('click', function(e){
  e.stopPropagation();
});

$('.justifySelected').on('click', function(){
  $('.toolbar-justifyGroup').toggle();
});
$('.toolbar-justifyGroup li').on('click', function(){
  $('.toolbar-justifyGroup li').removeClass('selected');
  $(this).addClass('selected');
  var selected = $(this).children().attr('class');
  $('.justifySelected').children().attr('class', selected);
  $('.toolbar-justifyGroup').toggle();
});


$('.toolbar').mousedown(function(e) {
  e = e || window.event;
  e.preventDefault();
});


$('.toolbar li').mousedown(function(){
  $(this).addClass('clicked');
}).mousemove(function(){
  $(this).removeClass('clicked');
}).click(function(e) {
  var command = $(this).data('command');
  if (command != 'forecolor' && command != 'backcolor'){
    if (command == 'h1' || command == 'h2' || command == 'p') {
      document.execCommand('formatBlock', false, command);
    }
    if (command == 'createlink' || command == 'insertimage') {
      url = prompt('Enter the link here: ','http:\/\/'); document.execCommand($(this).data('command'), false, url);
    }
    else document.execCommand($(this).data('command'), false, null);
  }
}).mouseup(function(){
  $(this).removeClass('clicked');
});