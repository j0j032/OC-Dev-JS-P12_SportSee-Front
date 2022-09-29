import './style/App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from './pages/Profile'
import InProgress from './pages/inProgress'
import Error404 from './pages/Error404'



function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/home'} element={<InProgress/>}/>
              <Route path={'/settings'} element={<InProgress/>}/>
              <Route path={'/community'} element={<InProgress/>}/>
              <Route path={'*'} element={<Error404/>}/>
              <Route path= {`/profil/user/:id`} element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
      
  );
}

export default App;
