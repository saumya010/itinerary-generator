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
					{ (notes.length > 0) ? notes : '' }
					<form onSubmit={handleSubmit} className={styles.notesForm}>
						<p>Add notes for this country:</p>
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
					<div className={styles.navigation}>
						<IoIosArrowDropleftCircle onClick={showPrevious} />
						<IoIosArrowDroprightCircle onClick={showNext} />
					</div>
				</div>
			</div>
		)
	}
	else return null
}

export default CountryDetails;
