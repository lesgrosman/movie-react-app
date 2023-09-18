const LoadingPlaceholder = () => (
  <div className='animate-pulse grid grid-cols-12 gap-4'>
    <div className='sm:col-span-3 col-span-12 flex flex-col sm:items-start items-center'>
      <div className='h-96 w-60 bg-slate-200 rounded-xl mb-5' />
      <div className='w-3/4 h-7 bg-slate-200 mb-5' />
      <div className='w-3/4 h-7 bg-slate-200 mb-5' />
      <div className='w-3/4 h-7 bg-slate-200 mb-5' />
    </div>
    <div className='sm:col-span-9 col-span-12 flex flex-col gap-4 sm:items-start items-center'>
      <div className='w-72 h-7 bg-slate-200 mb-12' />
      <div className='w-52 h-6 bg-slate-200 mb-6' />
      <div className='w-full h-4 bg-slate-200' />
      <div className='w-11/12 h-4 bg-slate-200' />
      <div className='w-full h-4 bg-slate-200' />
      <div className='w-11/12 h-4 bg-slate-200' />
      <div className='w-full h-4 bg-slate-200' />
      <div className='w-11/12 h-4 bg-slate-200' />
      <div className='w-full h-4 bg-slate-200' />
    </div>
  </div>
)

export default LoadingPlaceholder
