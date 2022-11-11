	
 function checkForm(){
	var x=document.getElementById("exampleInputEmail1").value
	var y=document.getElementById("exampleInputPassword1").value
	console.log(x)
    if(x!=""){
       if(y=="123456"){
		   return true;
	   }
	   else{
		   alert("密码错误")
		   return false;
	   }
    }else{
		alert("邮件名为空")
		return false;
	}
    
    }


 