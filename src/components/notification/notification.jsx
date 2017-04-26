import { Link } from 'react-router';

import Icon from 'components/icon/icon';
import Button from 'components/button/button';

import CrossIcon from 'images/cross.svg';

import './notification.scss';

class Notification extends React.Component {
  render() {
    const { onClose } = this.props;

    return (
      <div className='notification'>
        <div className='notification__layout'>
          <span className='notification__title'>
            Added to cart
          </span>
          <Icon
            id={CrossIcon}
            className='notification__cross'
            onClick={onClose}
          />
        </div>
        <div className='notification__layout'>
          <Link to='/cart'>
            <Button title='View cart' />
          </Link>
          <Button title='Checkout' />
        </div>
      </div>
    );
  }
}

export default Notification;