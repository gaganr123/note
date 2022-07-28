import { useState } from 'react';
import NoteContainer from './components/Notes/NoteContainer';
import SideBar from './components/SideBar/SideBar';

const DUMMY_NOTES = [
  {
    id: 'n3',
    text: 'Hey there, Add your note by clicking the plus icon and choosing the theme color',
    time: 'Jul 28, 3:50 PM',
    color: '#FBA1A1'
  },
  {
    id: 'n2',
    text: 'You can edit your note by clicking the pencil icon',
    time: 'Jul 25, 8:00 PM',
    color: '#C4DFAA'
  },
  {
      id: 'n1',
      text: 'You can delete your note too by clicking the delete icon. \n\nYes..Yes you can delete these instruction notes too',
      time: 'Jul 18, 10:55 AM',
      color: '#F5F0BB'
  }
];

const App = () => {

  const [notes, setNotes] = useState(DUMMY_NOTES);

  const addNoteHandler = (themeColor) => {
      const note = {
        id: Date.now() + "" + Math.floor(Math.random()*78),
        text: '',
        time: new Date().toLocaleDateString('en-US', { hourCycle: 'h12', minute: '2-digit', day: '2-digit', month: 'short', hour: '2-digit'}),
        color: themeColor
      }
      setNotes( (prevNotes)=>{
        return [note, ...prevNotes];
      });
  }

  const deleteNoteHandler = (noteId) => {
     const prevNotes = [...notes];
     let indexToDelete = -1;
     for(let i=0; i<prevNotes.length; i++){
      if( prevNotes[i]['id'] == noteId ) indexToDelete=i;
     }
     if(indexToDelete < 0) return;
     else prevNotes.splice(indexToDelete, 1);
     setNotes(prevNotes);
  }
  
  return(
    <div className='app'>
      <SideBar addTheme ={ addNoteHandler } />
      <NoteContainer notes={notes} deleteNote = { deleteNoteHandler } />
    </div>
  );
  
}

export default App;