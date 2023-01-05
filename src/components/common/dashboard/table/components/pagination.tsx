import React from 'react';

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="left-side">
        <span className="showing">Showing</span>
        <select>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
        </select>
        <span className="out-of">out of 100</span>
      </div>

      <div className="right-side">
        <button className="left-button">
          <img src="/img/dashboard/icons/caret-left.svg" alt="left" />
        </button>
        <ul className="page-numbers">
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>...</li>
          <li>15</li>
          <li>16</li>
        </ul>
        <button className="right-button">
          <img src="/img/dashboard/icons/caret-right.svg" alt="left" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
