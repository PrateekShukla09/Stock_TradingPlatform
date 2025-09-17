import React from 'react';

function Pricing() {
    return ( 
        <div className='conatiner p-5'>
          <div className='row p-5'>
            <div className='col-4'>
              <h2 className='mb-3 fs-2'>Unbeatable pricing</h2>
              <p>We pioneered the concept of discount 
                broking and price transparency in India. 
                Flat fees and no hidden charges.
              </p>
              <a href='' style={{textDecoration: "none"}} >See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              <img src='' />
            </div>
            <div className='col-2'></div>
            <div className='col-6'>
              <div className='row text-center'>
                <div className='col p-3 border'>
                  <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                  <p>Free equity delivery and direct mutual
                    funds.
                  </p>
                </div>
                <div className='col p-3 border'>
                  <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                  <p> Intraday and F&O
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
}

export default Pricing;