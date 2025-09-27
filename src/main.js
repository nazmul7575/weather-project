import "./style.css";

const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityNameInput = document.getElementById("cityName");

getWeatherBtn.addEventListener("click", searchBtnFunc);

function searchBtnFunc() {
	const cityName = cityNameInput.value;
	if (cityName) {
		// TODO: Fetch the weather with the city name
	} else {
		console.log("Please enter the city name");
	}
}
