import { createMuiTheme } from '@material-ui/core';

// Nastavení barev a bp
const SetRules = createMuiTheme({
	palette: {
		primary: {
			main: '#fc8043',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 991,
			lg: 1280,
			xl: 1920,
		},
	},
});

// Změna globálních stylů
const theme = createMuiTheme({
	palette: SetRules.palette,
	breakpoints: SetRules.breakpoints,
	typography: {
		fontFamily: 'Montserrat',
		h1: {
			fontSize: 32,
			lineHeight: '34px',
			fontWeight: 300,
			color: SetRules.palette.common.white,
			textAlign: 'center',
			zIndex: '2',
		},
		h2: {
			fontSize: 32,
			fontWeight: 'bold',
			lineHeight: '36px',
			color: SetRules.palette.primary.main,
		},
		h3: {
			fontSize: 23,
			fontWeight: '300',
			lineHeight: '26px',
			color: SetRules.palette.common.white,
		},
		body1: {
			color: SetRules.palette.common.white,
			textTransform: 'uppercase',
			fontSize: 13,
			margin: 0,
		}
	},
	// Globální změny MUI komponent
	overrides: {
		MuiSlider: {
			root: {
				color: '#fc8043',
				height: 8,
				[SetRules.breakpoints.up('md')]: {
					padding: '12px 0',
				},
			},
			thumb: {
				height: 24,
				width: 24,
				backgroundColor: '#fff',
				marginTop: -8,
				marginLeft: -12,
				position: 'relative',
				'&:before': {
					content: "' '",
					positon: 'absolute',
					left: 0,
					top: 0,
					width: 12,
					height: 12,
					background: '#fc8043',
					borderRadius: '50%',
				},
				'&:focus, &:hover, &:active': {
					boxShadow: 'inherit',
				},
			},
			active: {},
			valueLabel: {
			  	left: 'calc(-50% + 4px)',
			},
			track: {
			  	height: 8,
			  	borderRadius: 4,
			},
			rail: {
			  	height: 8,
			  	borderRadius: 4,
			  	opacity: 1,
			  	color: '#fff',
			},
		},
		MuiInputBase: {
			formControl: {
				color: SetRules.palette.common.white,
				width: '100%',
				border: `1px solid ${SetRules.palette.common.white}`,
				borderRadius: 32,
				height: 50,
				padding: 10,
				textAlign: 'center',
				fontSize: 16,
				transition: 'ease-in-out .3s',
				'&:focus': {
					border: `1px solid ${SetRules.palette.primary.main}`,
				},
				'&:before': {
					content: 'none!important',
				},
				'&:after': {
					content: 'none!important',
				},
				'& .MuiSelect-icon': {
					color: SetRules.palette.common.white,
				},
				'&:hover': {
					boxShadow: '0px 0px 24px 0px rgb(60, 138, 147)',
				},
			},
		},
		MuiInputLabel: {
			formControl: {
				transform: 'translate(0, 35px) scale(1)',
				width: '100%',
				textAlign: 'center',
				fontSize: 15,
				fontWeight: '300',
				'&.Mui-focused': {
					color: SetRules.palette.common.white,
				},
			},
		},
		MuiMenuItem: {
			root: {
				color: SetRules.palette.common.black,
			},
		},
		MuiSelect: {
			root: {
				appearance: 'none',
				height: '33px!important',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				'&:focus': {
					background: 'transparent!important',
				},
			}
		},
	},
});

export default theme;
