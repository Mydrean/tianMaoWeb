window.onload=function(){
//	alert('dfhjkl')
	var oBtn =document.getElementsByClassName('btn');
	var iPic =document.getElementById('pic')

	
	
	for(var i=0;i<oBtn.length;i++)	{
		console.log(oBtn[i])
		bind(i)
		
	}
	console.log(i)
	function bind(index){
		oBtn[index].onclick=function(){
//			alert(index)
			var tu=index+1;
			var path='img/brandsStreet/bslunbotu'+tu+'.jpg';
			console.log(path);
			iPic.setAttribute('src',path);
			
		}
	}
	
	
	
	
	
	
	
}
