import React, {useState} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableCountryList from '../DraggableCountryList/DraggableCountryList';
import Modal from '../Modal/Modal';
import styles from './Itinerary.module.css';

const Itinerary = ({countries, removeCountry, handleOnDragEnd}) => {
	const [details, setDetails] = useState({})
	const [modal, setModal] = useState(false)
	const [notes, addNotes] = useState([])

	const showPrevious = () => {
		if(details.index-1 < countries.length && details.index-1 >= 0) {
			let prevCountry = countries[details.index-1]
			setDetails({name: prevCountry.name, capital: prevCountry.capital, index: details.index-1})
		}
		return null
	}
	const showNext = () => {
		if(details.index+1 < countries.length) {
			let nextCountry = countries[details.index+1]
			setDetails({name: nextCountry.name, capital: nextCountry.capital, index: details.index+1})
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
					notes={notes}
				/>
				<Modal
					details={details}
					modal={modal}
					setModal={setModal}
					countries={countries}
					showNext={showNext}
					showPrevious={showPrevious}
					addNotes={addNotes}
					notes={notes}
				/>
			</DragDropContext>
		)
	}
	return <p className={styles.centerText}>Click the button to generate an itenrary.</p>
}

export default Itinerary;
