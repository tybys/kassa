import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
	controlError: {
		fontSize: 'small',
		marginLeft: 5,
		fontWeight: 600,
		color: 'rgba(236, 8, 5, 0.6)'
	}
};
const { classes } = jss.createStyleSheet(styles).attach();

const ControlError = ({controlError}) => {

	return (
		<span className={classes.controlError}>{controlError}</span>
	)
};

export default ControlError;