import {Item} from './Item';

export const ItemList = ({products}) => products.map(products =>
    <Item products={products}/>)