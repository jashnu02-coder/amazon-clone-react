import React, { useState, useEffect } from "react";
import "./Banner.css";

import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpeg";
import banner3 from "../images/banner3.jpg";

function Banner() {

const banners = [
{
image: banner1,
},
{
image: banner2,
},
{
image: banner3,
}
];

const [index, setIndex] = useState(0);

useEffect(() => {

const interval = setInterval(() => {
setIndex((prev) => (prev + 1) % banners.length);
}, 4000);

return () => clearInterval(interval);

}, [banners.length]);

return (

<div className="banner">

<img
src={banners[index].image}
alt="sale banner"
className="banner_image"
/>

<div className="banner_text">
{banners[index].text}
</div>

</div>

);

}

export default Banner;