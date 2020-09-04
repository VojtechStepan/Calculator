import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { changeUserOption  } from '../actions';

const useStyles = makeStyles((theme) => ({
	selectWrap: {
		marginBottom: theme.spacing(5),
		width: '100%',
		maxWidth: 270,
	},
}));

const LoanOptions = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [option, setOption] = React.useState('');
	const [open, setOpen] = React.useState(false);

	const handleChange = (event) => {
		setOption(event.target.value);
	};

	// Working, but improperly used, but handleChange returns the value one step back
	dispatch(changeUserOption(option));

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<FormControl className={classes.selectWrap}>
			<InputLabel id="demo-controlled-open-select-label">I need to borrow for...</InputLabel>
				<Select
					labelId="demo-controlled-open-select-label"
					id="demo-controlled-open-select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={option}
					onChange={handleChange}
				>
				<MenuItem value={'electronics'}>Electronics</MenuItem>
				<MenuItem value={'car'}>Car</MenuItem>
				<MenuItem value={'realty'}>Realty</MenuItem>
			</Select>
		</FormControl>
	);
}

export default LoanOptions;
