import { Grid, Typography, Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import bgMobile from '../images/roi-mobile.png';
import bgDesktop from '../images/roi-desktop.png';
import React from 'react';
import ChoiceSlider from './ChoiceSlider';
import { useSelector, useDispatch } from 'react-redux';
import ResultingAmount from './ResultingAmount';
import LoanOptions from './LoanOptions';
import { changeAmnout, changePeriod, changePercent } from '../actions';
import { setValueAccordingOption } from '../utils/setValueAccordingOption';

const useStyles = makeStyles((theme) => ({
	pageHolder: {
		[theme.breakpoints.up('md')]: {
			height: '100vh',
			width: '100vw',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
	calculateWrap: {
		padding: theme.spacing(6, 3),
		[theme.breakpoints.up('md')]: {
			maxWidth: 940,
			marginLeft: 'auto',
			marginRight: 'auto',
			padding: theme.spacing(6, 0),
		},
	},
	title: {
		marginBottom: theme.spacing(4),
		'& span': {
			display: 'block',
			[theme.breakpoints.up('md')]: {
				display: 'inline',
			},
			'&.orange': {
				fontWeight: 'bold',
				color: theme.palette.primary.main,
			},	
		},
	},
	imageHolder: {
		position: 'fixed',
		width: 145,
		height: 304,
		backgroundImage: "url(" + bgMobile + ")",
		backgroundRepeat: 'no-repeat',
		left: 0,
		top: 'calc(50% - 152px)',
		zIndex: '1',
		[theme.breakpoints.up('md')]: {
			position: 'relative',
			left: 'auto',
			top: 'auto',
			backgroundImage: "url(" + bgDesktop + ")",
			backgroundPosition: 'bottom',
			height: 370,
		},
	},
	sliders: {
		position: 'relative',
		zIndex: '2',
	},
}));

const LoanCalculateSection = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const getAmount = useSelector(state => state.amountReducer);
	const getPeriod = useSelector(state => state.periodReducer);
	const getPercent = useSelector(state => state.percentReducer);
	const getUserOption = useSelector(state => state.optionReducer);

	const handleAmountChange = (event, newValue) => {
		dispatch(changeAmnout(newValue));
	};

	const handlePeriodChange = (event, newValue) => {
		dispatch(changePeriod(newValue));
	};

	const handlePercentChange = (event, newValue) => {
		dispatch(changePercent(newValue));
	};

	return (
		<Grid className={classes.pageHolder}>
			<Grid container className={classes.calculateWrap}>
				<Grid item xs={12} md={12} container justify="center">
					<Typography variant="h1" className={classes.title}>
						Here to lend
						<Box component="span">
							&nbsp;with our door is&nbsp;
						</Box>
						<Box component="span" className="orange">
							firmly open
						</Box>
					</Typography>
				</Grid>
				<Grid item xs={12} md={4} className={classes.imageHolder} />
				<Grid item xs={12} md={8} className={classes.sliders}>
					<Grid container justify="center">
						<LoanOptions />
					</Grid>
					<ChoiceSlider
						question={'How much do you need'}
						initialValue={100000}
						minValue={setValueAccordingOption(getUserOption, 1000, 5000, 500000)}
						maxValue={setValueAccordingOption(getUserOption, 50000, 500000, 5000000)}
						step={setValueAccordingOption(getUserOption, 1000, 10000, 100000)}
						suffix={'Kč'}
						handleSliderChange={handleAmountChange}
						actualValue={getAmount}
					/>
					<ChoiceSlider
						question={'Repayment period'}
						initialValue={24}
						minValue={setValueAccordingOption(getUserOption, 1, 12, 12)}
						maxValue={setValueAccordingOption(getUserOption, 24, 60, 360)}
						step={setValueAccordingOption(getUserOption, 1, 6, 12)}
						suffix={'let'}
						handleSliderChange={handlePeriodChange}
						actualValue={getPeriod}
					/>
					<ChoiceSlider
						question={'Procentual repayment'}
						initialValue={1.86}
						minValue={setValueAccordingOption(getUserOption, 1, 10, 1)}
						maxValue={setValueAccordingOption(getUserOption, 10, 20, 10)}
						step={1}
						suffix={'%'}
						handleSliderChange={handlePercentChange}
						actualValue={getPercent}
					/>
					<ResultingAmount />
				</Grid>
			</Grid>
		</Grid>
	);
};

LoanCalculateSection.propTypes = {
	image: PropTypes.object,
	text: PropTypes.string,
	profession: PropTypes.string,
};

export default LoanCalculateSection;
