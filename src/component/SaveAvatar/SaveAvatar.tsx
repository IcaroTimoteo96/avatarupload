import Card from '@mui/material/Card'
import { useStyles } from './SaveAvatar.style'
import icon from '../../assets/icon.svg'
import { DropDragContent } from '../DropDragContent/DropDragContent'

export const SaveAvatar = () => {
	const styles = useStyles()
	const image = localStorage.getItem('keyImage')!
	return (
		<Card className={styles.card}>
			<DropDragContent
				title='Organization Logo'
				subtitle='Drop the image here or click to browse.'
				icon={icon}
				image={image}
			/>
		</Card>
	)
}
