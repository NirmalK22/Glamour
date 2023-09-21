import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import Packages from './pages/Packages';

import './App.css';
import Services from './pages/Services';

import './App.css';
import Aboutus from './pages/Aboutus';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/packages" element={<Packages/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;

