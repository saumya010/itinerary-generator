import React, { useState } from 'react';
import {IoIosCloseCircle, IoIosArrowDroprightCircle, IoIosArrowDropleftCircle, IoMdAdd} from 'react-icons/io';
import styles from './Modal.module.css';
import Notes from '../Notes/Notes';

const CountryDetails = ({ details, setDetails, modal, setModal, showNext, showPrevious, disablePrev, disableNext }) => {
	const [input, updateInput] = useState('')

	const handleChange = (e) => {
		if(e.target.value.length > 0)
		updateInput(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(input.length > 0) {
			setDetails( {...details, notes: (details?.notes?.length > 0) ? [...details.notes, input] : [input]} )
			updateInput('')
		}
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
					<form onSubmit={handleSubmit} className={styles.notesForm}>
						<p>Add notes for this country:</p>
						<input
							type="text"
							name="notes"
							id="notes"
							onChange={handleChange}
							value={input}
						/>
						<IoMdAdd className={styles.addNotes} onClick={handleSubmit} />
					</form>
					<Notes
						notes={details.notes}
					/>
					<IoIosCloseCircle title="Close" className={styles.closeButton} onClick={() => closeModal()} />
					<div className={styles.navigation}>
						<span className={disablePrev ? styles.disabled : ''} title="Show previous country" onClick={showPrevious}>
							<IoIosArrowDropleftCircle /> Previous
						</span>
						<span className={disableNext ? styles.disabled : ''} title="Show next country" onClick={showNext}>
							Next <IoIosArrowDroprightCircle />
						</span>
					</div>
				</div>
			</div>
		)
	}
	else return null
}

export default CountryDetails;
