import { connect } from 'react-redux';
//import Cart from './Cart';
import Cart from '../components/Cart/Cart.js';

//import Cart from '../components/Cart/Cart.js';
//import Cart from '../components/Cart.jsx';
import { getItems, getCurrency, getTotal, removeFromCart } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}
const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);



