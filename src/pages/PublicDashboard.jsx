import React, {useState} from 'react';
import Results from '../components/result/Results'
import Navbar from '../components/layout/Navbar'
import classnames from 'classnames'

export default () => {
  
  const [loading, setLoading] = useState(false)

  const [exchangeResults, setExchangeResults] = useState([])

  const setResults = (results) => {
    setExchangeResults(results)
  }

  const switchLoading = (state) =>{
    setLoading(state); 
  }

  return (
    <>
    <Navbar setResults={setResults} switchLoading={switchLoading}/>

    <div className="position-relative container">
      {loading ? <p className="alert bg-mid-blue border-light-blue text-light font-weight-bold mt-5 position-absolute px-5">Loading</p> : null}
      
      <div className={classnames('h-100','d-flex','flex-column','align-items-center', 'justify-content-center','container')}>
        <Results exchangeResults = {exchangeResults} />
      </div>
    </div>
    </>
  );
}
