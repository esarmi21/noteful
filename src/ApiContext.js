import React from 'react';

const NoteContext = React.createContext({
    notes: [],
    folders: [],
    handleDelete: () => {},
    handleAddFolder: () => {},
    updateFolderId: () => {},
    updateNoteId: () => {},
    requestDelete: () => {},
    currentFolderId: null,
    currentNoteId: null,
    err: null,
});

export default NoteContext;