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

// Here we will give values to Chart

let sleepData = [{
	date:'08/07/20',
	time:9,
},
{
	date:'09/07/20',
	time:10,
}
]

let canvas = document.getElementById("myChart").getContext('2d');
let chart = new Chart(canvas, {
	type: 'bar',
	data:{
		labels: sleepData.map(sleeprecord => sleeprecord.date),
		datasets:[{
				label:"Sleep Hours",
				backgroundColor:'#5c949e',
				borderColor:'lime',
				borderWidth:1,
				data: sleepData.map(sleeprecord => sleeprecord.time),
				hoverBackgroundColor:"#505753"
    }]
	},

	options:{
		scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
										suggestedMax:12,
                }
            }]
        },
		title:{
			display:true,
			text:"Sleep Data",
			fontSize:20
		},
		legend:{
			display:false
		}
    }
});
