import React, { Component } from 'react';

export default class LocationCard extends Component {
	render(props) {
		const { current, forecast, city } = this.props;
		const tempForecast =
			forecast &&
			forecast.list.map((tempReading, index) => (
				<li className="temp" key={tempReading.dt}>
					{tempReading.main.temp}
				</li>
			));

		const tempCurrent = current && current.main.temp;
		return (
			<div>
				<p>
					The current temperature in {city.toUpperCase()} is{' '}
					{tempCurrent || '...working'} degrees Celsius.
				</p>
				<ul className="temp-list">{tempForecast}</ul>
			</div>
		);
	}
}
