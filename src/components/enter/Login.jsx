import React from 'react';
import classnames from 'classnames'

// import { Container } from './styles';

function enter() {
  return (
      //login
      <div className={classnames('w-100', 'h-100', 'd-flex','align-items-center','justify-content-center')}>
        <div className={classnames('d-flex', 'flex-column', 'container', 'bg-mid-blue', 'w-50', 'py-5','p-0', 'rounded', 'h-75', 'justify-content-center', 'border-light-blue')} id="login-form">
            <h1 className={classnames('text-light','d-flex', 'justify-content-center')}>Welcome to Arbilist</h1>
            <input placeholder="E-mail" className={ classnames('form-control', 'bg-dark-blue', 'text-white', 'border-0', 'mt-10', 'py-4')}/>
            <input placeholder="password" className={ classnames('form-control', 'bg-dark-blue', 'rounded-none', 'text-white', 'border-0', 'mt-10', 'py-4')}/>
            <button type="button" className={classnames('btn', 'bg-green', 'font-bold', 'hover-dark-green','rounded-0', 'mt-10', 'font-size-1-5')}>Login</button>
            <button type="button" className={classnames('btn', 'bg-blue', 'font-bold','mt-10', 'hover-dark-blue','rounded-0', 'font-size-1-5')}>Register</button>
            <button type="button" className={classnames('btn', 'bg-red', 'font-bold', 'mt-10', 'text-white', 'hover-dark-red','rounded-0', 'font-size-1-5')}>
                <i className={classnames('fab', 'fa-google', 'mx-2')}/>Google login
            </button>
        </div>
      </div>
    );
}

export default enter;