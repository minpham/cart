import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import { actAddToCart, actChangeMessage } from '../actions/index';
import PropTypes from 'prop-types';

class ProductContainers extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                  { this.showProduct(products) }
            </Products>
        );
    }

    showProduct(arr) {
        let result = '';
        let { addToCart, changeMessage } = this.props;
        if(arr.length > 0) {
            result =  arr.map(item => {
                return  <Product 
                            key={ item.id }
                            product={ item } 
                            onAddToCart ={ addToCart }
                            onChangeMessage = { changeMessage }
                        />
            })
        }
        return result;
    }
}

    ProductContainers.propTypes = {
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            })
        ).isRequired,
        changeMessage: PropTypes.func.isRequired,
        addToCart: PropTypes.func.isRequired
    }

    const mapStateToProps = state => {
        return {
            products: state.products
        }
    }

    const mapDispatchToProps = (dispatch, props) => {
        return {
            addToCart: (product) => {
                dispatch(actAddToCart(product,1))
            },
            changeMessage: (message) => {
                dispatch(actChangeMessage(message));
            }
        }
    }
export default connect(mapStateToProps, mapDispatchToProps) (ProductContainers);
