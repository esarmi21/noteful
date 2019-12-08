import React from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';
import ApiContext from '../ApiContext'
import PropTypes from 'prop-types';

class Folder extends React.Component {
    static contextType = ApiContext;

    render() {
        return (
            <div className={`folder ${this.props.className}`}>
                <Link style={{ textDecoration: 'none' }} to={`/folder/${this.props.folderId}`}>
                    <h3 className="folder-name" onClick={() => this.context.updateFolderId(this.props.folderId)}>{this.props.name}</h3>
                </Link>
            </div>
        )
    }
}

Folder.propTypes = {
    name: PropTypes.string.isRequired,
    folderId: PropTypes.string.isRequired,
}

export default Folder;