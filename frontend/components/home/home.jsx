import React from 'react';
import Hero from './hero';
import Category from './category';

export default class Home extends React.Component {
  componentDidMount() {
    parent.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="home">
        <Hero />
        <Category />
        <div className="filler2"></div>
        <div className="about2"></div>
      </div>
    );
  }
};
