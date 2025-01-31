import { Button, Col, Container, Row } from 'react-bootstrap'
import './style/style.css'

const Pricing = () => {
  return (
    <section id='pricing'>
      <Container className="my-5 py-5">
        <h2 className='text-center'>PRICING & PLANS</h2>
        <p className='text-center opacity-50'>- check our pricing & plans -</p>
        <Row className="pricing-container">
          <Col xs={12} md={4} className='text-center p-0 price'>
            <h3 className='text-center py-3'>
              BASIC 
              <div>£49</div>
              </h3>
            <p className='dark-gray'>Wireframing</p>
            <p className='light-gray'>Visual Design</p>
            <p className='dark-gray'>5 pages</p>
            <p className='light-gray'>Free Hosting</p>
            <p className='dark-gray'>Support & Assistance</p>
            <Button className='my-5'>ORDER NOW</Button>
          </Col>
          <Col xs={12} md={4} className='text-center p-0 price'>
          <h3 className='text-center active py-3'>
            PREMIUM
          <div>£149</div>
          </h3>
            <p className='dark-gray'>Wireframing</p>
            <p className='light-gray'>Visual Design</p>
            <p className='dark-gray'>15 pages</p>
            <p className='light-gray'>Free Hosting</p>
            <p className='dark-gray'>Support & Assistance</p>
            <Button className='my-5'>ORDER NOW</Button>
          </Col>
          <Col xs={12} md={4} className='text-center p-0 price'>
          <h3 className='text-center py-3'>
            ULTIMATE
          <div>£349</div>
          </h3>
            <p className='dark-gray'>Wireframing</p>
            <p className='light-gray'>Visual Design</p>
            <p className='dark-gray'>Unlimited pages</p>
            <p className='light-gray'>Free Hosting</p>
            <p className='dark-gray'>Support & Assistance</p>
            <Button className='my-5'>ORDER NOW</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
