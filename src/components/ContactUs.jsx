import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './style/style.css'

const ContactUs = () => {
  return (
    <section className='my-5' id='contact'>
      <Container>
        <h2 className='text-center'>CONTACT US</h2>
        <p className='text-center opacity-50'>- get connected with us -</p>
        <div className="contact-container">
          <Form>
            <Row className='gy-4'>
              <Col sm={4} md={4} lg={4}>
                <Form.Control type="text" placeholder="Enter your full name" name='full-name'/>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Form.Control type="email" placeholder="Enter your email address" name='e-mail'/>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Form.Control type="text" placeholder="Enter your contact number" name='number'/>
              </Col>
            <Col>
              <Form.Control as="textarea" rows={3} placeholder='Enter your contact message' name='contact-message'/>
            </Col>
            </Row>
          </Form>
          <div className='text-center'>
            <Button type='submit' className='py-2 px-4 my-5'>SUBMIT</Button>
          </div>
        </div>
      </Container>
      <div>
      <iframe 
      title='googleMaps'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.8398865692!2d-0.2664030556096407!3d51.528739805074714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1737508903703!5m2!1sen!2seg"
      width="100%"
      height="450"
      style={{border: 0}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
    </section>
  )
}

export default ContactUs
