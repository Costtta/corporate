import './style/style.css'
import work1 from './assets/work 1.avif'
import work2 from './assets/work 2.avif'
import work3 from './assets/work 3.avif'
import work4 from './assets/work 4.avif'
import work5 from './assets/work 5.avif'
import work6 from './assets/work 6.avif'
import work7 from './assets/work 7.avif'
import work8 from './assets/work 8.avif'
import { Col, Row } from 'react-bootstrap'

const Works = () => {
  return (
    <section className='work my-5' id='works'>
      <div className="container">
        <h2 className='text-center'>OUR WORKS</h2>
        <p className='text-center opacity-50 mb-5'>- our awesome works -</p>
        <Row className='gy-4'>
          <Col md={4} sm={12} className='box-container'>
            <img src={work1} alt="work1" className='w-100' loading='lazy' />
            <div className="box text-center">
              <h3>Lonely Path</h3>
              <p>Web Design</p>
            </div>
          </Col>
            <Col md={4} sm={12} className='box-container'>
            <img src={work2} alt="work2" className='w-100' loading='lazy' />
            <div className="box text-center">
              <h3>Photographer Girl</h3>
              <p>Branding</p>
            </div>
          </Col>
            <Col md={4} sm={12} className='box-container'>
            <img src={work3} alt="work3" className='w-100' loading='lazy' />
            <div className="box text-center">
              <h3>The Difference</h3>
              <p>Web Design</p>
            </div>
          </Col>
            <Col md={4} sm={12} className='box-container'>
            <img src={work4} alt="work4" className='w-100' loading='lazy' />
            <div className="box text-center">
              <h3>Nature Patterns</h3>
              <p>Branding</p>
            </div>
          </Col>
            <Col md={4} sm={12} className='box-container'>
            <img src={work5} alt="work5" className='w-100' loading='lazy' />
            <div className="box text-center">
              <h3>The Difference</h3>
              <p>Photography</p>
            </div>
          </Col>
            <Col md={4} sm={12} className='box-container'>
            <img src={work6} alt="work6" className='w-100' loading='lazy' />
            <div className="box text-center">
              <h3>Winter Sonata</h3>
              <p>Web Design</p>
            </div>
          </Col>
            <Col md={4} sm={12} className='box-container'>
            <img src={work7} alt="work7" className='w-100' loading='lazy' />
            <div className="box text-center">
              <h3>Lonely Path</h3>
              <p>Branding</p>
            </div>
          </Col>
            <Col md={4} sm={12} className='box-container'>
            <img src={work8} alt="work8" className='w-100' loading='lazy' />
            <div className="box text-center">
              <h3>Appreciation</h3>
              <p>Photography</p>
            </div>
          </Col>
            <Col md={4} sm={12} className='box-container'>
            <img src={work1} alt="work1" className='w-100' loading='lazy' />
            <div className="box text-center">
              <h3>Happy Days</h3>
              <p>Web Design</p>
            </div>
          </Col>
        </Row>
          <ul className="pagination justify-content-center p-5">
          <li className="page-item">
              <a className="page-link" href="#1">1</a>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link">2</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#3">3</a>
              </li>
            <li className="page-item">
              <a className="page-link" href="#4">4</a>
              </li>
            <li className="page-item">
              <a className="page-link" href="#5">5</a>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default Works
