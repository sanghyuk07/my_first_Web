
const weather = document.querySelector(".js-weather");
const API_KEY ='0b3118267534322360417acf3304b3ce';
const COORDS ='coords';

function getWeater(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json()
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `현재온도 및 위치
            ${temperature}: ${place}`;
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeater(latitude,longitude);
}

function handleGeoErro(){
    console.log('cnat access geo Location');
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErro);
}


function loadCoords(){
    const loadedCoords =localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeater(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();


}

init();



