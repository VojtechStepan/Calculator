import { Box, Slider, Grid, Input, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeAmnout } from '../actions';

const useStyles = makeStyles((theme) => ({
	sliderHolder: {
		marginBottom: theme.spacing(4),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(2),
		},
	},
	valueHolder: {
		'&:before': {
			border: `1px solid ${theme.palette.common.white}!important`,
			borderRadius: theme.spacing(4),
			height: '100%',
		},
		'&:after': {
			border: `2px solid ${theme.palette.common.white}`,
			borderRadius: theme.spacing(4),
			height: '100%',
		},
		minHeight: 54,
		borderRadius: theme.spacing(4),
		width: '100%',
		maxWidth: 200,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
		fontSize: 23,
		textTransform: 'none',
		margin: theme.spacing(2, 'auto', 0, 'auto'),
		transition: 'ease-in-out .3s',
		padding: theme.spacing(0, 2),
		'& input': {
			textAlign: 'center',
			padding: 0,
			color: theme.palette.common.white,
		},
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(0, 'auto'),
		},
		'&:hover': {
			boxShadow: '0px 0px 16px 2px rgba(60, 138, 147, 0.5)',
		},
	},
	suffix: {
		marginTop: 2,
	}
}));

const ChoiceSlider = ({ 
	question,
	minValue,
	maxValue,
	step,
	suffix,
	handleSliderChange,
	actualValue,
	disabled
}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [value, setValue] = useState();

	// If you want to enter the value manually - works only for the first slider, need refactor
	const handleInputChange = (event) => {
		setValue(event.target.value === '' ? '' : Number(event.target.value));
		dispatch(changeAmnout(event.target.value));
	};

	// If the new value exceeds the range, it is displayed at the maximum slider value
	const handleBlur = () => {
		if (value < minValue) {
			setValue(minValue);
		} else if (value > maxValue) {
			setValue(maxValue);
		}
	};

	return (
		<Box className={classes.sliderHolder}>
			<Grid container justify="space-between">
				<Grid item xs={12} md={7}>
					<Typography variant="body1">
						{question}
					</Typography>
					<Slider
						value={actualValue}
						onChange={handleSliderChange}
						aria-labelledby="input-slider"
						min={minValue}
						max={maxValue}
						step={step}
						disabled={disabled}
					/>
				</Grid>
				<Grid item xs={12} md={4} container justify="center">
					<Input
						className={classes.valueHolder}
						value={actualValue}
						onChange={handleInputChange}
						onBlur={handleBlur}
						type="text"
						disabled={disabled}
						inputProps={{
							step: step,
							min: minValue,
							max: maxValue,
							defaultValue: actualValue,
							type: 'number',
							'aria-labelledby': 'input-slider',
							// Missing number format according to PSD file
						}}
						endAdornment={
							<div className={classes.suffix}>
								{suffix}
							</div>
						}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}


export default ChoiceSlider;
