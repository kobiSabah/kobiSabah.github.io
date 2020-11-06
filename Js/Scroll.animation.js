
var lastScrollPosition = 0;

OnLoad(function()
{
    var items = document.querySelectorAll("[data-scroll-into-view]");

    ForEach(items, function(item)
    {
        item.classList.add("fadad");
    });

    OnScroll(function()
    {
        var windowTop = scrollPositionTop();

        var scrolledDown = windowTop >= lastScrollPosition;
        
        if(scrolledDown)
        {
            ForEach(items, function(item)
            {
                if(item.classList.contains(item.getAttribute("data-scroll-into-view")))
                {
                    return ;
                }

                if(item.getBoundingClientRect().top < (window.innerHeight * 0.75))
                {
                    item.classList.add(item.getAttribute("data-scroll-into-view"));

                }
            });

            lastScrollPosition = windowTop;
        }
    })
});