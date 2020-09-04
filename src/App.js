import { ThemeProvider, CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
import theme from './custom-theme';
import './index.css';
import LoanCalculateSection from './components/LoanCalculateSection';

const useStyles = makeStyles((theme) => ({
	'@global': {
		body: {
			backgroundImage: '-webkit-linear-gradient( 27deg, rgb(80,180,196) 0%, rgb(162,220,225) 100%)',
			minHeight: '100vh',
			maxWidth: '100vh',
			overflowX: 'hidden',
		},
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline classes={classes.global} />
			<LoanCalculateSection />
		</ThemeProvider>
	);
}

export default App;
