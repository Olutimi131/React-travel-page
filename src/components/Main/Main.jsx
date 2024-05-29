import React, {useEffect} from 'react'
import "./main.css"
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'

import Aos from "aos"
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The whitewash used to paint the outside of citizens homes contained limestone, which happens to be a potent disinfectant. '
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Eiffel Tower',
    location: 'Paris',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'The Eiffel tower was initially built to serve as the entrance gateway to the International Exposition of 1889 as well as a testament to French industrial ingenuity. '
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Rialto Bridge',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Rialto Bridge is the oldest of the four bridges spanning the Grand Canal in Venice, Italy'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Patek Valley',
    location: 'Iran',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'This place is known for the valley views which prompt tourist to visit anually, it makes this place most visited area every year. The mystry behind the beautiful valley is yet discovered. '
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Beach',
    location: 'United Arab Emirate',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'A luxury country which welcomes tourist all over the world to see where the luxuries end on earth. Try visit this country in your life time.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Janeiro',
    location: 'Brazil',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'It the second-most-popular city in Brazil(after Sao Paulo) and the sixth-most-populous city in the Americas. '
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Saint Patrick',
    location: 'Canada',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Saint patrick str is one the old traditional building in Canada. It was structured on water for more than three century years ago.  '
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Burj Khalifa',
    location: 'Dubai',
    grade: 'CULTURAL RELAX',
    fees: '$1500',
    description: 'Burj Khalifa is a skyscrapper in Dubai, United Arab Emirates. It is the worlds tallest structure.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Neigborhood Greek',
    location: 'Cape Town',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Neigborhood Greek is a longest trekkable and well arranged neighborhood in the world. Visitors across the world visit to checkout how it looks like. '
  },
]

export const Main = () => {

    // use react hooks to add a scroll animation
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
  

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
            return ( 
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>


                </div>

              </div>
            )
          })
        }
        
      </div>


    </section>
  )
}

export default Main;