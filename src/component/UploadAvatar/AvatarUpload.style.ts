import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
	card: {
		position: 'absolute',
		top:'50%',
		left:'50%',
		margin:'30vh 0 0 -45vh',
		borderStyle: 'dashed',
		width: '553px',
		height: '177px',
		border: '2px dashed #C7CDD3',
		'&.MuiPaper-root, & .MuiCard-root': {
			backgroundColor: '#F2F5F8',
			borderRadius: '8px',
		},
	},

	cardContent: {
		marginLeft: '120px',
		marginTop: '50px',
	},

	box: {
		display: 'flex',
		justifyContent: 'center',
	},

	organizationLogoTypography: {
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '25.2px',
	},

	dropImageTypography: {
		fontWeight: 400,
		lineHeight: '25.2px',
		fontSize: '14px',
	},

	icon: {
		marginRight: '12px',
	},

	label: {
		display: 'flex',
		width: '553px',
		cursor: 'pointer',
	},
})
