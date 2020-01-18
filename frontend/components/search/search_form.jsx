import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.selectClick = this.selectClick.bind(this);
    // this.closeClick = this.closeClick.bind(this);
  }

  componentDidMount() {
    // const selector = document.querySelector(".custom-select-wrapper");
    // selector.addEventListener("click", function() {
    //   this.querySelector(".custom-select").classList.toggle("open");
    // });

    // for (const option of document.querySelectorAll(".custom-option")) {
      // option.addEventListener("click", function() {
      //   if (!this.classList.contains("selected")) {
      //     this.parentNode
      //       .querySelector(".custom-option.selected")
      //       .classList.remove("selected");
      //     this.classList.add("selected");
      //     this.closest(".custom-select").querySelector(
      //       ".custom-select__trigger span"
      //     ).textContent = this.textContent;
      //   }
      // });
    // }
    
    // window.addEventListener("click", function(e) {
    //   const select = document.querySelector(".custom-select");
    //   debugger
    //   if (!select.contains(e.target)) {
    //     select.classList.remove("open");
    //   }
    // });

  }

  handleClick() {
    const select = document.querySelector(".custom-select");
    select.classList.toggle("open");
  }

  selectClick(e) {
    if (!e.target.classList.contains("selected")) {
      e.target.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      e.target.classList.add("selected");
      e.target.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).textContent = e.target.textContent;
    }
  }

  render() {
    return (
      <div className="search-container">
        <form className="search-form">
          <div className="search-box-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          </div>
          <div className="search-fields">
            <input
              type="text"
              className="search-calendar"
              name="calendar"
              placeholder="Dates..."
            />

            <div className="custom-select-wrapper" onClick={this.handleClick}>
              <div className="custom-select" >
                <div className="custom-select__trigger">
                  <span>All</span>
                  <div className="arrow"></div>
                </div>
                <div className="custom-options">
                  <span className="custom-option selected" data-value="all" onClick={this.selectClick}>
                    All
                  </span>
                  <span className="custom-option" data-value="scifi" onClick={this.selectClick}>
                    Sci-Fi
                  </span>
                  <span className="custom-option" data-value="fantasy" onClick={this.selectClick}>
                    Fantasy
                  </span>
                  <span className="custom-option" data-value="horror" onClick={this.selectClick}>
                    Horror
                  </span>
                  <span className="custom-option" data-value="romance" onClick={this.selectClick}>
                    Romance
                  </span>
                  <span className="custom-option" data-value="past" onClick={this.selectClick}>
                    Past
                  </span>
                  <span className="custom-option" data-value="present" onClick={this.selectClick}>
                    Present
                  </span>
                </div>
              </div>
            </div>

            <input type="submit" className="search-submit" value="Search" />
          </div>
        </form>
      </div>
    );
  }

}

export default Search;