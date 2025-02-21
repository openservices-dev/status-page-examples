import { useState } from 'react';
import type { FunctionComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import checkmarkBolder from '../../images/checkmark-bolder.svg';
import caution from '../../images/caution.svg';
import cancel from '../../images/cancel2.svg';
import settingsWheel from '../../images/settings-wheel.svg';

interface Props {
  projects: Project[];
}

const CardsWithCommit: FunctionComponent<Props> = ({ projects }: Props) => {
  const [filter, setFilter] = useState<string>('');

  const multiEnvProjects = projects.map((project: Project) => {
    return [
      { ...project, name: `[DEV1] ${project.name}`, group: 'dev1' },
      { ...project, name: `[DEV2] ${project.name}`, group: 'dev2' },
      { ...project, name: `[DEV3] ${project.name}`, group: 'dev3' },
      { ...project, name: `[DEV4] ${project.name}`, group: 'dev4' },
      { ...project, name: `[DEV5] ${project.name}`, group: 'dev5' },
      { ...project, name: `[DEV6] ${project.name}`, group: 'dev6' },
    ]
  }).flat();

  const onFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
    const env = (event.target as HTMLElement).getAttribute('data-dev') || '';

    setFilter(env === filter ? '' : env);
  }

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
      <Row className="mt-4 mb-4">
        <Col className="text-center">
          <Button variant={filter === 'dev1' ? 'secondary' : 'outline-secondary'} data-dev="dev1" onClick={onFilterClick}>DEV1</Button>
          <Button variant={filter === 'dev2' ? 'secondary' : 'outline-secondary'} className="ms-2" data-dev="dev2" onClick={onFilterClick}>DEV2</Button>
          <Button variant={filter === 'dev3' ? 'secondary' : 'outline-secondary'} className="ms-2" data-dev="dev3" onClick={onFilterClick}>DEV3</Button>
          <Button variant={filter === 'dev4' ? 'secondary' : 'outline-secondary'} className="ms-2" data-dev="dev4" onClick={onFilterClick}>DEV4</Button>
          <Button variant={filter === 'dev5' ? 'secondary' : 'outline-secondary'} className="ms-2" data-dev="dev5" onClick={onFilterClick}>DEV5</Button>
          <Button variant={filter === 'dev6' ? 'secondary' : 'outline-secondary'} className="ms-2" data-dev="dev6" onClick={onFilterClick}>DEV6</Button>
        </Col>
      </Row>
      <Row lg={3} md={2} sm={1} xs={1}>
        {
          multiEnvProjects.filter(project => project.group.includes(filter)).map((project: Project, index: number) => (
            <Col key={index} className="mt-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.name} <img src={checkmarkBolder} style={{ height: '1.3rem' }} className="float-end" /></Card.Title>
                  <Card.Text className="mt-4">
                    <p><span className="text-muted">Branch:</span> {project.commit?.branch}</p>
                    <hr />
                    <p><span className="text-muted">Commit:</span> {project.commit?.message} <small>({project.commit?.hash})</small></p>
                    <hr />
                    <p className="mb-0"><span className="text-muted">Author:</span> {project.commit?.author}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </>
  );
}

export default CardsWithCommit;
