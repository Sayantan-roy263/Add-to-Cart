import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { view } from '../../Redux/CrudSlice';
import { addCart } from '../../Redux/CartSlice'
import './Home.css';

export default function Home() {
    const {item} = useSelector((state)=>state.crud);

    const dispatch = useDispatch();

    const [addItem, setAddItem] = useState(0);

    useEffect(()=>{
        dispatch(view())
    }, []);

    const add = (e) =>{      
        dispatch(addCart(e))
        console.log(e)
    }
    // console.log(addItem);
    
  return (
    <>
    <section className='home-banner'>
        <div className="container">
            <h2>Our Products</h2>
            <div className="row justify-content-center align-items-center">
                {item.map((value)=>{
                    return(
                        <>
                        <div class="card m-2" style={{width:"18rem"}}>
  <img src={value.image} class="card-img-top" alt="..." style={{height:"16rem"}}/>
  <div class="card-body">
    <h5 class="card-title">{value.title}</h5>
    <p class="card-text"><i class="fa-solid fa-indian-rupee-sign"></i> {value.price}</p>
    <a href="#" class="btn btn-primary mx-2" onClick={()=>add(value)}>Add To Cart</a>
    <a href="#" class="btn btn-primary">Detail</a>
  </div>
</div>
                        </>
                    )
                })}

            </div>
        </div>
    </section>
    
    </>
  )
}
