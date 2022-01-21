import React from "react";

const Pagination = ({pageNumber, setPageNumber }) => {
  let prev = () => {
      // if page is set to 1 stop there, don't count in reverse
      if(pageNumber === 1) return;
    // 'i' represents the next value, set in the useState at App.js
    setPageNumber((i) => i - 1);
  };
  // 'i' represents the previous value, set in the useState at App.js
  let next = () => {
    setPageNumber((i) => i + 1);
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-3">
      <button onClick={prev} className="btn btn-primary">
        Prev
      </button>
      <button onClick={next} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default Pagination;
