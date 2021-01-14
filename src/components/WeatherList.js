import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends React.Component{
    renderWeather(cityData){
        const name= cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        console.log(pressures);
        console.log(humidity);
        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat = {lat} /></td>
                <td>
                   <Chart data={temps} color="orange"/> 
                </td>
                <td>
                   <Chart data={pressures} color="black"/> 
                </td>
                <td>
                   <Chart data={humidity} color="grey"/> 
                </td>
            </tr>
        );
    }
    render(){
        return(
            
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Pressure</th>
                    <th>Temprature</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return { weather };
}
export default connect(mapStateToProps)(WeatherList);