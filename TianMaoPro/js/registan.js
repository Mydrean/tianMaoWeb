//按钮禁用和启用事件
	var oButton=document.getElementById('button');
		function check(){
			var checkbox = document.getElementById("checkbox");
			if(checkbox.checked == true){
				console.log(checkbox)
				document.getElementById("button").disabled="";
				oButton.style.background='red';
			}
			else{
				document.getElementById("button").disabled="disabled";
				oButton.style.background='gray';
			}
		}