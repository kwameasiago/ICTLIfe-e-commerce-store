import React from 'react';
import './Header.scss';

const Header = (props) => {
    const { currency } = props;
    return (
        <div className="row header">
            <div className="col-md-12">
                <div className="header-items">
                    <h1>Currency</h1>
                    <h2>Select your prefered currency</h2>
                    <button 
                    className={`btn btn-blue ${currency ==='EUR' && 'active'}`} onClick={props.setCurrency('EUR')}>EUR</button>
                    <button className={`btn btn-blue ${currency ==='NGN' && 'active'}`} onClick={props.setCurrency('NGN')}>NGN</button>
                    <button className={`btn btn-blue ${currency ==='KES' && 'active'}`} onClick={props.setCurrency('KES')}>KES</button>
                    <button className={`btn btn-blue ${currency ==='USD' && 'active'}`} onClick={props.setCurrency('USD')}>USD</button>
                </div>
            </div>
        </div>
    )
}

export default Header;