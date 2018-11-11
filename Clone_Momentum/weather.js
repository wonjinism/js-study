const weather = document.querySelector(".js-weather");


const API_KEY = "48db7a79112498e3c42b6a12c728c0df";
const COORDS = 'coords';

function getWeather(lat, lng){ // 이해불가 ㅜㅜ
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
	).then(function(response){
		return response.json();
	}).then(function(json){
		const temperature = json.main.temp;
		const place = json.name;
		weather.innerText = `${temperature} @ ${place}`;
	});
}

function saveCoords(coordsObj){
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude: latitude, // 이름 같은 경우 한 번만 입력하면 됨.
		longitude: longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}

function handleGeoError(){
	console.log("Cant access geo location");
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	if(loadedCoords === null){
		askForCoords();
	}else{
		const parsedCoords = JSON.parse(loadedCoords);
		getWeather(parsedCoords.latitude, parsedCoords.longitude);
	}
}

function init(){
	loadCoords();
}

init();