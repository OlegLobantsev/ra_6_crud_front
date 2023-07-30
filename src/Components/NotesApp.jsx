import { Component } from "react";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

export default class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:7070/notes'

        this.state = {
            notes: []
        };

        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.update();
    }

    async update() {
        const data = await fetch('http://localhost:7070/notes').then(response => response.json());

        this.setState(prevState => ({ ...prevState, notes: data }));
    }

    handleAdd = (note) => {
        fetch('http://localhost:7070/notes', {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => this.update());
    }

    handleDelete = (id) => {
        fetch(`http://localhost:7070/notes/${id}`, {
            method: 'DELETE'
        }).then(() => this.update());
    }

    render() {
        return (
            <div className="notes-app">
                <div className="notes-app-title">
                    <div className="notes-title">Notes</div>
                    <button className="notes-upload" onClick={this.update}>↺</button>
                </div>
                <NotesList items={this.state.notes} onDelete={this.handleDelete} />
                <NotesForm onAdd={this.handleAdd} />
            </div>
        )
    }
}