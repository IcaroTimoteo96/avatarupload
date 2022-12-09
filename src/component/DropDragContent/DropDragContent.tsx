import { Box, Typography, CardContent } from '@mui/material'
import { useStyles } from './DropDragContent.style'
import Avatar from '@mui/material/Avatar'

export interface DropDragContentProps {
	title: string
	subtitle: string
	icon: string
	image?: string
}

export const DropDragContent = ({
	title,
	subtitle,
	icon,
	image,
}: DropDragContentProps) => {
	const styles = useStyles()
	return (
		<CardContent className={styles.cardContent}>
			{image && <Avatar className={styles.avatar} alt='Avatar' src={image} />}
			<Box className={styles.box}>
				<img src={icon} className={styles.icon} alt='icon' />
				<Typography className={styles.organizationLogoTypography}>
					{title}
				</Typography>
			</Box>
			<Typography className={image ? styles.dropImageTypography : ''}>{subtitle}</Typography>
		</CardContent>
	)
}
