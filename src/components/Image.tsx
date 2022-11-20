import { BASE_IMAGE } from 'utils/constants'
import NextImage, { ImageProps } from 'next/image'

const Image = (props: ImageProps) =>
  props?.src ? <NextImage {...props} src={`${BASE_IMAGE}${props.src}`} /> : null

export default Image
