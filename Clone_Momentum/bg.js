const body = document.querySelector("body");

// const IMG_NUMBER = 3;

function handleImgLoad(){

}

function paintImage(){
	const image = new Image();
	image.src = "https://source.unsplash.com/1600x900/?nature,water";
	// image.src = `/images/${imgNumber + 1}.jpg`;
	body.appendChild(image);
	image.classList.add("bgImage");
	// image.addEventListener("loadend", handleImgLoad);
	
}

// function genRandom(){
// 	const number = Math.floor(Math.random() * IMG_NUMBER);
// 	return number;
// }

function init(){
	// const randomNumber = genRandom();
	paintImage();
}

init();