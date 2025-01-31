import Carousel from 'react-bootstrap/Carousel';
import hero1 from './assets/img-hero1.avif'
import hero2 from './assets/img-hero2.avif'
import hero3 from './assets/img-hero3.avif'

function DarkVariantExample() {
  return (
    <section id='home' className='my-5 pt-3'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero1}
            alt="First slide"
          />
          <Carousel.Caption className='d-none d-md-block'>
            <h5>The perfect design for your website</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero2}
            alt="Second slide"
          />
          <Carousel.Caption className='d-none d-md-block'>
            <h5>Start Your Future Financial Plan</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero3}
            alt="Third slide"
          />
          <Carousel.Caption className='d-none d-md-block'>
            <h5>Enjoy the Difference</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default DarkVariantExample;