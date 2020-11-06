function scrollPositionTop(){
    return window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
}

var scrollDownDetectStart = 0;
var i=0;

OnLoad(function(){

    var scrollDownItems = document.querySelectorAll("[data-scrolldown-class");
    var scrollDown = false;
    OnScroll(function(){

        var windowTop = scrollPositionTop();
        var scrollDown = true;
        if(!scrollDown && windowTop > scrollDownDetectStart){
            ForEach(scrollDownItems, function(item)
            {
                item.classList.add(item.getAttribute("data-scroll-class"));
            });
        }

        else if(scrollDown && windowTop <= scrollDownDetectStart)
        {
            var windowTop = scrollPositionTop();
            var scrollDown = false;
            if(!scrollDown && windowTop > scrollDownDetectStart){
                ForEach(scrollDownItems, function(item)
                {
                    item.classList.remove(item.getAttribute("data-scroll-class"));
                });
            }
        }
    })
})
