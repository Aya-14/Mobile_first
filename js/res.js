$(window).on("load",function()
{
    if($(window).scrollTop()<=50)
    {
        $("nav").css("background","#f8f9fa00");
    }
    else
    {
        $("nav").css("background","#141313");
    }
});
$(window).on("scroll",function()
{
    if($(window).scrollTop()<=50)
    {
        $("nav").css("background","#f8f9fa00");
    }
    else
    {
        $("nav").css("background","#141313");
    }
});
// ******************* Nav Bar    **********************
function openNav() {
    document.getElementById("myNav").style.width = "20%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
