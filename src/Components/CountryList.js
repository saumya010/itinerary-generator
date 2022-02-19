import React, {useState} from 'react';

const CountryList = ({countries, removeCountry}) => {

	if( countries?.length > 0 ) {
		return (
			<ol>
				{ countries.map(country => <li key={country.name}>{country.name}<span onClick={() => removeCountry(country.name)}>X</span></li>) }
			</ol>
		)
	}
	return <p>Click the button to generate an itenrary.</p>
}

export default CountryList;
