import React from 'react';
import {connect} from 'react-redux';
import CollectionItem from '../../Components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage = ({match}) => (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
);

const mapStateToProps = (state,ownProps) => ({
    collection: selectCollection(ownProps.match.param.collectionId)(state) // need to pass state to get the url for the function
})

export default connect(mapStateToProps) (CollectionPage);