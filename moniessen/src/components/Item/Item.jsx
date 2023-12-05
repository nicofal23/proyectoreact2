//item.jsx
import { Link } from 'react-router-dom';
import styles from '../Item/Item.module.css';

const Item = ({ id, nombre, img, precio, stock }) => {
    return (
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
                    Precio: {precio}
                </p>
                <p className={styles.Info}>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className={styles.ItemFooter}>
                <Link to={`/item/${id}`} className={styles.Option}>Ver detalle</Link>
            </footer>
        </article>
    );
};

export default Item;