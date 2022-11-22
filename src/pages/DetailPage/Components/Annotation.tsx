type Props = {
  title: string
  content?: string
}

const Annotation = ({ title = '', content = '' }: Props) => {
  return (
    <div>
      <h3 className='mb-4'>{title}</h3>
      <span>{content}</span>
    </div>
  )
}

export default Annotation
