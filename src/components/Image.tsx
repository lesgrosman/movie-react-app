import { BASE_IMAGE } from 'utils/constants'
import NextImage, { ImageProps } from 'next/image'

interface Props extends ImageProps {
  noImage?: string
}

const Image = (props: Props) => {
  const { src, noImage, ...rest } = props

  return props?.src ? (
    <NextImage
      {...rest}
      src={`${BASE_IMAGE}${src}`}
      style={!props.fill ? { width: 'auto', height: 'auto' } : {}}
    />
  ) : (
    <NextImage
      {...rest}
      src={noImage || ''}
      style={!props.fill ? { width: 'auto', height: 'auto' } : {}}
    />
  )
}

export default Image
