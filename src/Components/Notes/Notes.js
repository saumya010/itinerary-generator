import React from 'react';

const Notes = (notes) => {

	if(notes.length > 0 ){
		return (
			<ul>
				{Object.entries(notes).map((note) => <li key={note.name}>{note.notes}</li>)}
			</ul>
		)
	}
	else return null;
}

export default Notes;
