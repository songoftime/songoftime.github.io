
	var imgg = content.getElementsByTagName('img');
	var btnss = btns.getElementsByTagName('li');
	var index1 = 0;
	var timer = null;
	var timer1 = null;
	var bbtns = list.getElementsByTagName('li');
	
		function tim(){
		timer = setInterval(function(){
			for(var i = 0 ; i < imgg.length;i++){
				imgg[i].style.opacity = 0;
			}
			imgg[index1].style.opacity = 1;
			index1++;
			if(index1>9){
				index1 = 0;
			}
			mov(index1-1);
		},1500);}
		tim();
		for(var i = 0;i<btnss.length;i++){
			
			btnss[i].onclick = function(index){	
			var index =Number(this.innerHTML)-1;
			iii(index);
			mov(index);
			}
			
		}
		function iii(iu){
			for(var i = 0 ; i < imgg.length;i++){
				imgg[i].style.opacity = 0;
			}
			imgg[iu].style.opacity = 1;
		}
		btns.onmouseover = function(){
			clearInterval(timer);
			
		}
		btns.onmouseout = function(){
			tim();
		}
		
		function mov(index1){
			//计算当前图片是第几张
//			var index = scr.offsetLeft/-500;

			//先清除全部li的class
			for(var i = 0;i< btnss.length;i++){
				btnss[i].className = "";
			}
			btnss[index1].className="active"; 
		}
		block3.onclick = function(){
			bgs.style.display = 'block';
		}
		x1.onclick = function(){
			bgs.style.display = 'none';
		}
		block5.onclick = function(){
			jieshao.style.display = 'block';
		}
		x2.onclick = function(){
			jieshao.style.display = 'none';
		}
		block6.onclick = function(){
			alert('本站是时之歌Project音乐物语企划同人网站,个人制作不以盈利为目的.同时在此发布纵恒暝灭音乐团队的新作品,如有侵权请联系站长.')
		}
