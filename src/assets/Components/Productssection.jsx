import { button, div, h1 } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import Navbar from './Navbar';
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from './Button';
import Popup from './Popup';
import { BsWhatsapp } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';

const Productssection = ({cart, setCart, showCart, setShowCart}) => {

    const totalPrice = cart.reduce( (total,item) => total + item.price,0 
);

  // converting cart array to Whatsapp message
  const whatsappOrder = cart.map((formatteds, index)=> 
        ` ${index + 1}. id: ${formatteds.id}
          Category: ${formatteds.category}
          Name: ${formatteds.productName}
          price:#${formatteds.price}
          `
)
  .join("\n\n");

  const [previewProduct, setPreviewProdcut] = useState(null)
  const [showPreview, setShowPreview] = useState(false)


  const previewWhatsappOrder = () => ` 
    ORDER DETAILS

     id: ${previewProduct.id}
          Category: ${previewProduct.category}
          Name: ${previewProduct.productName}
          price:#${previewProduct.price}
          `
  
  

   const PhoneNumber = "+2349043933210";
  const message = `
    ORDER DETAILS

    ${cart.length} ${cart.length < 2 ? "ITEM" : "ITEMS"} ORDERED

    ${whatsappOrder}
    ---------------
   Total Price: #${totalPrice}
  `;

  
  const whatsappurl = `https://wa.me/${PhoneNumber}?text=${encodeURIComponent(message)}`;
  const previewwhatsappurl = `https://wa.me/${PhoneNumber}?text=${encodeURIComponent(previewWhatsappOrder())}`;

  const [numberProduct, setNumberProduct] = useState(10)
  const [previousCart, setPreviousCart] = useState([])
  const [notification, setNotification] = useState(false)
  
  

  const handlePreviewProdcut = (product)=> {
    setPreviewProdcut(product)
    setShowPreview(true)
  }

  const handleIncreaseProduct = ()=> {
    setNumberProduct(numberProduct + 10)
  }

  const handleReduceProduct = ()=> {
    setNumberProduct(numberProduct - 10)
  }

  const handleviewAll = ()=> {
    setNumberProduct( product.length)
  }


   
    const products = [
  {
    id: 1,
    category: "Hoodie",
    productName: "Oversized Black Hoodie",
    price: 15000,
    img: "/images/hoodle1.jpg",
    currency: "NGN",
  },
  {
    id: 2,
    category: "Joggers",
    productName: "Slim Fit Grey Joggers",
    price: 13500,
    img: "/images/hoodle1.jpg",
    currency: "NGN",
  },
  {
    id: 3,
    category: "Shirt",
    productName: "Classic White T-Shirt",
    price: 10000,
    img: "/images/hoodle1.jpg",
    currency: "NGN",
  },
  {
    id: 4,
    category: "Hoodie",
    productName: "Essential Street Hoodie",
    price: 16000,
    img: "/images/hoodle1.jpg",
    currency: "NGN",
  },
  {
    id: 5,
    category: "Joggers",
    productName: "Cargo Pocket Joggers",
    price: 22000,
    img: "/images/hoodle1.jpg",
    currency: "NGN",
  },
  {
    id: 6,
    category: "Shirt",
    productName: "Graphic Print Tee",
    price: 15400,
    img: "/images/hoodle1.jpg",
    currency: "NGN",
  
  },
  {

    id: 7,
    category: "Hoodie",
    productName: "Soft Chaos Signature Hoodie",
    price: 13000,
    img: "/images/hoodle1.jpg",
    currency: "NGN",
  
  },
  {

    id: 8,
    category: "Joggers",
    productName: "Relaxed Fit Sweat Joggers",
    price: 13000,
    img: "/images/hoodle1.jpg",
    currency: "NGN",
  
  },
  {

    id: 9,
    category: "Shirt",
    productName: "Oversized Street Shirt",
    price: 13000,
    img: "/images/hoodie2.jpg",
    currency: "NGN",
  
  },
  {

    id: 10,
    category: "Hoodie",
    productName: "Vintage Washed Hoodie",
    price: 13000,
    img: "/images/hoodie2.jpg",
    currency: "NGN",
  
  },
  {

    id: 11,
    category: "Joggers",
    productName: "Urban Street Joggers",
    price: 13000,
    img: "/images/hoodie2.jpg",
    currency: "NGN",
  
  },
  {

    id: 12,
    category: "Shirt",
    productName: "Minimal Logo Shirt",
    price: 13000,
    img: "/images/hoodie2.jpg",
    currency: "NGN",
  
  },
  {

    id: 13,
    category: "Hoodie",
    productName: "Minimal Logo Hoodie",
    price: 13000,
    img: "/images/hoodie2.jpg",
    currency: "NGN",
  
  },
  {

    id: 14,
    category: "Joggers",
    productName: "Tapered Black Joggers",
    price: 13000,
    img: "/images/hoodie2.jpg",
    currency: "NGN",
  
  },
  {

    id: 15,
    category: "Shirt",
    productName: "Cotton Everyday Tee",
    price: 13000,
    img: "/images/hoodie2.jpg",
    currency: "NGN",
  
  },
  {

    id: 16,
    category: "Hoodie",
    productName: "Heavyweight Pullover Hoodie",
    price: 18000,
    img: "/images/hoodie2.jpg",
    currency: "NGN",
  
  },
  {

    id: 17,
    category: "Joggers",
    productName: "Athletic Fit Joggers",
    price: 18000,
    img: "/images/hoodie2.jpg",
    currency: "NGN",
  
  },
  {

    id: 18,
    category: "Shirt",
    productName: "Premium Black Tee",
    price: 18000,
    img: "/images/hoodie3.jpg",
    currency: "NGN",
  
  },
  {

    id: 19,
    category: "Hoodie",
    productName: "Neutral Tone Hoodie",
    price: 18000,
    img: "/images/hoodie3.jpg",
    currency: "NGN",
  
  },
  {

    id: 20,
    category: "Joggers",
    productName: "Fleece Comfort Joggers",
    price: 18000,
    img: "/images/hoodie3.jpg",
    currency: "NGN",
  
  },
  {

    id: 21,
    category: "Shirt",
    productName: "Streetwear Oversized Tee",
    price: 18000,
    img: "/images/hoodie3.jpg",
    currency: "NGN",
  
  },
  {

    id: 22,
    category: "Hoodie",
    productName: "Graphic Print Hoodie",
    price: 18000,
    img: "/images/hoodie3.jpg",
    currency: "NGN",
  
  },
  {

    id: 23,
    category: "Joggers",
    productName: "Streetwear Cargo Joggers",
    price: 18000,
    img: "/images/hoodie3.jpg",
    currency: "NGN",
  
  },
  {

    id: 24,
    category: "Shirt",
    productName: "Vintage Washed Shirt",
    price: 18000,
    img: "/images/hoodie3.jpg",
    currency: "NGN",
  
  },
  {

    id: 25,
    category: "Hoodie",
    productName: "Classic Zip-Up Hoodie",
    price: 18000,
    img: "/images/hoodie3.jpg",
    currency: "NGN",
  
  },
  {

    id: 26,
    category: "Joggers",
    productName: "Everyday Lounge Joggers",
    price: 18000,
    img: "/images/hoodie3.jpg",
    currency: "NGN",
  
  },
  {

    id: 27,
    category: "Shirt",
    productName: "Soft Cotton Tee",
    price: 28000,
    img: "/images/hoodie4.jpg",
    currency: "NGN",
  
  },
  {

    id: 28,
    category: "Hoodie",
    productName: "Premium Cotton Hoodie",
    price: 28000,
    img: "/images/hoodie4.jpg",
    currency: "NGN",
  
  },
  {

    id: 29,
    category: "Joggers",
    productName: "Ribbed Ankle Joggers",
    price: 28000,
    img: "/images/hoodie4.jpg",
    currency: "NGN",
  
  },
  {

    id: 30,
    category: "Shirt",
    productName: "Urban Graphic Shirt",
    price: 28000,
    img: "/images/hoodie4.jpg",
    currency: "NGN",
  
  },
  {

    id: 31,
    category: "Hoodie",
    productName: "Monochrome Street Hoodie",
    price: 28000,
    img: "/images/hoodie4.jpg",
    currency: "NGN",
  
  },
  {

    id: 32,
    category: "Joggers",
    productName: "Techwear Utility Joggers",
    price: 28000,
    img: "/images/hoodie4.jpg",
    currency: "NGN",
  
  },
  {

    id: 33,
    category: "Shirt",
    productName: "Luxury Fitted Tee",
    price: 7500,
    img: "/images/hoodie4.jpg",
    currency: "NGN",
  
  },
  {

    id: 34,
    category: "Hoodie",
    productName: "Luxury Fleece Hoodie",
    price: 7500,
    img: "/images/hoodie4.jpg",
    currency: "NGN",
  
  },
  {

    id: 35,
    category: "Joggers",
    productName: "Loose Fit Track Joggers",
    price: 7500,
    img: "/images/hoodie4.jpg",
    currency: "NGN",
  
  },
  {

    id: 36,
    category: "Shirt",
    productName: "Essential Street Tee",
    price: 7500,
    img: "/images/shirt1.jpg",
    currency: "NGN"
  }
  ,
  {

    id: 37,
    category: "Hoodie",
    productName: "Oversized Cream Hoodie",
    price: 7500,
        img: "/images/shirt1.jpg",
        currency: "NGN"


  },
  {
    id: 38,
    category: "Joggers",
    productName: "Premium Fit Joggers",
    price: 9100,
        img: "/images/shirt1.jpg",
        currency: "NGN"


  },
  {
    id: 39,
    category: "Shirt",
    productName: "Minimal Beige Shirt",
    price: 9100,
        img: "/images/shirt1.jpg",
        currency: "NGN"


  },
  {
    id: 40,
    category: "Hoodie",
    productName: "Street Essential Hoodie",
    price: 9100,
        img: "/images/shirt1.jpg",
        currency: "NGN"


  },
];


 const [product, setProduct] = useState(products);
    const [activecategory, setactivecategory] = useState("All");
    const categories = [ "All", "Hoodie", "Joggers", "Shirt" ];

    const HnadleFiltered = (category)=> {
        setactivecategory(category);
        if(category === "All"){
            setProduct(products)
        } else{
            setProduct(products.filter((product) => product.category === category))
        }

      
    };

    // const [cart, setCart] = useState([]);
    // const [showCart, setShowCart] = useState(false)

    // add to cart
    const addToCart = (product)=> {
      setCart((prev)=> [...prev, product])
      toast.success("Product added to cart", {
          autoClose: 1000,
          position: "bottom-right",
          theme: "dark",
          hideProgressBar: true,
          style: {
            fontSize: "12px",
          }
      })

    };

    // delete from cart
    const deleteFromCart = (id) => {
      setCart((prev)=> prev.filter((item) => item.id !== id));
    }

    // deleting from previous item and localstorage
    const clearPreviousitem = () => {
      setPreviousCart([])
      localStorage.removeItem("Cart")
      setNotification(!notification)
       toast.success("Previous items deleted Successfully", {
          autoClose: 1000,
          position: "bottom-right",
          theme: "dark",
          hideProgressBar: true,
          style: {
            fontSize: "12px",
          }
      })

    }

    // adding previous item back to cart
    const addBackitem = (previousCart, id)=> {
      setCart((prev)=> [...prev, previousCart]);
    }

// fetching cart from localStorage
     useEffect(()=> {
    const saveCart = JSON.parse(localStorage.getItem("Cart"))
    if(saveCart){
      setPreviousCart(saveCart)
    }
  }, [])

// saving cart to localStorage
  useEffect(()=> {
    if(cart.length > 0){
      localStorage.setItem("Cart", JSON.stringify(cart)) 
    }
   
  },[cart])


  return (
    <div>
      <ToastContainer />


<div className={`${notification ? "flex" : "hidden"}`}>
<Popup 
      action = {()=> setNotification(!notification)}
      icon = "✅"
      notification = "Are you sure you want to clear previous Items ?"
      subtext = "This action is not reseversable!"
      button1 = <Button
      buttontext = "Clear"
      bgcolor="black"
      textcolor="white"
      action = {clearPreviousitem} 
      />
      button2action = {()=> setNotification(!notification)}
      />
</div>
      

    
    <div className='contain'>

       <div className='flex items-center justify-between '>
            <h1 className='font-bold text-lg my-3 flex'>PRODUCTS <span className='text-sm font-normal  h-5 w-15 bg-red-500 flex items-center justify-center text-white rounded-full'> {numberProduct}/{product.length}</span></h1>
           <div> <button className='flex items-center gap-2' onClick={handleviewAll}>View All < FaLongArrowAltRight /> </button></div>

           </div>
      
         <div className="flex  gap-3 items-center justify-center py-10  ">
           {
            categories.map((category) => (
            <button className={` px-4 py-2 rounded-2xl transition-all duration-200  ${activecategory === category ? "bg-black text-white" : "bg-gray-400"}`}
            onClick={ ()=> HnadleFiltered(category) }>{category}</button>
            ))
           }
           </div>
          
          

           <div className=' grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-3 '>   
        {
            
            product.slice(0, numberProduct).map((product)=>(
                <div className='border px-2 py-2 relative '>
                    <div className='absolute bg-black text-white w-10 flex items-center justify-center'>{product.id}</div>
                    <img src={product.img} alt={product.id} className='w-60 h-70 object-cover hover:rotate-y-180 transition-all duration-400' />
                    <h1 className='line-clamp-1'>{product.productName}</h1>
                     <h1 className={`${product.price >= 10000  ? "text-red-500" : "text-green-500"}`}>{ product.price !== "USD" ? "#" : "$"}{product.price.toFixed(2)} <span className='font-light text-sm text-gray-500 italic line-through'>{(product.price + 500).toFixed(2) }</span></h1>
                    <h1 className='font-bold mb-2'>{product.category}</h1>
                    <Button
                    buttontext = "Add to Cart"
                    action = {()=> addToCart(product)}
                    bgcolor = "black"
                    textcolor = "white"
                     />

                     <button className='flex justify-center items-center gap-1 font-light text-sm pt-2' onClick={()=> handlePreviewProdcut(product)}>Preview < FaLongArrowAltRight /></button>                    
            
                    
                </div>
            ))

        }
       </div>


          {/* <div onClick={()=> setShowCart(!showCart)} className=' flex fixed top-6 z-50 right-10  text-white'>
          <div className='flex relative'><HiOutlineShoppingBag size={20} /> <div className='bg-red-500 w-3 h-3 absolute -right-2 rounded-full flex items-center justify-center text-white py-2 px-2 text-sm'>{cart.length}</div></div>
          </div> */}

          {/* cart */}

       <div className={` fixed border top-17 right-4 lg:right-10 md:right-10 z-40 flex flex-col gap-1 px-2 py-4 bg-white/50 backdrop-blur-lg  h-[89%] overflow-auto ${showCart ? "flex" : "hidden"} `}>
       <div className='flex justify-between'>
          <h1 className='font-bold text-3xl'>Cart</h1>
       <div><button onClick={()=> setShowCart(false)}>❌</button></div>
       </div>
       
       <div className=' px-2 flex flex-col gap-2 '>
        {
          cart.length === 0 ? (
            <div className=''>
                          <h1 className='text-3xl font-bold text-red-500' >Cart is Empty</h1>
            <p className='font-light'>Your added items will show here</p>
            </div>

          ) :
          (cart.map((carts)=> (
              <div className='flex gap-5 border px-2 py-2  '>
                <div><img src={carts.img} alt={carts.id} className='w-15 h-15 object-cover' /></div>
                <div>
                <p className='font-bold'>{carts.productName}</p>
                <p>#{carts.price}</p>
                <p className='italic'>{carts.category}</p> 
                <button onClick={()=> deleteFromCart(carts.id)} className='bg-red-700 text-white py-2 px-2'>Delete ❌</button>
                </div>
                

              </div>
          ))
        )
        }
        </div>

          <div className='mt-5  pb-2'>
            <a className={`${cart.length <= 0 ? "hidden" : "block" }`} href={whatsappurl} target="_blank" rel="noreferrer">
            <button  className={`bg-black text-white px-2 py-2 hover:bg-black/90 `}
          >Order Now</button>
            </a>
          </div>

          {/* Previous items */}
          {
            previousCart.length > 0 && (
                 <div className='border-t'>
            <h1 className='font-bold text-3xl py-2'>Previous items</h1>
            <div className='flex flex-col gap-2'>
            {
              previousCart.map((previousCart)=> (
                     <div className='flex gap-5  border px-2 py-2   '>
                <div><img src={previousCart.img} alt={previousCart.id} className='w-15 h-15 object-cover' /></div>
                <div>
                <p className='font-bold'>{previousCart.productName}</p>
                <p>#{previousCart.price}</p>
                <p className='italic'>{previousCart.category}</p> 
                <button onClick={()=> addBackitem(previousCart)} className='bg-red-700 text-white py-2 px-2'>Add</button>
                </div>
                

              </div>
              ))
            }
             </div>
            <div className='mt-5 pb-2'>
              <button onClick={()=> setNotification(!notification)} className='bg-black text-white px-2 py-2 hover:bg-black/90 '>Clear</button>
            </div>
          </div>
            )
          }
         


       </div>

          {/* preview */}
       <div className={`fixed top-0 z-50 right-0 overflow-auto h-screen bg-white transition-all duration-300 ${showPreview ? "translate-x-0" : "translate-x-full"}`}>

        {
          previewProduct && (
            
            <div className='px-4 py-5'>
              <button onClick={()=> setShowPreview(false)}>❌</button>
              <h1 className='font-bold text-2xl py-2'>Product Details</h1>
              <img className='w-100 h-100 object-cover' src={previewProduct.img} alt={previewProduct.id} />
              <h1 className='font-bold'>{previewProduct.productName}</h1>
              <p className='italic'>#{previewProduct.price}</p>
              <p className='font-bold'>{previewProduct.category}</p>

              <div className='flex gap-1'>
                 <Button
                    buttontext = "Add to Cart"
                    action = {()=> addToCart(previewProduct)}
                    bgcolor = "black"
                    textcolor = "white"
                     />

                    <a href={previewwhatsappurl}  target="_blank" rel="noreferrer">
            <button  className={`bg-black text-white px-2 py-2 hover:bg-black/90 `}
          >Order Now</button>
            </a>
              </div>

            </div>
          )
        }

       </div>

       <div className='flex  items-center justify-between my-5'>
        <button className={`flex items-center ${ numberProduct  <= 10 ? "hidden" : "flex"} gap-2`} onClick={handleReduceProduct}>View less < FaLongArrowAltRight /> </button>
         <button className={`flex items-center gap-2 ${ numberProduct  >= 40  ? "hidden" : "flex"}`} onClick={handleIncreaseProduct}>View more < FaLongArrowAltRight /></button>
       </div>
    </div>
    </div>
  )
}

export default Productssection 