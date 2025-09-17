import React from 'react';

function Hero() {
    return ( 

        <div className='container-fluid' style={{backgroundColor:"rgb(56,126,209)", color: "white"}}>
            <div className='row p-5' >
                <div className='col-7 p-5' style={{color: "white"}}>
                    <h4 className='mb-5'>Support Portal</h4>
                    <p style={{fontSize: "22px"}} className='mb-3'>Search for an answer or browse help 
                        topics to create a ticket.
                    </p>
                    <input placeholder='Eg: How do i activate F&O, why is my order getting rejected..' style={{width: "90%",height: "25%", borderRadius:"10px", border: "none"}} className='mb-3' />
                    
                    <p><a href='#' style={{color: "white"}}>Track account opening</a>    <a href='#' style={{color: "white"}}>Track segment activation</a>   <a href='#' style={{color: "white"}}>Intraday margins</a><br/><a href='#' style={{color: "white"}}>Kite user manual</a>
                    </p>
                </div>
                <div className='col-5 p-5' style={{color: "white"}}>
                    <a href='#' style={{color: "white"}}><h5 className='mb-5 text-center'>Track Tickets</h5></a>
                    <p style={{fontSize: "22px"}}>Featured</p>
                    <ol style={{fontSize: "14px"}}>
                        <li className='mb-3'><a href='#' style={{color: "white"}}>Current Takeovers and Delisting- January 2024</a></li>
                        <li><a href='#' style={{color: "white"}}>Latest Intraday leverages- MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default Hero;