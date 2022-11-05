import { Translate } from '@mui/icons-material'
import {
	Box,
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
} from '@mui/material'
import { width } from '@mui/system'
import { type } from '@testing-library/user-event/dist/type'
import React, { useRef } from 'react'
import { OutputFileType } from 'typescript'

import icon from '../assets/icon.svg'
import { useStyles } from './AvatarUpload.style'

export enum ImageEnum {
	JPEG = 'image/jpeg',
	JPG = 'image/jpg',
	PNG = 'image/png',
}

export const AvatarUpload = () => {
	var fileRef = React.useRef<HTMLInputElement>(null)
	var [image, setImage] = React.useState<File>()
	const styles = useStyles()

	const handleDropImage = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		const data = event.dataTransfer.files[0]
		if (isImage(data)) setImage(data)
	}

	const isImage = (data: File): boolean => {
		return (
			data.type === ImageEnum.JPEG ||
			data.type === ImageEnum.JPG ||
			data.type === ImageEnum.PNG
		)
	}

	const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
	}

	const handleOnSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		const file = fileRef.current?.files?.item(0)!
		if (isImage(file)) setImage(file)
	}

	const handleInputElement = () => {
		return (
			<input type='file' ref={fileRef} onChange={handleOnSelectImage} hidden />
		)
	}
	return (
		<Container>
			<Card
				onClick={handleInputElement}
				className={styles.card}
				onDragOver={allowDrop}
				onDrop={handleDropImage}
			>
				<label className={styles.label}>
					{handleInputElement()}
					<CardContent className={styles.cardContent}>
						<Box className={styles.box}>
							<img src={icon} className={styles.icon} />
							<Typography className={styles.organizationLogoTypography}>
								Organization Logo
							</Typography>
						</Box>
						<Typography className={styles.dropImageTypography}>
							Drop the image here or click to browse.
						</Typography>
					</CardContent>
				</label>
			</Card>
		</Container>
	)
}
