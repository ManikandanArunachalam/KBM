import React from 'react'
import './About.css'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc'
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <h2>A Multi level Marketing</h2>
                <p>The Kalai Bussiness Marketing team is a Mlm .</p>
                <div className="card-container">
                    <div className="card">
                        <AboutCard icon={<SiHiveBlockchain className='icon' />} heading='Products' text='' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiStrapi className='icon' />} heading='Customer  Feedback' text='' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiFsecure className='icon' />} heading='Product feed back' text='' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<VscServerProcess className='icon' />} heading='Employee of the year' text='' />
                    </div>
                </div>
                <a href="/" className="btn">Join KBM</a>
            </div>
        </div>
    )
}

export default About
