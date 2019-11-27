import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NotesList from '../NotesList/NotesList';
import ApiContext from '../ApiContext'

class Home extends React.Component {
    
    static contextType = ApiContext;

    componentDidMount() {
        this.context.updateFolderId(this.props.match.params.folderId);
    }

    render() {
        return (
            <main className="main-container">
                <Sidebar />
                <NotesList />
            </main>
        )
    }
}

export default Home;