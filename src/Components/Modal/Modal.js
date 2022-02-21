import React, { useState } from 'react';
import {IoIosCloseCircle, IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from 'react-icons/io';
import styles from './Modal.module.css';

const CountryDetails = ({ details }) => {

	const closeModal = () => {

	}

	if(details.name) {
		return(
			<div className={styles.modal}>
				<div className={styles.modalInner}>
					<h3 className={styles.heading}>{details.name}</h3>
					<p>{`Capital city is: ${details.capital}`}</p>
					<div>
						Add notes for this country:
						<input type="text" name="notes" id="notes" />
					</div>
					<IoIosCloseCircle className={styles.closeButton} onClick={() => closeModal()} />
					<IoIosArrowDropleftCircle />
					<IoIosArrowDroprightCircle />
				</div>
			</div>
		)
	}
	else return null
}

export default CountryDetails;
