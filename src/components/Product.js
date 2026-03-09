import React from "react";
import { Link } from "react-router-dom";

function Product({ id, title, price, rating, image, description }) {

return (

<div className="product">

<Link
to={`/product/${id}`}
state={{
id: id,
title: title,
price: price,
rating: rating,
image: image,
description: description
}}
>

<img src={image} alt={title} />

</Link>

<h3>{title}</h3>

<p>₹{price}</p>

<p>{rating} ⭐</p>

</div>

);

}

export default Product;