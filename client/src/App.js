// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import UserProfile from "./pages/UserProfile";
import ContactCards from "./pages/ContactCardsModal";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <Router>
    <>
      <Navbar />
      <Routes>
        <Route 
          path='/' 
          element={<Landing />} 
        />
        <Route 
          path='/profile' 
          element={<UserProfile />} 
        />
        <Route 
          path='/contacts' 
          element={<ContactCards />} 
        />
        <Route 
          path='*'
          element={<h1>Sorry, nothing to see here!</h1>}
        />
      </Routes>
      <Footer />
    </>
  </Router>
  );
}

export default App;
