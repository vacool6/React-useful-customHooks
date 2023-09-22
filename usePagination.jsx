import React, { useState } from "react";

const appStyle = {
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
  margin: "20px",
};

const listStyle = {
  listStyle: "none",
  padding: "0",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const listItemStyle = {
  backgroundColor: "#f0f0f0",
  padding: "10px",
  margin: "5px",
  borderRadius: "4px",
};

const paginationControlsStyle = {
  margin: "10px",
};

const buttonStyle = {
  margin: "10px",
  padding: "5px 10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const disabledButtonStyle = {
  backgroundColor: "#ccc",
  cursor: "not-allowed",
};

const pageIndicatorStyle = {
  marginTop: "20px",
};

function usePagination(totalItems, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  };
}

function App() {
  const totalItems = 50; // Total number of items
  const itemsPerPage = 10; // Number of items per page

  const { currentPage, totalPages, nextPage, prevPage, goToPage } =
    usePagination(totalItems, itemsPerPage);

  // Generate data for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataForCurrentPage = Array.from(
    { length: itemsPerPage },
    (_, index) => `Item ${startIndex + index + 1}`
  );

  return (
    <div style={appStyle}>
      <h1>Pagination Example</h1>
      <ul style={listStyle}>
        {dataForCurrentPage.map((item) => (
          <li key={item} style={listItemStyle}>
            {item}
          </li>
        ))}
      </ul>
      <div style={paginationControlsStyle}>
        <button
          onClick={prevPage}
          style={
            currentPage === 1
              ? { ...buttonStyle, ...disabledButtonStyle }
              : buttonStyle
          }
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          style={
            currentPage === totalPages
              ? { ...buttonStyle, ...disabledButtonStyle }
              : buttonStyle
          }
        >
          Next
        </button>
      </div>
      <div style={pageIndicatorStyle}>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button onClick={() => goToPage(1)} style={buttonStyle}>
          First
        </button>
        <button onClick={() => goToPage(totalPages)} style={buttonStyle}>
          Last
        </button>
      </div>
    </div>
  );
}

export default App;
