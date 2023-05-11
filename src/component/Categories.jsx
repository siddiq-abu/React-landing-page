import React from 'react'
import Guys from "../assets/guys.jpeg"
import Lady from "../assets/ladys.jpg"
import Shoes from "../assets/shoes.jpeg"
import Acs from "../assets/acs.jpeg"
function Categories() {
  return (
    <section className='cate-section'>
<h1 className='ctg'>Categories</h1>
<div className="cards">

<div className='card'>
  <img src={Guys} alt="" />
  <div className="click">
  <h2><a href="">MEN</a></h2>
  </div>

</div>
<div className='card'>
  <img src={Lady} alt="" />
  <div className="click">
  <h2><a href="">WOMEN</a></h2>
  </div>
  
</div>
<div className='card'>
  <img src={Shoes} alt="" />
  <div className="click">
  <h2><a href="">SHOES</a></h2>
  </div>
  
</div>
<div className='card'>
  <img src={Acs} alt="" />
  <div className="click">
  <h2><a href="">ACCESSORIES</a></h2>
  </div>
  
</div>

</div>


    </section>
  )
}

export default Categories