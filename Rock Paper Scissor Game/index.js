function game(choice){
	let usrchoice=document.createElement("img");
	usrchoice.setAttribute('src','C:\\Users\\Dell\\OneDrive\\Guvi Zen Class\\JS Projects\\Rock Paper game\\'+choice);
	usrchoice.setAttribute('id',choice);
	console.log(choice.split(".")[0]);
	document.getElementById("usrimg").appendChild(usrchoice);
	prediction(choice.split(".")[0],usrchoice);
}
function prediction(input,deleteelem){
	let randomchoice=['rock','paper',"scissor"];
	let compchoice=randomchoice[Math.floor(Math.random()*3)];
	console.log(input,compchoice);
	if(input=='rock'&&compchoice=="scissor"||input=='paper'&&compchoice=="rock"||input=='scissor'&&compchoice=="paper"){
		console.log("You Win!!");
		document.getElementById("Words").innerHTML="You Win!!";
	}
	else if(input=='rock'&&compchoice=="rock"||input=='paper'&&compchoice=="paper"||input=='scissor'&&compchoice=="scissor"){
		console.log("Tie!");
		document.getElementById("Words").innerHTML="Tie!";
	}
	else{
		console.log("You Lost!");
		document.getElementById("Words").innerHTML="You Lost!!";
	}
	// To display Computer Image
	let compimgclr;
	if(compchoice=="paper"){
	let cmpchoice=document.createElement("img");
	cmpchoice.setAttribute('src','C:\\Users\\Dell\\OneDrive\\Guvi Zen Class\\JS Projects\\Rock Paper game\\'+compchoice+".svg");
	cmpchoice.setAttribute('id',compchoice);
	document.getElementById("cmpimg").appendChild(cmpchoice);
	compimgclr=cmpchoice;
	}
		else if(compchoice=="rock"){
			let cmpchoice=document.createElement("img");
			cmpchoice.setAttribute('src','C:\\Users\\Dell\\OneDrive\\Guvi Zen Class\\JS Projects\\Rock Paper game\\'+compchoice+".png");
			cmpchoice.setAttribute('id',compchoice);
			document.getElementById("cmpimg").appendChild(cmpchoice);
			compimgclr=cmpchoice;
		}
			else{
				let cmpchoice=document.createElement("img");
				cmpchoice.setAttribute('src','C:\\Users\\Dell\\OneDrive\\Guvi Zen Class\\JS Projects\\Rock Paper game\\'+compchoice+".jpg");
				cmpchoice.setAttribute('id',compchoice);
				document.getElementById("cmpimg").appendChild(cmpchoice);
				compimgclr=cmpchoice;
			}
	//Timer To destroy the result
	setTimeout(()=>{console.log("Timer Started...");restart(deleteelem,compimgclr);},1500);
	
}
function restart(cls,cli){
	if(confirm("Do you want to continue Playing [Yes/No]")){
		document.getElementById("usrimg").removeChild(cls);
		document.getElementById("Words").innerHTML="";
		document.getElementById("cmpimg").removeChild(cli);
	}
	else{
		alert("Thanks For Playing!!");
	}
}
