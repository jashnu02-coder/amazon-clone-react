import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "../components/Product";

import headphones from "../images/Headphones.jpeg";
import keyboard from "../images/Keyboard.jpeg";
import shoes from "../images/Shoes.jpeg";
import luggage from "../images/Luggage.jpeg";
import laptop from "../images/Laptop.jpeg";
import curtains from "../images/curtains.jpeg";
import dress from "../images/Dress.jpeg";
import fragnances from "../images/Fragnances.jpeg";
import handbags from "../images/Handbags.jpeg";
import kidswear from "../images/Kidswear.jpeg";
import kitchenset from "../images/Kitchenset.jpeg";
import makeupset from "../images/Makeupset.jpeg";



import "./ProductPage.css";

function ProductPage() {

const location = useLocation();
const product = location.state;

const [message,setMessage] = useState("");
const [showMobile,setShowMobile] = useState(false);
const [mobile,setMobile] = useState("");
const [showPayment,setShowPayment] = useState(false);
const [showOnline,setShowOnline] = useState(false);
const [payment,setPayment] = useState("");

if(!product){
return <h2>Product not found</h2>
}

const addToCart = ()=>{
setMessage("🛒 Product added to cart successfully!");
setTimeout(()=>setMessage(""),3000)
}

const buyNow = ()=>{
setShowMobile(true)
}

const continuePayment = ()=>{
if(mobile.length===10){
setShowPayment(true)
}else{
alert("Enter valid mobile number")
}
}

const placeOrder=(method)=>{
setPayment(method)
}

return(

<div className="productPage">

{/* PRODUCT TOP SECTION */}

<div className="productTop">

<img
src={product.image}
alt={product.title}
className="productImage"
/>

<div className="productInfo">

<h1>{product.title}</h1>

<h2 className="price">₹{product.price}</h2>

<p className="rating">{product.rating} ⭐ Rating</p>

<div className="buttons">

<button
  onClick={() =>
    addToCart({
      title: product.title,
      price: product.price
    })
  }
>
  Add to Cart 🛒
</button>


<button className="buyBtn" onClick={buyNow}>
⚡ Buy Now
</button>

</div>

{message && (
<p className="cartMessage">{message}</p>
)}

{/* PRODUCT DESCRIPTION NOW UNDER BUTTONS */}

<div className="descriptionSection">

<h3>Product Description</h3>

<p>

This premium quality product is designed for excellent
performance and durability. Built with high quality
materials, it provides smooth performance and long
lasting usage.

Perfect for students, professionals and everyday users.
Its modern design, advanced features and efficiency
make this product one of the best in its category.

</p>

</div>

</div>

</div>

{/* MOBILE NUMBER */}

{showMobile && !showPayment &&(

<div className="mobileSection">

<h3>📱 Enter Mobile Number</h3>

<input
type="text"
placeholder="Enter mobile number"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
/>

<button onClick={continuePayment}>
Continue
</button>

</div>

)}

{/* PAYMENT */}

{showPayment &&(

<div className="paymentSection">

<h3>Select Payment Method</h3>

<button onClick={()=>placeOrder("Cash on Delivery")}>
🚚 Cash on Delivery
</button>

<button onClick={()=>setShowOnline(true)}>
💳 Online Payment
</button>

{showOnline &&(

<div className="onlinePayments">

<button onClick={()=>placeOrder("UPI")}>📱 UPI</button>

<button onClick={()=>placeOrder("PhonePe")}>📲 PhonePe</button>

<button onClick={()=>placeOrder("Google Pay")}>💰 Google Pay</button>

<button onClick={()=>placeOrder("Net Banking")}>🏦 Net Banking</button>

<button onClick={() =>addToCart({title: product.title,price: product.price}) }>Add to Cart</button>

</div>

)}

</div>

)}

{payment &&(

<div className="orderMessage">
🎉 Order placed successfully using <b>{payment}</b>
</div>

)}

{/* SIMILAR PRODUCTS */}

<div className="Products">

<h2>Products</h2>

<div className="home_row">

<Product
id="2"
title="Headphones"
price={2000}
rating={4}
image={headphones}
/>

<Product
id="3"
title="Keyboard"
price={1500}
rating={4}
image={keyboard}
/>

<Product
id="4"
title="Shoes"
price={3000}
rating={5}
image={shoes}
/>

<Product
id="5"
title="Luggage"
price={4000}
rating={4}
image={luggage}
/>

 <Product
 title="Curtains"
 price={700}
 rating={3}
 image={curtains}
/>

 <Product
          title="Long Frock"
          price={900}
          rating={2}
          image={dress}
         
        />

 <Product
          title="Perfumes"
          price={1500}
          rating={3}
          image={fragnances}
          
        />

 <Product
          title="Handbags"
          price={600}
          rating={4}
          image={handbags}
          
        />
 <Product
          title="Kids dresses"
          price={600}
          rating={4}
          image={kidswear}
          
        />

 <Product
          title="Kitchen set"
          price={1000}
          rating={4}
          image={kitchenset}
     
        />


 <Product
          title="Makeup set"
          price={600}
          rating={4}
          image={makeupset}
          
        />

  <Product
          title="Laptop"
          price={50000}
          rating={5}
          image={laptop}
          
        />
  




</div>

</div>

</div>

)

}

export default ProductPage