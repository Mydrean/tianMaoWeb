window.onload=function(){

	//01.准备商品详情样式布局
    //02.访问数据(数组)中每一个商品信息；
    //03.用等到的数据 拼接 样式模板    es6 字符串模板
    var ogart2 = document.getElementById('gart2');
    
    var str = '';
    //计算间距的
    var rr;
    for(var i = 0;i<goodsdata.length;i++){
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
    	str += `<div class="gbox ${rr}">   				
					<a href="GoodsDetails.html"><img src="${goodsdata[i].src}" class="gPic" /></a>
					<p class="price"><em>${goodsdata[i].price}</em></p>
					<a href="#"><p class="gName">${goodsdata[i].gName}</p></a>
					<a href="#"><p class="gDpname">${goodsdata[i].gDpname}</p></a>
					<p class="xian">${goodsdata[i].xian}</p>
					<span class="sL">${goodsdata[i].sL} </span>
					<span class="sL2">${goodsdata[i].sL2}</span>
					<span class="iconfont">${goodsdata[i].iconfont}</span>
					<img src="${goodsdata[i].src2}" class="gPic2"/>
				</div>`;
//				console.log( str )	
		ogart2.innerHTML = str;
    }
//           console.log( olike2 );	
	
	//方法1吸顶 简单
			var oGhead =document.getElementById('ghead')
			console.log(oGhead)
			
			document.onscroll=function(){
				//拿到滚动条滑动的数据
				var oG=document.documentElement.scrollTop;
				console.log(oG)
					if(oG>495){
						oGhead.style.position='fixed';
						oGhead.style.top=0;
					}else{
						oGhead.style.position='static';
					}							
			}
			
	
	//滑动返回顶部
			$('#fanhui').click(function(){
				$('html,body').animate({scrollTop: '0px'}, 800);});
	
}
