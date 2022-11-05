export interface CropAvatarProps {
	image?: string
}
export const CropAvatar: React.FC = ({ image }: CropAvatarProps) => {
	return <div>{image}</div>
}
