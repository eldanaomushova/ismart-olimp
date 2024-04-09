import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Organization from './components/organization';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/nav' element={<Navbar />}></Route>
        <Route path='/org' element={<Organization />}></Route>
      </Routes>
    </Router>

  
  );
}

export default App;
