import React, { useState, useEffect } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid'
import AddNote from './AddNote'
import Search from './components/Search'
import Header from './components/Header';
const App = ()=>  {
  const [ notes, setNotes] = useState ([
    {
    id: nanoid(),
    text: "this is my first note",
    date: "13/22/1221"
    },  
    {
      id: nanoid(),
      text: "this is my  second note",
      date: "1/22/1221"
      },  
      {
        id: nanoid(),
        text: "this is my third  note",
        date: "13/2/1221"
        }, 
        {
          id: nanoid(),
          text: "get grocery",
          date: "13/2/2022"
          } 
  ]);

   
   const [searchText, setSearchText] = useState('');


   const [darkMode, setDarkMode] = useState(false);

   useEffect (()=>{
     
   }, [])

   useEffect(() => {
     localStorage.setItem('react-note-app', JSON.stringify(notes))
   }, [notes]);



   
  const addNote = (text)=>{
   const date = new Date();
   const newNote = {
     id : nanoid(),
    text: text,
     date: date.toLocaleDateString()
   }
   const newNotes = [...notes, newNote];
   setNotes(newNotes)
  }

  const deletNote = (id) =>{
  const newNotes = notes.filter((note)=> note.id !== id)
  setNotes(newNotes)
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
       <div className="container">
      <Header handleToggleDarkMode={setDarkMode} />
     <Search  handleSearchNote = {setSearchText} />
     
     <NotesList 
      notes={notes.filter(note=> note.text.toLocaleLowerCase().includes(searchText))}
       handleAddNote={addNote} 
       handleDeleteNote ={deletNote} />
       
    </div>
    </div>
   
  );
}

export default App;
