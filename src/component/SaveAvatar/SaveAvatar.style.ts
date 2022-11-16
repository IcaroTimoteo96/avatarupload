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

	icon: {
		marginRight: '12px',
	},

	box: {
		display: 'flex',
		justifyContent: 'center',
		marginTop:'35px'
	},

	organizationLogoTypography: {
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '25.2px',
	},

	dropImageTypography: {
		position: 'absolute',
		fontWeight: 400,
		lineHeight: '25.2px',
		fontSize: '14px',
		top: '80px',
		left: '190px',
	},

	cardContent: {
		marginLeft: '120px',
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
})
