import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import {IoIosCloseCircle, IoMdMove, IoMdCreate} from 'react-icons/io';
import styles from './DraggableCountryList.module.css';

const DraggableCountryList = ({countries, removeCountry, setDetails, setModal, notes}) => {
	return (
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
											setDetails( {name: name, capital: capital, index: index, notes: notes} );
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
	)
}

export default DraggableCountryList;
