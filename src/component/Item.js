import { AiTwotoneStar} from "react-icons/ai";
import {useState} from 'react'


export default function Item({item,addCart}){

    const [star,setStar] = useState(item.rating.rate)
    return (
        <div className="itemContainer" onClick={()=>{addCart(item.id)}}>
            <img src={item.image} alt="" />
            <h6>{item.title}</h6>
            <h6>price: ${item.price} </h6>
            
            <div className="ratingContainer"> 
            <div className="starCont">
            {Math.round(star) >= 1 ? <AiTwotoneStar style={{color: '#F6BE00'}}/> : <AiTwotoneStar/>}
            {Math.round(star) >= 2 ? <AiTwotoneStar style={{color: '#F6BE00'}}/> : <AiTwotoneStar/>}
            {Math.round(star) >= 3 ? <AiTwotoneStar style={{color: '#F6BE00'}}/> : <AiTwotoneStar/>}
            {Math.round(star) >= 4 ? <AiTwotoneStar style={{color: '#F6BE00'}}/> : <AiTwotoneStar/>}
            {Math.round(star) >= 5 ? <AiTwotoneStar style={{color: '#F6BE00'}}/> : <AiTwotoneStar/>}
            </div>
            <h6>{Math.round(item.rating.count)}</h6>
            </div>
           
        </div>
    )
}