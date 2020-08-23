import React from 'react';
import classnames from 'classnames'

// import { Container } from './styles';

function result(props) {
  return (
        <div className={classnames('list-item', 'd-flex', 'w-50', 'my-2', 'border-bottom-light-blue', 'w-100')}>
          <div className={classnames('row','w-100')}>
            <p className="col-3 d-flex justify-content-center font-bold">{props.exchange}</p>
            <p className="col-3 d-flex justify-content-center">{props.price}</p>
            <p className="col-3 d-flex justify-content-center">{props.coinsQty}</p>
            <p className="col-3 d-flex justify-content-center">{props.diff === 0 ? '-': props.diff + '%'}</p>
          </div>
        </div>
  )
}

export default result;