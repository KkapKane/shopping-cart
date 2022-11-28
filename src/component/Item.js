import { AiTwotoneStar } from "react-icons/ai";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useState } from 'react'


export default function Item({ item, addCart, isCart, cart, setCart }) {

    //find duplicates
    function countInArray(array, value) {
        return array.reduce((n, x) => n + (x === value), 0);
    }

    const removeItem = (arr, item) => {
        let newArr = [...arr]
        const index = newArr.findIndex((element) => element === item)
        if (index !== -1) {
            newArr.splice(index, 1)

            setCart(newArr)
        }
    }

    const [star, setStar] = useState(item.rating.rate)

    return (

        <div
            style={isCart ? { border: ' 2px solid black' } : {}} className="itemContainer">
            <img src={item.image} alt="" />
            <h6>{item.title}</h6>


            <div className="ratingContainer">
                <div className="starCont">
                    {Math.round(star) >= 1 ? <AiTwotoneStar style={{ color: '#F6BE00' }} /> : <AiTwotoneStar />}
                    {Math.round(star) >= 2 ? <AiTwotoneStar style={{ color: '#F6BE00' }} /> : <AiTwotoneStar />}
                    {Math.round(star) >= 3 ? <AiTwotoneStar style={{ color: '#F6BE00' }} /> : <AiTwotoneStar />}
                    {Math.round(star) >= 4 ? <AiTwotoneStar style={{ color: '#F6BE00' }} /> : <AiTwotoneStar />}
                    {Math.round(star) >= 5 ? <AiTwotoneStar style={{ color: '#F6BE00' }} /> : <AiTwotoneStar />}
                </div>
                <h6>{Math.round(item.rating.count)}</h6>
            </div>
            <div className="priceAndQauntity">
                {isCart ? <div className="arrowContainer">

                    <button onClick={() => addCart(item)}> <MdArrowDropUp className="ArrowUp" /> </button>

                    {isCart ? <h5>quantity {countInArray(cart, item)}</h5> : null}

                    <button onClick={() => removeItem(cart, item)}><MdArrowDropDown className="ArrowDown" /> </button></div> : null}

                {isCart ? <h4>{item.description}</h4> : null}

                {isCart ? <h6>price: ${Math.round((item.price * countInArray(cart, item)) * 100) / 100} </h6> : <h6>price: ${item.price} </h6>}
            </div>

            {!isCart ? <button onClick={() => addCart(item)}>Add to Cart</button> : null}

        </div>
    )
}