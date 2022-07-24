//fetching the id's and initializing them to variables
var strt    = document.getElementById('start');
var stp     = document.getElementById('stop');
var rst     = document.getElementById('reset');
var second1  = document.getElementById('second-1');
var second2  = document.getElementById('second-2');
var minute1  = document.getElementById('minute-1');
var minute2  = document.getElementById('minute-2');
var msecond1 = document.getElementById('mSecond-1');
var msecond2 = document.getElementById('mSecond-2');

//declair the variables and initialized them 
var clrInterval;
var msec1 = 0;
var msec2 = 0;
var sec1  = 0;
var sec2  = 0;
var min1  = 0;
var min2  = 0;

/*  Initialize the flag, 
    It will allow user to start timer if it is not*/
let flag = false;
strt.addEventListener('click', function()
{
   if(flag!=true)
   {
    clrInterval = setInterval(startTime, 10);
    flag=true;
   }
});


// Stop  Timer eventListioner(It will pause the time)  
stp.addEventListener('click', function()
{
    flag = false;
    clearInterval(clrInterval);

});

//Rese(To Reset the Timer to Zero)
rst.addEventListener('click', function()
{
    flag = false;
    clearInterval(clrInterval);
    msec1 = 0;
    msec2 = 0;
    sec1  = 0;
    sec2  = 0;
    min1  = 0;
    min2  = 0;
    msecond1.innerText=0;
    msecond2.innerText=0;
    second1.innerText=0;
    second2.innerText=0;
    minute1.innerText=0;
    minute2.innerText=0; 
});

//To start and set the timer for Millie, second, Minute
function startTime()
{
    msec1++;
    if(msec1 <= 9)
    {
        msecond1.innerText = msec1;
    }
    else if(msec1 == 10)
    {
        msec2++;
        msecond1.innerText = 0;
        msecond2.innerText = msec2;
        msec1=0;

        if(msec2 == 10)
        {
            sec1++;
            msecond2.innerText = 0;
            msec2=0;
            second1.innerText = sec1;
            if(sec1 == 10)
            {
                sec2++;
                second1.innerText = 0;
                second2.innerText = sec2;
                sec1=0;
                if(sec2 == 6)
            {
               min1++;
               second2.innerText = 0;
               minute1.innerText = min1;
               sec2=0;
               if(min1 == 10){
                min2++;
                minute1.innerText = 0;
                minute2.innerText = min2;
                min1=0;
                }
            }   
            }
            
        }
        
    }
}



//To Endable and Disable the Dark-Mode 
var tgl = document.getElementById('toggle');
var circle = document.getElementById("circleBtn");
var bodyTag = document.getElementById('bck-color');
var bodyTag2 = document.getElementById('bck-color-2');
var darkText = document.getElementById('darkText');

var isToggled = false;

tgl.addEventListener('click', function()
{
    if(!isToggled)
    {  
        circle.style.marginLeft = "100px";
        bodyTag.classList.add('lightmode');
        bodyTag2.classList.add('lightmode');
        darkText.innerText ='DarkMode On';
        isToggled = true;
     
    }
    else 
    {
        bodyTag.classList.remove('lightmode');
        bodyTag2.classList.remove('lightmode');
        darkText.innerText ='DarkMode Off';
        circle.style.marginLeft = "1px";
        isToggled = false; 
    }
});
     
    
