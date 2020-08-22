import React from 'react';
import classnames from 'classnames'
import axios from 'axios'

// import { Container } from './styles';

function Navbar(props) {

    const coinsOptions = ['ETH','LTC','NEO','XTZ','XRP','LINK','BCH','ADA','CRO','BNB','EOS','XLM','TRX','XMR','ATOM','NEO','MIOTA','VET','HT','DASH','ETC','ZEC','MKR','ONT','ZRX','SNX','BAT','DAI','COMP','THETA','EWT','UMA','WAVES','OKB','REP','DCR','LSK','NANO','']

    const search = () => {
        const symbol = (document.getElementById('coin').value).toUpperCase() + '/BTC'
        const quantity = parseFloat(document.getElementById('quantity').value)
        
        console.log(symbol)

        /*axios.post('/public/exchange/search', 
        {symbol: symbol, btcQty: quantity})
        .then(callResult => {
            props.setResults(callResult.data)
        })*/
    }

  return (
    <nav className={classnames('navbar','navbar-expand-lg','navbar-light','bg-dark-blue', 'border-bottom-light-blue')}>
        <button className={classnames("navbar-toggler")} type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
            <i className={classnames("fas","fa-bars", 'text-light')}></i>
        </button>

        <div className={classnames('collapse', 'navbar-collapse')} id="menu">
            <ul className={classnames('navbar-nav', 'ml-auto', 'd-flex')}>
                <li className={classnames('nav-item')}>
                    <select className={classnames('form-control','bg-yellow', 'border-0','rounded-0', 'text-black', 'input-navbar')} placeholder="COIN" id="coin">
                        {coinsOptions.map(coin => <option className="bg-dark-blue text-light">{coin}</option>)}
                    </select>
                </li>
                <li className="nav-item">
                    <input className={classnames('form-control', 'bg-blue', 'border-0', 'rounded-0','text-black', 'input-navbar')} placeholder="BTC Qty" id="quantity" type="number"></input>
                </li>
                <li className="nav-item">
                    <button type="button" className={classnames('btn', 'bg-pink', 'px-5', 'rounded-0', )} onClick={search}>
                        <i className={classnames('fas','fa-search', 'fa-flip-horizontal')}></i>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;