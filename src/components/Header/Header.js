import React from 'react';
import './Header.css';
import useIsMobile from '../../hooks/useIsMobile';

const Header = () => {
     const isMobile = useIsMobile()

  return (
       <header>
    
      <div className="tabs">
    
           { !isMobile ?   <>
      
      
          <div className='tab'> Assessment</div> </>:null}
          <div className="header-line"></div>
        <div className="tab active">My Assessments</div>
     
        {
          isMobile ? <div className='tab'>
            Unstop Assessments
            </div>:null
        }
       
            </div>
          
    </header>
  );
};

export default Header;
