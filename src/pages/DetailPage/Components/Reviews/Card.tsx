import { Review } from '@utils/types'
import Image from 'next/image'
import LocalizedDate from '@utils/components/LocalizedDate'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import useWindowSize from '@utils/hooks/useWindowSize'

interface Props {
  review: Review
}

const Card = ({ review }: Props) => {
  const isSmall = useWindowSize('sm')

  const { author_details: author } = review
  return (
    <div
      className={`flex sm:flex-row flex-col  rounded-md shadow-md p-5 gap-5 ${
        author.rating && author.rating < 5
          ? 'bg-red-200'
          : author.rating && author.rating >= 7
          ? 'bg-green-100'
          : 'bg-gray-200'
      }`}
    >
      <div className='shrink-0 flex sm:items-start items-center gap-2'>
        <div>
          <Image
            src='/assets/avatar.jpg'
            alt=''
            width={isSmall ? 32 : 64}
            height={isSmall ? 32 : 64}
            className='rounded-full'
          />
        </div>
        <h4 className='sm:hidden block mb-0'>A review by {author.username}</h4>
      </div>
      <div>
        <h4 className='sm:block hidden'>A review by {author.username}</h4>
        <span className='text-sm text-gray-600'>
          Written on&nbsp;
          <LocalizedDate date={review.created_at} isRaw />
        </span>
        <ReactMarkdown remarkPlugins={[remarkGfm]} className='mt-4 text-slate-500'>
          {review.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Card
