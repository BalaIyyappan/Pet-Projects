let clr = ['#eb6e6e','#eb7f6e','#eba46e','#ebdf6e','#d0eb6e','#91eb6e','#6eeb89','#6eebc3','#6edaeb','#6e91eb','#8d6eeb','#bf6eeb'
,'#d26eeb','#eb6ed0','#eb6e8b','#54eba5'];

function change(){
if(document.getElementById('check').checked){
		document.body.style.background="#1f2421";
}
else{
		document.body.style.background=clr[Math.floor(Math.random() * clr.length)];
}
}
