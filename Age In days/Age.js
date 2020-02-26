//Function to calculate number of days on Earth
let click_btn=document.getElementById("days");
let bday=document.getElementById("birthday");
function age(){
	// let d=new Date("March 1,1999");
	// console.log(d.getFullYear(),d.getMonth(),d.getDate());
	let bday=document.getElementById("birthday");
	let bday_val=bday.value.split("-");// To split the birthday from user
	
	let byr=bday_val[0];
	let bd=bday_val[2];
	let bmon=bday_val[1];
	// console.log(byr);
	let cyr=Date().split(" ")[3];
	// console.log(cyr);
	// console.log((cyr-byr)*365);
	let number_of_days_without_leap_year=(cyr-byr)*365;
	for (i=byr;i<=cyr;i++){
		// console.log(i);
		if(i%4==0){
			number_of_days_without_leap_year++;
		}
	}
	// console.log(number_of_days_without_leap_year);
	click_btn.textContent=number_of_days_without_leap_year;
	// console.log(Date().split(" ")[2],Date().split(" ")[3]); -- To Get Current year and date
	// click_btn.innerHTML=;
}

//Function to reset the Date 
function cleardate(){
	let bday=document.getElementById("birthday");
	document.getElementById("dateofbirth").removeChild(bday);
	let reset = document.createElement("input");
	reset.setAttribute("type","Date");
	reset.setAttribute("id","birthday");	
	document.getElementById("dateofbirth").appendChild(reset);
	console.log("resetting");
	click_btn.textContent="?";
}
