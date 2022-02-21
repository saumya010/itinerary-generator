import React, { useState } from 'react';
import {fetchCountries} from './api';
import CountryList from './Components/CountryList/CountryList';

import styles from './App.module.css';

const App = () => {
	const [countries, setCountries] = useState([])

	// Generate a list of random countries
	const getRandomCountries = (countryList) => {
		let result = [], i = 0
		while( i < 10 ) {
			const random = Math.floor(Math.random() * countryList.length);
			if(result.indexOf(countryList[random]) !== -1){
				continue;
			};
			result.push(countryList[random]);
			i++
		}
		return result
	}

	// Get a list of all countries from the API
	const fetchApi = async () => {
		const response = await fetchCountries()
		setCountries(getRandomCountries(response))
	}

	const removeCountry = (name) => {
		const removedList = countries.filter( country => country.name !== name)
		setCountries(removedList)
	}

	return (
		<div className={styles.container}>
			<div className={styles.containerInner}>
				<h1 className={styles.heading}>Travel Itinrary</h1>
				<CountryList countries={countries} removeCountry={removeCountry} />
				<button className={styles.generateButton} onClick={() => fetchApi()}>Generate Itinrary</button>
			</div>
		</div>
	)
}

export default App
