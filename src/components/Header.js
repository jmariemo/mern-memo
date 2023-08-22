import Navbar from "./Navbar";

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row sticky py-2 items-center md:justify-between bg-green font-sans text-white">
        <div className="flex flex-col items-center md:flex-row md:items-end">
          <a
            href="#landing"
            className="text-2xl md:p-2"
            onClick={() => handlePageChange("Landing")}
          >
            memo
          </a>
          <p className="text-lg md:border-l-2 md:p-2">don't forget!</p>
        </div>
        <div>
          <Navbar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
