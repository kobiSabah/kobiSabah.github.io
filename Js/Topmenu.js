

OnLoad(function()
{
    // Find all the elements that contain the tag 
    var menuExpanders = document.querySelectorAll("[href='#topmenu']");

    ForEach(menuExpanders, function(item)
    {
        // Listen for click event 
        item.addEventListener("click", function(e)
        {
            // Cancel url add 
            e.preventDefault();

            var topMenus = document.querySelectorAll("[data-topMenu-class]");
            
            // Toggle the class to this item
            ForEach(topMenus, function(menu)
            {
                var menuClass = menu.getAttribute("data-topMenu-class");
                
                menu.classList.toggle(menuClass);
            });
        });
    })
})