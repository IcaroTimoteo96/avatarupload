import { Card, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import icon from '../../assets/icon.svg'
import { AvatarRoute } from '../../routes/Routes/AvatarRoutes'
import { DropDragContent } from '../DropDragContent/DropDragContent'
import { useStyles } from './AvatarUpload.style'

export enum FileEnum {
	JPEG = 'image/jpeg',
	JPG = 'image/jpg',
	PNG = 'image/png',
}

export const AvatarUpload = () => {
	var fileRef = React.useRef<HTMLInputElement>(null)
	var [image, setImage] = React.useState<string>()
	var fileReader = new FileReader()

	const styles = useStyles()
	const navigate = useNavigate()

	const handleDropImage = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		const dropFile = event.dataTransfer.files[0]
		if (isImage(dropFile)) handleFileRead(dropFile)
	}

	const isImage = (data: File): boolean => {
		return (
			data.type === FileEnum.JPEG ||
			data.type === FileEnum.JPG ||
			data.type === FileEnum.PNG
		)
	}

	const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
	}

	const handleOnSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		const selectedFile = fileRef.current?.files?.item(0)!
		if (isImage(selectedFile)) handleFileRead(selectedFile)
	}

	const handleFileRead = (file: File) => {
		fileReader.onload = () => {
			let fileUrl = fileReader.result
			setFileInCircle(fileUrl)
		}
		fileReader.readAsDataURL(file)
	}

	const setFileInCircle = (fileUrl: string | ArrayBuffer | null) => {
		setImage(fileUrl?.toString())
		localStorage.setItem('keyImage', fileUrl?.toString()!)
	}

	const handleInputElement = () => {
		console.log(fileRef)
		return (
			<input type='file' ref={fileRef} onChange={handleOnSelectFile} hidden />
		)
	}

	React.useEffect(() => {
		if (localStorage.getItem('keyImage')) navigate(`${AvatarRoute.cropAvatar}`)
	})

	return (
		<Container sx={{ position: 'relative' }}>
			<Card
				className={styles.card}
				onDragOver={allowDrop}
				onDrop={handleDropImage}
			>
				<label className={styles.label}>
					{handleInputElement()}
					<DropDragContent
						title='Organization Logo'
						subtitle='Drop the image here or click to browse.'
						icon={icon}
					/>
				</label>
			</Card>
		</Container>
	)
}
