import logo from './logo.svg';
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Home';
import Addedit from './pages/Addedit';
import Detailpages from './pages/Detail';
function App() {
  return (
    <div className="App">

      <NavLink className="app" to="/" end>
        HomePages
      </NavLink>
      <NavLink className="app" to="/addit">
        Products
      </NavLink>
      
      <Routes>
        <Route path='/'   element={<Homepage />}   />
        <Route path='/addit' element={<Addedit />} />
        <Route path='/addit/:postid' element={<Addedit />}  />
        <Route path='/detail/:postid' element={<Detailpages />} />
      </Routes>
    </div>
  );
}

export default App;
