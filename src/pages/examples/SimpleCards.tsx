import { use } from 'react';
import type { FunctionComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import checkmarkBolder from '../../images/checkmark-bolder.svg';
import caution from '../../images/caution.svg';
import cancel from '../../images/cancel2.svg';
import settingsWheel from '../../images/settings-wheel.svg';

interface Props {
  projectsPromise: Promise<Project[]>;
}

const SimpleCards: FunctionComponent<Props> = ({ projectsPromise }: Props) => {
  const projects = use(projectsPromise);
  return (
    <>
      <Row className="mt-5">
        <Col className="text-center">
          <img src={checkmarkBolder} style={{ height: '10rem' }} />
          <h1>Everything is up and running</h1>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={2} className="mt-4 text-center">
        <Col>
          <p><img src={checkmarkBolder} style={{ maxHeight: '1.5rem' }} /> Running</p>
        </Col>
        <Col>
          <p><img src={settingsWheel} style={{ maxHeight: '1.5rem' }} /> Maintenance</p>
        </Col>
        <Col>
          <p><img src={caution} style={{ maxHeight: '1.5rem' }} /> Running with issues</p>
        </Col>
        <Col>
          <p><img src={cancel} style={{ maxHeight: '1.5rem' }} /> Error</p>
        </Col>
      </Row>
      <Row md={2} sm={1} xs={1} className="mt-2">
        {
          projects.map((project: Project) => (
            <Col key={project.id} className="mt-2">
              <Card>
                <Card.Body>
                  <Card.Title>{project.name} <img src={checkmarkBolder} style={{ height: '1.3rem' }} className="float-end" /></Card.Title>
                  <Card.Text><small className="text-muted">{project?.release?.tag}</small></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </>
  );
}

export default SimpleCards;
