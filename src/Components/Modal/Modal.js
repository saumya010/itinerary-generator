import React, { useState } from 'react';
import {IoIosCloseCircle, IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from 'react-icons/io';
import styles from './Modal.module.css';

const CountryDetails = ({ details, modal, setModal, showNext, showPrevious, addNotes, notes }) => {
	const [input, updateInput] = useState('')

	const handleChange = (e) => {
		if(e.target.value.length > 0)
		updateInput(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		addNotes([...notes, input])
		updateInput('')
	}

	const closeModal = () => {
		setModal(false)
	}

	const displayNotes = (notes) => {
		if(notes.length > 0) {
			console.log(notes)
			notes.map( (note, index) => <li key={index}>{note}</li> )
		} else {
			return ''
		}
	}

	if(modal) {
		console.log(details)
		return(
			<div className={styles.modal}>
				<div className={styles.modalInner}>
					<h3 className={styles.heading}>{details.name}</h3>
					<p>{`Capital city is: ${details.capital}`}</p>
					<form onSubmit={handleSubmit} className={styles.notesForm}>
						<p>Add notes for this country:</p>
						<input
							type="text"
							name="notes"
							id="notes"
							onChange={handleChange}
							value={input}
						/>
						<button onClick={handleSubmit}>Add Notes</button>
					</form>
					{ notes.map( note => <li key={note}> {note} </li>) }
					<IoIosCloseCircle title="Close" className={styles.closeButton} onClick={() => closeModal()} />
					<div className={styles.navigation}>
						<span title="Show previous country" onClick={showPrevious}><IoIosArrowDropleftCircle /> Previous</span>
						<span title="Show next country" onClick={showNext}>Next <IoIosArrowDroprightCircle /></span>
					</div>
				</div>
			</div>
		)
	}
	else return null
}

export default CountryDetails;
