import React from 'react';

const Search = () => {
  return (
    <div className="search-container">
      <form className="search-form">
        <div className="search-box-container">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>

        <div className="search-fields">

          <input type="text" className="search-calendar" name="calendar" placeholder="Dates..." />

          <select className="search-category">
            <option value="none" selected disabled>Category</option>
            <option className="options" value="scifi">Sci-Fi</option>
            <option value="fantasy">Fantasy</option>
          </select>

          <input type="submit" className="search-submit" value="Search" />

        </div>

      </form>
    </div>
  );
};

export default Search;