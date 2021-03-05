jQuery(document).ready(function () {
    jQuery.viewImage({
        'target' : '.post-content img', //需要使用ViewImage的图片
        'exclude': '.exclude img',    //要排除的图片
        'delay'  : 300                //延迟时间
    });
});

Lately({
    'target' : '.lately'
})

//PE菜单
function clickshow(pecd){var _obj=document.getElementById(pecd);if(_obj.style.display=='block'){_obj.style.display='none'}else{_obj.style.display='block'}}

var $backToTopBtn = $('.go-top');

if ($backToTopBtn.length) {
  var scrollTrigger = 521,
      // px
  backToTop = function backToTop() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > scrollTrigger) {
      $backToTopBtn.addClass('show');
    } else {
      $backToTopBtn.removeClass('show');
    }
  };

  backToTop();
  $(window).on('scroll', function () {
    backToTop();
  });
  $backToTopBtn.on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });
}