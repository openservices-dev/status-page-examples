import type { FunctionComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarLoader from '../../components/BarLoader';

const SimpleCardsLoader: FunctionComponent = () => {
  return (
    <>
      <Row className="mt-5">
        <Col className="text-center">
          <BarLoader As="div" style={{ height: '10rem', width: '10rem', margin: '0 auto' }} />
          <BarLoader As="h1">&nbsp;</BarLoader>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={2} className="mt-4 text-center">
        <Col>
          <BarLoader As="p" style={{ maxWidth: '70%', margin: '0 auto' }}>&nbsp;</BarLoader>
        </Col>
        <Col>
          <BarLoader As="p" style={{ maxWidth: '70%', margin: '0 auto' }}>&nbsp;</BarLoader>
        </Col>
        <Col>
          <BarLoader As="p" style={{ maxWidth: '70%', margin: '0 auto' }}>&nbsp;</BarLoader>
        </Col>
        <Col>
         <BarLoader As="p" style={{ maxWidth: '70%', margin: '0 auto' }}>&nbsp;</BarLoader>
        </Col>
      </Row>
      <Row md={2} sm={1} xs={1} className="mt-2">
        <Col className="mt-2">
          <BarLoader style={{ height: 90 }} />
        </Col>
        <Col className="mt-2">
          <BarLoader style={{ height: 90 }} />
        </Col>
        <Col className="mt-2">
          <BarLoader style={{ height: 90 }} />
        </Col>
        <Col className="mt-2">
          <BarLoader style={{ height: 90 }} />
        </Col>
      </Row>
    </>
  );
}

export default SimpleCardsLoader;
