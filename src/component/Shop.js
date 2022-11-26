
import '../style/Shop.scss'
import {useState,useEffect} from 'react'
import Item from './Item'
import axios from 'axios'
export default function Shop({addCart,loading, data}){





            return (

    <div className="ShopContainer">
   
          {loading ? <h1>Loading...</h1> :     
          data.map((item)=> 
        
                <Item key={item.id} item={item} addCart={addCart}/>
         
          )}      

     
        </div>
)
}