import React,{useEffect} from 'react'
import "./footer.css"
import video2 from "../../Assets/video2.mp4"
import { FiSend, FiChevronRight } from "react-icons/fi"
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import { FaTripadvisor } from "react-icons/fa"

import Aos from "aos"
import 'aos/dist/aos.css'


const Footer = () => {

  // use react hooks to add a scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])



  return (
    <section className="footer">

      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4' ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'> SEND < FiSend className='icon' /> </button>
          </div>
        </div>

        <div className="footerCard flex">

          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex' >
                <MdOutlineTravelExplore className='icon' />BigTravel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Thank you for taking your time to visit our travel page. We hope you found something interesting and useful to help you plan your next trip. Whether you're an experienced traveler or just starting out on your journey, our goal is to share with you the wonders of the world and help you make memories that you'll cherish for years to come. From stunning scenery to diverse cultures, we're here to share the amazing things our planet has to offer. Join us on our journey to make your dreams a reality.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>

          </div>

          <div className="footerLinks grid">

            {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Insurance
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Agency
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Tourism
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Payment
              </li>

            </div>

            {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Bookings
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Rent Cars
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Hostel World
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Trivago
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Trip Advisor
              </li>

            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                London
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                California
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                USA
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Europe
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Africa
              </li>

            </div>


          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVED</small>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Footer;