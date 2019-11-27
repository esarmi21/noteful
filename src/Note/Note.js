import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Note.css';
import ApiContext from '../ApiContext'

class Note extends React.Component {
    static contextType = ApiContext;
    
    requestDelete = (noteId, callback) => {
        fetch(`http://localhost:9090/notes/${noteId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })
        .then(res => {
          if(!res.ok) {
            return res.json().then(error => {
              throw error
            })
          }
          return res.json();
        })
        .then(data => {
          callback(noteId, this.props.isNoteDetail);
        })
        .catch(err => {
          console.log(err);
        });
    }

    render() {
        const d = new Date(this.props.modified);
        const day = d.getDay();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[d.getMonth()];
        const year = d.getFullYear();

        console.log(`Note props`, this.props);

        // const buttonLinkValue =  this.props.isNoteDetail
        //             ? '/'
        //             : 

        return (
            <div className="note">
                <Link to={`/note/${this.props.id}`} style={{ textDecoration: 'none' }}>
                    <h2 className="note-title" onClick={() => this.context.updateNoteId(this.props.id)}>{this.props.name}</h2>
                </Link>
                <p className="modified-text">Date modified: {month} {day}, {year}</p>
                <button className="delete-button" onClick={() => this.requestDelete(this.props.id, this.context.handleDelete)}>Delete Note</button>
            </div>
        )
    }
}

export default Note;