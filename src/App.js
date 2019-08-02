import React from 'react';
import './styles/App.css';
import { BodyContainer } from './containers/BodyContainer';

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="A front-end template that helps you build fast, modern mobile web apps." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
          {/* Add to homescreen for Chrome on Android */}
          <meta name="mobile-web-app-capable" content="yes" />
          {/* Add to homescreen for Safari on iOS */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Material Design Lite" />
          {/* Tile icon for Win8 (144x144 + tile color) */}
          <meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png" />
          <meta name="msapplication-TileColor" content="#3372DF" />

          <link rel="stylesheet" href="main.css" type="text/css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.cyan-light_blue.min.css" />
          <style dangerouslySetInnerHTML={{ __html: "\n    #view-source {\n      position: fixed;\n      display: block;\n      right: 0;\n      bottom: 0;\n      margin-right: 40px;\n      margin-bottom: 40px;\n      z-index: 900;\n    }\n    " }} />
      </head>
      <body> 
        <BodyContainer />
      </body>
    </div>
  );
}

export default App;
