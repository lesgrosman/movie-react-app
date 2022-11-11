import { Nullable } from 'utils/types'

interface Props {
  imageUrl?: Nullable<string>
  className?: string
  height?: number
  width?: number
  alt?: string
}
const Image = ({ imageUrl, className = '', width = 185, height = 278, alt = '' }: Props) => {
  if (!imageUrl)
    return (
      <img
        className={className}
        src='/assets/imageNotFound.jpeg'
        width={width}
        height={height}
        alt={alt}
      />
    )
  return <img className={className} src={imageUrl} width={width} height={height} alt={alt} />
}

export default Image
