import React from 'react';
import Result from './Result'
import classnames from 'classnames'

function results(props) {
    const exchangeResults = props.exchangeResults
return (
        <div className="container">
            <div className={classnames('list-group', 'd-flex', 'justify-content-center', 'bg-mid-blue', 'text-light', 'flex-column', 'align-items-center', 'p-5')}>
                <div className={classnames('d-flex', 'row','w-100')}>
                    <p className="col-3">Exchange</p>
                    <p className="col-3">Price</p>
                    <p className="col-3">Coins</p>
                    <p className="col-3">Percentage Difference</p>
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