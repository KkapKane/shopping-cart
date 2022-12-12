import Item from "./Item"

export default function Cart({ cart, data, isCart, addCart, setCart }) {

  //only show 1 instance of the item picture
  const uniqueItem = cart.filter((e, i, a) => a.indexOf(e) === i)

  //totals everything in cart
  const total = cart.reduce((p, c) => {
    return p + c.price
  }, 0)

  return (
    <div className="mainCartContainer">
      <div className="yourCart">Your Cart</div>

      {cart.length > 0 ?

        <div className="cartContainer">{uniqueItem.sort((a, b) => (a.id - b.id)).map((c) => {
          return (
            <Item key={Math.random()} item={c} isCart={isCart} cart={cart} addCart={addCart} setCart={setCart} />
          )

        })}</div > : <h1 >cart is empty</h1>}

      {cart.length > 0 ? <div className="checkout">
        <div className="total"> TOTAL: ${Math.round(total * 100) / 100} </div>
        <button>Check out</button>
      </div> : null}
    </div>

  )
}