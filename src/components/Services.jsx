import './style/style.css'
import { FaClone, FaRegSnowflake, FaPlug } from "react-icons/fa";
import { FaDesktop, FaTrophy, FaLifeRing } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Services = () => {
  return (
    <section className='service' id='services'>
      <Container className="my-5 py-5">
        <h2 className='text-center'>OUR SERVICES</h2>
        <p className='text-center opacity-50'>- services we provide -</p>
        <Row className='g-5'>
          <Col md={4} sm={12}>
          <FaClone className='icon'/>
            <h3 className='my-4'>Responsive Design</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ab magni expedita optio nisi doloremque! Reprehenderit odio magnam quae impedit?</p>
          </Col>
          <Col md={4} sm={12}>
          <FaRegSnowflake className='icon'/>
            <h3 className='my-4'>Creative Design</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ab magni expedita optio nisi doloremque! Reprehenderit odio magnam quae impedit?</p>
          </Col>
          <Col md={4} sm={12}>
          <FaPlug className='icon'/>
            <h3 className='my-4'>SEO Optimized</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ab magni expedita optio nisi doloremque! Reprehenderit odio magnam quae impedit?</p>
          </Col>
          <Col md={4} sm={12}>
          <FaDesktop className='icon'/>
            <h3 className='my-4'>Retina Ready</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ab magni expedita optio nisi doloremque! Reprehenderit odio magnam quae impedit?</p>
          </Col>
          <Col md={4} sm={12}>
          <FaTrophy className='icon'/>
            <h3 className='my-4'>Brower Compatibility</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ab magni expedita optio nisi doloremque! Reprehenderit odio magnam quae impedit?</p>
          </Col>
          <Col md={4} sm={12}>
          <FaLifeRing className='icon'/>
            <h3 className='my-4'>Customer Support</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ab magni expedita optio nisi doloremque! Reprehenderit odio magnam quae impedit?</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
