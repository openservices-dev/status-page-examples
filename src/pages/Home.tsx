import React from 'react';
import Container from 'react-bootstrap/Container';
import SEO from '../components/SEO';
import Simple from './examples/Simple';
import SimpleCards from './examples/SimpleCards';
import CardsWithCommit from './examples/CardsWithCommit';
import { projects } from '../api/projects';

const Home: React.FC = () => {
  return (
    <SEO title="" description="">
      <Container fluid="xl">
        <Simple projects={projects} />
        <hr style={{ marginTop: '7rem', marginBottom: '7rem' }} />
        <SimpleCards />
        <hr style={{ marginTop: '7rem', marginBottom: '7rem' }} />
        <CardsWithCommit />
      </Container>
    </SEO>
  );
}

export default Home;
