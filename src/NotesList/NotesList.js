import React from 'react';
import Note from '../Note/Note';
import './NotesList.css';
import ApiContext from '../ApiContext';

class NotesList extends React.Component {

    static contextType = ApiContext;

    
    render() {
        console.log(`props in notes list`, this.props);
        const initialNotes = this.context.currentFolderId 
            ? this.context.notes.filter(note => note.folderId === this.context.currentFolderId)
            : this.context.notes; 
        
        const notes = initialNotes.map((note, i) => {
            return (
                <Note name={note.name} modified={note.modified} id={note.id} key={i} isNoteDetail={false} />
            );
        });
        
        return (
            <div className="notes-container">
                {notes}
                <button className="add-note-button" type="button">Add a note</button>
            </div>
        );
    }
}

export default NotesList;