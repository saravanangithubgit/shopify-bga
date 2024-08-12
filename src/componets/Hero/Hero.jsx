import React from 'react'
import './Hero.css'
import handicon from '../assets/hand_icon.png'
import hero from "../assets/hero_image.png"
import latest from "../assets/arrow.png"
const Hero = () => {
  const moveDown = () => {
    window.scrollTo({
      top: window.scrollY + 1500, // Scrolls down by the height of the window
      behavior: 'smooth' // Smooth scrolling
    });
  };


  return (
    <div className='body'>
      <div className='leftside'>
        <h3>"Welcome to our online store! <img src={handicon}></img></h3>
      <h3>Get ready to discover an amazing selection of products that cater to your needs.</h3>
      <h3>Start exploring now!"</h3>
      <div className='explore'>
<button onClick={moveDown}>Latest collection <img src={latest}/></button>
</div>
      </div>


      <div className='rightside'>
<img src={hero} alt='none'/>
      </div>
    </div>
    
  )
}
 
export default Hero
