import * as types from '../constants/ActionType';

let data = JSON.parse(localStorage.getItem('CART'));

let initialState = data ? data : [];

const cartReducer = (state = initialState, action) => {
    let { product, quantity } = action;
    let index = -1;
    switch(action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, product);
            if(index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findIndex(state, product);
            if(index !== -1) {
                state.splice(index,1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findIndex(state, product);
            if(index !== -1) {
                state[index].quantity = quantity
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

const findIndex = (state, product) => {
    var index = -1;
    for(let key in state) {
        if(state[key].product.id === product.id) {
            index = key;
            break;
        }
    }
    return index;
}

export default cartReducer;