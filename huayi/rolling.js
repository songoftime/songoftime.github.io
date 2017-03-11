
var speed=1;

var tabLeft=document.getElementById("demoLeft");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML;

//var tabTop=document.getElementById("demoTop");
//var tab3=document.getElementById("demo3");
//var tab4=document.getElementById("demo4");
//tab4.innerHTML=tab3.innerHTML;


function Marquee1(){
if(tabLeft.scrollLeft>=tab2.offsetWidth)
tabLeft.scrollLeft-=tab1.offsetWidth
else{
tabLeft.scrollLeft++;
}
}


//function Marquee2(){
//if(tabTop.scrollTop>=tab4.offsetHeight)
//tabTop.scrollTop-=tab3.offsetHeight
//else{
//tabTop.scrollTop++;
//}
//}


var MyMar=setInterval(Marquee1,speed);
var MyMar2=setInterval(Marquee2,speed);

tabLeft.onmouseover=function() {clearInterval(MyMar)};
tabLeft.onmouseout=function() {MyMar=setInterval(Marquee1,speed)};

tabTop.onmouseover=function() {clearInterval(MyMar2)};
tabTop.onmouseout=function() {MyMar2=setInterval(Marquee2,speed)};




