import './App.css'
import { FaQuoteLeft } from "react-icons/fa";
import {useEffect, useState} from "react";

function App() {
    const [quote, setQuote] = useState({});
    const [firstLoad, setFirstLoad] = useState(true)

    useEffect(() => {
        if(firstLoad){
            getQuote()
            setFirstLoad(false)
        }
    },[])
    function getQuote() {
        fetch("https://api.quotable.io/quotes/random")
            .then(response =>response.json())
            .then(data => {
                setQuote({quote: data[0].content,author: data[0].author})
            })
    }

  return (
    <>
      <div id="quote-box">
          <div id="text">
              <div className="quote-icon">
                  <FaQuoteLeft size={"14px"}/>
              </div>
              <h3>{quote.quote}</h3>
          </div>
          <h5 id="author">{`-${quote.author}`}</h5>
          <div id="buttons">
              <a id="tweet-quote" className="twitter-share-button"
                 href={`https://twitter.com/intent/tweet?text="${quote.quote}"%0A-${quote.author}`} target={"_blank"}>
                  Tweet</a>
              <button onClick={getQuote} id="new-quote">New Quote</button>
          </div>
      </div>
    </>
  )
}

export default App
