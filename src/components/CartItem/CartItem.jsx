// CartItem.jsx
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.item.img} className="img-fluid rounded-start" alt={item.item.nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Producto: {item.item.nombre}</h5>
                        <p className="card-text">Cantidad: {item.cantidad}</p>
                        <p className="card-text">Precio: $ {item.item.precio}</p>
                        <button className="btn btn-primary" onClick={() => removeItem(item.item.id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default CartItem;