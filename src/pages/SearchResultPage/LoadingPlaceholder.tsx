const LoadingPlaceholder = () => (
  <div className='animate-pulse grid grid-cols-12 gap-4'>
    <div className='sm:col-span-3 col-span-12'>
      <div className='h-60 w-full bg-slate-200 rounded-xl' />
    </div>
    <div className='flex flex-col gap-3 sm:col-span-9 col-span-12'>
      <div className='w-full h-48 bg-slate-200 rounded-xl' />
      <div className='w-full h-48 bg-slate-200 rounded-xl' />
      <div className='w-full h-48 bg-slate-200 rounded-xl' />
      <div className='w-full h-48 bg-slate-200 rounded-xl' />
    </div>
  </div>
)

export default LoadingPlaceholder
