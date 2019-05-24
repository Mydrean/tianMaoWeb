$(function(){
	$('.inp').blur(function(){
				//取到input的value值，用.val()
				var index = $('.inp').index(this);
				var value = $('.inp').eq(index).val();
				var reg;
				switch(index){
					case 0:
					  reg=/^\w{4}$/;
					  break;						
					case 1:
					  reg=/^\w{6,12}$/;
					  break;				  	
				}
				checked( reg,value,index )
			})
			function checked( reg,value,index ){
				var resulet = reg.test( value );
				console.log(value,resulet,reg);
				if(resulet==false){
					$('.pp').eq(index).css('color','red');
				}else{
					$('.pp').eq(index).css('color','white');
				}
			}
})
