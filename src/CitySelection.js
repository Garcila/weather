import React, { Component } from 'react';

export default class CitySelection extends Component {
	state = { value: '' };

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.updateCity(this.state.value);
		this.setState({ value: '' });
	};

	render(props) {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<input
						className="select-city"
						placeholder="Enter city name"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<input
					className="city-submit"
					type="submit"
					value="BRRR OR IMHOT"
				/>
			</form>
		);
	}
}
