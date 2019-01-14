import React, { Component } from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../reducers';

import Header from './Header';
import Content from './Content';

jss.setup(preset());

const styles = {
	wrapper: {
		width: 900,
		marginTop: 75,
		marginLeft: 'auto',
		marginRight: 'auto',
		boxShadow: '0 0 8px rgba(0,0,0,.5)',
		backgroundColor: 'white'
	}
};

const { classes } = jss.createStyleSheet(styles).attach();
const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
			<div className={classes.wrapper}>
				<Header/>
				<Content/>
			</div>
		</Provider>
  )
}

export default App;
