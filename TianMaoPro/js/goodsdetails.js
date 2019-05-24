$(function(){
//	alert('2345678')
			//01.布局
			//02.监听鼠标在spic上移动的事件
			//  获取到鼠标的坐标
			//监听鼠标移动事件
			$('#fdbox').mousemove(function(event){	
				var nowleft = Math.floor(event.pageX - $('#fdbox').offset().left)-50;
				var nowtop = event.pageY - $('#fdbox').offset().top-50;				
				console.log(nowleft,nowtop)
				
				if(nowleft<0){
					nowleft=0;
				}
				if(nowleft>318){
					nowleft=318;
				}
				if(nowtop<0){
					nowtop=0;
				}
				if(nowtop>318){
					nowtop=318;
				}				
				$('#square').css({
					'top':nowtop,
					'left':nowleft
				})
				//放大图片
				$('#b').css({
					'top':-nowtop*3,
					'left':-nowleft*3
				})										
			})
			
			var oBtn =document.getElementsByClassName('btn');
			var iXic =document.getElementById('s');
			var iPic =document.getElementById('b');
			
			
			for(var i=0;i<oBtn.length;i++)	{
				console.log(oBtn[i])
				bind(i)
				
			}
			console.log(i)
			function bind(index){
				oBtn[index].onmousemove=function(){
//					alert(index)
					var tu=index+1;
					var path='img/goodsdetails/fangdatu'+tu+'.jpg';
					var path2='img/goodsdetails/fangdatu'+tu+'.jpg';
					console.log(path,path2);
					iXic.setAttribute('src',path);
					iPic.setAttribute('src',path2);
					
				}
			}
			
		//购物车添加数量的
		var plus = document.getElementById("plus");
		var i = document.getElementById("text").value;
		var subtract = document.getElementById("subtract");
		plus.onclick = function(){
			if(i<5){			
				i++;
				document.getElementById("text").value = i;
			}else{
				i=5;
				document.getElementById("text").value = i;
			}
		}
		subtract.onclick = function(){
			if (i>1) {
				i--;
				document.getElementById("text").value = i;
			} else{
				i=1;
				document.getElementById("text").value = i;
			}
		}
		
			
					
})