import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './less/styles.less'
import App from './app'
import store from './store'
import {Provider} from 'react-redux'


ReactDOM.render(<Provider store={store}><App /></ Provider>, document.getElementById('app'));
module.hot.accept();