$(function(){
    $( document ).ready(function() {
        $("#wm_main_h1").removeClass("invisible").addClass("animated slideInLeft");

        $('.collapse').on('shown.bs.collapse', function(){
            //console.log('hi');
        })

       // document.addEventListener('collapse', 'shown.bs.collapse', {passive: false});
    });
});