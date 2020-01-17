import React from 'react';
import Hero from './hero';
import Category from './category';
import About from './about';

export default class Home extends React.Component {
  componentDidMount() {
    parent.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="home">
        <Hero />
        <Category />
        <About />
      </div>
    );
  }
};
