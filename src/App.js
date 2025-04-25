import './App.css';
import About from  './pages/about'
import Home from  './pages/home'
import { Routes, Route } from "react-router"
import "./utilities/scroll"
import Facts from './pages/facts';
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/facts' element={<Facts/>}></Route>
      </Routes>
  );
}

export default App;
