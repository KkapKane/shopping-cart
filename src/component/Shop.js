
import '../style/Shop.scss'
import {useState,useEffect} from 'react'
import Item from './Item'

export default function Shop(){

const item1 = "https://images.pexels.com/photos/9981575/pexels-photo-9981575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const item2 = "https://images.pexels.com/photos/9981575/pexels-photo-9981575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const item3 = "https://images.pexels.com/photos/9981575/pexels-photo-9981575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const item4 = "https://images.pexels.com/photos/9981575/pexels-photo-9981575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const item5 = "https://images.pexels.com/photos/9981575/pexels-photo-9981575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const [items,setItem] = useState([item1,item2,item3,item4,item5])


    return (
        <div className="ShopContainer">

            <div>SHOP</div>
        {items.map((item) => {
           return( <Item item={item} />
        )})}

        </div>
    )
}