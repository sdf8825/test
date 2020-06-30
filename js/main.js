$(function(){
    //팝업창 닫고 열기
     $('.pop_close').click(function(){
         $('.popup').slideUp();
          });
     $('.popup_open').click(function(){
         $('.popup').slideDown();
     });

     //전체보기 열고 닫기
     $('.sitemap').click(function(){
        $('#all_menu').slideDown();
         });
    $('.menu_close').click(function(){
        $('#all_menu').slideUp();
    });

    //언어 선택
    $('.lan').click(function(){
        $('.language ul').slideToggle();
         });

    //bx슬라이더
    $('.bxslider').bxSlider({
        captions:true,
        //slideWidth:600,  //수정
        auto:true,
        autoControls:true,
        stopAutoOnclick:true,

      });
    
      //미니 bx슬라이더
    var mySlider=$("#slide_banner").bxSlider({
        mode:"horizontal",   // 가로 수평으로 슬라이드 됩니다.
        speed:500,              // 이동 속도를 설정합니다.
        pager:false,            // 현재 위치 페이징 표시 여부 설정.
        moveSlides:1,         // 슬라이드 이동시 갯수 설정.
        slideWidth:500,        // 슬라이드 마다 너비 설정.
        minSlides:2,           // 최소 노출 개수를 설정합니다.
        maxSlides:2,          // 최대 노출 개수를 설정합니다.
        slideMargin:10,      // 슬라이드간의 간격을 설정합니다.
        auto:true,             // 자동으로 흐를지 설정합니다.
        autoHover:true,    // 마우스 오버시 정시킬지 설정합니다.
        controls:false        // 이전 다음 버튼 노출 여부 설정합니다.
     });
  //이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
    $("#prevBtn").on("click",function(){
      mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동됩니다.
      return false; //<a>에 링크를 차단합니다.
     });
  //다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
    $("#nextBtn").on("click",function(){
      mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동됩니다.
      return false;
     });
});	