import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/index';
import SignIn from './Pages/signin';
import AccountInfo from './Pages/accountinfo';
import Listing from './Pages/listinginfo';
import Agents from './Pages/agentsinfo'
import Navbar from './Components/Navbar';
import { useState, useEffect } from 'react';
import ListingEx from './Pages/listingexample';
import AgentClickOn from './Pages/agentclick';


const ProtectedRoutes = ({ isSignedIn }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSignedIn) navigate("/");
  }, [navigate, isSignedIn])
  return (<AccountInfo />)
};
function App() {
  const [isSignedIn, setSignedIn] = useState(false);


  return (<>
    <Navbar isSignedIn={isSignedIn} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn setSignedIn={setSignedIn} />} />
      <Route path="/accountedit" element={<ProtectedRoutes isSignedIn={isSignedIn} />} />
      <Route path='/listingspage' element={<Listing />} />
      <Route path='/agentspage' element={<Agents />} />
      <Route path='/listingspay' element={<ListingEx />} />
      <Route path='/agentsclick' element={<AgentClickOn />} />
    </Routes>
  </>
  );
}


export default App;