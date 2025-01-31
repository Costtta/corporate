import './style/style.css'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='mt-5'>
      <map name=""></map>
      <div className="container">
        <div className="footer-container row col-lg-12 col-md-12 col-12">
          <div className='col-lg-4 col-md-4 col-12 text-center'>
          <FaEnvelope className='icon'/>
            <p>hello@domain.com</p>
          </div>
          <div className='col-lg-4 col-md-4 col-12 text-center'>
          <FaPhoneAlt className='icon'/>
            <p>000-000-0000</p>
          </div>
          <div className='col-lg-4 col-md-4 col-12 text-center'>
          <FaLocationDot className='icon'/>
            <p>London, United Kingdom</p>
          </div>
        </div>
      </div>
        <div className='text-center copyright mt-5 py-5'>
          <p className='text-white'>© 2022 Corporate. All Right Reserved.</p>
          <div className='text-white icons'>
            <FaFacebook className='icon'/>
            <FaTwitter className='icon'/>
            <FaLinkedinIn className='icon'/>
          </div>
        </div>
    </footer>
  )
}

export default Footer
