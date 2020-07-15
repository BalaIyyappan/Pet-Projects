let playerid=document.getElementById("player");

window.onload=function(){
	let divbox=document.getElementById("box");
	for(i=1;i<10;i++){
	let creatediv=document.createElement("div");
	creatediv.setAttribute("id","box"+i);
	creatediv.setAttribute("class","boxdiv");
	creatediv.textContent="";
	divbox.appendChild(creatediv);

	//To select DIV Boxes
	let boxes=document.querySelectorAll('#box div');
	// console.log(boxes);
	let X_or_O=0;
	for(j=0;j<boxes.length;j++){
	boxes[j].onclick=function(){
		if(this.innerHTML!=="X"&&this.innerHTML!=="O"){
		if(X_or_O%2===0){
			// console.log(X_or_O);
			playerid.innerHTML="O Turn Now";
			this.innerHTML="X";
			game();
			X_or_O+=1;
		}
		else{
			// console.log(X_or_O);
			playerid.innerHTML="X Turn Now";
			this.innerHTML="O";
			game();
			X_or_O+=1;
		}}
	};
}}};

function game(){
	//To get ID of all DIV's
	let div1=document.getElementById("box1");let div2=document.getElementById("box2");let div3=document.getElementById("box3");
	let div4=document.getElementById("box4");let div5=document.getElementById("box5");let div6=document.getElementById("box6");
	let div7=document.getElementById("box7");let div8=document.getElementById("box8");let div9=document.getElementById("box9");
	//To predict winner
	if(div1.innerHTML!==""&&div1.innerHTML===div2.innerHTML&&div1.innerHTML===div3.innerHTML){
		highlight(div1,div2,div3); winner(div1.innerHTML);
	}
	else if(div4.innerHTML!==""&&div4.innerHTML===div5.innerHTML&&div4.innerHTML===div6.innerHTML){
		highlight(div4,div5,div6);winner(div4.innerHTML);
	}
	else if(div7.innerHTML!==""&&div7.innerHTML===div8.innerHTML&&div7.innerHTML===div9.innerHTML){
		highlight(div7,div8,div9);winner(div7.innerHTML);
	}
	else if(div1.innerHTML!==""&&div1.innerHTML===div4.innerHTML&&div1.innerHTML===div7.innerHTML){
		highlight(div1,div4,div7);winner(div1.innerHTML);
	}
	else if(div2.innerHTML!==""&&div2.innerHTML===div5.innerHTML&&div2.innerHTML===div8.innerHTML){
		highlight(div2,div5,div8);winner(div2.innerHTML);
	}
	else if(div3.innerHTML!==""&&div3.innerHTML===div6.innerHTML&&div3.innerHTML===div9.innerHTML){
		highlight(div3,div6,div9);winner(div3.innerHTML);
	}
	else if(div1.innerHTML!==""&&div1.innerHTML===div5.innerHTML&&div1.innerHTML===div9.innerHTML){
		highlight(div1,div5,div9);winner(div1.innerHTML);
	}
	else if(div3.innerHTML!==""&&div3.innerHTML===div5.innerHTML&&div3.innerHTML===div7.innerHTML){
		highlight(div3,div5,div7);winner(div3.innerHTML);
	}
	else{
		console.log("Tie!");
	}
}

function foo(){
// 	let div1=document.getElementById("box1");let div2=document.getElementById("box2");let div3=document.getElementById("box3");
// 	let div4=document.getElementById("box4");let div5=document.getElementById("box5");let div6=document.getElementById("box6");
// 	let div7=document.getElementById("box7");let div8=document.getElementById("box8");let div9=document.getElementById("box9");
// 	div1.innerHTML="";div2.innerHTML="";div3.innerHTML="";div4.innerHTML="";div5.innerHTML="";div6.innerHTML="";div7.innerHTML="";
// 	div8.innerHTML="";div9.innerHTML="";resultclear();
// }
	location.reload();
}
function winner(x_or_o){
	let winner=document.getElementById("result");
	winner.innerHTML=x_or_o+" is Winner";
}

// function resultclear(){
// 	let cls=document.getElementById("result");
// 	cls.innerHTML="";
// }

function highlight(a,b,c){
	a.style.background='#e33b5a';
	b.style.background="#e33b5a";
	c.style.background="#e33b5a";
}
