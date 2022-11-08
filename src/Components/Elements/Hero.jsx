import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <div className="container text-center">
            <div className="row py-3">
                <div className='farm1'>
                    <h1>
                        FARM
                    </h1>
                    <p>
                    Stake your tokens to earn more $MRACE.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card py-4 pb-5">
                        <div className='d-flex justify-content-between '>
                            <div className='logo'> 
                                <img src="Assets/logo-cr.png" width={"140px"} alt="logo" />
                            </div>
                            <div className='balance'>
                                <div className='text-start'>

                                <h3 >
                                Your MRACE <br /> Balance
                                </h3>
                                </div>
                                <div className='text-end zero'>
                                    0.00
                                </div>
                            </div>

                        </div>
                        <div className=' px-5 py-2'>

                        <hr />
                        </div>
                        <div className='d-flex justify-content-between  mb-4'>
                            <div className='pending'>
                                <h5>Pending Harvest</h5>
                                <h5>Daily Output of <span className='mrace'>MRACE</span> </h5>
                                
                            </div>
                            <div className='mracezero'>
                                <h5>0.00 <span className='mrace'>MRACE</span> </h5>
                                <h5>0.00 <span className='mrace'>MRACE</span> </h5>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card py-2">
                        <div className='card2  py-3'>
                            <div>
                                <img className='img1 img-fluid' src="Assets/apy1.png" width={"120px"} alt="apy1" />
                            </div>
                            <div className='apy'>
                                <h3>
                                    APY : <br />
                                    500%
                                </h3>
                            </div>
                            <div>
                            <img className='img2 img-fluid' src="Assets/logo-cr.png" width={"140px"} alt="logo" />
                            </div>

                        </div>
                        <div className='px-5'>
                            <hr />
                        </div>
                        <div className='earn1 '>
                            <div className='earn'>
                                <h5>Earn</h5>
                            </div>
                            <div className='gmt'>
                                <h5>GMT</h5>
                            </div>
                            <div className='earn'>
                                <h5>Deposit</h5>
                            </div>
                            <div className='gmt'>
                                <h5>MRACE</h5>
                            </div>

                        </div> <br />

                        <div className='mb-3'>
                        <button type="button" className="btn btn-primary selectbtn ">Select</button>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero