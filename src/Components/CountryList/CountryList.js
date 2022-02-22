import React, {useState, useEffect} from 'react';
import {IoIosCloseCircle, IoMdMove, IoMdCreate} from 'react-icons/io';
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
											<span>
												<IoMdMove />
											</span>
											<span>{ name }</span>
											<span>
												<IoMdCreate onClick={() => {
													setDetails( {name: name, capital: capital} );
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
				<Modal details={details} modal={modal} setModal={setModal} countries={countries} />
			</DragDropContext>
		)
	}
	return <p className={styles.centerText}>Click the button to generate an itenrary.</p>
}

export default CountryList;
