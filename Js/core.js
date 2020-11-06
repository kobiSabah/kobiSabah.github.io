
//  About:
//     Core class that invoke all the js logic when the 
//      page is loaded.

// Store all the callback when the page is loaded
var onLoadCallBacks  = [];

// Listen when the page is loaded 
document.addEventListener("DOMContentLoaded", function()
{
    ProcessOnLoad();
});

function ForEach(array, callback)
{
    // fire each item in array 
    for ( var i = 0; i < array.length; i++)
    {
        callback(array[i]);
    }   
}

// Invoke all the callbacks 
function ProcessOnLoad()
{
    ForEach(onLoadCallBacks, function(item)
    {
        // invoke the item
        item();
    });
}

// Adding callback to the onLoadCallBacks array
function OnLoad(callback)
{
    onLoadCallBacks.push(callback);
}

