import PropTypes from 'prop-types';

const Card = ({product, handleAddToCart}) => {

    const {title, image, price, description} = product;

    return (
        <div className="card max-w-96 bg-base-100 shadow-xl">
              <figure><img src={image} alt="Shoes" className='size-[250px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">{title.slice(0, 10)}</h2>
                <p>{description.slice(0, 70)}...</p>
                <h3 className="text-lg font-semibold">Price: {price}$</h3>
                <div className="card-actions">
                  <button className="btn btn-primary w-full" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
        </div>
    );
};

Card.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
};

export default Card;