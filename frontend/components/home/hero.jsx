import React from 'react';
import Search from '../search/search_form'

export default class Hero extends React.Component {

  componentDidMount() {
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
  }

  render () {
    return (
      <div className="hero-section">
        <div className="content-container">
          <div className="home-top-container">
            <div>
              <h1 className="welcome-greeting-title">Open the door to infinity</h1>
              <div className="welcome-copy">
                <p >
                  Immerse your consciousness in digital worlds indistinguishable from reality. 
                  Experience a Mindscape. Live your fantasy.
                  </p>
              </div>
            </div>
          </div>
          <Search />
        </div>

      </div>
    );
  }
};