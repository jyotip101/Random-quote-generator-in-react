import { useEffect, useState } from 'react'
import AuthorQuotesList from './components/AuthorQuotesList'
import RandomQuotes from './components/RandomQuotes'
// colors
// main - #386a81
// whi- #ffffff
// black- #081c2e
const url = 'https://api.quotable.io/random'
function App() {
  const [randomQuote, setRandomQuote] = useState([])
  const [loading, setLoading] = useState(true)
  const [authorQuotes, setAutorQuotes] = useState([])
  const [seeListOfAuthor, setSeeListOfAuthor] = useState(false)
  const [authorName, setAuthorName] = useState('')

  const getQuotesOfAuthor = async (author) => {
    try {
      setLoading(true)
      const response = await fetch(
        'https://api.quotable.io/quotes?author=' + author
      )
      const quoteData = await response.json()
      setAutorQuotes(quoteData.results)
      setAuthorName(author)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const getQuotes = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://api.quotable.io/random')

      const quoteData = await response.json()
      setRandomQuote(quoteData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  const showAuthorQuotes = (author) => {
    if (seeListOfAuthor) {
      setSeeListOfAuthor(false)
      setAutorQuotes([])
    } else {
      setSeeListOfAuthor(true)
      getQuotesOfAuthor(author)
    }
  }

  useEffect(() => {
    getQuotes()
  }, [])

  if (loading) {
    return (
      <h1 className='text-[120%] mt-20 w-full   flex justify-center items-center '>
        Please wait a moment
        <i className='material-icons animate-spin'>rotate_right</i>
      </h1>
    )
  }
  return (
    <>
      <div className=' bg-[#fff] m-auto max-w-xl w-full h-full '>
        {seeListOfAuthor ? (
          <AuthorQuotesList
            authorName={authorName}
            authorQuotes={authorQuotes}
            showAuthorQuotes={showAuthorQuotes}
          />
        ) : (
          <RandomQuotes
            getQuotes={getQuotes}
            randomQuote={randomQuote}
            showAuthorQuotes={showAuthorQuotes}
          />
        )}
      </div>
      <footer className='mt-[12%]'>
        <p className='text-center '>
          created by{' '}
          <a
            href='https://github.com/jyotip101/Random-quote-generator-in-react'
            target='_blank'
            className='text-[#386a81]'
            rel='noopener noreferrer'
          >
            jyoti-p
          </a>
          - devChallenges.io
        </p>
      </footer>
    </>
  )
}

export default App
