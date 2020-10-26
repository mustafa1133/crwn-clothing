import React from 'react';
import {connect} from 'react-redux';
import Shop_Data from '../../pages/shop/shop.data';

import CustomButton from '../custom-button/custom-button.component'
import {addItem} from '../../redux/cart/cart.actions'

import './collection-item.styles.scss';

const CollectionItem =({item,addItem})=> {
    const {name,price,imageUrl} = item; // destructering proprs off of item
    return (
    <div className='collection-item'>
        <div
        className='image'
        style={{
            backgroundImage : `url(${imageUrl})`
        }}
     />

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick= {() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
);}

const mapDispatchToProps = dispatch => ({ // creates a prop function
    addItem: item => dispatch(addItem(item))// takes an item then dispatches it to the store by calling the additem action and adding the item as a payload
})
export default connect (null,mapDispatchToProps)(CollectionItem);