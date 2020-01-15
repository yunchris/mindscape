import React from 'react';
import ScapeMap from '../scape_map/scape_map'


const Search = ({ scapes, category, updateFilter }) => (
  <div className="scape-map-container">
    <ScapeMap
      scapes={scapes}
      updateFilter={updateFilter}
      category={category}
      singleScape={false}
    />
  </div>
);

export default Search;