// ItemCount.jsx
import React, { useState } from 'react';
import styles from '../ItemCount/ItemCount.module.css';
import Swal from 'sweetalert2';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'; // Ajusta la ruta según tu estructura

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicial);
  const [loading, setLoading] = useState(false);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const quitar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const showAddToCartAlert = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
    });
  };

  const handleOnAddClick = () => {
    setLoading(true);
    setTimeout(() => {
      onAdd && onAdd(cantidad);
      setLoading(false);
      showAddToCartAlert();
    }, 2000); // Simula una operación asíncrona (ajusta según tus necesidades reales)
  };

  return (
    <div className={styles.contador}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className={styles.control}>
            <button className={styles.boton} onClick={quitar}>
              -
            </button>
            <h4 className={styles.numero}>{cantidad}</h4>
            <button className={styles.boton} onClick={incrementar}>
              +
            </button>
          </div>
          <div>
            <button
              className={styles.boton}
              onClick={handleOnAddClick}
              disabled={stock < 1 || loading}
            >
              Agregar al carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemCount;
