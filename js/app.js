// DO NOT SHOW API KEY ON YOUR JS FILE
const api_key = `781501ae8349122ba6beca3273d0f59d`
const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTEmperature(data))

}
const displayTEmperature = data =>{
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    }
const setInnerTextById = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})
loadTemperature('dhaka')
