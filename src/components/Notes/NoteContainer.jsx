import Note from './Note';
import './NoteContainer.css';

const NoteContainer = (props) => {

  return (
    <div className='note-container'>
        <h1>Notes</h1>
        <div className='note-container__notes custom-scroll'>
            { props.notes.length <= 0 && <h3>Add Your Notes here.</h3> }
            { props.notes.length > 0 &&
                props.notes.map(noteObj=>
                    <Note
                        key= {noteObj.id}
                        note = {noteObj}
                        deleteNote = { (noteId)=> props.deleteNote(noteId) }
                    />
                )
            }
        </div>
    </div>
  )
}

export default NoteContainer;