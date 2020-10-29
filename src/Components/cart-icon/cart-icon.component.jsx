import React from 'react';
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {createStructuredSelector} from 'reselect'

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden,itemCount}) => (

    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
<span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch (toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({

    itemCount: selectCartItemsCount // we pass state because the selector needs state and links the state to cart form there
});

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);