import React from 'react'

const AuthorQuotesList = ({ authorQuotes, showAuthorQuotes, authorName }) => {
  return (
    <>
      <div className='m-4 flex justify-between '>
        <button
          className='flex hover:text-[#386a81] items-center w-fit justify-start    transition outline-0'
          onClick={() => showAuthorQuotes('')}
        >
          <i className='material-icons font-bold text-[#081c2e]'>
            trending_flat
          </i>
          <span className='font-bold  text-[24px] ml-2 text-[#081c2e] '>
            {authorName}
          </span>
        </button>
        <p className=' text-[#386a81] '>{authorQuotes.length}+ quotes</p>
      </div>

      {authorQuotes.map((item, index) => {
        const { author, content, tags } = item
        return (
          <div
            key={index}
            className='border-l-8  border-[#386a81] w-fit h-fit mt-[18%] ml-4 '
          >
            <p className='text-[#081c2e] pl-4 md:ml-4 md:max-w-2xl   md:text-2xl    text-[100%] '>
              “{content}.”
            </p>
          </div>
        )
      })}
    </>
  )
}

export default AuthorQuotesList
