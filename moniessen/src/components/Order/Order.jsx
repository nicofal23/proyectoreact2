// Order.jsx
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CartContext } from '../../context/CartContext';
import styles from './Order.module.css';
import { db } from '../../firebase/cliente';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const MySwal = withReactContent(Swal);

const Order = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [orderNumber, setOrderNumber] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleBuyClick = async () => {
    // Verificar si hay productos en el carrito
    if (cart.length === 0) {
      MySwal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'No hay productos en el carrito. Agregue productos antes de comprar.',
      });
      return;
    }

    // Verificar si los campos obligatorios están completos
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.email) {
      MySwal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Por favor, complete todos los campos antes de comprar.',
      });
      return;
    }

    // Crear el objeto de la orden
    const order = {
      buyer: customerInfo,
      items: cart.map((item) => ({
        id: item.item.id,
        nombre: item.item.nombre,
        precio: item.item.precio,
      })),
      total: cart.reduce((acc, curr) => acc + curr.item.precio * curr.cantidad, 0),
    };

    try {
      // Agregar la orden a Firestore
      const docRef = await addDoc(collection(db, 'orders'), {
        ...order,
        createdAt: serverTimestamp(),
      });

      // Limpiar el carrito después de realizar la compra
      clearCart();

      // Mostrar SweetAlert de éxito
      MySwal.fire({
        icon: 'success',
        title: 'Compra realizada con éxito',
        text: `Número de Orden: ${docRef.id}`,
      });
    } catch (error) {
      console.error('Error al crear la orden:', error);
      MySwal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Ocurrió un error al procesar la compra. Intente nuevamente más tarde.',
      });
    }
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.orden}>
        <div className={styles.product}>
          <h1>Productos</h1>
          {cart.map((item, index) => (
            <div key={index}>
              <h6>• {item.item.nombre}</h6>
            </div>
          ))}
        </div>
        <div className={styles.formcontainer}>
          <h1 className={styles.formtitle}>Información del Cliente</h1>
          <form>
            <label className={styles.formlabel}>
              Nombre:
              <input
                type="text"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                className={styles.forminput}
              />
            </label>
            <br />
            <label className={styles.formlabel}>
              Teléfono:
              <input
                type="text"
                name="phone"
                value={customerInfo.phone}
                onChange={handleInputChange}
                className={styles.forminput}
              />
            </label>
            <br />
            <label className={styles.formlabel}>
              Email:
              <input
                type="text"
                name="email"
                value={customerInfo.email}
                onChange={handleInputChange}
                className={styles.forminput}
              />
            </label>
            <br />
            <button type="button" onClick={handleBuyClick} className={styles.formbutton}>
              Comprar
            </button>
          </form>
          {orderNumber && <p>Número de Orden: {orderNumber}</p>}
        </div>
      </div>
    </div>
  );
}; 

export default Order;
