
import Home from './Component/Home';
import Registration from './Component/Registration';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='register' element={<Registration/>} />
      </Routes>
    </Router>
  );
}

export default App;
