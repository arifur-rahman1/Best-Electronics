import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../Images/Icons/facebook.png'
import instagram from '../Images/Icons/instagram.png'

import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <h3>Best Electronics</h3>
                                    <p>Here you can get the original products at relable prices</p>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h3>Contact</h3>
                                    <p>Phone : 012345678912 <br /> Address: Mirpur-12 Dhaka-1216</p>

                                </div>
                                <div className="col-6 col-lg-3">
                                    <h3>Get To Know Us</h3>
                                    <h5> <Link to={'/blogs'} className='pe-auto text-decoration-none text-white'>Read BLogs</Link></h5>

                                </div>

                                <div className="col-6 col-lg-3">
                                    <h2>Follow Us</h2>
                                    <div className="row mt-2">
                                        <div className="col-6  icon">
                                            <img src={facebook} alt="" />
                                        </div>
                                        <div className="col-6 icon">
                                            <img src={instagram} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-5">
                                <p className="main-hero-para text-center w-100">
                                    Copyright @ 2022 Arifur Rahman. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;