
import './App.css';
import Assessment from './components/Assessments/Assessments';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Overview from './components/Overview/Overview';
import useIsMobile from './hooks/useIsMobile';


function App() {
  const isMobile = useIsMobile();
 

  return (
    <div style={{display:"flex",background:"#E4E4E4",gap:"10px"}}>
      <div>
<Navbar fromHeader={false}/>
      </div>
      <div style={{ display: "flex", flexDirection: "column"}}>
        <Header />
        
        {
          !isMobile ?
            <Overview /> : null}
     
      
        <Assessment/>
      </div>
    
    </div>
  );
}

export default App;
