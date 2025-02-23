import type { FunctionComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import BarLoader from '../../components/BarLoader';

const SimpleTableLoader: FunctionComponent = () => {
  return (
    <>
      <Row className="mt-5">
        <Col className="text-center">
          <BarLoader As="div" style={{ height: '10rem', width: '10rem', margin: '0 auto' }} />
          <BarLoader As="h1" style={{ width: '40%', minWidth: 400, margin: '0 auto' }}>&nbsp;</BarLoader>
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
      <Row className="mt-4">
        <Col md={{ span: 8, offset: 2 }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th><BarLoader>&nbsp;</BarLoader></th>
                <th><BarLoader>&nbsp;</BarLoader></th>
                <th><BarLoader>&nbsp;</BarLoader></th>
                <th><BarLoader>&nbsp;</BarLoader></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><BarLoader>&nbsp;</BarLoader></td>
                <td><BarLoader>&nbsp;</BarLoader></td>
                <td><BarLoader>&nbsp;</BarLoader></td>
                <td><BarLoader>&nbsp;</BarLoader></td>
              </tr>
              <tr>
                <td><BarLoader>&nbsp;</BarLoader></td>
                <td><BarLoader>&nbsp;</BarLoader></td>
                <td><BarLoader>&nbsp;</BarLoader></td>
                <td><BarLoader>&nbsp;</BarLoader></td>
              </tr>
              <tr>
                <td><BarLoader>&nbsp;</BarLoader></td>
                <td><BarLoader>&nbsp;</BarLoader></td>
                <td><BarLoader>&nbsp;</BarLoader></td>
                <td><BarLoader>&nbsp;</BarLoader></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default SimpleTableLoader;
