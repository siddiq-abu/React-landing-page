import React from 'react'
import Cartoon from '../assets/pic-thrift.png'
function Hero() {
  return (
    <section className='main-hero'>
        <div className="hero-text">
<h1>Ghana's most awarded <br /> online  boutique shop!!</h1>
<h4>Find your dream clothes with <span>KallyCothinz</span></h4>

<button className='btn'>Get Started</button>
        </div>
<figure className='hero-img'>
<img src={Cartoon} alt="" />
    </figure>    
    </section>
  )
}

export default Hero