var objectType = "text"; // text, image, video, table;

function lastBoxCheck(){
  $('.box').removeAttr('contentEditable');
  var lastBox = $('.box').last();
  if(lastBox.length != 0) {
    if(lastBox.text() == ""){
      lastBox.remove();
    }
  }
}

function toolbarActive(tag) {
  var isDragging = false;
  var selectedText = '';
  tag.dblclick(function(e){
    selectedText = window.getSelection().toString();
    console.log('selected : ' + selectedText); ///
    if(selectedText != ''){
      $('.toolbar').css('display', 'inline-block');
      $('.toolbar').css('left', e.pageX + 'px');
      $('.toolbar').css('top', e.pageY - 80 + 'px');
      selectedText = '';
    } else{
      $('.toolbar').css('display', 'none');
    }
  }).mousedown(function(){
    isDragging = false;
  }).mousemove(function(e){
    isDragging = true;
  }).mouseup(function(e){
    var wasDragging = isDragging;
    isDragging = false;
    if (wasDragging){
      selectedText = window.getSelection().toString();
      console.log('selected : ' + selectedText); ///
      if(selectedText != ''){
        $('.toolbar').css('display', 'inline-block');
        $('.toolbar').css('left', e.pageX + 'px');
        $('.toolbar').css('top', e.pageY - 80 + 'px');
        selectedText = '';
      } 
    } else{
      $('.toolbar').css('display', 'none');
    }
  });
}

function enableEdit(e) {
  e.stopPropagation();
  lastBoxCheck();
  var isEditable = $(this).attr('contentEditable');
  if(typeof isEditable == 'undefined'){
    $(this).attr('contentEditable', true);
    $(this).focus();
    toolbarActive($(this));
  }
      // $(this).click(function(e){
      //   e.stopPropagation();
      //   $('.toolbar').css('display', 'none');
      // });
}

function Box(x, y) {
  this.x = x;
  this.y = y;
  this.div = document.createElement('div');
  this.div.style.position = 'fixed';
  this.div.style.top = this.y + 'px';
  this.div.style.left = this.x + 'px';
  this.div.style.minWidth = 200 + 'px';
  this.div.style.zIndex = 1;
  this.div.classList.add(objectType);
  this.div.classList.add('box');
  this.create = function () {
    var note = document.querySelector('.note-content');
    note.appendChild(this.div);
  };
}

function createBox(e) {
  var x = e.pageX;
  var y = e.pageY;
  var box = new Box(x, y);
  $('.box').removeAttr('contentEditable');
  box.create();
  var newBox = $('.box').last();
  newBox.attr('contentEditable', true);
  newBox.focus();
  $('.toolbar').css('display', 'none');
  toolbarActive(newBox);
}

$(function () {
  var note = document.querySelector('.note-content');
  note.addEventListener('click', function(e){
    if ($('.sidebar-wrap').hasClass('visible')){
      $('.sidebarMenuBtn').removeClass('selected');
      $('.sidebarMenuBtn-text').addClass('selected');
      objectType = "text";
      toggleSidebar();
    }
    if (objectType != "none") {
      lastBoxCheck();
      createBox(e);
      $('.box').on('click', enableEdit);
    }
  });
});