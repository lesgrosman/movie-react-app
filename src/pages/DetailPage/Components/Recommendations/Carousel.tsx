import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { MovieItemResponse, TVSeriesItemResponse } from '@utils/types'
import { useCallback, useEffect, useState } from 'react'
import Image from '@components/Image'
import Link from 'next/link'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import useWindowSize from '@utils/hooks/useWindowSize'

interface Props {
  list: MovieItemResponse[] | TVSeriesItemResponse[]
}

const Carousel = ({ list }: Props) => {
  const isSmall = useWindowSize('sm')

  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: isSmall ? 2 : 6,
    dragFree: true,
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
    <div className='mt-4 sm:mt-2'>
      <div className='hidden sm:flex w-full justify-end'>
        <button onClick={scrollPrev} disabled={prevBtnDisabled}>
          <ArrowLeftCircleIcon
            className={`z-10 w-8 h-8 ${prevBtnDisabled ? 'text-slate-100' : 'text-emerald-400'} `}
          />
        </button>
        <button onClick={scrollNext} disabled={nextBtnDisabled}>
          <ArrowRightCircleIcon
            className={`z-10 w-8 h-8 ${nextBtnDisabled ? 'text-slate-100' : 'text-emerald-400'} `}
          />
        </button>
      </div>

      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {list?.map(item => {
            const isMovie = 'title' in item
            const itemType = isMovie ? 'movie' : 'tv'
            return item.backdrop_path ? (
              <div key={item.id} className='flex grow-0 shrink-0 px-2'>
                <div className='select-none w-60 h-48'>
                  <Link href={`/${itemType}/${item.id}`}>
                    <Image
                      src={item.backdrop_path}
                      width={240}
                      height={140}
                      alt=''
                      className='rounded-xl'
                    />
                  </Link>
                  <div className='flex justify-between gap-4'>
                    <span className='truncate'>{isMovie ? item.title : item.name}</span>
                    <span>{Math.floor(item.vote_average * 10)}%</span>
                  </div>
                </div>
              </div>
            ) : null
          })}
        </div>
      </div>
    </div>
  )
}

export default Carousel
