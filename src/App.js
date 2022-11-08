
import './App.scss';
// import Header from './Components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Layout/Base";
// import Farmcard from './Pages/Farmcard';
import Home from './Pages/Home';
import Mrace from './Pages/Mrace';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/farmcard" element={<Mrace />} />
            
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
