import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router'
import { useStyles } from './SaveAvatar.style'
import icon from '../../assets/icon.svg'

export const SaveAvatar = () => {
	const styles = useStyles()
	const image = localStorage.getItem('keyImage')!

	return (
		<Card className={styles.card}>
			<CardContent className={styles.cardContent}>
				<Avatar className={styles.avatar} alt='Avatar' src={image} />
				<Box className={styles.box}>
					<img src={icon} className={styles.icon} alt='icon' />
					<Typography className={styles.organizationLogoTypography}>
						Organization Logo
					</Typography>
				</Box>
				<Typography className={styles.dropImageTypography}>
					Drop the image here or click to browse.
				</Typography>
			</CardContent>
		</Card>
	)
}
