import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    <img src='media/education.svg' style={{width: "80%"}} />
                </div>
                <div className='col'>
                    <h2 className='mb-4 fs-2'>Free and open market education</h2>

                    <p>Varsity, the largest online stock market 
                        education book in the world covering 
                        everything from the basics to advanced 
                        trading.
                    </p>
                    <a href='' style={{textDecoration: "none"}} >Versity <i class="fa fa-long-arrow-right mb-5" aria-hidden="true"></i></a>
                    <p> TradingQ&A, the most active trading and 
                        investment community in India for
                         all your market related queries.
                    </p>
                    <a href='' style={{textDecoration: "none"}} >TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;