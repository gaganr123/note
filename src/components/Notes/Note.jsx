import './Note.css';
import editImage from '../../assets/edit.png';
import deleteImage from '../../assets/delete.png'

const Note = (props) => {
    return (
        <div className='note'style={ {backgroundColor: props.note.color} }>
            <textarea className="note__text custom-scroll" defaultValue={props.note.text} ></textarea>
            <div className='note__footer'>
                <p className='note__time'>{props.note.time}</p>
                <div>
                    <img className='note__icon note__icon_edit' 
                         src={editImage} alt='edit' />
                    
                    <img className='note__icon' 
                         src={deleteImage} alt='delete'
                         onClick={()=> props.deleteNote(props.note.id)} />
                </div>
            </div>
        </div>
    )
}

export default Note;