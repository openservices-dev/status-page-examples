import { Suspense, type FunctionComponent } from 'react';
import Container from 'react-bootstrap/Container';
import SEO from '../components/SEO';
import Simple from './examples/Simple';
import SimpleLoader from './examples/SimpleLoader';
import SimpleCards from './examples/SimpleCards';
import SimpleCardsLoader from './examples/SimpleCardsLoader';
import CardsWithCommit from './examples/CardsWithCommit';
import CardsWithCommitLoader from './examples/CardsWithCommitLoader';
import { projects } from '../api/projects';

const Home: FunctionComponent = () => {
  const projectsPromise = Promise.resolve(projects);
  return (
    <SEO title="" description="">
      <Container fluid="xl">
        <Suspense fallback={<SimpleLoader />}>
          <Simple projectsPromise={projectsPromise} />
        </Suspense>
        <hr style={{ marginTop: '7rem', marginBottom: '7rem' }} />
        <Suspense fallback={<SimpleCardsLoader />}>
          <SimpleCards projectsPromise={projectsPromise} />
        </Suspense>
        <hr style={{ marginTop: '7rem', marginBottom: '7rem' }} />
        <Suspense fallback={<CardsWithCommitLoader />}>
          <CardsWithCommit projectsPromise={projectsPromise} />
        </Suspense>
      </Container>
    </SEO>
  );
}

export default Home;
