import React, { useState } from 'react';
import {fetchCountries} from './api';

const App = () => {
	const [countries, setCountries] = useState([])

	const fetchApi = async () => {
		const resp = await fetchCountries()
		let result = [], i = 0
		while( i < 10 ) {
			const random = Math.floor(Math.random() * resp.length);
			if(result.indexOf(resp[random]) !== -1){
				continue;
			};
			result.push(resp[random]);
			i++
		}
		setCountries(result)
	}

	return (
		<div>
			<h1>Travel Itenrary</h1>
			<p>{countries.length > 0 ? <ol>{countries.map(country => <li key={country.name}>{country.name}</li>)}</ol> : 'Click the button to generate an itenrary.'}</p>
			<button onClick={fetchApi}>Generate Itenrary</button>
		</div>
	)
}

export default App
