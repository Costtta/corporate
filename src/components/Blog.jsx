import './style/style.css'
import blog1 from './assets/blog 1.avif'
import blog2 from './assets/blog 2.avif'
import blog3 from './assets/blog 3.avif'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Blog = () => {
  return (
    <section className='blog my-5 py-5' id='blog'>
      <div className="container">
        <h2 className='text-center'>LATEST FROM BLOG</h2>
        <p className='text-center opacity-50'>- get our latest news from blog -</p>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <Card style={{padding: '12px 12px 0px', border: 'none'}}>
              <Card.Img variant="top" src={blog1} alt='coffee' loading='lazy'/>
              <Card.Body>
                <Card.Text>15 Nov 2016</Card.Text>
                <Card.Title>Coffee Lovers</Card.Title>
                <Card.Text>Lorem ipsum dolor sit, amet  adipisicing elit. Possimus accusamus sunt quo ipsum deleniti soluta dolorem omnis similique delectus corporis.</Card.Text>
                <Button variant="primary">READ MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Card style={{padding: '12px 12px 0px', border: 'none'}}>
              <Card.Img variant="top" src={blog2} alt='labtop' loading='lazy'/>
              <Card.Body>
                <Card.Text>10 Nov 2016</Card.Text>
                <Card.Title>Tips for UI Design</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia quaerat consequuntur totam sequi. Quasi vel ab nisi facere laborum?</Card.Text>
                <Button variant="primary">READ MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Card style={{padding: '12px 12px 0px', border: 'none'}}>
              <Card.Img variant="top" src={blog3} alt='garden-with-people' loading='lazy'/>
              <Card.Body>
                <Card.Text>07 Nov 2016</Card.Text>
                <Card.Title>Beatuiful Day</Card.Title>
                <Card.Text>Lorem, ipsum dolor sit amet  elit. Et, incidunt deleniti! Pariatur aut deleniti voluptatibus, officiis laboriosam corrupti quasi aliquam!</Card.Text>
                <Button variant="primary">READ MORE</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Blog
