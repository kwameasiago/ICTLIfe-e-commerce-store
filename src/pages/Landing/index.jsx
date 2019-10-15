import React, { Component } from 'react';
import Carousel from '../../components/Carousel/index.jsx';
import Header from '../../components/Header/index.jsx'
import Products from '../../components/Products/index.jsx'
import { connect } from 'react-redux';
import { fetchProductData } from '../../store/Products/index.jsx'

class Landing extends Component {
    state = {
        products: [],
        imageIndex: 0
    }

    componentDidMount() {
        const { fetchProductData } = this.props;
        fetchProductData()
    }

    componentDidUpdate(prevProps) {
        const { data: { products } } = this.props;
        if (this.props !== prevProps) {
            this.setState({
                products
            })
        }
    }

    getImages = () => {
        const images = []
        const { products } = this.state;
        products.forEach(product => {
            images.push(product.image_url)
        });
        return images
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <Carousel image={this.getImages()[this.state.imageIndex]}/>
                    <Header />
                    <Products products={this.state.products}/>
                </div>
            </React.Fragment>
        )
    }
}

export const mapStateToProps = state => ({
    data: state.productReducer.payload
})

export const mapDispatchToProps = dispatch => ({
    fetchProductData: () => dispatch(fetchProductData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);