import React from 'react';
import './Products.scss';

const Products = (props) => {
    const { products } = props;
    const shortenString = string => {
        return (
            string.split(' ').slice(0,20).join(' ')
        )
    }
    return (
        <div className="row products">
            {products.map((element, index) => {
                console.log(element.prices[0].price)
                return (
                    <div className="col-md-4 product" key={index}> 
                    <div className="card">
                        <img className="card-img-bottom" src={element.image_url} alt={element.name}/>
                        <div className="card-body">
                            <h4 className="card-title">{element.name}</h4>
                            <p className="card-text">{element.prices[0].price}</p>
                            <p className="card-text">{`${shortenString(element.description)}...`}</p>
                            
                            <button className="btn btn-secondary">More</button>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Products;