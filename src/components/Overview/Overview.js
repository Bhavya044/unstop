import React from "react";
import { FcAcceptDatabase } from "react-icons/fc";
import { FiUsers } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa6";
import "./Overview.css";
import useIsMobile from '../../hooks/useIsMobile';

const Overview = () => {
  const isMobile = useIsMobile()

  return (
    <div className="container">
      <div className="title">Assessments Overview</div>
      <div className="border">
                 <div className="total-assessment" style={{ display: isMobile ? "flex" : "", flexDirection: isMobile ? "row" :"column"}}>
                     
                      <div>
                           
                   
          <div className="title">Total Assessment</div>
          <div className="candidates-sub">
            <FcAcceptDatabase className="icon" />
            <div className="font-weight-700">34</div>
                           </div>
                              </div>
                      {
                           isMobile ?  <div> <div className="vertical-line"></div>
        <div className="total-purpose">
          <div className="title">Total Purpose</div>
          <div className="candidates-sub">
            <FcAcceptDatabase className="icon" />
            <div className="font-weight-700">11</div>
          </div>
        </div></div>:null
                      }
        </div>
        <div className="vertical-line"></div>
        <div className="candidates">
          <div className="title">Candidates</div>
          <div className="candidates-sub">
            <div className="candidates-sub-sub">
         <div className="font-weight-700">    <FiUsers/>     11,145 <span className="green">+89</span></div>
              <div className="sub">  Total Candidate</div>
            </div>
            <div className="middle-line"></div>
            <div className="candidates-sub-sub">
              <div className="font-weight-700">1,14<span className="green">+89</span></div>
              <div className="sub">Who Attempted</div>
            </div>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="candidates-source">
          <div className="title">Candidates Source</div>
          <div className="candidates-source-sub">
            <div className="candidates-source-sub-sub">
              <div className="font-weight-700"><FaGlobe/>11,000 <span className="green">+89</span></div>
             <div className="sub">E-mail</div>
            </div>
            <div className="middle-line"></div>
            <div className="candidates-source-sub-sub">
              <div className="font-weight-700">145 <span className="green">+89</span></div>
              <div className="sub">Social Share</div>
              
                           </div>
                               <div className="middle-line"></div>
            <div className="candidates-source-sub-sub">
              <div className="font-weight-700">1,45 <span className="green">+89</span></div>
              <div className="sub">Unique Link</div>
            </div>
          </div>
                 </div>
                 {
                      !isMobile ?  <>  <div className="vertical-line"></div>
        <div className="total-purpose">
          <div className="title">Total Purpose</div>
          <div className="candidates-sub">
            <FcAcceptDatabase className="icon" />
            <div className="font-weight-700">11</div>
          </div>
        </div></>:null
                 }
     
      </div>
    </div>
  );
};

export default Overview;
