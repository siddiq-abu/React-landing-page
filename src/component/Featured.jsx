import React from 'react'
import New from "../assets/new-arr.jpeg"
import Black from "../assets/black-friday.jpg"
import Flash from "../assets/flash-sales.jpg"
import Most from "../assets/most.jpeg"
function Featured() {
  return (
    <section>
        <h1 className='ftd'>Featured</h1>
<div className="cards">

<div className='card'>
  <img src={New} alt="" />
  <div className="click">
  <h2><a href="">NEW-ARRIVAL</a></h2>
  </div>

</div>
<div className='card'>
  <img src={Black} alt="" />
  <div className="click">
  <h2><a href="">BLACK-FRIDAY</a></h2>
  </div>
  
</div>
<div className='card'>
  <img src={Flash} alt="" />
  <div className="click">
  <h2><a href="">FLASH-SALES</a></h2>
  </div>
 
</div>
<div className='card'>
  <img src={Most} alt="" />
  <div className="click">
  <h2><a href="">MOST-BOUGHT</a></h2>
  </div>

</div>

</div>
    </section>
  )
}

export default Featured