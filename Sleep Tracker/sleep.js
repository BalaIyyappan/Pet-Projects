function calendar(date){
	let d = new Date();
	let today = d.getDate();

	let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	let day = days[d.getDay()];

	document.getElementById("date").innerHTML = today;
	document.getElementById("day").innerHTML = day;
}

window.onload = function(){
  calendar();
  clock();
  setInterval(clock,1000);
}
function clock(){
let date = new Date();
let hr = date.getHours()>12?date.getHours()-12:date.getHours();
hr = hr<10?'0'+hr:hr;
let min = date.getMinutes();
min = min<10?'0'+min:min;
// let zone = date.getHours()>12?'AM':'PM';
let display = document.getElementById("clock");
display.innerHTML = hr+':'+min;
}
