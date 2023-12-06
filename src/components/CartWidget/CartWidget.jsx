// cartwidget.jsx
import styles from '../CartWidget/CartWidget.module.css'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const CartWidget = () => {
  const { cart, getTotalItems } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className={styles.cartWidget} 
      style={{
        display: cart.length > 0 ? 'block' : 'none', 
        margin: '0px 30px 30px 30px'  
      }} 
    >
      <img src="../../src/assets/img/carrito.png" alt="" className={styles.img} />
      {getTotalItems()} 
    </Link>
  );
};

export default CartWidget;


