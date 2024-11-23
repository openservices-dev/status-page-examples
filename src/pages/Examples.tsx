import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Simple from './examples/Simple';
import SimpleCards from './examples/SimpleCards';
import CardsWithCommit from './examples/CardsWithCommit';

const Home: React.FC = () => {
  const params = useParams();
  const name = params.name;
  const projects = [{
    name: 'Application',
  }];
  
  let component = <Simple />;

  switch (name) {
    case 'simple':
      component = <Simple />;
      break;
    case 'simple-cards':
      component = <SimpleCards />;
      break;
    case 'cards-with-commit':
      component = <CardsWithCommit />;
      break;
  }

  return (
    <Container fluid="xl">
      {component}
    </Container>
  );
}

export default Home;
