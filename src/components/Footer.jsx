import React from 'react'
import { AiFillLinkedin,AiFillGithub,AiFillInstagram } from 'react-icons/ai'

function Footer() {
  return (
    <footer>
        <div>
            <h1>TECHIFY</h1>
            <p>@All right reserved</p>
        </div>
        <div>
            <h5>Follow us</h5>
            <div>
            <a href="http://instagram.com/_taha_63"> <AiFillInstagram/> instagram</a>
            <a href="https://github.com/Tahakhargoonwala"><AiFillGithub/> Github</a>
            <a href="https://www.linkedin.com/in/taha-khargoonwala-4b871a22b/"><AiFillLinkedin/> Linkdin</a> 
            </div>
        </div>
    </footer>
  )
}

export default Footer