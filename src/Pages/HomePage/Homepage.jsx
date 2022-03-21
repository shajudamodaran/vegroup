import React, { useEffect } from 'react'
import { CalanderSmallIcon, CallIcon, FbIcon, GplusIcon, InstaIcon, LocationIcon, MessageIcon, MissionIcon, RoundOptions, TwitterIcon, VisionIcon } from '../../Assets/SVGicons/Icons'
import '../../Styles/homepage/homepage.css'

function Homepage() {

    useEffect(() => {



    }, [])




    return (

        <div className='home-page-container'>

            <div className="home-banner-container">

                <div className="home-baner for-web">
                    <div className="header">
                        <div className="company-name">

                            <img src={require('../../Assets/Images/ve_main_logo.png')} alt="" className='logo' />
                            <div className='name'> Velamkunnil Group</div>
                        </div>

                        <ul className="home-header-nav">

                            <li className='active'>Home</li>
                            <li>Products</li>
                            <li>Downloads</li>
                            <li>About Us</li>
                            <li>Contact Us</li>


                        </ul>
                    </div>

                    <div className="body">

                        <div className="title">
                            Everything we do moves in rhythm
                        </div>
                        <div className="title">
                            with the goals of our clients.
                        </div>

                        <p className="caption">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione
                            quos illum at corrupti, debitis eos illo quis, doloremque unde vitae
                            voluptates sit dolorem ipsam aliquid molestias temporibus voluptatibus
                            pariatur consequuntur ipsum quaerat voluptatum a?
                        </p>

                        <button className='explore-button'>Explore US</button>

                    </div>
                </div>


                <div className="home-banner-mobile for-mobile">
                    <div className="header">
                        <img src={require('../../Assets/Images/ve_main_logo.png')} alt="" />
                        <RoundOptions />
                    </div>

                    <div className="body">
                        <p>Everything we do moves in rhythm<br/>
                            with the goals of our clients.
                        </p>

                        <p className="caption">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione
                            quos illum at corrupti, debitis eos illo quis, doloremque unde vitae
                            voluptates sit dolorem ipsam aliquid molestias temporibus voluptatibus
                            pariatur consequuntur ipsum quaerat voluptatum a?
                        </p>

                        <button className='explore-button'>Explore US</button>
                    </div>


                    <div className="image-container">
                        <img src={require('../../Assets/Images/ve_mobile_banner.png')} alt="" />
                    </div>
                </div>


            </div>
            <div className="home-container1">
                <div className="best-solution-container">
                    <div className="title">
                        Best solutions<br />
                        for your company
                    </div>

                    <div className="caption">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit architecto<br />
                        fugiat similique possimus dolorum magnam, nihil harum asperiores consequuntur<br />
                        deserunt ad quidem sint aliquam quis repudiandae rem accusantium.
                    </div>
                </div>

                <div className="mission-vision-container">

                    <div className="mission-vision-card mission-back">
                        <div className="icon">
                            <MissionIcon />
                        </div>

                        <div className="title">
                            Mission
                        </div>

                        <div className="caption">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio perferendis esse eveniet natus, corrupti aut obcaecati minus rem vero.
                        </div>
                    </div>


                    <div className="mission-vision-card vision-back">
                        <div className="icon">
                            <VisionIcon />
                        </div>

                        <div className="title">
                            Vision
                        </div>

                        <div className="caption">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio perferendis esse eveniet natus, corrupti aut obcaecati minus rem vero.
                        </div>
                    </div>

                </div>




                <div className="home-service-container">

                    <div className="service-image-container">
                        <img src={require('../../Assets/Images/purifier_home.png')} alt="" />
                    </div>

                    <div className="service-details-container">
                        <div className="title">
                            Water Purifiers
                            <div className="underline">&nbsp;</div>
                        </div>

                        <div className="caption">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsa consectetur delectus ducimus excepturi similique dolore
                            sapiente officiis earum, labore nemo repellat sint recusandae
                            at esse quisquam totam consequuntur accusantium?
                        </div>

                        <div className="sub-title">Categories</div>

                        <ul>
                            <li>Category 1</li>
                            <li>Category 2</li>
                            <li>Category 3</li>

                            <button>Read more</button>
                        </ul>

                    </div>
                </div>

                <div className="home-service-container white">

                <div className="service-image-container for-mobile" >
                        <img className='export-image' src={require('../../Assets/Images/export_home.png')} alt="" />
                    </div>

                    <div className="service-details-container">
                        <div className="title">
                            Exporting
                            <div className="underline">&nbsp;</div>
                        </div>

                        <div className="caption">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsa consectetur delectus ducimus excepturi similique dolore
                            sapiente officiis earum, labore nemo repellat sint recusandae
                            at esse quisquam totam consequuntur accusantium?
                        </div>

                        <div className="sub-title">Categories</div>

                        <ul>
                            <li>Category 1</li>
                            <li>Category 2</li>
                            <li>Category 3</li>

                            <button>Read more</button>
                        </ul>

                    </div>

                    <div className="service-image-container for-web" style={{ marginLeft: "3rem" }}>
                        <img className='export-image' src={require('../../Assets/Images/export_home.png')} alt="" />
                    </div>
                </div>


                <div className="home-service-container">

                    <div className="service-image-container for-web" style={{ marginRight: "3rem" }}>
                        <img className='trading-image' src={require('../../Assets/Images/trading_home.png')} alt="" />
                    </div>

                    <div className="service-image-container for-mobile" >
                        <img className='trading-image' src={require('../../Assets/Images/trading_home.png')} alt="" />
                    </div>

                    <div className="service-details-container">
                        <div className="title">
                            Trading
                            <div className="underline">&nbsp;</div>
                        </div>

                        <div className="caption">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsa consectetur delectus ducimus excepturi similique dolore
                            sapiente officiis earum, labore nemo repellat sint recusandae
                            at esse quisquam totam consequuntur accusantium?
                        </div>

                        <div className="sub-title">Categories</div>

                        <ul>
                            <li>Category 1</li>
                            <li>Category 2</li>
                            <li>Category 3</li>

                            <button>Read more</button>
                        </ul>

                    </div>
                </div>




                <div className="blogs-container">

                    <div className="title">Latest<span className="part2"> Blog</span></div>

                    <div className="underline">&nbsp;</div>

                    <div className="blogs-row">

                        <div className="blog-card">
                            <img className="card-image" src='https://pbs.twimg.com/media/EoORaqtWEAQRHLZ?format=png&name=large' alt="" />

                            <div className="card-body">
                                <div className="card-date-container">
                                    <CalanderSmallIcon />
                                    <div className="date-container">Jan 29,2022</div>
                                </div>
                                <div className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                <div className="card-caption">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi possimus magni veniam assumenda deleniti error commodi inventore eveniet dolorum. Odio, quam cum fugiat obcaecati laboriosam exercitationem?</div>
                            </div>
                        </div>

                        <div className="blog-card">
                            <img className="card-image" src='https://pbs.twimg.com/media/EoORaqtWEAQRHLZ?format=png&name=large' alt="" />

                            <div className="card-body">

                                <div className="card-date-container">
                                    <CalanderSmallIcon />
                                    <div className="date-container">Jan 29,2022</div>
                                </div>

                                <div className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                <div className="card-caption">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi possimus magni veniam assumenda deleniti error commodi inventore eveniet dolorum. Odio, quam cum fugiat obcaecati laboriosam exercitationem?</div>
                            </div>
                        </div>

                        <div className="blog-card">
                            <img className="card-image" src='https://pbs.twimg.com/media/EoORaqtWEAQRHLZ?format=png&name=large' alt="" />

                            <div className="card-body">

                                <div className="card-date-container">
                                    <CalanderSmallIcon />
                                    <div className="date-container">Jan 29,2022</div>
                                </div>

                                <div className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                                <div className="card-caption">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi possimus magni veniam assumenda deleniti error commodi inventore eveniet dolorum. Odio, quam cum fugiat obcaecati laboriosam exercitationem?</div>
                            </div>
                        </div>


                    </div>



                </div>


                <iframe id='map' className='map-container' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125531.57793071153!2d76.1532102903434!3d10.511548707385993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1647153610591!5m2!1sen!2sin" width="800" height="600" style={{ height: "350px" }} loading="lazy"></iframe>


                <div className="contact-container">

                    <div className="address-card">

                        <div className="icon"><LocationIcon /></div>

                        <div className="body">
                            <div className="title">Address</div>
                            <div className="caption">
                                Lorem ipsum dolor<br />
                                sit amet consectetur<br />
                                adipisicing elit.</div>
                        </div>

                    </div>

                    <div className="address-card">

                        <div className="icon"><CallIcon /></div>

                        <div className="body">
                            <div className="title">Phone</div>
                            <div className="caption blue">+91 9876543210</div>
                            <div className="caption">9:00 Am - 7:00 PM</div>
                        </div>

                    </div>

                    <div className="address-card">

                        <div className="icon"><MessageIcon /></div>

                        <div className="body">
                            <div className="title">Mail</div>
                            <div className="caption blue">dummymail@gmail.com</div>
                            <div className="caption">24 X 7 Online support</div>
                        </div>

                    </div>

                </div>


                <div className="newletter-container">

                    <div className="header">

                        <div className="title">Sighn up Newsletter</div>
                        <div className="caption">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Eum tempore vel eos distinctio, quibusdam laudantium totam,
                            ex suscipit, eligendi laborum magnam. Aspernatur dolorum
                            beatae architecto blanditiis, iste aliquam!
                        </div>

                    </div>

                    <div className="body">

                        <div className="social-container">
                            <div className="icon">
                                <FbIcon />
                            </div>

                            <div className="icon">
                                <TwitterIcon />
                            </div>

                            <div className="icon">
                                <GplusIcon />
                            </div>

                            <div className="icon">
                                <InstaIcon />
                            </div>


                        </div>
                        <div className="contact-form-container">

                            <form action="" className='contact-form'>
                                <div className="title">Get in touch</div>

                                <input type="text" name="" id="" placeholder='Your Name*' />
                                <input type="text" name="" id="" placeholder='Your E-mail*' />
                                <input type="text" name="" id="" placeholder='Subject' />
                                <textarea className='input' name="" id="" cols="30" rows="10" placeholder='Your message*'></textarea>

                                <button>Send</button>

                            </form>

                        </div>
                    </div>
                </div>



            </div>

            <fiv className="footer">
                <div className="copyright">© Copyright 2022 Velamkunnil Grop</div>
                <div className="powerd-by">Designed by Ather Creation</div>
            </fiv>


        </div>

    )
}

export default Homepage