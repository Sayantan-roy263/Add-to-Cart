import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css'
import { addCart, deleteitem, singleitem } from '../../Redux/CartSlice';

export default function Cart() {
  const {carts, quantity} = useSelector((state)=>state.cartkey);

  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const [item, setItem] = useState(0);

  const arr = carts;
  let len = arr.length;
  // let qty = carts.length

  // const minus = (e) => {
  //   e = e-1
  // }

  const handleIncrement = (e) =>{
     dispatch(addCart(e))
  }

  const handleDecrement = (e) =>{
    // dispatch(addCart(e))
    dispatch(singleitem(e))
  }
  const handleDelete = (e) =>{
    dispatch(deleteitem(e))
  }

  const total = () => {
    let amount = 0;
    carts.map((ele)=>{
      amount = amount + ele.price* ele.quantity
    });
    setAmount(amount)    
  }

  const totalItem = () =>{
    let item = 0;
    carts.map((ele)=>{
      item  = item + ele.quantity
    });
    setItem(item)
  }

  useEffect(()=>{
    total()
  }, [total]);

  useEffect(()=>{
    totalItem()
  }, [totalItem])
  return (
    <>
    <section className='cart-table'>
      <div className="container">
        <div className="content">
          <h2>Cart Products</h2>
          {len>0?(
            // return(<>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">PRODUCT</th>
      <th scope="col">NAME</th>
      <th scope="col">ITEMS</th>
      <th scope="col">AMOUNT</th>
      <th scope="col">TOTAL AMOUNT</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
    {carts?.map((value)=>{
      return(
        <>
          <tr>
      <th scope="row"><img src={value.image} alt="..."/></th>
      <td>{value.title}</td>
      <td>
        <div className="prdct-qty"> 
        {/* <button type="button" className="btn btn-outline-secondary" onClick={()=>minus(value.quantity)}>-</button> */}
        <button type="button" className="btn btn-outline-primary m-2" onClick={()=>{value.quantity>1?handleDecrement(value):handleDelete(value)}}>
        <i class="fa-solid fa-minus"></i>
        </button>
          <input type="text" className='qty-input-box' value={value.quantity}/>
          <button type="button" className="btn btn-outline-primary m-2" onClick={()=>handleIncrement(value)}>
          <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </td>
      <td>{value.price}</td>
      <td>{value.price * value.quantity}</td>
      <button type="button" className='btn btn-outline-danger' onClick={()=>handleDelete(value)}>
      <td><i className="fa-solid fa-trash" ></i></td>
      </button>
      
    </tr>        
        </>
      )
    })}
  
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td> 
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
  <tfoot>
  <td colspan="4">TOTAL ITEMS IN CART:<span>{item}</span></td>
      <td>TOTAL AMOUNT:<span>{amount}</span></td>
  </tfoot>
</table>

            // </>)
            
          ):(<table className="table">
          <thead>
            <tr>
              <th scope="col">PRODUCT</th>
              <th scope="col">NAME</th>
              <th scope="col">ITEMS</th>
              <th scope="col">AMOUNT</th>
              <th scope="col">TOTAL AMOUNT</th>
            </tr>
          </thead>
           <tbody>
            <div className="footer-body text-align-center align-items-center m-5">
            <h1>Your Cart is Empty</h1>
            <i className="fa-solid fa-cart-shopping fa-2x mx-2"></i>
            </div>
         
          </tbody> 
           {/* <i className="fa-solid fa-cart-shopping fa-2x mx-2"></i>          */}
          </table>
                  
          )}
        
        </div>
      </div>
    </section>
    </>
  )
}
