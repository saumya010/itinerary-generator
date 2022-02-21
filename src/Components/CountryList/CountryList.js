import React, {useState, useEffect} from 'react';
import {IoIosCloseCircle} from 'react-icons/io';
import Modal from '../Modal/Modal';
import styles from './CountryList.module.css';

const CountryList = ({countries, removeCountry}) => {
	const [details, setDetails] = useState({})

	useEffect(() => {
		setDetails({})
	}, [countries])

	if( countries?.length > 0 ) {
		return (
			<div>
				<ol className={styles.countryList}>
					{ countries.map(country =>
						<li key={country.name}>
							<span onClick={() => {setDetails({name: country.name, capital: country.capital})}}>{ country.name }</span>
							<IoIosCloseCircle className={styles.closeButton} onClick={() => removeCountry(country.name)} />
						</li>
					)
				}
				</ol>
				<Modal details={details} />
			</div>
		)
	}
	return <p>Click the button to generate an itenrary.</p>
}

export default CountryList;
