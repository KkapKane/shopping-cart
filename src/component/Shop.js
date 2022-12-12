import '../style/Shop.scss'
import Item from './Item'

export default function Shop({ addCart, loading, data, isCart }) {

      const newdata = data.filter((element) => element.category == "men's clothing" || element.category == "women's clothing")

      return (
            <div className="ShopContainer">
                  {loading ? <h1>Loading...</h1> :
                        newdata.map((item) =>
                              <Item key={item.id} item={item} addCart={addCart} isCart={isCart} />
                        )}
            </div>
      )
}