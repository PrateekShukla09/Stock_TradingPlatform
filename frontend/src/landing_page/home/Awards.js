import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg' alt='Awards image' />
                </div>
                <div className='col-6 p-5 mt-1'>
                    <h2>Largest stock broker in India</h2>
                    <p> 2+ million Zerodha clients contribute to 
                        over 15% of all retail
                        order volumes in India daily by 
                        trading and investing in:
                    </p>
                
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>
                                        Futures and Options
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Commodity derivatives
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    Currency derivatives 
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>
                                        Stocks & IPOs
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    Direct mutual funds 
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    Bonds and Govt. Securities 
                                </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' className='mt-2' style={{width: "90%"}} />
                </div>
            </div>
        </div>
     );
}

export default Awards;