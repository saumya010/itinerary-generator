import React, { useState } from 'react';
import {fetchCountries} from './api';
import Itinerary from './Components/Itinerary/Itinerary';
import styles from './App.module.css';

const App = () => {
	const [countries, setCountries] = useState([])

	// Get a list of all countries from the API
	const fetchApi = async () => {
		const response = await fetchCountries()
		setCountries(getRandomCountries(response))
	}

	// Generate a list of 10 random countries
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

	// Function to handle the drag event
	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const items = Array.from(countries);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		setCountries(items)
	}

	// Function to remove the country from the itinerary
	const removeCountry = (name) => {
		const removedList = countries.filter( country => country.name !== name)
		setCountries(removedList)
	}

	return (
		<div className={styles.container}>
			<div className={styles.containerInner}>
				<h1 className={styles.heading}>Travel Itinerary</h1>
				<Itinerary
					countries={countries}
					removeCountry={removeCountry}
					handleOnDragEnd={handleOnDragEnd}
				/>
				<button className={styles.generateButton} onClick={() => fetchApi()}>Generate Random Itinerary</button>
			</div>
		</div>
	)
}

export default App
