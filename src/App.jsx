import Nav from './components/Nav'
import Cards from './components/Cards'
import Header from './components/Header'
import React ,{useState} from 'react'

function App() {
   let [cart,setCart] = useState(0)
   let products = [
    {
       name : "Fancy Product",
       price : "$40.00 - $80.00",
       option : "View Options"
    },
    {
       name : "Special Item",
       price : "$18.00",
       option : "Add to Cart"
    },
    {
       name : "Sale Item",
       price : "$25.00",
       option : "Add to Cart"
    },
    {
       name : "Sale Item",
       price : "$25.00",
       option : "Add to Cart"
    },
    {
       name : "Fancy Product",
       price : "$120.00 - $280.00",
       option : "Add to Cart"
    },
    {
       name : "Special Item",
       price : "$18.00",
       option : "Add to Cart"
    },
    {
       name : "Popular Item",
       price : "$40.00",
       option : "Add to Cart"
    },
    {
       name : "Fancy Product",
       price : "$40 - $80",
       option : "Add to Cart"
    }
   ];
  return (
    <>
    <Nav cart = {cart} setCart = {setCart}/>
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* <Header/> */}
          {
            products.map((e,i)=>{
              return <Cards cart = {cart} setCart ={setCart} products = {e} key={i}/>
            })
          }
          
        </div>
      </div>
    </section>
    </>
  )
}

export default App
