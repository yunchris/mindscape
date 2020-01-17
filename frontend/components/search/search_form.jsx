import React from 'react';

const Search = () => {

  window.onload = function() {
    const selector = document.querySelector('.custom-select-wrapper');
    selector.addEventListener('click', function () {
      this.querySelector('.custom-select').classList.toggle('open');
    })

    for (const option of document.querySelectorAll(".custom-option")) {
      option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
          this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
          this.classList.add('selected');
          this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
      })
    }
  }
  
  window.addEventListener('click', function (e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });
  
  return (
    <div className="search-container">
      <form className="search-form">
        <div className="search-box-container">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        <div className="search-fields">
          <input type="text" className="search-calendar" name="calendar" placeholder="Dates..." />

          <div className="custom-select-wrapper">
            <div className="custom-select">
              <div className="custom-select__trigger"><span>All</span>
                <div className="arrow"></div>
              </div>
              <div className="custom-options">
                <span className="custom-option selected" data-value="all">All</span>
                <span className="custom-option" data-value="scifi">Sci-Fi</span>
                <span className="custom-option" data-value="horror">Horror</span>
                <span className="custom-option" data-value="fantasy">Fantasy</span>
                <span className="custom-option" data-value="past">Past</span>
                <span className="custom-option" data-value="present">Present</span>
                <span className="custom-option" data-value="romance">Romance</span>
              </div>
            </div>
          </div>

          {/* <select className="search-category">
            <option value="all">All...</option>
            <option value="scifi">Sci-Fi</option>
            <option value="horror">Horror</option>
            <option value="fantasy">Fantasy</option>
            <option value="past">Past</option>
            <option value="present">Present</option>
            <option value="romance">Romance</option>
          </select> */}
          <input type="submit" className="search-submit" value="Search" />
        </div>
      </form>
    </div>
  );
};

export default Search;