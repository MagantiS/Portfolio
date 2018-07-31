import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './header/header';
import AppCss from './header/header.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
