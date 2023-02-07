import { BASE_IMAGE } from 'utils/constants'
import NextImage, { ImageProps } from 'next/image'

const Image = (props: ImageProps & { noImage?: string }) =>
  props?.src ? (
    <NextImage {...props} src={`${BASE_IMAGE}${props.src}`} />
  ) : (
    <NextImage {...props} src={props.noImage || ''} />
  )

export default Image
