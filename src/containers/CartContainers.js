import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carts from '../components/Carts';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as Message from '../constants/Message';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from '../actions/index';

class CartContainer extends Component {
    render () {
        var { cart } = this.props;
        return (
            <Carts>
                { this.showCartItem(cart) }
                { this.showAmount(cart) }
            </Carts>
        )
    }

    showCartItem = (arr) => {
        let { onDeleteProductInCart, changeMessage, onUpdateProductInCart } = this.props;
        let result = <tr>
            <td>{ Message.MSG_CART_EMPTY }</td>
        </tr>;
        if(arr.length) {
            result = arr.map((cart, index) => {
                return (
                    <CartItem
                        key={ index } 
                        item={ cart }
                        index={ index }
                        onDeleteProduct={ onDeleteProductInCart }
                        onChangeMessage={ changeMessage }
                        onUpdateProduct={ onUpdateProductInCart }
                    />
                )
            })
        }
        return result;
    }

    showAmount = (cart) => {
        let result = null;
        if(cart.length) {
            result = <CartResult cart={ cart }/>
        }
        return result;
    }
}

    CartContainer.propTypes = {
        cart: PropTypes.arrayOf(
            PropTypes.shape({
                product: PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    image: PropTypes.string.isRequired,
                    price: PropTypes.number.isRequired,
                    description: PropTypes.string.isRequired,
                    inventory: PropTypes.number.isRequired,
                    rating: PropTypes.number.isRequired
                }),
                quantity: PropTypes.number.isRequired
            })
        ).isRequired,
        onDeleteProductInCart : PropTypes.func.isRequired,
        changeMessage : PropTypes.func.isRequired,
        onUpdateProductInCart: PropTypes.func.isRequired
    }

    const mapStateToProps = state => {
        return {
            cart: state.cart
        }
    }

    const mapDispacthToProps = (dispatch, props) => {
        return {
            onDeleteProductInCart : (product) => {
                dispatch(actDeleteProductInCart(product));
            },
            changeMessage : (message) => {
                dispatch(actChangeMessage(message));
            },
            onUpdateProductInCart : (product, quantity) => {
                dispatch(actUpdateProductInCart(product, quantity))
            }
        }
    }
export default connect(mapStateToProps, mapDispacthToProps)(CartContainer);