import axios from 'axios';

const URL = 'https://api.worldbank.org/v2/countries?format=json&per_page=299'

export const fetchCountries = async () => {
	try {
		const {data} = await axios.get(URL)
		const modifiedData = data[1].filter( country => country.capitalCity !== '')
		return (modifiedData.map(country => {
			return (
			{
				name: country.name,
				capital: country.capitalCity
			}
		)})
	)
	}
	catch(error) {
		console.log(error)
	}
}
