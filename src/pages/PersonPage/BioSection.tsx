interface Props {
  name: string
  biography: string
}

const BioSection = ({ name, biography }: Props) => (
  <div className='flex flex-col gap-6 border-b-[1px] pb-6'>
    <h1 className='sm:block hidden'>{name}</h1>
    <div>
      <h3 className='font-montserratAlt'>Biography</h3>
      <span className='text-sm'>{biography || '-'}</span>
    </div>
  </div>
)

export default BioSection
