import React from 'react'
import MainVideo from '../../assets/video.mp4'
import './Hero.css'

const hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1>Kalai Bussiness Marketing</h1>
                <h1><span className="blue">Multi </span>Level Markrting</h1>
                <p>Guaranteed Your Money</p>
                <div className="btn-group">
                    <button className="btn">Join KBM</button>
                    {/* <button className="btn btn-outline">Documentation</button> */}
                    <button className="btn btn-outline">FAQ</button>
                </div>
            </div>
            <div className="bottom-text">
                <h2>Join Quickly</h2>
            </div>
        </div>
    )
}

export default hero
