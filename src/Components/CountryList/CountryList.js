import React, {useState, useEffect} from 'react';
import {IoIosCloseCircle} from 'react-icons/io';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Modal from '../Modal/Modal';
import styles from './CountryList.module.css';

const CountryList = ({countries, removeCountry, handleOnDragEnd}) => {
	const [details, setDetails] = useState({})
	const [modal, setModal] = useState(false)

	useEffect(() => {
		setDetails({})
	}, [countries])

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
											<span
												onClick={() => {
													setDetails( {name: name, capital: capital} );
													setModal(true)
												}}>
												{ name }
											</span>
											<IoIosCloseCircle className={styles.closeButton} onClick={() => removeCountry(name)} />
										</li>
									)}
								</Draggable>
							)}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
				<Modal details={details} modal={modal} setModal={setModal} countries={countries} />
			</DragDropContext>
		)
	}
	return <p>Click the button to generate an itenrary.</p>
}

export default CountryList;
