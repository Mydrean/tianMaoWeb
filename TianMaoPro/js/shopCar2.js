
		var oZjs=document.getElementById('zjs');
		document.onscroll=function(){
			var top=document.documentElement.scrollTop;
			if(top<1000){
					oZjs.style.position='fixed';
					oZjs.style.bottom=0;
					oZjs.style.z-index=50;
				}else{
					oZjs.style.position='static';
				}			
		}