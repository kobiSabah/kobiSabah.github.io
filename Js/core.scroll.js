
var scrollCallBacks = [];


var scrollTimerCallBackId = null;
var lastScrollTime = 0;
var scrollUpdateInterval = 100;

// Add function to scrollCallBacks
function OnScroll(callback)
{
    scrollCallBacks.push(callback);
}

// Invoke each item in scrollCallBacks array
function ProcessOnScroll()
{
    console.debug(i++);
    ForEach(scrollCallBacks, function(item)
    {
        item();
    });
}

var i =0;
// Hook the page scrolling
window.addEventListener("scroll", function(){
    
    // Check if the last callback finished 
    if(!scrollTimerCallBackId)
    {
        // this is the first time 
        if(lastScrollTime == 0)
        {
            lastScrollTime = new Date().getTime();
            ProcessOnScroll();
        }

        // start time out to invoke after the interval 
        scrollTimerCallBackId = setTimeout(function()
        {
            scrollTimerCallBackId = null;

            lastScrollTime = new Date().getTime();
            ProcessOnScroll();

        }, scrollUpdateInterval);
    }
    
})