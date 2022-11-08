import React from "react";
import {useLocation} from 'react-router-dom';

function Farmcard() {
  const {state} = useLocation();
  return (
    <div className="farmcard">
      <div className="container text-center py-5">
        <div className="row">
          <div>
            <img
              className="img-fluid"
              src={state.img}
              width={"150px"}
              alt="apy1"
            />
          </div> 
          <div className="eth">
            <h1>{state.deposit}</h1>
          </div>
          <div className="deposit">
            <p>
          Deposit {state.deposit} Tokens and Earn MRACE
            </p>
          </div>
        </div>
        <div className="row py-5">
                <div className="col-md-6">
                    <div className="card py-4 pb-5">
                        <div className='d-flex justify-content-between '>
                            <div className='logo'> 
                                <img src="Assets/logo-cr.png" width={"140px"} alt="logo" />
                            </div>
                           
                            <div className='text-start zero'>
                                <h1>MRACE</h1>
                            </div>
                           

                        </div>
                        <div className=' px-5 py-2'>

                        <hr />
                        </div>
                        <div className='d-flex justify-content-between  mb-4'>
                            <div className='pending text-start'>
                                <h5>Earned</h5>
                                <h5>0 </h5>
                                
                            </div>
                            <div className='mracezero'>
                            <button type="button" className="btn btn-primary selectbtn ">Harvest</button>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card py-4 pb-5">
                        <div className='d-flex justify-content-between '>
                            <div className='logo'> 
                                <img src={state.img} width={"140px"} alt="logo" />
                            </div>
                           
                            <div className='text-start zero'>
                                <h1>{state.deposit}</h1>
                            </div>
                           

                        </div>
                        <div className=' px-5 py-2'>

                        <hr />
                        </div>
                        <div className='d-flex justify-content-between  mb-4'>
                            <div className='pending text-start'>
                                <h5>Staked</h5>
                                <h5>0.00 </h5>
                                
                            </div>
                            <div className='mracezero'>
                            <button type="button" className="btn btn-primary selectbtn ">Approve</button>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
      </div>
    </div>
  );
}

export default Farmcard;
