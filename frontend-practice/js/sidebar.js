
// 사이드바 메뉴 이벤트
function toggleSidebar(){
  var sidebar = $('.sidebar-wrap');
  if (sidebar.hasClass('visible')){
    sidebar.animate({"left":"-1000px"}, "fast").removeClass('visible');
  } else {
    sidebar.animate({"left":"40px"}, "fast").addClass('visible');
  }
}

$('.sidebarMenuBtn').on('click', function(){
  $('.sidebarMenuBtn').removeClass('selected');
  $(this).addClass('selected');
  if ($(this).hasClass('sidebarMenuBtn-folder')){
    objectType = "none";
    toggleSidebar();
  } else {
    $('.sidebar-wrap').animate({"left":"-1000px"}, "fast").removeClass('visible');
    if ($(this).hasClass('sidebarMenuBtn-text')){
    /* box.js의 objectType */
    objectType = "text";
    } else if ($(this).hasClass('sidebarMenuBtn-image')){
    objectType = "image";
    } else if ($(this).hasClass('sidebarMenuBtn-video')){
      objectType = "video";
    }
  }
});

// 사이드바 헤더 버튼 이벤트
$('.sidebar-header-btn').on('click', function(){
  if (!($(this).hasClass('selected'))){
    $('.sidebar-header-btn').toggleClass('selected');
  }
});

// 사이드바 가로폭 변경 이벤트
$('.sidebar-split').mousedown(function (e) {
  e.preventDefault();
  var lastX = e.pageX;
  var sidebarWrap = $('.sidebar-wrap');
  var prevBro = $(this).prev();
  $(document).mousemove(function (e) {
    e.preventDefault();
    var sidebarWrapWidth = sidebarWrap.width();
    console.log(sidebarWrapWidth);
    var prevBroWidth = prevBro.width();
    var moveX = e.pageX - lastX;
    lastX = e.pageX;
    console.log(moveX);
    var x = e.pageX - prevBro.offset().left;
    sidebarWrap.width(sidebarWrapWidth + moveX);
    prevBro.width(prevBroWidth + moveX);
  });
})
$(document).mouseup(function (e) {
  $(document).unbind('mousemove');
});