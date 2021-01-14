import axios from 'axios';
const API_KEY = '8e46de425519369ebdc3e1db7d1609bf';
const ROOT_URL =`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; 
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log('Request:' ,request)
    return {
        type : FETCH_WEATHER,
       payload : request
    }
}