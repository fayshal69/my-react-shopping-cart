import { useEffect } from "react"

function App() {
  useEffect(() => {
    fetch('cards.json')
    .then(res => res.json())
    .then(data => console.log(data))
  },[]);

  return (
    <div className="flex justify-between container mx-auto">
      <div>
        <div className="card max-w-96 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <h3 className="text-lg font-semibold">Price: 320$</h3>
            <div className="card-actions">
              <button className="btn btn-primary w-full">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[350px] shadow-lg p-6 rounded-lg">
          <h1>This is cart</h1>
        </div>
      </div>
    </div>
  )
}

export default App
