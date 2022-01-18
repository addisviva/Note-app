import React, {useState} from 'react'

const AddNote = ( { handleAddNote }) =>  {
    const [noteText, setNoteText] = useState('')
    const charLimit = 200;
    const handleChange = (event) =>{
    //   event.preventDefault();
      if (charLimit - event.target.value.length >=0){
                setNoteText(event.target.value);
      }

    }
    const handleSaveClick = ()=>{
    if (noteText.trim().length > 0){
         handleAddNote(noteText);
         setNoteText('');
    }
       
    }
    return (
        <div className="note new">
            <textarea 
                value={noteText}
                onChange={handleChange}
                 rows="8"
                 cols="10"
                 placeholder="type to add a note ... "></textarea>  
            <div className="note-footer"> 
            <small>{charLimit - noteText.length} remaing</small>
            <button className="save" onClick={handleSaveClick} >save</button>
            </div>
        </div>
    )
}

 export default AddNote

