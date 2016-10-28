function game(){
	var start = document.getElementById('start');//开始按钮
	var head = document.getElementById('head');
	var btns = document.getElementById('btns');
	var flybird = document.getElementById('flybird');
	var flyBirdImg = flybird.firstElementChild;
	var slider = document.getElementById('slider');
	var flywrap = document.getElementById('flyWrap');
	var downTimer = null;//小鸟下落定时器
	var upTimer = null;//小鸟上升定时器
	var crashTimer = null;//碰撞检测定时器
	var pipeTimer = null;//管道生成定时器;
	//定义一个小鸟移动的速度
	var speed = 0;
	var maxspeed = 5;
	
	//小鸟下落的处理函数
	function birddown(){
		speed += 0.2;
		flyBirdImg.src = 'img/down_bird1.png'
		if(speed >= maxspeed){
			speed = maxspeed;
		}
		flybird.style.top = flybird.offsetTop + speed + 'px';
	}
	//小鸟上升的处理函数
	function birdup(){
		//清除下落的定时器
		clearInterval(downTimer)
		//清除上升的定时器
		clearInterval(upTimer);
		speed = maxspeed;
		flyBirdImg.src = 'img/up_bird1.png'
		upTimer = setInterval(function(){
			speed -= 0.2;
			if(speed <= 0){
				clearInterval(upTimer);
				downTimer = setInterval(birddown,20);
			}
			flybird.style.top = flybird.offsetTop - speed + 'px';
			
		},20)
	}
	//游戏结束函数
	function gameover(){
		clearInterval(upTimer);
		clearInterval(downTimer);
		clearInterval(crashTimer);
	}
	//碰撞检测函数
	function crashCheck(){
		//小鸟跟地板和天花板碰撞
		if(flybird.offsetTop <= 0 || flybird.offsetTop + flybird.offsetHeight >= slider.offsetTop){
			//游戏结束
			gameover();
		}
		//小鸟跟管道碰撞
	}
	//管道生成函数
//	function createPipe(){
//		var li = document.createElement('li');
//		li.className = 'pipe';
//		var img = document.
//	}
	//游戏开始函数
	function gameStartFun(){
		head.style.display = 'none';
		btns.style.display = 'none';
		flybird.style.display = 'block';
		
		//小鸟下落
		downTimer = setInterval(birddown,20);
		
		//碰撞检测
		crashTimer = setInterval(crashCheck,20);
		
		//出现管道
		pipeTimer = setInterval(createPipe,4000)
	}
	function init(){
	    //1.给开始按钮绑定事件
	    start.onclick = function(event){
	    	    var ev = event || window.event;
	    	    gameStartFun();
	    	    if(ev.stopPropagation){
	    	    	    ev.stopPropagation();
	    	    }else{
	    	    	    ev.cancelBubble = true;
	    	    }
	    	        
	    }
	    //2.给wrap绑定点击事件,点击的时候,小鸟上升
	    flywrap.onclick = function(){
	    	    
	    	    birdup();
	    }
	}
	init();//初始入口函数
}
game();
