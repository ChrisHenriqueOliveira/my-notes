import React from 'react';
import { Link } from 'react-router-dom';

import { IoIosToday } from 'react-icons/io';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <div>
        <IoIosToday />
        <Link to="/">MyNotes</Link>
      </div>
    </Container>
  );
};

export default Menu;
