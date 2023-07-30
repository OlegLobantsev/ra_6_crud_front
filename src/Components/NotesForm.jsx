/* eslint-disable react/prop-types */
import { useState } from "react";

export default function NotesForm({ onAdd }) {
    const [form, setForm] = useState({ content: '' });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onAdd(form);
        setForm({ content: '' });
    }

    return (
        <form className="notes-form" onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="content">New Note</label>
                <textarea className="input-field" id="content" name="content" value={form.content} onChange={handleChange} />
                <button className="btn add-btn" type="submit">➤</button>
            </div>
        </form>
    )
}