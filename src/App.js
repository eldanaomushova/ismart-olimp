import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Organization from './components/organization';
import Footer from './components/footer';
import Team from './components/team';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/nav' element={<Navbar />}></Route>
        <Route path='/org' element={<Organization />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path='/slider' element={<Team />}></Route>
      </Routes>
    </Router>

  
  );
}

export default App;
