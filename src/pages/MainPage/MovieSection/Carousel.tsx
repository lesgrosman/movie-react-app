import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { MovieItem, Nullable } from '@utils/types'
import { clickListItem } from '@utils/analytics'
import { useCallback, useEffect, useState } from 'react'
import CircularProgress from '../../../components/CircularProgress'
import Image from '@components/Image'
import Link from 'next/link'
import LocalizedDate from '@utils/components/LocalizedDate'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import useWindowSize from '@utils/hooks/useWindowSize'

interface Props {
  list: Nullable<MovieItem[]>
}

const Carousel = ({ list }: Props) => {
  const isSmall = useWindowSize('sm')

  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: isSmall ? 2 : 6,
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='sm:px-2 mt-4 sm:mt-2'>
      <div className='hidden sm:flex w-full justify-end'>
        <button onClick={scrollPrev} disabled={prevBtnDisabled}>
          <ArrowLeftCircleIcon
            className={`z-10 w-8 h-8 ${prevBtnDisabled ? 'text-slate-100' : 'text-primary-light'} `}
          />
        </button>
        <button onClick={scrollNext} disabled={nextBtnDisabled}>
          <ArrowRightCircleIcon
            className={`z-10 w-8 h-8 ${nextBtnDisabled ? 'text-slate-100' : 'text-primary-light'} `}
          />
        </button>
      </div>

      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {list?.map(({ id, title, itemType, poster, rankAverage, date }) => (
            <div key={id} className='flex grow-0 shrink-0 basis-[190px] sm:basis-[212px] px-2'>
              <div>
                <div className='relative'>
                  <Link href={`/${itemType}/${id}`} onClick={() => clickListItem(itemType, title)}>
                    <Image
                      width={isSmall ? 130 : 185}
                      height={278}
                      src={poster}
                      alt={title}
                      className='rounded-xl'
                    />
                  </Link>
                  <CircularProgress
                    value={rankAverage}
                    innerClassName='absolute left-2 -bottom-5'
                    size={44}
                  />
                </div>
                <Link href={`/${itemType}/${id}`} onClick={() => clickListItem(itemType, title)}>
                  <h4 className='ml-2 mb-0 mt-5 hover:text-cyan-600 text-start'>{title}</h4>
                </Link>
                <h5 className='ml-2 text-slate-400 text-start'>
                  <LocalizedDate date={date} isRaw placeholder='' />
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
