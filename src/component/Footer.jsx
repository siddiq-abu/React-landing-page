import React from 'react'
import Kally from "../assets/kally.png"
import { ImLocation } from "react-icons/im"
import {CiFacebook} from "react-icons/ci"
import {FiTwitter} from "react-icons/fi"
import {GrPinterest} from "react-icons/gr"
function Footer() {
    return (
        <footer className='footer'>
            {/* <img className='logo-ft' src={Kally} alt="" /> */}

            <div className="ft-text">

                <div className="ft">
                    <h3>K&C Services</h3>
                    <p className='para'><a href="">Ordering & Payment</a></p>
                    <p className='para'><a href="">Return / Cancellation</a></p>
                    <p className='para'><a href="">Frequently Asked Question</a></p>
                    <p className='para'><a href="">Terms & Conditions</a></p>
                    <p className='para'><a href="">Bulk Order Discount</a></p>
                    <p className='para'><a href="">Special Discounts</a></p>
                    <p className='para'><a href="">K&C Clothing Fair</a></p>
                </div>

                <div className="ft">
                    <div className="ft-1">
                        <h3>Shipping & Delivery</h3>
                        <p className='para'><a href="">About Free Shipping</a></p>
                        <p className='para'><a href="">About Shipping</a></p>
                        <p className='para'><a href="">Shipping Rates</a></p>
                    </div>

                    <div className="ft-2">
                        <h3>Handles</h3>
                        <p className='para'>K&C Mobile App</p>
                        <p className='para'>K&C on Facebook</p>
                        <p className='para'>K&C on Twitter</p>
                    </div>
                </div>

                <div className="ft">
                    <div className="ft-1">
                        <h3>Quick Help</h3>
                        <p className='para'><a href="">Customer Service</a></p>
                        <p className='para'><a href="">Order Status</a></p>
                        <p className='para'><a href="">Easy Returns</a></p>
                        <p className='para'><a href="">Product Recalls</a></p>
                    </div>

                    <div className="ft-2">
                        <h3>About Us</h3>
                        <p className='para'>About K&C</p>
                        <p className='para'>Investor Relations</p>
                        <p className='para'>Brand Partners</p>
                    </div>
                </div>

                <div className="ft">
                    <div className="ft-1">
                        <h3>Store & Events</h3>
                        <p className='it'>Author Events,FREE Wi-Fi,and more</p>
                        <button className='loc'><ImLocation />Store Locator</button>
                    </div>

                    <div className="ft-2">
                        <h3>Be in the know</h3>
                        <p className='it'>Sign up for updates about our new promo</p>
                        <input type="email" placeholder='Email Address' />
                        <button className='sum'>Summit</button>
                    </div>

                    <div className="ft-3">
                        <CiFacebook className='icon'/>
                        <FiTwitter className='icon'/>
                        <GrPinterest className='icon'/>
                    </div>

                </div>

            </div>
                	
          
           


        </footer>
       
    )
}

export default Footer