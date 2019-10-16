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
        currency: 'EUR',
        animation: 'fade-in'
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

    /**
     * get all the images from the json file
     */
    getImages = () => {
        const images = []
        const { products } = this.state;
        products && products.map(product => {
            images.push(product.image_url)
        });
        return images
    }

    /**
     * slide to the next image in the carousel
     */
    carouselNext = () => {
        const { imageIndex } = this.state;
        imageIndex >= this.getImages().length - 1
        ? this.setState({
            ...this.state,
            animation: this.state.animation === 'slide-down'? 'slide-up': 'slide-down',
            imageIndex: 0,
        })
        : this.setState(prevState => ({
            ...prevState,
            imageIndex: ++prevState.imageIndex,
            animation: prevState.animation === 'slide-down'? 'slide-up': 'slide-down'
        }))
    }

    /**
     * slides to the prev image in the carousel
     */
    carouselPrev = () => {
        const { imageIndex } = this.state;
        imageIndex <= 0
        ? this.setState({
            ...this.state,
            imageIndex: this.getImages().length - 1,
            animation: this.state.animation === 'slide-down'? 'slide-up': 'slide-down',
        })
        : this.setState(prevState => ({
            ...prevState,
            imageIndex: --prevState.imageIndex,
            animation: prevState.animation === 'slide-down'? 'slide-up': 'slide-down'
        }))
    }

    /**
     * updatets the currency
     */
    setCurrency = (currency, key) => () => {
        this.setState({
            ...this.state,
            currency: {[`product${key}`]: currency}
        })
    }

    /**
     * toggle the product description
     */
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
                    carouselPrev={this.carouselPrev}
                    animation={this.state.animation}/>
                    <Header setCurrency={this.setCurrency} currency={this.state.currency}/>
                    <Products 
                    products={this.state.products}
                    currency={this.state.currency}
                    showProduct={this.state.showProduct}
                    showProductDetails={this.showProductDetails}
                    setCurrency={this.setCurrency}
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