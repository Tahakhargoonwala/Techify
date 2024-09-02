import React from 'react'
import vg from "../assets/2.webp"
import { AiFillAmazonCircle,AiFillGoogleCircle,AiFillInstagram,AiFillYoutube } from 'react-icons/ai'


function Home() {
  
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Techify</h1>
            <p>One stop solution for all your problem</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
        <p>
         Our team is dedicated to providing you with the best technical support,Count on us for expert guidance and solutions to your tech challenges.
         
        </p>
        
        </div>
    </div>
    <div className="home3" id='about' >
      <div>
      <h1>Who we are?</h1>
      <p>Techify is a dynamic tech solutions startup specializing in empowering brands to thrive in the digital landscape. At Techify, we leverage cutting-edge technology and innovative strategies to provide customized solutions that enhance brand visibility, engagement, and growth. Our team of skilled professionals is dedicated to delivering comprehensive digital marketing services, including web development, app development, SEO optimization, and data-driven marketing campaigns. We are committed to helping brands navigate the ever-evolving digital world, ensuring they stay ahead of the competition and achieve their business goals. With a focus on creativity and results, Techify is your partner in building a robust digital presence that drives success.</p>
      </div>
    </div>
    <div className="home4" id='brand'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={{animationDelay:"0.5s"}}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div style={{animationDelay:"0.7s"}}>
            <AiFillYoutube />
            <p>Youtube</p>
          </div>
          <div style={{animationDelay:"1s"}}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home