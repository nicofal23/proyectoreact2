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
      className={styles.cartWidget} // Asegúrate de usar la clase de estilo correctamente
      style={{
        display: cart.length > 0 ? 'block' : 'none', // Cambiado de getTotalItems > 0 a cart.length > 0
        margin: '30px'  
      }} 
    >
      <img src="../../src/assets/img/carrito.png" alt="" className={styles.img} />
      {cart.length} {/* Cambiado de getTotalItems a cart.length */}
    </Link>
  );
};

export default CartWidget;



