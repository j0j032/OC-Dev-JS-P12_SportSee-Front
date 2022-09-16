import './style/App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from './pages/Profile'
import Home from './pages/Home'

function App() {
    //const id = 12
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path= {`/profil/user/:id`} element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
