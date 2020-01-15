import React from 'react';
import ScapeIndexItem from './scapes_index_item'; 
import Search from '../search/search';

class ScapesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchScapes()
    console.log(this.props)

    $('input[name="calendar"]').daterangepicker({
      autoUpdateInput: false,
      locale: { cancelLabel: 'Clear' }
    });

    $('input[name="calendar"]').on('apply.daterangepicker', function (ev, picker) {
      $(this).val(picker.startDate.format('M/DD') + ' - ' + picker.endDate.format('M/DD'));
    });

    $('input[name="calendar"]').on('cancel.daterangepicker', function (ev, picker) {
      $(this).val('');
    });

    parent.scrollTo(0, 0);

  };

  render () {
    const { scapes } = this.props;

    return (
      <div className="scapescontainer">
        <div className="scapes-page">
          <div className="scapes-index">
            <div className="filter-box">
              <input type="text" className="scapes-calendar" name="calendar" placeholder="Dates..." />
              <button className="scapes-category-button">Sci-Fi</button>
              <button className="scapes-category-button">Horror</button>
              <button className="scapes-category-button">Fantasy</button>
              <button className="scapes-category-button">Past</button>
              <button className="scapes-category-button">Present</button>
              <button className="scapes-category-button">Romance</button>
            </div>
            <div className="scapes-grid">
              <ul className="scapes-flex">
                {
                  scapes.map(scape => (
                    <ScapeIndexItem 
                      scape={scape}
                      key={scape.id}
                    />
                  ))
                }
              </ul>
              <div className="map">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScapesIndex;