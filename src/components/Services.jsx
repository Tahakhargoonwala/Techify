import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Services() {
  return (
    <Carousel
    infiniteLoop
    autoPlay
    showStatus={false}
    showArrows={false}
    showThumbs={false}
    interval={1500}
    >
        <div>
            <img src={img1} alt="image" />
            <p className='legend'>FullStack apps</p>
        </div>
        <div>
            <img src={img2} alt="image" />
            <p className='legend'>Peer to Peer support</p>
        </div>
    </Carousel>
  )
}

export default Services