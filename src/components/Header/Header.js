import React from 'react';
import './Header.css';
import useIsMobile from '../../hooks/useIsMobile';

const Header = () => {
     const isMobile = useIsMobile()

  return (
       <header>
      { isMobile ?   <div>
      
      
          <div> <h3 style={{ color: "black" }}>Assessments</h3></div> </div>:null}
      <div className="tabs">
    
          <div className='tab'>Assessment</div>     
          <div className="vertical-line"></div>
        <div className="tab active">My Assessments</div>
     
       
            </div>
          
    </header>
  );
};

export default Header;
