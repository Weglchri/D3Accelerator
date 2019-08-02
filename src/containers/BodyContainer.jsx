import React from 'react';
import { RightNavigationComponent } from '../components/maincomponents/RightNavigationComponent';
import { LeftNavigationComponent } from '../components/maincomponents/LeftNavigationComponent';
import { D3Container } from './D3Container';
import { HeaderComponent } from '../components/maincomponents/HeaderComponent';
import { FooterComponent } from '../components/maincomponents/FooterComponent';

export class BodyContainer extends React.Component {
  render() {
    return (
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
          <HeaderComponent /> 
          <LeftNavigationComponent />
          <main className="mdl-layout__content mdl-color--grey-100">
            <div className="mdl-grid demo-content">
              <div className="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
                <svg fill="currentColor" width="200px" height="200px" className="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop">
                </svg>
                <div fill="currentColor" className="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop" />
              </div>
              <div id="imageContainer" className="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                <D3Container />
              </div>
              <RightNavigationComponent />
            </div>
            <FooterComponent />
          </main>
        </div>
    );
  }
}