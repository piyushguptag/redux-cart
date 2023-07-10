import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";


const Home = () => {
  const productList = [
    {name : "ABC",
     price : 12000,
     imgSrc : img1,
     id :"asdasdas"
  },
  {name : "DEF",
     price : 11000,
     imgSrc : img2,
     id :"mknknk"
  }
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options)=>{
    dispatch({type :"addToCart", payload : options});
    dispatch({type:"calculatePrice"});
    toast.success("added to cart");  
  };

  return (
    <div className='home'>
      {productList.map((item)=>(
          <ProductCard name={item.name} id={item.id} imgSrc={item.imgSrc} price={item.price} key={item.id} handler={addToCartHandler} />
      ))}
    </div>
  )
}
const ProductCard = ({name,id ,price,handler,imgSrc})=>(
  <div className='productCard'>
     <img src={imgSrc} alt={name} />
     <p>{name}</p>
     <h4>${price}</h4>
     <button onClick={()=>handler({name, price, id,quantity :1, imgSrc})}>Add to Cart</button>
  </div>
)

export default Home