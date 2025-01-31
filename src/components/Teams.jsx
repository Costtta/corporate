import './style/style.css'
import team1 from './assets/teams 1.avif'
import team2 from './assets/teams 2.avif'
import team3 from './assets/teams 3.avif'
import team4 from './assets/teams 4.avif'
import team5 from './assets/teams 5.avif'
import team6 from './assets/teams 6.avif'
import team7 from './assets/teams 7.avif'
import team8 from './assets/teams 8.avif'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Teams = () => {
  return (
    <section className='my-5 py-5' id='teams'>
      <Container>
        <h2 className='text-center'>OUR TEAMS</h2>
        <p className='text-center opacity-50'>- some of our experts -</p>
        <Row style={{rowGap: 5}}>
          <Col lg={3} md={6} sm={12}>
            <img src={team1} alt="formal-man" className='w-100' loading='lazy'/>
            <h3 className='pt-4'>Nicholas Perry</h3>
            <p className='fst-italic'>CEO</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor quaerat quisquam magni repellendus culpa cum? Voluptatem illum unde fuga?</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <img src={team2} alt="formal-man2" className='w-100' loading='lazy'/>
            <h3 className='pt-4'>David Antony</h3>
            <p className='fst-italic'>Manager</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor quaerat quisquam magni repellendus culpa cum? Voluptatem illum unde fuga?</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <img src={team3} alt="formal-women" className='w-100' loading='lazy'/>
            <h3 className='pt-4'>Gabriel Hart</h3>
            <p className='fst-italic'>UX Designer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor quaerat quisquam magni repellendus culpa cum? Voluptatem illum unde fuga?</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <img src={team4} alt="formal-man3" className='w-100' loading='lazy'/>
            <h3 className='pt-4'>Taylor Lopez</h3>
            <p className='fst-italic'>Developer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor quaerat quisquam magni repellendus culpa cum? Voluptatem illum unde fuga?</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <img src={team5} alt="formal-women2" className='w-100' loading='lazy'/>
            <h3 className='pt-4'>Sophia Pitt</h3>
            <p className='fst-italic'>Developer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor quaerat quisquam magni repellendus culpa cum? Voluptatem illum unde fuga?</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <img src={team6} alt="formal-women3" className='w-100' loading='lazy'/>
            <h3 className='pt-4'>Sarah Wills</h3>
            <p className='fst-italic'>Developer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor quaerat quisquam magni repellendus culpa cum? Voluptatem illum unde fuga?</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <img src={team7} alt="formal-women4" className='w-100' loading='lazy'/>
            <h3 className='pt-4'>Olivia Giggs</h3>
            <p className='fst-italic'>Content Writer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor quaerat quisquam magni repellendus culpa cum? Voluptatem illum unde fuga?</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <img src={team8} alt="formal-man4" className='w-100' loading='lazy'/>
            <h3 className='pt-4'>David Smith</h3>
            <p className='fst-italic'>SEO Expert</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor quaerat quisquam magni repellendus culpa cum? Voluptatem illum unde fuga?</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Teams
