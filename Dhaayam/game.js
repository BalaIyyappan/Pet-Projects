window.onload = function(){
	let board = document.getElementById("canvas");
	for(i=0;i<10;i++){
		let span = document.createElement("span");
		span.setAttribute("id",i)
		span.setAttribute("class","dot")
		board.appendChild(span);
	}
}
