import React, { useState } from 'react';
import {IoIosCloseCircle, IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from 'react-icons/io';
import styles from './Modal.module.css';

const CountryDetails = ({ details, modal, setModal, countries }) => {
	const [notes, addNotes] = useState('')

	const handleChange = (e) => {
		console.log(e.target.value)
		addNotes(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(notes)
		//addNotes('')
	}

	const showNext = () => {
		console.log(countries)
	}
	const showPrevious = () => {
		console.log(countries.indexOf(details.name))
	}

	const closeModal = () => {
		setModal(false)
	}

	if(modal) {
		return(
			<div className={styles.modal}>
				<div className={styles.modalInner}>
					<h3 className={styles.heading}>{details.name}</h3>
					<p>{`Capital city is: ${details.capital}`}</p>
					<p>Add notes for this country:</p>
					{ (notes.length > 0) ? notes : '' }
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="notes"
							id="notes"
							onChange={handleChange}
							value={notes}
						/>
						<button onClick={handleSubmit}>Add Notes</button>
					</form>
					<IoIosCloseCircle className={styles.closeButton} onClick={() => closeModal()} />
					<IoIosArrowDropleftCircle onClick={showPrevious} />
					<IoIosArrowDroprightCircle onClick={showNext} />
				</div>
			</div>
		)
	}
	else return null
}

export default CountryDetails;
