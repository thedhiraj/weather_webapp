
	$(function(){
		
		//get value
		var y=$("#input1").val();
		//print
		console.log(y);
		//setvalue
		$("#input1").val("akshay1");
		//get and print
		console.log($("#input1").val());
		//set value
		$("#input1").val();


		var tt=$(".num2").val();
		console.log("value of secont input="+tt);


		$("#bton").click(function(){
			console.log("this is event is called");
		});







	});