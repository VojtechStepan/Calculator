import { Grid, Typography, Box, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { changeAmnout, changePeriod, changePercent } from '../actions';
import { setValueAccordingOption } from '../utils/setValueAccordingOption';
import PropTypes from 'prop-types';
import bgMobile from '../images/roi-mobile.png';
import bgDesktop from '../images/roi-desktop.png';
import React from 'react';
import ChoiceSlider from './ChoiceSlider';
import ResultingAmount from './ResultingAmount';
import LoanOptions from './LoanOptions';
import isNilOrEmpty from '../utils/isNilOrEmpty';

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
	// const [value, setValue] = useState();
	const classes = useStyles();
	const dispatch = useDispatch();

	// Get actual values from Redux
	const getAmount = useSelector(state => state.amountReducer);
	const getPeriod = useSelector(state => state.periodReducer);
	const getPercent = useSelector(state => state.percentReducer);
	const getUserOption = useSelector(state => state.optionReducer);

	// Change of values
	const handleAmountChange = (event, newValue) => {
		dispatch(changeAmnout(newValue));
	};

	const handlePeriodChange = (event, newValue) => {
		dispatch(changePeriod(newValue));
	};

	const handlePercentChange = (event, newValue) => {
		dispatch(changePercent(newValue));
	};

	// If you can borrow without giving a reason
	const isOptionSelected = !isNilOrEmpty(getUserOption);

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
					<Grid
						container
						justify="center"
						data-aos="zoom-out"
						data-aos-duration="1000"
					>
						<LoanOptions />
					</Grid>
					<Grid data-aos="fade-left" data-aos-duration="1000">
						<ChoiceSlider
							question={'How much do you need'}
							defaultValue={10000}
							minValue={isOptionSelected ? setValueAccordingOption(getUserOption, 1000, 5000, 500000) : 1000}
							maxValue={isOptionSelected ? setValueAccordingOption(getUserOption, 50000, 500000, 5000000) : 1200000}
							step={isOptionSelected ? setValueAccordingOption(getUserOption, 1000, 10000, 100000) : 10000}
							suffix={'Kč'}
							handleSliderChange={handleAmountChange}
							actualValue={getAmount}
							//  If you can't borrow without giving a reason (Note: missing styles for disabled Slider)
							// disabled={isNilOrEmpty(getUserOption)}
						/>
					</Grid>
					<Grid data-aos="fade-left" data-aos-duration="1400">
						<ChoiceSlider
							question={'Repayment period'}
							defaultValue={24}
							minValue={isOptionSelected ? setValueAccordingOption(getUserOption, 1, 12, 12) : 1}
							maxValue={isOptionSelected ? setValueAccordingOption(getUserOption, 24, 60, 360) : 40}
							step={isOptionSelected ? setValueAccordingOption(getUserOption, 1, 6, 12) : 6}
							suffix={'let'}
							handleSliderChange={handlePeriodChange}
							// We work with the months, while interpreting the years
							actualValue={getPeriod}
							// disabled={isNilOrEmpty(getUserOption)}
						/>
					</Grid>
					<Grid data-aos="fade-left" data-aos-duration="1800">
						<ChoiceSlider
							question={'Procentual repayment'}
							defaultValue={1.86}
							minValue={isOptionSelected ? setValueAccordingOption(getUserOption, 1, 10, 1) : 1}
							maxValue={isOptionSelected ? setValueAccordingOption(getUserOption, 10, 20, 10) : 10}
							step={isOptionSelected ? 1 : 0.01}
							suffix={'%'}
							handleSliderChange={handlePercentChange}
							actualValue={getPercent}
							// disabled={isNilOrEmpty(getUserOption)}
						/>
					</Grid>
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
