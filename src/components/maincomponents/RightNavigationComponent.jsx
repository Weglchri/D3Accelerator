import React from 'react';

export class RightNavigationComponent extends React.Component {
  render() {
    return (
      <div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
        <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
          <div className="mdl-card__title mdl-color--blue-500 mdl-card--expand mdl-color--teal-300">
            <h2 className="mdl-card__title-text">D3 Accelerator</h2>
          </div>
          <div className="mdl-card__supporting-text mdl-color-text--grey-600">
          </div>
          <div className="mdl-card__actions mdl-card--border">
          </div>
        </div>
        <div className="demo-separator mdl-cell--1-col" />
        <div className="demo-options mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
        </div>
      </div>
    );
  }
}