import React from 'react';
import { connect }  from 'react-redux';
import  { bindActionCreators }  from 'redux';
import  { fetchWeather } from '../actions/index';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = { terrm :''};
        this.onInputChange  = this.onInputChange.bind(this);
        this.onFormSubmit =  this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        //we need to go and fetch weather data from
        //openweathermap.org/forecast5
        this.props.fetchWeather(this.state.term);
        this.setState({term : ''});
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="form">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="ui searchbar"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span>
                    <button type="ui primary button" className="ui primary button">Submit</button>
                </span>
            </form>
        );
    }
} 
function mapDispatchToProps(dispatch){
    return  bindActionCreators({fetchWeather} , dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);