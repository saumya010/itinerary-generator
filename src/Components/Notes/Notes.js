import React from 'react';
import styles from './Notes.module.css';

const Notes = ({notes}) => {

	if(notes?.length > 0 ){
		return (
			<>
				<h3>Notes:</h3>
				<ul className={styles.notesList}>
					{notes.map((note) => <li key={note}>{note}</li>)}
				</ul>
			</>
		)
	}
	else return null;
}

export default Notes;
