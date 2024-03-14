import { useEffect, useState } from "react"
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('cards.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);

  const handleAddToCart = (product) => {
    const isExists = carts.find((cart) => cart.id === product.id);
    if(!isExists) {
      const newCarts = [...carts, product];
      setCarts(newCarts);
    }
    else {
      toast.error("Product already exists in cart!");
    }
  }

  const handleDeleteCart = (deleteCart) => {
    const newCarts = carts.filter((cart) => cart.id !== deleteCart.id);
    setCarts(newCarts);
  }


  return (
    <div className="flex justify-between gap-6 container mx-auto my-24">
      <div className="grid grid-cols-3 gap-4">
        {
          products.map((product) => <Card 
          key={product.id} product={product} handleAddToCart={handleAddToCart}></Card>)
        }
      </div>
      <div>
        <Cart carts={carts} handleDeleteCart={handleDeleteCart}></Cart>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
