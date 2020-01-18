import React from 'react';
import Hero from './hero';
import Category from './category';
import About from './about';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    parent.scrollTo(0, 0);
  };

  handleClick(e) {
    const select = document.querySelector(".custom-select");
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  }

  render() {
    return (
      <div className="home" onClick={this.handleClick}>
        <Hero />
        <Category />
        <About />
      </div>
    );
  }
};
