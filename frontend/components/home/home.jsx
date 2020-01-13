import React from 'react';
import Hero from './hero';
import Category from './category';

export default class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <Hero />
        <Category />
        <div className="about2"></div>
        <div className="filler2"></div>
        <div className="about3"></div>
        <div className="filler1"></div>
        <div className="about1"></div>
        <div className="filler1"></div>
        <div className="about4"></div>
        <div className="filler1"></div>
        <div className="about5"></div>
        <div className="filler1"></div>
      </div>
    );
  }
};
