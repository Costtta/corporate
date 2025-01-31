import './style/style.css'
import aboutUsImg from './assets/about-us.avif'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

const AboutUs = () => {

return (
    <section id='about'>
        <Container className="about-us my-5">
            <h2 className='text-center'>ABOUT US</h2>
            <p className='text-center opacity-50'>- learn more about us -</p>
            <Row>
                <Col md={12} lg={6}>
                    <img src={aboutUsImg} alt="about-us-image" className='w-100' loading='lazy'/>
                </Col>
                <Col md={12} lg={6} className='content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
                <div>
                    <p>HTML / CSS / JAVASCRIPT</p>
                    <ProgressBar now={80} label={`${80}%`} className='red-color'/>
                </div>
                <div>
                    <p>RESPONSIVE</p>
                    <ProgressBar now={95} label={`${95}%`} className='red-color'/>
                </div>
                    <div>
                        <p>PHOTOSHOP</p>
                        <ProgressBar now={60} label={`${60}%`} className='red-color'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)
}

export default AboutUs
