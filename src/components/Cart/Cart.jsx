import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";


const Cart = ({carts, handleDeleteCart}) => {
    return (
        <div className="w-[350px] min-h-[300px] shadow-lg p-6 rounded-lg">
          <h1 className='text-center text-3xl font-bold mb-6'>
            Cart
          </h1>
            {
                carts.map((cart, idx) =>  (<div  className='flex items-center justify-between mb-2' key={idx}>
                    <h3>{idx + 1}. {cart.title.slice(0, 10)}</h3> 
                    <h3 className='flex items-center gap-4'>{cart.price}$ 
                    <button className='text-xl text-red-500' 
                    onClick={() => handleDeleteCart(cart)}><MdDelete /></button></h3>
                </div>))
            }
        </div>
    );
};

Cart.propTypes = {
    carts: PropTypes.array.isRequired,
    handleDeleteCart: PropTypes.func.isRequired,
};

export default Cart;