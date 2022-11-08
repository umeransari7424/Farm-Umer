import React from 'react'
// import {Link} from 'react-router-dom'
import {FaWallet} from 'react-icons/fa'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg py-2">
        <div className="container">
          <img src="Assets/logo.png" width={"370px"} alt="PorkSwap" />

         
            <button type="button" class="btn btn-primary">
            <FaWallet/>  &nbsp;
                Connent Wallet</button>
          
        </div>
      </nav>
    </div>
  )
}

export default Header