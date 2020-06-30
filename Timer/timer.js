
function calendar(){
	let calendar = new Date();
	let date = calendar.getDate(); 
	let months = ["January", "February", "March", "April", "May", "June",
	 "July", "August", "September", "October", "November", "December"];
	let month = months[calendar.getMonth()]
	let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	let day = days[calendar.getDay()];
	let year = calendar.getFullYear();
	document.getElementById("date").innerHTML = date;
	document.getElementById("month").innerHTML = month;
	document.getElementById("day").innerHTML = day;
	document.getElementById("year").innerHTML = year;
}

let d = document.getElementById("display");

function timeset(time){
	t=(time*1000)-1500;
		setTimeout(stop,t);
		setInterval(function(){
		let min = Math.floor(time/60);
		let sec = time%60;
		min = min<10?'0'+min:min;
		sec = sec<10?'0'+sec:sec;
		d.innerHTML='00'+':'+min+':'+sec;
		time--;
		if(min==0&&sec==0){
			d.innerHTML='00:00:00';
			location.reload();
		}
	},1000);
}

function stop(){
	let music = document.getElementById("song");
	music.play();
}
