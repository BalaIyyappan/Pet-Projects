function calendar(){
	let today = date.getDate();

	let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	let day = days[date.getDay()];

	document.getElementById("date").innerHTML = today;
	document.getElementById("day").innerHTML = day;
}
let date = new Date();
window.onload = function(){
  console.log("JS Working");
  calendar();
  clock();
  setInterval(clock,1000);
}
function clock(){
let hr = date.getHours()-12;
hr = hr<10?'0'+hr:hr;
let min = date.getMinutes();
min = min<10?'0'+min:min;
let display = document.getElementById("clock");
display.innerHTML = hr+':'+min;
}
