var objectType = "text"; // text, image, video, table;

$(function () {
  function Box(x, y) {
    this.x = x;
    this.y = y;
    this.div = document.createElement('div');
    this.div.style.position = 'fixed';
    this.div.style.top = this.y + 'px';
    this.div.style.left = this.x + 'px';
    this.div.style.minWidth = 200 + 'px';
    this.div.style.border = '1px solid red';
    this.div.classList.add(objectType);
    this.div.classList.add('box');
    this.create = function () {
      note.appendChild(this.div);
    };
  }

  function createBox(e) {
    var x = e.pageX;
    var y = e.pageY;
    var box = new Box(x, y);
    box.create();
    var newBox = $('.box').last();
    newBox.attr('contentEditable', true);
    newBox.focus();
    newBox.on('click', function(e){
      lastBoxCheck();
      e.stopPropagation();
    });
  }

  var note = document.querySelector('.note-content');
  note.addEventListener('click', function(e){
    if ($('.sidebar-wrap').hasClass('visible')){
      toggleSidebar();
      objectType = "text";
    }
    if (objectType != "none") {
      lastBoxCheck();
      createBox(e);
    }
  });

  function lastBoxCheck(){
    var lastBox = $('.box').last();
    if(lastBox.length != 0) {
      if(lastBox.text() == ""){
        lastBox.remove();
      }
    }
  }
});