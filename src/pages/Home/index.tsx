/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IoIosAdd } from 'react-icons/io';
import { Container, Content, AnimationContainer, NotesGrid } from './styles';
import Menu from '../../components/Menu';
import Button from '../../components/Button';
import Note from '../../components/Note';

interface Notes {
  createdOn: string;
}

const Dashboard: React.FC = () => {
  const noteDefaultValue = {
    createdOn: format(new Date(), 'dd/MM/yyyy hh:mm:ss'),
  };

  const [notes, setNotes] = useState<Notes[]>(
    JSON.parse(localStorage.getItem('@MyNotes:notes') as string) || [
      noteDefaultValue,
    ],
  );

  const handleAddNote = useCallback(() => {
    setNotes([...notes, noteDefaultValue]);
  }, [noteDefaultValue, notes]);

  const handleDeleteNote = useCallback(
    id => {
      const currentVector = notes;
      delete currentVector[id];

      const filteredVector = currentVector.filter(
        function removeEmptyValuesFromVector(el) {
          return el != null;
        },
      );
      setNotes(filteredVector);
    },
    [notes],
  );

  useEffect(() => {
    localStorage.setItem('@MyNotes:notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <Container>
      <Content>
        <Menu />
        <AnimationContainer>
          <div className="header">
            <h1>Todas as minhas notas</h1>
            <Button onClick={handleAddNote}>
              Adicionar nota
              <IoIosAdd size={30} />
            </Button>
          </div>
          <NotesGrid>
            {notes.map((note, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  noteContent={note}
                  onDelete={() => handleDeleteNote(index)}
                />
              );
            })}
          </NotesGrid>
        </AnimationContainer>
      </Content>
      <ToastContainer />
    </Container>
  );
};

export default Dashboard;
