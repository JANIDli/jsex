
import Home from './Component/Page/Home';
import Registration from './Component/Page/Registration';
import Login from './Component/Page/Login';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='register' element={<Registration/>} />
        <Route exact path='login' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
