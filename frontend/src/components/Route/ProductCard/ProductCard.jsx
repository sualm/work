import React,{ useState } from 'react'
import{Link} from 'react-router-dom'
import styles from "../../../styles/styles";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
//import { useDispatch, useSelector } from "react-redux";
//import { addTocart } from "../../../redux/actions/cart";
//import { toast } from "react-toastify";
//import {addToWishlist, removeFromWishlist,
 // } from "../../../redux/actions/wishlist";
import {
    AiFillHeart,
    AiFillStar,
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineStar,
  } from "react-icons/ai";

const ProductCard =({data,isEvent})=> {
    const [click,setClick]=useState(false);
const [open, setOpen]=useState(false);
const d = data.name;
const product_name = d.replace(/\s+/g,"-");
//const { cart } = useSelector((state) => state.cart);
 
  //const dispatch = useDispatch();


 


  return (
   <>
    <div className="w-full h-[370px] bg-white rounded-lg 
    shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end">
        </div>
        <Link to={`/product/${product_name}`} >
        <img
            src={`${data.image_Url[0].url}`}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>

        <Link to={`/shop/preview/${data?.shop._id}`}>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <div className="flex">
          <AiFillStar
          className="mr-2 cursor-pointer"
          color="#F6BA00"
          size={20}
          title="Quick view"
           />
           <AiFillStar 
          className="mr-2 cursor-pointer"
          color="#F6BA00" size={22}
          title="Quick view"
           />
           <AiFillStar 
          className="mr-2 cursor-pointer"
          color="#F6BA00" size={22}
          title="Quick view"
           />
           <AiFillStar 
          className="mr-2 cursor-pointer"
          color="#F6BA00" size={22}
          title="Quick view"
           />
           <AiOutlineStar 
          className="mr-2 cursor-pointer"
          color="#F6BA00" size={22}
          title="Quick view"
           />
          </div>  

{/* price*/ }
<div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {data.price === 0
                  ? data.price
                  : data.discount_price}
                $
              </h5>
              <h4 className={`${styles.price}`}>
                
                {data.price ? data.price + " $" : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data?.sold_out} sold
            </span>
          </div>


</Link>


  {/* side options */}
  <div>
          {click ? (
            <AiFillHeart
              size={25}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() =>setClick(!click)
                 //removeFromWishlistHandler (data)
            }
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={25}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)
                // addToWishlistHandler(data)
                }
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
           <AiOutlineEye
              size={25}
              className="cursor-pointer absolute right-2 top-14"
              onClick={() =>setOpen(!open)
                 //removeFromWishlistHandler (data)
            }
              color= "#333333"
              title="Quick view"
            />
<AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => setOpen(!open)}
            color="#444"
            title="Add to cart"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>

  
  
  )
}

export default ProductCard