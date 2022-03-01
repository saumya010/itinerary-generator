import React, {useState} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableCountryList from '../DraggableCountryList/DraggableCountryList';
import Modal from '../Modal/Modal';
import styles from './Itinerary.module.css';

const Itinerary = ({countries, removeCountry, handleOnDragEnd}) => {
	const [details, setDetails] = useState({
		name: '',
		capital: '',
		index: 0,
		notes: []
	})
	const [modal, setModal] = useState(false)
	const [disablePrev, updateDisablePrev] = useState(false)
	const [disableNext, updateDisableNext] = useState(false)

	const showPrevious = () => {
		if(details.index-1 < countries.length && details.index-1 >= 0) {
			updateDisableNext(false)
			console.log(details)
			let prevCountry = countries[details.index-1]
			setDetails({name: prevCountry.name, capital: prevCountry.capital, index: details.index-1})
			//console.log(details.notes-1 +' uska naam '+prevCountry.name)
		}
		else {
			updateDisablePrev(true)
		}
		return null
	}
	const showNext = () => {
		if(details.index+1 < countries.length) {
			updateDisablePrev(false)
			let nextCountry = countries[details.index+1]
			setDetails({name: nextCountry.name, capital: nextCountry.capital, index: details.index+1})
			//console.log(details.notes +' uska naam '+nextCountry.name)
		}
		else {
			updateDisableNext(true)
		}
		return null
	}

	if( countries?.length > 0 ) {
		return (
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<DraggableCountryList
					countries={countries}
					removeCountry={removeCountry}
					setDetails={setDetails}
					setModal={setModal}
				/>
				<Modal
					details={details}
					setDetails={setDetails}
					modal={modal}
					setModal={setModal}
					showNext={showNext}
					showPrevious={showPrevious}
					disablePrev={disablePrev}
					disableNext={disableNext}
				/>
			</DragDropContext>
		)
	}
	return <p className={styles.centerText}>Click the button to generate an itenrary.</p>
}

export default Itinerary;
