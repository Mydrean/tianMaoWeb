//document完全加载完毕，文本 ，样式，结构，图片
//数据请求 也在 window.onload中进行


            //01.准备商品详情样式布局
            //02.访问数据(数组)中每一个商品信息；
            //03.用等到的数据 拼接 样式模板    es6 字符串模板
            var ofather = document.getElementById('father');
            
            var str = '';
            //计算间距的
            var rr;
            for(var i = 0;i<likesdata.length;i++){
            	console.log(i+'qqqqqqq')
            	var now1=i+1;
            	if(now1%5==0){
            		console.log(i+'123')
            		rr=" rr";
            	}else{
            		rr='';
            	}
            	console.log(rr)
            	//console.log( srr[i].src );
            	str += `<div class="lkbox ${rr}">
							<img src="${likesdata[i].src}" class="gPic"/>
							<span class="gName"><em>${likesdata[i].name}</em></span>
							<span class="price">${likesdata[i].price}</span>
						</div>`;
//				console.log( str )	
				ofather.innerHTML = str;
            }
//           console.log( olike2 );	
			
			
			
			
			
			
			
			//滑动返回顶部
			$('#fanhui,#backtop').click(function(){
				$('html,body').animate({scrollTop: '0px'}, 800);});
				

