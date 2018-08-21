import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import LocationCard from './LocationCard';
import CitySelection from './CitySelection';
import { mapDegreesToRGB } from './helpers';

class App extends Component {
	state = {
		city: 'Toronto',
		forecast: '',
		current: ''
	};

	componentWillMount() {
		this.getWeather(this.state.city);
	}

	async getWeather(city) {
		try {
			const forecast = await axios.get(
				`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&&appid=a0e9cf65ee4c0727614c44c55354b6a4`
			);
			this.setState({ forecast: forecast.data });

			const current = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=a0e9cf65ee4c0727614c44c55354b6a4`
			);
			this.setState({ current: current.data });
		} catch (error) {
			console.error(error);
		}
	}

	updateCity = city => {
		this.getWeather(city);
		this.setState({ city });
	};

	render() {
		this.state.current &&
			console.log(mapDegreesToRGB(this.state.current.main.temp));
		const red =
			this.state.current &&
			mapDegreesToRGB(this.state.current.main.temp).r;
		const green =
			this.state.current &&
			mapDegreesToRGB(this.state.current.main.temp).g;
		const blue =
			this.state.current &&
			mapDegreesToRGB(this.state.current.main.temp).b;
		return (
			<div className="App">
				<header
					className="App-header"
					style={{
						backgroundColor: `rgba(
							${red},
							${green},
							${blue},
							255
						)`
					}}
				>
					<h1 className="App-title">
						{this.state.city.toUpperCase()}
					</h1>
					<CitySelection updateCity={this.updateCity} />
				</header>
				<LocationCard
					forecast={this.state.forecast}
					current={this.state.current}
					city={this.state.city}
				/>
			</div>
		);
	}
}

export default App;
