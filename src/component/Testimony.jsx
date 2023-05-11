import React from 'react'
import Test from "../assets/test 2.jpg"
import Women from "../assets/test-women2.jpeg"
import Men from "../assets/test-men2.jpeg"
import Siddiq from "../assets/men-test 1.jpeg"

function Testimony() {
  return (
    <section>

        <h1 className='tsm'>Our Happy Clients</h1>

        <div className="test-cards">

            <div className="test-card">
              <img className='test-img' src={Test} alt="" />
              <div className="center">
              <h3>Angela johnston</h3>
              <p>Have bought several things now, pants, tops & dresses, love them all & can't wait to receive my new order. Always speedy delivery even over holidays.</p>
              </div>
             
            </div>
            <div className="test-card">
              <img className='test-img' src={Women} alt="" />
              <div className="center">
              <h3>Anna Shvets</h3>
              <p>I and my family members have bought some outfits from kally-clothinz and we are so satisfied with their services that we will continue buying from them.</p>
              </div>
            </div>
            <div className="test-card">
            <img className='test-img' src={Men} alt="" />
              <div className="center">
              <h3>Stephanie McKenzie</h3>
              <p>They have the finest clothing from socks to jeans that fit great. They also have a great seamstress who takes pride in her work.</p>
              </div>
            </div>
            <div className="test-card">
            <img className='test-img' src={Siddiq} alt="" />
              <div className="center">
              <h3>Justice Lina</h3>
              <p>Thank you for making such a beautiful suit. Will purchase more from you guys going forward. Wonderful work, keep it up!</p>
              </div>
            </div>

        </div>
        <hr />
    </section>
    
  )
}

export default Testimony