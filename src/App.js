// import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import LearnMore from "./components/LearnMore";

function App() {
  const [currentPage, setCurrentPage] = useState("Landing");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Landing") {
      return <Landing />;
    }
    if (currentPage === "SignUp") {
      return <SignUp />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    return <LearnMore />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
