import { Container } from 'react-bootstrap'
import './style/style.css'
import Carousel from 'react-bootstrap/Carousel';

const testimonialsData = [
  {
    id: 1,
    name: 'John Wills',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.',
    designation: 'Manager'
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!',
    designation: 'Accountant'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?',
    designation: 'CEO'
  }
]

const Testimonials = () => {
  return (
    <section className=' my-5 py-5 testimonials text-white' id='testimonials'>
      <Container className="text-center">
        <h2>CLIENT TESTIMONIALS</h2>
        <p className='opacity-50 mb-5'>- what client says about us -</p>
        <Carousel controls={false}>
          {testimonialsData.map((index) => {
            return(
          <Carousel.Item key={index.id}>
            <p className='pb-5'>{index.description}</p>
              <cite>
                <span>{index.name}</span>
                <span className='designation'>{index.designation}</span>
              </cite>
          </Carousel.Item>
            )
          })}
        </Carousel>
      </Container>
    </section>
  )
}

export default Testimonials
