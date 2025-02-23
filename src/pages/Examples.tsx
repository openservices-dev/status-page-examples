import { Suspense } from 'react';
import type { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Simple from './examples/Simple';
import SimpleLoader from './examples/SimpleLoader';
import SimpleCards from './examples/SimpleCards';
import SimpleCardsLoader from './examples/SimpleCardsLoader';
import CardsWithCommit from './examples/CardsWithCommit';
import CardsWithCommitLoader from './examples/CardsWithCommitLoader';
import SimpleTable from './examples/SimpleTable';
import SimpleTableLoader from './examples/SimpleTableLoader';
import TableWithCommits from './examples/TableWithCommits';
import MultipleEnvironments from './examples/MultipleEnvironments';
import { getProjects } from '../api/services';

const Examples: FunctionComponent = () => {
  const projectsPromise = getProjects('zdielaj-si');

  return (
    <Container fluid="xl">
      <ExamplesSwitch projectsPromise={projectsPromise} />
    </Container>
  );
}

const ExamplesSwitch: FunctionComponent<any> = ({ projectsPromise }: any) => {
  const params = useParams();
  const name = params.name as string;
  
  let component = null;
  let loader = null;

  switch (name) {
    case 'simple':
      component = <Simple projectsPromise={projectsPromise} />;
      loader = <SimpleLoader />;
      break;
    case 'simple-cards':
      component = <SimpleCards projectsPromise={projectsPromise} />;
      loader = <SimpleCardsLoader />;
      break;
    case 'cards-with-commit':
      component = <CardsWithCommit projectsPromise={projectsPromise} />;
      loader = <CardsWithCommitLoader />;
      break;
    case 'simple-table':
      component = <SimpleTable projectsPromise={projectsPromise} />;
      loader = <SimpleTableLoader />;
      break;
    case 'table-with-commits':
      component = <TableWithCommits projectsPromise={projectsPromise} />;
      break;
    case 'multiple-environments':
      component = <MultipleEnvironments projects={[]} />;
      break;
  }

  return (
    <Suspense fallback={loader}>
      {component}
    </Suspense>
  )
};

export default Examples;
