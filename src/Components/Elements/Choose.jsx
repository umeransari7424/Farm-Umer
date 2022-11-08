import React from 'react'
import { useNavigate} from "react-router-dom";
import data from '../Utils/Apy_data.json'

function Choose() {
    const navigate = useNavigate();
  return (
    <div className='choose'>
        <div className="container text-center py-5">
            <div className="row py-5">
                <h1 className='pool'>Choose Your Stake Pool</h1>
            </div>
            <div className="row ">
                {data.map(item=>(
                    <div className="col-md-3">
                    <div className="card py-2 mb-3">
                            <div className='card2  py-2'>
                                <div>
                                    <img className="img-fluid" src={item.img} width={"100px"} alt="apy1" />
                                </div>
                                <div className='apy mt-2'>
                                    <h3>
                                        {item.apy}
                                    </h3>
                                </div> <br />
                                <div className='d-flex justify-content-between'>
                                    <div className='deposit text-start'>
                                        <div>
                                            <h5>Deposit</h5>
                                        </div>
                                        <div>
                                            <h5>Earn</h5>
                                        </div>
    
                                    </div>
                                    <div className='mrace'>
                                        <div>
                                            <h5>{item.deposit}</h5>
                                        </div>
                                        <div>
                                            <h5>MRACE</h5>
                                        </div>
    
                                    </div>
    
                                </div>
                            
                            <div className='px-5'>
                                <hr />
                            </div> 
    
                            <div className='mb-2'>
                            <button onClick={()=>navigate('/farmcard',{state:item})} type="button" className="btn btn-primary selectbtn ">Select</button>
                            </div>
                            </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Choose