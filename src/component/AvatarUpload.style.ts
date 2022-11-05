import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
	card: {
		display: 'flex',
		marginTop: '142px',
		marginLeft: '156px',
		borderStyle: 'dashed',
		width: '553px',
		height: '177px',
		border: '2px dashed #C7CDD3',
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
