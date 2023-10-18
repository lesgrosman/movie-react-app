import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { PersonItem } from '@utils/types'
import { useCallback, useEffect, useState } from 'react'
import Image from '@components/Image'
import Link from 'next/link'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import useWindowSize from '@utils/hooks/useWindowSize'

interface Props {
  list: PersonItem[]
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
            className={`z-10 w-8 h-8 ${prevBtnDisabled ? 'text-slate-100' : 'text-primary-dark'} `}
          />
        </button>
        <button onClick={scrollNext} disabled={nextBtnDisabled}>
          <ArrowRightCircleIcon
            className={`z-10 w-8 h-8 ${nextBtnDisabled ? 'text-slate-100' : 'text-primary-dark'} `}
          />
        </button>
      </div>

      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {list?.map(({ id, character, name, profileUrl }) => (
            <div key={id} className='flex grow-0 shrink-0 basis-[150px] sm:basis-[175px] px-2'>
              <Link
                href={`/person/${id}`}
                className='select-none w-[154px] border-[1px] rounded-xl h-72 shadow-lg'
              >
                <div className='relative w-full pt-[66.66%] h-52'>
                  <div className='absolute top-0 left-0 right-0 bottom-0'>
                    <Image
                      fill
                      src={profileUrl || ''}
                      alt={name}
                      className='rounded-t-xl'
                      noImage='/assets/noImage.png'
                    />
                  </div>
                </div>
                <h4 className='ml-2 mb-0 hover:text-primary-default'>{name}</h4>
                <h5 className='ml-2 text-slate-400 text-xs'>{character}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
