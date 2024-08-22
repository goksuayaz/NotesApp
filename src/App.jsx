import React, { useState } from 'react';
import NoteList from './NoteList';


function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [noteText, setNoteText] = useState('');
  const [selectedColor, setSelectedColor] = useState('lightgray');

  const handleAddNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, { text: noteText, color: selectedColor }]);
      setNoteText('');
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>NotesApp</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="note-input">
        <textarea
          placeholder="Enter your note here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <div className="color-options">
          {['pink', 'purple', 'yellow', 'skyblue', 'lightgreen'].map((color) => (
            <span
              key={color}
              style={{ backgroundColor: color }}
              className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <button onClick={handleAddNote}>ADD</button>
      </div>
      <NoteList notes={filteredNotes} />
    </div>
  );
}

export default App;

