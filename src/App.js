function App() {
  return (
    <>
      <div className=' bg-[#fff] m-auto max-w-xl w-full h-[100vh]'>
        <div className=' absolute right-0'>
          <button className='flex m-2'>
            random
            <i className='material-icons ml-2'>cached</i>
          </button>
        </div>
        <p className=''>
          “The first rule of any technology used in a business is that
          automation applied to an efficient operation will magnify the
          efficiency. The second is that automation applied to an inefficient
          operation will magnify the inefficiency.”
        </p>
        <div className=''>
          <h1 className=''>Bill Gates</h1>
          <p className=''>business</p>
        </div>

        <footer className='absolute bottom-0  '>
          <p className='text-center'>
            created by{' '}
            <a href='' target='_blank' rel='noopener noreferrer'>
              jyoti-p
            </a>
            - devChallenges.io
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
