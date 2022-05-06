import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/index';
import SignIn from './Pages/signin';
import AccountInfo from './Pages/accountinfo';
import Listing from './Pages/listinginfo';
import Agents from './Pages/agentsinfo'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/accountedit" element={<AccountInfo />} />
      <Route path='/listingspage' element={<Listing />} />
      <Route path='/agentspage' element={<Agents />} />
    </Routes>
  );
}


export default App;