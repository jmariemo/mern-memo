import Navbar from "./Navbar";

function Header({ currentPage, handlePageChange }) {
  return (
      <div className="sticky top-0 z-10 flex flex-col md:flex-row pt-2 pb-6 items-center md:justify-between bg-gradient-to-b from-green to-white text-white">
        <div className="flex flex-col items-center md:flex-row md:items-end">
          <a
            href="#landing"
            className="text-2xl md:p-2 font-display"
            onClick={() => handlePageChange("Landing")}
          >
            memo
          </a>
          <p className="text-lg md:border-l-2 md:p-2 font-light">don't forget!</p>
        </div>
        <div>
          <Navbar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
  );
}

export default Header;
