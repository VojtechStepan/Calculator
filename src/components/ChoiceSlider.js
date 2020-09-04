import React, { useState } from 'react';
import { Box, Slider, Grid, Input, Typography, makeStyles } from '@material-ui/core';

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
		'& input': {
			textAlign: 'center',
			padding: 0,
			color: theme.palette.common.white,
			width: 'auto',
		},
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(0, 'auto'),
		},
		'&:hover': {
			boxShadow: '0px 0px 16px 2px rgba(60, 138, 147, 0.5)',
		},
	},
}));

const ChoiceSlider = ({ question, initialValue, minValue, maxValue, step, suffix, onChange, handleSliderChange, handleInputChange, actualValue }) => {
	const classes = useStyles();
	const [value, setValue] = useState();

	const handleBlur = () => {
		if (value < minValue) {
			setValue(minValue);
		} else if (value > maxValue) {
			setValue(maxValue);
		}
	};

	/* const SetNumberFormat = ({ inputRef, onChange, value, ...other }) => {
		return (
			value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
		);
	}; */

	return (
		<Box className={classes.sliderHolder}>
			<Grid container justify="space-between">
				<Grid item xs={12} md={7}>
					<Typography variant="body1">
						{question}
					</Typography>
					<Slider
						value={value}
						onChange={handleSliderChange}
						aria-labelledby="input-slider"
						min={minValue}
						max={maxValue}
						step={step}
					/>
				</Grid>
				<Grid item xs={12} md={4} container justify="center">
					<Input
						className={classes.valueHolder}
						value={actualValue}
						onChange={handleInputChange}
						onBlur={handleBlur}
						type="text"
						// inputComponent={SetNumberFormat}
						inputProps={{
							step: step,
							min: minValue,
							max: maxValue,
							type: 'number',
							'aria-labelledby': 'input-slider',
						}}
						endAdornment={<div>{suffix}</div>}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}


export default ChoiceSlider;
