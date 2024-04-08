import { connect } from 'react-redux';
//import ProductList from './ProductList';
//import Product from '../components/Product';
import ProductList from '../components/ProductList/ProductList.js';

import { getProducts } from '../ducks/products';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

export default connect(mapStateToProps)(ProductList);
