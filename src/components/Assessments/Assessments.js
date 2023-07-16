import React, { useState } from "react"

import { FcPlus,FcLeave,FcLink,FcCalendar } from "react-icons/fc";
import Modal from "react-modal";

const Assessment = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div style={{ background: "white", padding: "15px",height:"20vw" }}>
      <div style={{ fontWeight: 500, color: "#494ba8" }}>My Assessments</div>
      <div style={{ display: "flex",marginTop: "10px",justifyContent:"space-between" }}>
        <div
          style={{
            background: "#F0F0F0",
            borderRadius: "7px",
            border: "1px dotted #CFCFCF",
            width: "22vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "30px",
            justifyItems: "center",
            alignContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}
          onClick={openModal}
        >
          <div>
            <FcPlus style={{ fontSize: "40px" }} />
          </div>
          <div style={{ fontWeight: 500 }}>New Assessment</div>
          <div style={{ fontSize: "10px", fontWeight: 500 }}>
            From here you can add questions of multiple types like MCQ's, subjective!
          </div>
                 </div>
               <div
          style={{
        
            borderRadius: "7px",
            border: "1px solid #CFCFCF",
                           width: "22vw",
            padding:"10px"
         
          }}
    
        >
          <div>
            <FcLeave style={{ fontSize: "40px" }} />
          </div>
                      <div style={{ fontWeight: 500 }}>Math Assessment</div>
                      <div style={{display:"flex"}}>
                             <div style={{ fontSize: "12px", fontWeight: 500 }}>
          Job
                           </div>
                             <div style={{height:
                                "14px", border: "1px solid #D2D2D2",marginRight:"3px", marginLeft: "5px"
                           }}></div>
                           <div style={{ fontSize: "10px", color: "#C6C6C6" }}> <FcCalendar/>20 Apr 2023</div>
                        
                      </div>   <div style={{border:"1px dotted #D0D0D0",marginTop:"10px",width:"20vw",marginLeft:"10px"}}></div>
                      <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
                           <div style={{justifySelf:"flex-start",display:"flex",gap:"10px"}}>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                     <div>
                                           00 
                                     </div>
                                     <div style={{fontSize:"13px"}}>
                                          Duration
                                     </div>
                                </div>
                                 <div style={{display:"flex",flexDirection:"column"}}>
                                     <div>
                                           00 
                                     </div>
                                     <div style={{fontSize:"13px"}}>
                                          Duration
                                     </div>
                           </div>
                           
                           </div>  
                           
                               <div style={{justifySelf:"flex-end",display:"flex",gap:"10px"}}>
                                <div style={{borderRadius:"20px",border:"1px solid gray",height:"max-content",fontSize:"13px",padding:"6px"}}>
                             <FcLink/>        Share
                                </div>
                                <div style={{borderRadius:"50%", width:"2vw",textAlign:"center",height:"max-content",background:"purple",padding:"5px",color:"white",fontWeight:"bold"}}>
                              S       
                                </div>
                              
                           
                           </div>  
                     </div>
        
        </div>
                  <div
          style={{
        
            borderRadius: "7px",
            border: "1px solid #CFCFCF",
                           width: "22vw",
            padding:"10px"
         
          }}
    
        >
          <div>
            <FcLeave style={{ fontSize: "40px" }} />
          </div>
                      <div style={{ fontWeight: 500 }}>Math Assessment</div>
                      <div style={{display:"flex"}}>
                             <div style={{ fontSize: "12px", fontWeight: 500 }}>
          Job
                           </div>
                             <div style={{height:
                                "14px", border: "1px solid #D2D2D2",marginRight:"3px", marginLeft: "5px"
                           }}></div>
                           <div style={{ fontSize: "10px", color: "#C6C6C6" }}> <FcCalendar/>20 Apr 2023</div>
                        
                      </div>   <div style={{border:"1px dotted #D0D0D0",marginTop:"10px",width:"20vw",marginLeft:"10px"}}></div>
                      <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
                           <div style={{justifySelf:"flex-start",display:"flex",gap:"10px"}}>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                     <div>
                                           00 
                                     </div>
                                     <div style={{fontSize:"13px"}}>
                                          Duration
                                     </div>
                                </div>
                                 <div style={{display:"flex",flexDirection:"column"}}>
                                     <div>
                                           00 
                                     </div>
                                     <div style={{fontSize:"13px"}}>
                                          Duration
                                     </div>
                           </div>
                           
                           </div>  
                           
                               <div style={{justifySelf:"flex-end",display:"flex",gap:"10px"}}>
                                <div style={{borderRadius:"20px",border:"1px solid gray",height:"max-content",fontSize:"13px",padding:"6px"}}>
                             <FcLink/>        Share
                              </div>
                              
                           
                           </div>  
                     </div>
        
        </div>
      </div>

      <Modal
                 isOpen={modalIsOpen}
                  contentLabel="Example Modal"
        onRequestClose={() => setModalIsOpen(false)}
  style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          content: {
            border: "none",
            borderRadius: "10px",
            background: "white",
               padding: "20px",
            height:"max-content",
            bottom: "0",
            left: "0",
            right: "0",
            maxWidth: "500px",
             margin: "auto",
   
          }
        }}
      >
                 <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{
                           display:
                    "flex",justifyContent:"space-between"}}>
                  
                      <div style={{fontWeight:"bold",color:"#000295"}}>
                           Create New Assessment
                           </div>
                           <div onClick={()=>setModalIsOpen(false)}>
                                X
                           </div>
                                    
                      </div>
                      <div style={{ border: "1px solid gray", marginTop: "12px" }} />
                      <form style={{ marginTop: "10px" }}>
                           <div style={{display:"flex",flexDirection:"column",gap:"5px",marginBottom:"15px"}}>
       <label style={{fontWeight:600,color:"#000295",fontSize:"small"}}>
                                Name of the assessment
                           </label>
                           <input placeholder="Type Here" style={{padding:"9px", border:"1px solid #CFCFCF",borderRadius:"5px"}}/>
                           </div>
                             <div style={{display:"flex",flexDirection:"column",gap:"5px",marginBottom:"15px"}}>
       <label style={{fontWeight:600,color:"#000295",fontSize:"small"}}>
                        Purpose of the test is
                           </label>
                      
<select name="cars" id="cars" style={{padding:"9px", border:"1px solid #CFCFCF",borderRadius:"5px"}}>
  <option value="volvo">Select</option>

</select>
                           </div>
                               <div style={{display:"flex",flexDirection:"column",gap:"5px",marginBottom:"15px"}}>
       <label style={{fontWeight:600,color:"#000295",fontSize:"small"}}>
                     Description
                           </label>
                      
<select name="cars" id="cars" style={{padding:"9px", border:"1px solid #CFCFCF",borderRadius:"5px"}}>
  <option value="volvo">Select</option>

</select>
                           </div>
                               <div style={{display:"flex",flexDirection:"column",gap:"5px",marginBottom:"15px"}}>
       <label style={{fontWeight:600,color:"#000295",fontSize:"small"}}>
                     Description
                           </label>
                                <div style={{ padding: "9px", border: "1px solid #CFCFCF", borderRadius: "5px", display: "flex", flexDirection: "column" }}>
                                     <div style={{display:"flex",gap:"20px"}}>
                                          <div style={{width:"max-content",background:"#D6D7FF",borderRadius:"20px",padding:"8px",fontSize:"10px"}}>
                                               UI/UX and Design  X </div> 
                                          <div style={{width:"max-content",background:"#D6D7FF",borderRadius:"20px",padding:"8px",fontSize:"10px"}}>
                                            UI/UX and Design  X </div> <div style={{width:"max-content",background:"#D6D7FF",borderRadius:"20px",padding:"8px",fontSize:"10px"}}>
                                            UI/UX and Design  X </div> 
                                     </div>
                                       <div style={{display:"flex",gap:"20px",marginTop:"10px",marginBottom:"10px"}}>
                                          <div style={{width:"max-content",background:"#D6D7FF",borderRadius:"20px",padding:"8px",fontSize:"10px"}}>
                                               UI/UX and Design  X </div> 
                                          <div style={{width:"max-content",background:"#D6D7FF",borderRadius:"20px",padding:"8px",fontSize:"10px"}}>
                                            UI/UX and Design  X </div> 
                                     </div>
                                     
                               
                                                       <input placeholder="Type Here" style={{padding:"5px", border:"1px solid #CFCFCF",borderRadius:"5px"}}/>
                                 
                      
                                </div>
                                  <div style={{display:"flex",flexDirection:"column",gap:"5px",marginBottom:"15px"}}>
       <label style={{fontWeight:600,color:"#000295",fontSize:"small"}}>
                            Duration of the assessment
                           </label>
                           <input placeholder="HH:MM:SS" style={{padding:"9px", border:"1px solid #CFCFCF",borderRadius:"5px"}}/>
                                </div>
                               
                                     <button style={{height:"27px",padding:"3px",background:"#0003B5",color:"white",border:"1px solid #0003B5",borderRadius:"4px"}} >Save</button>
                             
                           </div>
                       
                      </form>
                      
     </div>
      </Modal>
    </div>
  );
};

export default Assessment;


