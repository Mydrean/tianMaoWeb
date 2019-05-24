window.onload = function(){	
	console.log( likesdata )
		
			//01.布局
			//02.点击按钮切换图片
			// picBtn绑定点击事件 遍历数组
			//封装函数bind函数  绑定事件
			//得到按钮的索引值
			//封装了changePic 根据索引值改变图片的透明度
			//03.自动轮播 ，每间隔2s换一张图片显示
			//setInterval  设置一个全局的iNow 控制显示图片的索引
			//为了确保点击事件 和 自动轮播的图片能契合
			//点击的时候 index赋值给iNow
			//04向前跳转和向后跳转
			//oBefore click iNow--
			var oPicBtn = document.getElementsByClassName('picBtn');
			var oBigPic = document.getElementsByClassName('bigPic');
			var oBefore = document.getElementById('before');
			var oNext = document.getElementById('next');
			
			//小轮播图
			var tmlunbo = document.getElementById("tmlunbo");//整个区域
			var a1 = tmlunbo.getElementsByTagName("a");//a标签 图片
			var li1 = tmlunbo.getElementsByTagName("li");//右下角按钮
			var ab = 0; //ab的值控制触摸按钮后的下一张图

			bb(); //运行bb()
			function bb() {

		       setInterval(function ac() { //设置2000毫秒重复运行
                 ab = ab>li1.length-2?0:++ab; //5张图,当触摸到的按钮索引号大于3时(比如4),那么ab=0(下一张图为第0张),否则++ab;
          		//循环遍历下一张图的效果.
                 for (var b = 0; b < li1.length; b++) {
                     if (b == ab) {
                         a1[b].style.opacity = 100;
                         a1[b].style.transition = "opacity 1s";
                         li1[b].style.backgroundColor = "green";
                     } else {
                         a1[b].style.opacity = 0;
                         li1[b].style.backgroundColor = "white";
                     }
                 }
             },2000);
     }
      
    		
			var oTlidao=document.getElementById('tlidao');
			var olgdbtn=document.getElementById('lgdbtn');
			//吸顶效果和左边的隐藏和显示效果
			document.onscroll=function(){
				var top=document.documentElement.scrollTop;
//				console.log(top)
				if(top==0){
					oTlidao.style.display='none';
					olgdbtn.style.display='none';
				}else if(top>500){
					oTlidao.style.display='block';
					oTlidao.style.position='fixed';
					olgdbtn.style.display='block';
					olgdbtn.style.position='fixed';
				}else{
					oTlidao.style.position='static';
					olgdbtn.style.position='static';
				}
			}
			
			//轮播开关
			slider();						
			function slider(){
				inter();
				
				//定义iNow timer为全局变量
				var iNow = 0;
				var timer;
				
				for(var i=0;i<oPicBtn.length;i++){
					console.log(i);
					bind(i);
				}
				//点击按钮事件
				function bind(index){
					oPicBtn[index].onclick=function(){
						//先清掉定时器
						clearInterval(timer);
						iNow=index;
						console.log(index);
						changePic(index);
						//再重新调用
						inter();
					}
				}
				//控制图片显示,index接收索引值
				function changePic(index){
//					oBigPic[index].style.opacity=1;
					//把所有的节点都遍历一遍
					for(var j = 0; j<oBigPic.length;j++){
						oBigPic[j].style.opacity=0;
						if(j==index){
							oBigPic[index].style.opacity=1;
						}
					}					
				}
				//自动轮播,定时器
				function inter(){					
					 timer=setInterval(function(){
						iNow++;
						//当++完就判断一次
						if(iNow>5){
							iNow=0;
						}
						console.log(iNow)
						//调用换图函数
//						changePic('zidong'+iNow)
						changePic(iNow)
					},2000)
				}				
			}
}			