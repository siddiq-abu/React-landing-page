import React from 'react'
// import Adidas from "../assets/adidas-use.png"
import Uni from "../assets/uni-use.png"
import Tommy from "../assets/tommy-use.png"
import Nike from "../assets/nike-use.png"
import Levis from "../assets/levis-use.png"
import Boss from "../assets/boss-use.png"
import Cos from "../assets/cos-use.png"
function Brands() {
  return (
    <section>
<h1 className='brd'>Brands</h1>

<div className="brands"> 
    <div className="brand">
        <img src={Uni} alt="" />
    </div>
    <div className="brand">
        <img src={Tommy} alt="" />
    </div>
    <div className="brand">
        <img src={Nike} alt="" />
    </div>
    <div className="brand">
        <img src={Levis} alt="" />
    </div>
    <div className="brand">
        <img src={Boss} alt="" />
    </div>
    <div className="brand">
        <img src={Cos} alt="" />
    </div>
   

</div>

    </section>
  )
}

export default Brands