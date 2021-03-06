import { Record } from 'immutable';

const Parent = Record({
  product: null,
  selectedSize: '',
  quantity: 0,
});

class ShoppingCartItem extends Parent {
  getProduct() {
    return this.get('product');
  }

  getQuantity() {
    return this.get('quantity');
  }

  setQuantity(quantity) {
    return this.set('quantity', quantity);
  }

  getSize() {
    return this.get('selectedSize');
  }

  getId() {
    return this.getProduct().getId() + this.getSize();
  }
}

export default ShoppingCartItem;