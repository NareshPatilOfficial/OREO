import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './less/styles.less'
import App from './app'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer'

const store = createStore(reducer)
ReactDOM.render(<Provider store={store}><App /></ Provider>, document.getElementById('app')
);
module.hot.accept();