import React, {useState} from 'react';
import Results from '../components/result/Results'
import Navbar from '../components/layout/Navbar'
import classnames from 'classnames'

export default () => {
  const [exchangeResults, setExchangeResults] = useState([])

  const setResults = (results) => {
    setExchangeResults(results)
  }

  return (
    <>
      <Navbar setResults={setResults}/>
      <div className={classnames('h-100','d-flex','flex-column','align-items-center', 'justify-content-center')}>
        <Results exchangeResults = {exchangeResults}/>
      </div>
    </>
  );
}
