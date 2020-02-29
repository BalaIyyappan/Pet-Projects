function gen(){
	let cat=document.createElement("img");
	let image=document.getElementById("cat");
	console.log(typeof(image));
	cat.setAttribute("src",'C:\\Users\\Dell\\OneDrive\\Guvi Zen Class\\JS Projects\\Cat Image generator\\cat.jpg');
	image.appendChild(cat);
}
