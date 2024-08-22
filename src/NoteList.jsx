import React from 'react';
import Note from './Note';

function NoteList({ notes }) {
    return (
        <div className="note-list">
            {notes.map((note, index) => (
                <Note key={index} text={note.text} color={note.color} />
            ))}
        </div>
    );
}

export default NoteList;
