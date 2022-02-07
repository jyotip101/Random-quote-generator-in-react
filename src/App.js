import react, { useState } from 'react'
// colors
// main - #386a81
// whi- #ffffff
// black- #081c2e
const url = 'https://api.quotable.io/randomhttps://api.quotable.io/random'
function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getQuotesOfAuthor = (author) => {}

  return (
    <>
      <div className=' bg-[#fff] m-auto max-w-xl w-full h-[100vh]'>
        <button className='flex m-2 hover:text-[#386a81] text-[#081c2e] transition-all absolute top-4  md:ml-[55%] ml-[75%] '>
          random
          <i className='material-icons hover:animate-spin ml-2'>cached</i>
        </button>
        <div className='border-l-8  border-[#386a81] w-fit h-fit mt-[25%] ml-4 '>
          <p className='text-[#081c2e] pl-4 md:ml-4 md:max-w-2xl   md:text-2xl    text-[100%] '>
            “The first rule of any technology used in a business is that
            automation applied to an efficient operation will magnify the
            efficiency. The second is that automation applied to an inefficient
            operation will magnify the inefficiency.”
          </p>
        </div>

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
