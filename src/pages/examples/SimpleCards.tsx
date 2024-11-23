import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import checkmarkBolder from '../../images/checkmark-bolder.svg';
import caution from '../../images/caution.svg';
import cancel from '../../images/cancel2.svg';
import settingsWheel from '../../images/settings-wheel.svg';

const SimpleCards: React.FC = () => {
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
        <Col className="mt-2">
          <Card>
            <Card.Body>
              <Card.Title>Application <img src={checkmarkBolder} style={{ height: '1.3rem' }} className="float-end" /></Card.Title>
              <Card.Text><small className="text-muted">6.0.0-rc.6</small></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2">
          <Card>
            <Card.Body>
              <Card.Title>Auth <img src={caution} style={{ height: '1.3rem' }} className="float-end" /></Card.Title>
              <Card.Text>&nbsp;</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2">
          <Card>
            <Card.Body>
              <Card.Title>API <img src={settingsWheel} style={{ height: '1.3rem' }} className="float-end" /></Card.Title>
              <Card.Text>&nbsp;</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2">
          <Card>
            <Card.Body>
              <Card.Title>Upload <img src={cancel} style={{ height: '1.3rem' }} className="float-end" /></Card.Title>
              <Card.Text><small className="text-muted">1.1.0</small></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default SimpleCards;
