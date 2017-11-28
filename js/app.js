//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var naV = document.getElementsByClassName("navi");

function showElem(){
	var see = this.querySelectorAll(".inner")[0];
	if (see.style.display === "none"){
		see.style.display = "block";
	}else{
		see.style.display = "none";
	}

}

for(var i =0;i<naV.length;i++){
	naV[i].addEventListener("click", showElem);
	console.log(naV[i]);
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var cLasses = document.getElementsByClassName("name");