import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar" 
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [username, setusername] = useState("aditya")

  return (
    <AppContext.Provider value={{username, setusername}}>
    <div className="App">
      <Router> 
         <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/*' element={<h1> PAGE NOT FOUND</h1> } />
        </Routes>
      </Router>
    </div>
    </AppContext.Provider>
  );
}

export default App;
