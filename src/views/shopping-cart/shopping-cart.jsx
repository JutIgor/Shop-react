import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import Layout from 'components/layout/layout';
import EmptyShoppingCart from 'views/shopping-cart/empty/empty-shopping-cart';
import ShoppingCartItem from 'views/shopping-cart/item/shopping-cart-item';
import Button from 'components/button/button';

import { deleteProduct, changeQuantity } from 'actions/shopping-cart';

import { formatPrice, formatAmountString } from 'utils';

import './shopping-cart.scss';

class ShoppingCart extends React.Component {
  render() {
    const { items, totalPrice, deleteProduct, changeQuantity } = this.props;

    if (!items.size) {
      return (
        <EmptyShoppingCart />
      );
    }

    const itemsQuantity = formatAmountString(items.size);
    const price = formatPrice(totalPrice);

    return (
      <Layout
        withoutNavbar={true}
        withoutFooter={true}
      >
        <div className='shopping-cart'>
          <div className='shopping-cart__header'>
            <h1>Your Cart</h1>
            <span>({itemsQuantity})</span>
          </div>
          <div className='shopping-cart__list'>
            {
              items.map(item => {
                return (
                  <ShoppingCartItem
                    key={item.getId()}
                    item={item}
                    deleteProduct={deleteProduct}
                    changeQuantity={changeQuantity}
                  />
                );
              })
            }
          </div>
          <div className='shopping-cart__checkout'>
            <Link to='/checkout'>
              <Button title='Checkout' />
            </Link>
            <div>
              Total:
              <span>{price}</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default connect(
  ({ ShoppingCart }) => ({
    items: ShoppingCart.getItems(),
    totalPrice: ShoppingCart.getTotalPrice(),
  }),
  dispatch => bindActionCreators({
    deleteProduct,
    changeQuantity,
  }, dispatch)
)(ShoppingCart);