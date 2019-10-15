import React, { Component } from 'react';
import Carousel from '../../components/Carousel/index.jsx';
import Header from '../../components/Header/index.jsx'
import Products from '../../components/Products/index.jsx'
import { connect } from 'react-redux';
import { fetchProductData } from '../../store/Products/index.jsx'

class Landing extends Component {
    state = {
        products: [],
        imageIndex: 0,
        currency: 'EUR'
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
        products && products.map(product => {
            images.push(product.image_url)
        });
        return images
    }

    carouselNext = () => {
        const { imageIndex } = this.state;
        imageIndex >= this.getImages().length - 1
        ? this.setState({
            ...this.state,
            imageIndex: 0
        })
        : this.setState(prevState => ({
            ...prevState,
            imageIndex: ++prevState.imageIndex
        }))
    }

    carouselPrev = () => {
        const { imageIndex } = this.state;
        imageIndex <= 0
        ? this.setState({
            ...this.state,
            imageIndex: this.getImages().length - 1
        })
        : this.setState(prevState => ({
            ...prevState,
            imageIndex: --prevState.imageIndex
        }))
    }

    setCurrency = (currency) => () => {
        this.setState({
            ...this.state,
            currency
        })
    }

    showProductDetails = (key) => () => {
        this.setState(prevState => ({
            ...prevState,
            [`showProduct`]: key,
        }))
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <Carousel 
                    image={this.getImages()[this.state.imageIndex]}
                    carouselNext={this.carouselNext}
                    carouselPrev={this.carouselPrev}/>
                    <Header setCurrency={this.setCurrency} currency={this.state.currency}/>
                    <Products 
                    products={this.state.products}
                    currency={this.state.currency}
                    showProduct={this.state.showProduct}
                    showProductDetails={this.showProductDetails}
                    />
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