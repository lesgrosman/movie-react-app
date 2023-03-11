import { Review } from '@utils/types'
import Image from 'next/image'
import LocalizedDate from '@utils/components/LocalizedDate'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Props {
  review: Review
}

const Card = ({ review }: Props) => {
  const { author_details: author } = review
  return (
    <div
      className={`flex rounded-md shadow-md p-5 gap-5 ${
        author.rating && author.rating < 5
          ? 'bg-red-200'
          : author.rating && author.rating >= 7
          ? 'bg-green-100'
          : 'bg-gray-200'
      }`}
    >
      <div className='shrink-0'>
        <Image src='/assets/avatar.jpg' alt='' width={64} height={64} className='rounded-full' />
      </div>
      <div>
        <h4>A review by {author.username}</h4>
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
