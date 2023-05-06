import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
export function Cards(Props){
    return(
      <Row>
        <Col className='col-flex' md={6} lg={4} sm={12}>
            <div className='Card-content'>123</div>
        </Col>
        <Col className='col-flex' md={6} lg={4} sm={12}>
            <div className='Card-content'>123</div>
        </Col>
        <Col className='col-flex' md={6} lg={4} sm={12}>
            <div className='Card-content'>123</div>
        </Col>
        <Col className='col-flex' md={6} lg={4} sm={12}>
            <div className='Card-content'>123</div>
        </Col>
        <Col className='col-flex' md={6} lg={4} sm={12}>
            <div className='Card-content'>123</div>
        </Col>
        <Col className='col-flex' md={6} lg={4} sm={12}>
            <div className='Card-content'>123</div>
        </Col>
      </Row>
    )
}