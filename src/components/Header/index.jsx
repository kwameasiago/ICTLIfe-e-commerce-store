import React from 'react';
import './Header.scss';

const Header = (props) => {
    const { currency } = props;
    return (
        <div className="row header">
            <div className="col-md-12">
                <div className="header-items">
                    <h1>Welcome to Amazing E-commerce</h1>
                    <h2>Best choice for all your shopping needs</h2>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;