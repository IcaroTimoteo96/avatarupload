import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AvatarUpload } from './component/UploadAvatar/AvatarUpload'
import { SaveAvatar } from './component/SaveAvatar/SaveAvatar'
import { AvatarRoute } from './routes/Routes/AvatarRoutes'
import { CropAvatar } from './component/CropAvatar/CropAvatar'

export const AppUpload = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={AvatarRoute.avatarUpload} element={<AvatarUpload />} />
				<Route path={AvatarRoute.cropAvatar} element={<CropAvatar />} />
				<Route path={AvatarRoute.saveAvatar} element={<SaveAvatar />} />
			</Routes>
		</BrowserRouter>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<AppUpload />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
