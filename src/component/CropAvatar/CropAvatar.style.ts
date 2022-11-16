import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
	card: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		margin: '-20vh 0 0 -45vh',
		width: '553px',
		height: '177px',
		'&.MuiPaper-root, & .MuiCard-root': {
			backgroundColor: '#F2F5F8',
			borderRadius: '8px',
		},
	},

	cardContent: {
		marginLeft: '120px',
	},

	button: {
		top: '105px',
		height: '32px',
		width: '100px',
		left: '220px',
		'&.MuiButtonBase-root, &.MuiButton-root': {
			backgroundColor: '#3D485F',
			borderRadius: '16px',
			'&:hover': {
				backgroundColor: '#3D485F',
				color: '#fff',
			},
			'&.MuiButton-text': {
				color: '#fff',
				textTransform: 'capitalize',
				fontSize: '14px',
			},
		},
	},

	avatar: {
		'&.MuiAvatar-root': {
			width: '114px',
			height: '114px',
			'&.MuiAvatar-circular': {
				position: 'absolute',
				top: '32px',
				left: '32px',
			},
		},
	},

	boxText: {
		position: 'absolute',
		top: '40px',
		left: '177px',
		fontStyle: 'Inter',
	},

	boxSlider: {
		position: 'absolute',
		top: '70px',
		left: '177px',
		width: '280px',
	},

	iconButton: {
		position: 'absolute',
		left: '280px',
	},
})
