import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="row header">
            <div className="col-md-12">
                <div className="header-items">
                    <h1>Currency</h1>
                    <h2>Select your prefered currency</h2>
                    <button className="btn btn-primary">EUR</button>
                    <button className="btn btn-primary">NGN</button>
                    <button className="btn btn-primary">USD</button>
                    <button className="btn btn-primary">KES</button>
                </div>
            </div>
        </div>
    )
}

export default Header;