/* eslint-disable react/prop-types */
import Note from "./Note";

export default function NotesList({items, onDelete}) {
    
    return (
        <div className="notes-list">
            {items.map((item) => <Note key={item.id} item={item} onDelete={onDelete} />)}
        </div>
    )
}