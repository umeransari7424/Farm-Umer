import React from "react";
import { AiOutlineMedium ,AiFillGithub , AiFillRedditCircle} from "react-icons/ai";
import {BsTwitter , BsTelegram , BsInstagram , BsFacebook} from "react-icons/bs";
import {FaDiscord} from "react-icons/fa"

function Community() {
  return (
    <div className="community">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h1>
                YOUR STEPS COUNT <br />
                WITH Marathon!
              </h1>
            </div>
            <div className="py-3">
              <img src="Assets/mobileapp.svg" alt="mobileapp" /> &nbsp; &nbsp;
              &nbsp;
              <img src="Assets/mobileapp1.svg" alt="mobileapp1" />
            </div>
          </div>
          <div className="col-md-6 text-end">
            <div>
              <h1 className="join">Join Our Comunity</h1>
            </div>
            <br />

            <div>
              <AiOutlineMedium size={"30px"} style={{color:"#a5abb3FF"}}/> &nbsp; 
              <BsTwitter size={"30px"} style={{color:"#a5abb3FF"}}/>&nbsp;
              <BsTelegram size={"30px"} style={{color:"#a5abb3FF"}}/>&nbsp;
              <FaDiscord size={"30px"} style={{color:"#a5abb3FF"}}/>&nbsp;
              <BsInstagram size={"30px"} style={{color:"#a5abb3FF"}}/>&nbsp;
              <AiFillGithub size={"30px"} style={{color:"#a5abb3FF"}}/>&nbsp;
              <AiFillRedditCircle size={"30px"} style={{color:"#a5abb3FF"}}/>&nbsp;
              <BsFacebook size={"30px"} style={{color:"#a5abb3FF"}}/>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
