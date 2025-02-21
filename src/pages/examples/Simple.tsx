import type { FunctionComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import checkmarkBolder from '../../images/checkmark-bolder.svg';
import caution from '../../images/caution.svg';
import cancel from '../../images/cancel2.svg';
import settingsWheel from '../../images/settings-wheel.svg';

interface Props {
  projects: Project[];
}

const Simple: FunctionComponent<Props> = ({ projects }: Props) => {
  return (
    <>
      <Row>
        <Col className="text-center">
          <img src={checkmarkBolder} style={{ height: '10rem' }} />
          <h1>Everything is up and running</h1>
        </Col>
      </Row>
      <Row className="mt-4 text-center">
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
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <div>
            <hr />
            <p className="ps-4 pe-4"><span className="fw-medium">Application</span> <small className="text-muted">6.0.0-rc.6</small> <img src={checkmarkBolder} style={{ height: '1.3rem' }} className="float-end" /></p>
            <hr />
            <p className="ps-4 pe-4"><span className="fw-medium">Auth</span> <img src={caution} style={{ height: '1.3rem' }} className="float-end" /></p>
            <hr />
            <p className="ps-4 pe-4"><span className="fw-medium">API</span> <img src={settingsWheel} style={{ height: '1.3rem' }} className="float-end" /></p>
            <hr />
            <p className="ps-4 pe-4"><span className="fw-medium">Upload</span>  <small className="text-muted">1.1.0</small> <img src={cancel} style={{ height: '1.3rem' }} className="float-end" /></p>
            <hr />
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <div>
            <hr />
            {
              projects.map((project: Project) => (
                <div key={project.id}>
                  <p className="ps-4 pe-4"><span className="fw-medium">{project.name}</span> <small className="text-muted">{project.release?.tag}</small> <img src={checkmarkBolder} style={{ height: '1.3rem' }} className="float-end" /></p>
                  <hr />
                </div>
              ))
            }
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Simple;
