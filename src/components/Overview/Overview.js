import React from "react"
import { FcAcceptDatabase, } from "react-icons/fc";
import { FiUsers } from "react-icons/fi";
import "./Overview.css"


const Overview = () => {
     return (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" ,background:"white",padding:"15px"}}>
               <div style={{fontSize:"medium",fontWeight:500,color:"#00219A"}}>Assessments Overview</div>
               <div style={{border:"1px solid #E2E2E2",borderRadius:"10px",padding:"10px",display:"flex"}}>
                    <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                         <div style={{fontSize:"medium",fontWeight:500,color:"#00219A"}}>
                              Total Assessment
                         </div>
                         <div style={{ display: "flex", gap: "10px" }}>
                              <FcAcceptDatabase  style={{fontSize:"20px"}}/>
                                <div style={{fontWeight:700}}>
                              34
                              </div>
                                
                         </div>
                    
                    </div>
                       <div className="overview-vertical-line"></div>
                        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                         <div style={{fontSize:"medium",fontWeight:500,color:"#00219A"}}>
                            Candidates
                         </div>
                         <div style={{ display: "flex", gap: "10px" }}>
                              <div style={{ display: "flex", gap: "10px" }}>
 <FiUsers  style={{fontSize:"20px"}}/>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                        <div style={{ fontWeight: 700, display:"flex",gap:"3px"}}>  11,145 <div style={{color:"green"}}>+89</div></div> 
                                        <div>Total Candidate  </div>
                                   </div>
                                       <div className="middle-line"></div>
                           
                              <div style={{display:"flex",flexDirection:"column"}}>
                                             <div style={{ fontWeight: 700, display:"flex",gap:"3px"}}>  1,14<div style={{color:"green"}}>+89</div></div>
                                         <div>Who Attempted</div>
                                   </div>
                              </div>
                             
                                
                         </div>
                    
                    </div>
                    <div className="overview-vertical-line"></div>
                     <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                         <div style={{fontSize:"medium",fontWeight:500,color:"#00219A"}}>
                            Candidates Source
                         </div>
                         <div style={{ display: "flex", gap: "10px" }}>
                              <div style={{ display: "flex", gap: "10px" }}>
 <FiUsers  style={{fontSize:"20px"}}/>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                        <div style={{ fontWeight: 700, display:"flex",gap:"3px"}}>  11,000 <div style={{color:"green"}}>+89</div></div> 
                                        <div> </div>
                                   </div>
                                       <div className="middle-line"></div>
                           
                              <div style={{display:"flex",flexDirection:"column"}}>
                                             <div style={{ fontWeight: 700, display:"flex",gap:"3px"}}>  145<div style={{color:"green"}}>+89</div></div>
                                         <div>Social Share</div>
                                   </div>
                                     
                              <div style={{display:"flex",flexDirection:"column"}}>
                                             <div style={{ fontWeight: 700, display:"flex",gap:"3px"}}>  1,45<div style={{color:"green"}}>+89</div></div>
                                         <div>Unique Link</div>
                                   </div>
                              </div>
                             
                                
                         </div>
                         
                    
                    </div>
                       <div className="overview-vertical-line"></div>
                         <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                         <div style={{fontSize:"medium",fontWeight:500,color:"#00219A"}}>
                              Total Purpose
                         </div>
                         <div style={{ display: "flex", gap: "10px" }}>
                              <FcAcceptDatabase  style={{fontSize:"20px"}}/>
                                <div style={{fontWeight:700}}>
                              11
                              </div>
                                
                         </div>
                    
                    </div>
               </div>
               
               
          </div>
     )
}
export default Overview