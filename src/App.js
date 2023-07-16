
import './App.css';
import Assessment from './components/Assessments/Assessments';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Overview from './components/Overview/Overview';

function App() {
  return (
    <div style={{display:"flex",background:"#E4E4E4",gap:"10px"}}>
      <div>
<Navbar fromHeader={false}/>
      </div>
      <div style={{ display: "flex", flexDirection: "column"}}>
      <Header/>
        <Overview />
        <Assessment/>
      </div>
    
    </div>
  );
}

export default App;
