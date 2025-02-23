import { Suspense, type FunctionComponent } from 'react';
import Container from 'react-bootstrap/Container';
import SEO from '../components/SEO';
import SimpleCards from './home/SimpleCards';
import SimpleCardsLoader from './home/SimpleCardsLoader';
import { getProjects } from '../api/services';

const Home: FunctionComponent = () => {
  const projectsPromise = getProjects('zdielaj-si');

  return (
    <SEO title="" description="">
      <Container fluid="xl">
        <Suspense fallback={<SimpleCardsLoader />}>
          <SimpleCards projectsPromise={projectsPromise} />
        </Suspense>
      </Container>
    </SEO>
  );
}

export default Home;
