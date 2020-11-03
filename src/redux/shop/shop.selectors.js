import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector (
  [selectCollections],
  collections => Object.keys(collections).map(key => collections(key)) // takes all keys in an object and returns it into an array format
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )
);