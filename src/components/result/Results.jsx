import React from 'react';
import Result from './Result'
import classnames from 'classnames'

function results(props) {
    const exchangeResults = props.exchangeResults
return (
        <div className="container">
            <div className={classnames('list-group', 'd-flex', 'justify-content-center', 'bg-dark-blue', 'text-light', 'flex-column', 'align-items-center', 'p-5','border-light-blue')}>
                <div className={classnames('d-flex', 'row','w-100')}>
                    <p className="d-flex col-3 justify-content-center">Exchange</p>
                    <p className="d-flex col-3 justify-content-center">Price</p>
                    <p className="d-flex col-3 justify-content-center">Coins</p>
                    <p className="d-flex col-3 justify-content-center">Percentage Difference</p>
                </div>
                {exchangeResults.map(obj =>
                    <Result key={obj.exchange} 
                    exchange={obj.exchange} 
                    price={obj.currentPrice} 
                    coinsQty={obj.coinsQty} 
                    diff={obj.diff}/>
                )}
            </div>
        </div>
    )
}

export default results;