import React from 'react';
import './styles/App.css';
import { D3Container } from './containers/D3Container';
import { FooterContainer } from './containers/FooterContainer';
import { BodyContainer } from './containers/BodyContainer';

function App() {
  return (
    <div className="App">
      <head></head>
      <body>
        <main>
            <BodyContainer />
        </main>
        <FooterContainer />
      </body>
    </div>
  );
}

export default App;
