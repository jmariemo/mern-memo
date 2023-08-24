// import "./App.css";
import React, { useState } from "react";
import Header from "./components/Navbar/Header";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import LearnMore from "./components/LearnMore";
import Landing from "./components/Landing";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";

function App() {
  const [currentPage, setCurrentPage] = useState("Landing");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "LearnMore") {
      return <LearnMore />;
    }
    if (currentPage === "SignUp") {
      return <SignUp currentPage={currentPage} handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Login") {
      return <Login currentPage={currentPage} handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Profile") {
      return <Profile currentPage={currentPage} handlePageChange={handlePageChange} />;
    }
    return (
      <Landing currentPage={currentPage} handlePageChange={handlePageChange} />
    );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="min-h-full">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>

      <Footer />
    </div>
  );
}

export default App;
