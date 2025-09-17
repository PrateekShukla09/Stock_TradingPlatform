import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-3'>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='Hero Image' className='mb-5' />
                <h1 className='mt-4 mb-3'>Invest in Everything</h1>
                <p className='mb-3'>Online platform to invest in stocks,
                    derivatives,mutual funds.
                </p>
                <a href='http://localhost:3000/signup'>
                    <button className='p-2 btn btn-primary fs-5 mb-3 mt-2' style={{width: "20%", margin: "0 auto"}}>SignUp Now</button>
                </a>
            </div>

        </div>
     );
}

export default Hero;