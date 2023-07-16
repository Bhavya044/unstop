import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { CiGrid32, CiSquareQuestion } from 'react-icons/ci';
import { HiPencilAlt, HiLink } from 'react-icons/hi';
import './Navbar.css';
import useIsMobile from '../../hooks/useIsMobile';

// import component 👇
import Drawer from 'react-modern-drawer';

// import styles 👇
import 'react-modern-drawer/dist/index.css';

const Navbar = () => {
  const isMobile = useIsMobile();
       const[showNavbar,setShowNavbar]=useState(false)


  if (isMobile) {
    return (
    
      <div>
                 <div style={{marginTop:"26px",marginLeft:"10px"}} onClick={()=>setShowNavbar(true)}><FaBars/></div>    
        <Drawer
        open={showNavbar}
        onClose={() => setShowNavbar(false)}
        direction="left"
        className="drawer"
      >
          <nav>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"65vw"}}> <div>Menu</div> <div onClick={()=>setShowNavbar(false)}>X</div></div>
            <div className="navbar mobile">
             
              <ul>
        
              <li>
                <div>
                  <CiGrid32 />
                </div>
                Dashboard
                </li>
   

               
              <li >
                <div>
                  <HiPencilAlt />
                </div>
                Assessment
                  </li>
                 
              <li>
                <div>
                  <CiSquareQuestion />
                </div>
                My Library
              </li>
            
                <div className="dotted-line"></div>
           
              <li >
                <div>
                  <HiLink />
                </div>
                <div>Round</div>
                  <div>Status</div>
                    
               
           
                </li>
                   <div className="tag">Admin</div>
            </ul>
          </div>
        </nav>
        </Drawer>
        </div>
 
      
    );
  } else {
    return (
      <div>
        <nav>
          <div className="navbar">
            <ul>
              <li>
                <div>
                  <CiGrid32 />
                </div>
                Dashboard
              </li>
              <li style={{background:"#D1DAFF",border:"1px solid #686BFF",color:"#686BFF",borderRadius:"4px"}}>
                <div>
                  <HiPencilAlt />
                </div>
                Assessment
              </li>
              <li>
                <div>
                  <CiSquareQuestion />
                </div>
                My Library
              </li>
              <li className="dotted-line">
              <div className="tag">Admin</div>
              </li>
              <li>
                <div>
                  <HiLink />
                </div>
                <div>Round</div>
                <div>Status</div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

};

export default Navbar;
