import React from 'react'

const RandomQuotes = ({ randomQuote, showAuthorQuotes, getQuotes }) => {
  return (
    <>
      <button
        className='flex m-2 hover:text-[#386a81] text-[#081c2e] transition-all absolute top-4 outline-0 md:ml-[55%] ml-[75%] '
        onClick={() => getQuotes()}
      >
        random
        <i className='material-icons hover:animate-spin ml-2'>cached</i>
      </button>
      <div className='border-l-8  border-[#386a81] w-fit h-fit mt-[25%] ml-4 '>
        <p className='text-[#081c2e] pl-4 md:ml-4 md:max-w-2xl   md:text-2xl    text-[100%] '>
          “{randomQuote.content}.”
        </p>
      </div>

      <div className='m-4 mt-[100px] p-4 rounded-[1px] h-[100px] round-sm hover:bg-[#000] hover:text-[#fff] transition-all flex justify-between cursor-pointer '>
        <div className=' '>
          <h1 className=' font-bold'>{randomQuote.author}</h1>
          <p className='text-gray-700  '>{randomQuote.tags[0]}</p>
        </div>
        <button
          className='outline-0'
          onClick={() => showAuthorQuotes(randomQuote.author)}
        >
          <i className='material-icons text-[#fff]'>trending_flat</i>
        </button>
      </div>
    </>
  )
}

export default RandomQuotes
