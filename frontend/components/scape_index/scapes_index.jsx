import React from 'react';
import ScapeIndexItem from './scapes_index_item'; 
import SearchContainer from '../search/search_container';
import { withRouter } from 'react-router-dom';

class ScapesIndex extends React.Component {

  componentDidMount() {
   this.props.updateCategory(this.props.token)
    

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

  componentDidUpdate() {
    window.history.replaceState({}, null, `#/scapes/${this.props.category}`);
  }
  
  categoryClick(genre) {
    this.props.updateCategory(genre);
  };

  assignActive(el) {
    Array.from(document.getElementsByClassName('scapes-category-button')).forEach(el => el.classList.remove('active')); 
    document.getElementById(el).classList.add('active'); 
  }

  render () {
    return (
      <div className="scapescontainer">
        <div className="nav-background"></div>
        <div className="scapes-page">
          <div className="scapes-index">
            <div className="filter-box">
              <input type="text" className="scapes-calendar" name="calendar" placeholder="Dates..." />
              
              {['scifi', 'fantasy', 'horror', 'romance', 'past', 'present', 'all'].map((genre, idx) => 
                  <button key={idx}
                          id={`category-${idx}`} 
                          className={`scapes-category-button${this.props.category === genre ? ' active' : ''}`}
                          onClick={() => {
                            this.categoryClick(genre) // assignment is to make clicking button change URL instead of changing state... (componentdidupdate?)
                          }}>
                    {idx === 0 ? "Sci-Fi" : idx === 6 ? "All..." : genre[0].toUpperCase() + genre.slice(1)}
                  </button>
              )}

            </div>
            <div className="scapes-section">
              <ul className="scapes-index-cards">
                {
                  this.props.scapes && this.props.scapes.map(scape => (
                    <ScapeIndexItem
                      scape={scape}
                      key={scape.id}
                    />
                  ))
                }
              </ul>
              <div className="map">
                <SearchContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter (ScapesIndex);