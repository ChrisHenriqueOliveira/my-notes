import React, { useState, useCallback, useEffect } from 'react';

import { IoMdTrash, IoIosSave } from 'react-icons/io';
import { Container, ReadMode, EditMode, MarkDownField } from './styles';

interface NoteContentProps {
  createdOn: string;
}

interface NoteProps {
  id: number;
  noteContent: NoteContentProps;
  onDelete: () => void;
}

const Note: React.FC<NoteProps> = ({ noteContent, id, onDelete }) => {
  const noteDefaultText = '# Header 1';
  const [noteText, setNoteText] = useState(
    (localStorage.getItem(`@MyNotes:note-${id}`) as string) || noteDefaultText,
  );
  const [editMode, setEditMode] = useState(false);

  const handleSave = useCallback(() => {
    setEditMode(false);
  }, []);

  useEffect(() => {
    localStorage.setItem(`@MyNotes:note-${id}`, noteText);
  }, [id, noteText]);

  return (
    <Container>
      <div className="note-header">
        <h1>{`Nota ${id} - ${noteContent.createdOn}`}</h1>
        {editMode ? (
          <IoIosSave color="#92D788" size={25} onClick={() => handleSave()} />
        ) : (
          <IoMdTrash color="#C2474B" size={25} onClick={() => onDelete()} />
        )}
      </div>

      {!editMode ? (
        <ReadMode onClick={() => setEditMode(!editMode)}>
          <MarkDownField source={noteText} />
        </ReadMode>
      ) : (
        <EditMode>
          <textarea
            value={noteText}
            onBlur={handleSave}
            onChange={e => setNoteText(e.currentTarget.value)}
          />
        </EditMode>
      )}
    </Container>
  );
};

export default Note;
