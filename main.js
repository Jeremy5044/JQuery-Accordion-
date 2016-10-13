var open = null;

var openCont=function(event){
	if ("click1" === event.target.id){
		if (open ===1){
			$("#count1").height(0);
			open = null;
		} else {
		$("#count1").height(170);
		$("#count2").height(0);
		$("#count3").height(0);
		open =1;
	}
}

if ("click2" === event.target.id){
		if (open ===2){
			$("#count2").height(0);
			open=null;
		} else {
		$("#count1").height(0);
		$("#count2").height(140);
		$("#count3").height(0);
		open=2;
	}
}


if ("click3" === event.target.id){
		if (open ===3){
			$("#count3").height(0);
			open=null;
		} else {	
		$("#count1").height(0);
		$("#count2").height(0);
		$("#count3").height(100);
		open =3;
}
}
}


$(".click").click(openCont);

	