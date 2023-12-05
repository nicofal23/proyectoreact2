//itemdetail.jsx
import styles from '../ItemDetail/ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const ItemDetail = ({ id, nombre, img, precio, stock, categoria, descripcion }) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad);
        const item = {
            id, 
            nombre,
            precio,
            img
    } 
    addItem(item, cantidad);
}

    return (
        <div className={styles.divcard}>
        <article className={styles.CardItem}>
            <header className={styles.Header}>
                <h2 className={styles.ItemHeader}>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className={styles.ItemImg} />
            </picture>
            <section>
                <p className={styles.Info}>
                    Categoria:{categoria}
                </p>
                <p className={styles.Info}>
                    Descripcion: {descripcion}
                </p>
                <p className={styles.Info}>
                    Precio: {precio}
                </p>
            </section>
            <footer className={styles.ItemFooter}>
                {
                cantidadAgregada > 0 ? ( <Link to='/cart' className={styles.boton}>Terminar mi compra</Link> 
                ) : (
                <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
                )
                 }    
            </footer>
        </article>
        </div>
    );
};

export default ItemDetail;