import { Grid, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	amountWrap: {
		[theme.breakpoints.up('md')]: {
			marginTop: theme.spacing(4),
		},
	},
	summary: {
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			textAlign: 'left',
		},
		'& h3': {
			margin: theme.spacing(3, 0, 0.5, 0),
			textTransform: 'uppercase',
			[theme.breakpoints.up('md')]: {
				margin: theme.spacing(0),
			},
		},
	},
	amount: {
		textAlign: 'center',
	}
}));

const ResultingAmount = () => {
	const classes = useStyles();
	const getAmount = useSelector(state => state.amountReducer);
	const getPeriod = useSelector(state => state.periodReducer);
	const getPercent = useSelector(state => state.percentReducer);
	
	const result = getAmount / (getPeriod * getPercent);

	return (
		<Grid container alignItems="center" className={classes.amountWrap}>
			<Grid item xs={12} md={8} className={classes.summary}>
				<Typography variant="h3">Summary</Typography>
			</Grid>
			<Grid item xs={12} md={4} className={classes.amount}>
				<Typography variant="h2">
					{result.toFixed(2)} Kč
				</Typography>
			</Grid>
		</Grid>
	);
};

ResultingAmount.propTypes = {
	image: PropTypes.object,
	text: PropTypes.string,
	profession: PropTypes.string,
};

export default ResultingAmount;