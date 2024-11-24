import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Simple from './examples/Simple';
import SimpleCards from './examples/SimpleCards';
import CardsWithCommit from './examples/CardsWithCommit';
import SimpleTable from './examples/SimpleTable';
import TableWithCommits from './examples/TableWithCommits';
import MultipleEnvironments from './examples/MultipleEnvironments';
import { getProjects } from '../api/services';

const Home: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const params = useParams();
  const name = params.name;

  useEffect(() => {
    getProjects()
      .then(data => setProjects(data));
  }, []);
  
  let component = <Simple projects={projects} />;

  switch (name) {
    case 'simple':
      component = <Simple projects={projects} />;
      break;
    case 'simple-cards':
      component = <SimpleCards />;
      break;
    case 'cards-with-commit':
      component = <CardsWithCommit />;
      break;
    case 'simple-table':
      component = <SimpleTable projects={projects} />;
      break;
    case 'table-with-commits':
      component = <TableWithCommits projects={projects} />;
      break;
    case 'multiple-environments':
      component = <MultipleEnvironments projects={projects} />;
      break;
  }

  return (
    <Container fluid="xl">
      {component}
    </Container>
  );
}

export default Home;
