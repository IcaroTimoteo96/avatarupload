import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	IconButton,
	Slider,
} from '@mui/material'
import { useStyles } from './CropAvatar.style'
import close from '../../assets/close.svg'
import { useNavigate } from 'react-router'
import React from 'react'
import { AvatarRoute } from '../../routes/Routes/AvatarRoutes'

export const CropAvatar = () => {
	const styles = useStyles()
	let navigate = useNavigate()
	const image = localStorage.getItem('keyImage')!

	const clearLocalStorage = () => {
		localStorage.removeItem('keyImage')
		navigate('/')
	}
	return (
		<Card className={styles.card}>
			<CardContent className={styles.cardContent}>
				<Avatar className={styles.avatar} alt='Avatar' src={image} />
				<Box className={styles.boxText}>
					<span>Crop</span>
				</Box>
				<Box className={styles.boxSlider}>
					<Slider size='small' defaultValue={70} />
				</Box>
				<Button
					onClick={() => {
						navigate(`${AvatarRoute.saveAvatar}`)
					}}
					className={styles.button}
					size='medium'
				>
					Save
				</Button>
				<IconButton
					onClick={clearLocalStorage}
					className={styles.iconButton}
					edge='end'
					size='small'
				>
					<img src={close} alt='close' />
				</IconButton>
			</CardContent>
		</Card>
	)
}
