import React from 'react'
import './Developer.css'
import KBM from '../navbar/pic2.png'

const Developer = () => {
    return (
        <div className='developers'>
            <div className="container">
                <div className="left">
                    <h2>Superpowers for KBM.</h2>
                    <p>Checkout the <span className="blue">documentation </span>, the <span className="blue">quick start</span> or a guide below to our prooduct </p>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={KBM} alt="KBM"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developer
