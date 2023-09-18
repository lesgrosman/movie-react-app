const LoadingPlaceholder = () => (
  <div className='mt-20 w-full mb-4 animate-pulse'>
    <div className='relative grid grid-cols-12 gap-8 px-0 py-6 mb-4'>
      <div className='flex-shrink-0 col-span-12 sm:col-span-4 flex justify-center sm:justify-end'>
        <div className='h-96 w-64 bg-slate-200 rounded-xl' />
      </div>
      <div className='col-span-12 sm:col-span-8 sm:px-0 px-2 flex flex-col sm:items-start items-center'>
        <div className='w-52 h-7 bg-slate-200 mb-4' />
        <div className='w-2/5 h-5 bg-slate-200 mb-4' />
        <div className='flex items-center gap-6 mb-4 sm:justify-start justify-center'>
          <div className='flex items-center gap-2'>
            <div className='bg-slate-200 w-20 h-20 rounded-full' />
            <div className='bg-slate-200 w-28 h-7' />
          </div>
        </div>

        <div className='mb-4 flex sm:justify-start justify-center'>
          <div className='bg-slate-200 w-1/2 h-5' />
        </div>
        <div className='mb-8 sm:text-start text-center'>
          <div className='bg-slate-200 w-28 h-5 mb-4' />
          <div className='bg-slate-200 w-5/6 h-3 mb-2' />
          <div className='bg-slate-200 w-11/12 h-3 mb-2' />
          <div className='bg-slate-200 w-5/6 h-3 mb-2' />
        </div>
        <div className='flex text-start gap-5 flex-wrap sm:justify-start justify-center'>
          <div>
            <div className='bg-slate-200 w-20 h-3 mb-4' />
            <div className='bg-slate-200 w-32 h-5' />
          </div>
          <div>
            <div className='bg-slate-200 w-20 h-3 mb-4' />
            <div className='bg-slate-200 w-32 h-5' />
          </div>
          <div>
            <div className='bg-slate-200 w-20 h-3 mb-4' />
            <div className='bg-slate-200 w-32 h-5' />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default LoadingPlaceholder
