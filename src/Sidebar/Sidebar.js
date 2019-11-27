import React from 'react';
import Folder from '../Folder/Folder';
import './Sidebar.css';
import ApiContext from '../ApiContext'

class Sidebar extends React.Component {

    static contextType = ApiContext;


    render() {
        let {folders, } = this.context
        console.log(`folders in Sidebar`, this.props.folderId);
        folders = folders.map((folder, i) => {
            return (
                <Folder name={folder.name} 
                key={i} 
                folderId={folder.id} 
                className={(this.props.folderId === folder.id) 
                    ? "selected-folder" : ""} 
                    />
            );
        });
        
        return (
            <div className="folders-list">
                {folders}
                <button className="add-folder-button" type="button">Add a folder</button>
            </div>
        )
    }
}

export default Sidebar;