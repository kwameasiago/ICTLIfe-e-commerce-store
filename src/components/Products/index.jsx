import React from 'react';
import './Products.scss';

const Products = (props) => {
    const { products } = props;
    const shortenString = string => {
        return (
            string.split(' ').slice(0,20).join(' ')
        )
    }

    const price = (currency, arr) => {
        switch (currency){
            case 'EUR':
                return `${arr.prices[0].price} ${arr.prices[0].currency}`
            case 'KES':
                return `${arr.prices[1].price} ${arr.prices[1].currency}`
            case 'NGN':
                return `${arr.prices[2].price} ${arr.prices[2].currency}`
            default:
                return `${arr.prices[3].price} ${arr.prices[3].currency}`
        }
    }
    return (
        <div className="row products">
            {products && products.map((element, index) => {
                return (
                    <div className="col-md-3 product" key={index}> 
                    <div className="card">
                        
                        {props.showProduct !== index && <img className="card-img-bottom" src={element.image_url} alt={element.name}/>}
                        <button className="btn btn-blue"> Buy</button>
                        <div className="card-body">
                            <h4 className="card-title">{element.name}</h4>
                            <p className="card-text">{price(props.currency, element)}</p>
                            <p className="card-text">{props.showProduct !== index ?`${shortenString(element.description)}...` : element.description}</p>
                            {props.showProduct !== index 
                            ? <button className="btn btn-secondary" onClick={props.showProductDetails(index)}>More</button>
                            : <button className="btn btn-secondary" onClick={props.showProductDetails('')}>Close</button>
                        }
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Products;