import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);

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
            <option value="all">All...</option>
            <option value="scifi">Sci-Fi</option>
            <option value="horror">Horror</option>
            <option value="fantasy">Fantasy</option>
            <option value="past">Past</option>
            <option value="present">Present</option>
            <option value="romance">Romance</option>
          </select>
          <input type="submit" className="search-submit" value="Search" />
        </div>
      </form>
    </div>
  );
};

export default Search;