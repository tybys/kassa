import React, { Component } from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

import Header from './Header';
import Content from './Content';

jss.setup(preset());

const styles = {
	wrapper: {
		width: 900,
		marginTop: 75,
		marginLeft: 'auto',
		marginRight: 'auto',
		boxShadow: '0 0 8px rgba(0,0,0,.5)'
	}
};

const { classes } = jss.createStyleSheet(styles).attach();

function App() {
  return (
    <div className={classes.wrapper}>
      <Header/>
			<Content/>
    </div>
  )
}

export default App;
