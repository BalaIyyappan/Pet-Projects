//For Date
let d = new Date();
document.getElementById("date").innerHTML = d.toDateString();
//To add Task's
let add_task= document.getElementById("task_table");
let add_btn= document.getElementById("add");
//Row id
let row_id=0;

function add(){
	let add_tr = document.createElement("tr");
	add_task.appendChild(add_tr);
	let add_td = document.createElement("td");
	add_tr.appendChild(add_td);
	let add_a = document.createElement("a")
	add_a.setAttribute("onclick","strike("+row_id+")");
	add_a.setAttribute("id",row_id);
	row_id++;
	add_td.appendChild(add_a);
	let text = prompt("What's on your mind?");
	add_a.innerHTML=text;
}


function strike(row_no,flag){
	let tostrike = document.getElementById(row_no);
	let temp_text= tostrike.textContent;
	console.log(temp_text);

	let striked = temp_text.strike();
	tostrike.innerHTML=striked;

}
