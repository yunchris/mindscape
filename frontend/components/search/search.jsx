import React from 'react';
import ScapeMap from '../scape_map/scape_map'

const Search = ({ scapes, category, updateBounds, fetchScapes }) => {
  return (
  <div className="scape-map-container">
    <ScapeMap
      scapes={scapes}
      updateBounds={updateBounds}
      category={category}
      singleScape={false}
      fetchScapes={fetchScapes}
    />
  </div>
)
  };

export default Search;