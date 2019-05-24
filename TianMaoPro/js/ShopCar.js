$(function(){
		//购物车添加数量的				
		$('.plus').click(function(){
			var oPlus = $('.plus').index(this)
			var oaa= $('.aa').eq(oPlus).html()
			var otext=$('.text').eq(oPlus).val();
			console.log(oPlus,otext)
			otext++;
			var oM=otext*oaa;
			$('.text').eq(oPlus).val(otext);
			$('.money').eq(oPlus).val(oM);
			console.log(oM)
		})
		
		$('.subtract').click(function(){
			var oSubtract = $('.subtract').index(this)
			var oaa= $('.aa').eq(oSubtract).html()
			var otext=$('.text').eq(oSubtract).val();
			console.log(oSubtract,otext)
			if(otext>1){
				otext--;
			}else{
				otext=1;
			}			
			var oM=otext*oaa;
			$('.text').eq(oSubtract).val(otext);
			$('.money').eq(oSubtract).val(oM);
			console.log(oM);
			
		})
		
		//删除 动态事件绑定通过.click是绑定不上的，要用到.on绑定
			$('table').on('click','.del',function(){
//				alert(1)
				//拿到索引值
				var index = $('.del').index(this);
				console.log(index)
				$('tr').eq(index).remove()			
			})
		
		//算钱			
		var all = 0;
		$('table').on('click','.checkbox',function(){
			var oCheckbox = $('.checkbox').index(this);		
			var summ =Number($('.totalm').val());
			$('.subbtn').css('background','red');
			if($('.checkbox').eq(oCheckbox).prop('checked')){				
				var nm=Number($('.money').eq(oCheckbox).val());			
				all+= nm;
				console.log( nm ,all)
				$('.totalm').html(all);
			}else{
				var nm=Number($('.money').eq(oCheckbox).val());
				all-=nm;
				$('.totalm').html(all);				
			}
		})
		
		

		
})		
