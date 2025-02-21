import type { FunctionComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import checkmarkBolder from '../../images/checkmark-bolder.svg';
import caution from '../../images/caution.svg';
import cancel from '../../images/cancel2.svg';
import settingsWheel from '../../images/settings-wheel.svg';

const CardsWithCommit: FunctionComponent = () => {
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
      <Row md={2} sm={1} xs={1}>
        <Col className="mt-4">
          <Card>
            <Card.Body>
              <Card.Title>Application <img src={checkmarkBolder} style={{ height: '1.3rem' }} className="float-end" /></Card.Title>
              <Card.Text className="mt-4">
                <p><span className="text-muted">Branch:</span> fix/123-task-name</p>
                <hr />
                <p><span className="text-muted">Commit:</span> Fix whatever needs fixing <small>(95efc82)</small></p>
                <hr />
                <p className="mb-0"><span className="text-muted">Author:</span> Name Surname</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-4">
          <Card>
            <Card.Body>
              <Card.Title>Auth <img src={caution} style={{ height: '1.3rem' }} className="float-end" /></Card.Title>
              <Card.Text className="mt-4">
                <p><span className="text-muted">Branch:</span> feat/add-aws-cognito-authentication</p>
                <hr />
                <p><span className="text-muted">Commit:</span> Support AWS Cognito <small>(fa8087a)</small></p>
                <hr />
                <p className="mb-0"><span className="text-muted">Author:</span> Cloud Developer</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-4">
          <Card>
            <Card.Body>
              <Card.Title>API <img src={settingsWheel} style={{ height: '1.3rem' }} className="float-end" /></Card.Title>
              <Card.Text className="mt-4">
                <p><span className="text-muted">Branch:</span> main</p>
                <hr />
                <p><span className="text-muted">Commit:</span> Add caching layer <small>(d2a5c94)</small></p>
                <hr />
                <p className="mb-0"><span className="text-muted">Author:</span> Jon Snow</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-4">
          <Card>
            <Card.Body>
              <Card.Title>Upload <img src={cancel} style={{ height: '1.3rem' }} className="float-end" /></Card.Title>
              <Card.Text className="mt-4">
                <p><span className="text-muted">Branch:</span> develop</p>
                <hr />
                <p><span className="text-muted">Commit:</span> Add support for junk upload <small>(f443e4f)</small></p>
                <hr />
                <p className="mb-0"><span className="text-muted">Author:</span> Ned Leeds</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CardsWithCommit;
