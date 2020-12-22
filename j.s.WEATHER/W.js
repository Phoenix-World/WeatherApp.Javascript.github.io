
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const api ={
	    base: "https://api.openweathermap.org/data/2.5/",
        key:"3f449825d43c2d8cfa6e7fe02e85e27d"}

const searchInputBox = document.getElementById("input-box");

searchInputBox.addEventListener("keypress",(event)=>
	{if (event.keyCode==13) {
	console.log(searchInputBox.value);
	
	getWeatherReport(searchInputBox.value);
	document.querySelector(".weather-body").style.display="block";
}
} );

function getWeatherReport(city){
	fetch (`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
	.then (weather=>{return weather.json();}) 
	.then(showWeatherReport);
}

function showWeatherReport(weather){
	console.log(weather);
	
	let city=document.getElementById("city");
	city.innerHTML=`${weather.name},${weather.sys.country}`;
	
	let temperature=document.getElementById("temp");
	temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

	let minMaxTemp=document.getElementById("min-max");
	minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C(min)/
	                      ${Math.ceil(weather.main.temp_max)}&deg;C(max)`;

let weatherType = document.getElementById("weather");
weatherType.innerText=`${weather.weather[0].main}`;

let date = document.getElementById("date");
let todayDate = new Date ();
date.innerText = dateManage(todayDate);


if(weatherType.textContent=='Clear') {
	document.body.style.backgroundImage="url('clear.jpg')";
}else if(weatherType.textContent=='Clouds') {
	document.body.style.backgroundImage="url('cloud.jpg')";
}else if(weatherType.textContent=='Rain') {
	document.body.style.backgroundImage="url('rain.jpg')";
}else if(weatherType.textContent=='Snow') {
	document.body.style.backgroundImage="url('snow.jpg')";
}else if(weatherType.textContent=='Sunny') {
	document.body.style.backgroundImage="url('sunny.jpg')";
}else if(weatherType.textContent=='Thunderstorm') {
	document.body.style.backgroundImage="url('thunder.jpg')";
}else if(weatherType.textContent=='Mist'){
	document.body.style.backgroundImage="url('mist.jpg')";
}else if(weatherType.textContent=='Haze'){
	document.body.style.backgroundImage="url('haze.jpg')";
}else if(weatherType.textContent=='Fog'){
	document.body.style.backgroundImage="url('fog.jpg')"};

}


function dateManage(dateArg){
	let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	let months = ["January","February","March","April","May","June","July","August",
	              "September","October","November","December"];
   
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return`${date} ${month} (${day}), ${year}`;
}


