import React, {useState} from 'react';
import {IoIosCloseCircle, IoMdMove, IoMdCreate} from 'react-icons/io';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Modal from '../Modal/Modal';
import styles from './CountryList.module.css';

const CountryList = ({countries, removeCountry, handleOnDragEnd}) => {
	const [details, setDetails] = useState({})
	const [modal, setModal] = useState(false)

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
				<Droppable droppableId="countries">
					{(provided) => (
						<ul className={styles.countryList} {...provided.droppableProps} ref={provided.innerRef}>
							{ countries.map(({name, capital}, index) =>
								<Draggable key={name} draggableId={name} index={index}>
									{(provided) => (
										<li key={name} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
											<span>
												<IoMdMove />
											</span>
											<span>{ name }</span>
											<span>
												<IoMdCreate onClick={() => {
													setDetails( {name: name, capital: capital, index: index} );
													setModal(true)
												}} />
												<IoIosCloseCircle className={styles.closeButton} onClick={() => removeCountry(name)} />
											</span>
										</li>
									)}
								</Draggable>
							)}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
				<Modal
					details={details}
					modal={modal}
					setModal={setModal}
					countries={countries}
					showNext={showNext}
					showPrevious={showPrevious}
				/>
			</DragDropContext>
		)
	}
	return <p className={styles.centerText}>Click the button to generate an itenrary.</p>
}

export default CountryList;
