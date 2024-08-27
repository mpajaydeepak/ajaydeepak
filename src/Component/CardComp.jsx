import React, { useState } from "react";

function CardComp() {
    return (
        <div>
            <h1> I PHONE</h1>
            <div  className="row">
            
        
            <div class="card col-3  ms-4" >
                <img src="https://m.media-amazon.com/images/I/31wacBawB3L._SY445_SX342_QL70_FMwebp_.jpg" height={300}width={100} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Apple iPhone 14 (128 GB) - Midnight
                    </h5>
                    <p class="card-text">About this item:
15.40 cm (6.1-inch) Super Retina XDR display
Advanced camera system for better photos in any light
Cinematic mode </p>
                    <a href="#" class="btn btn-primary">Price : ₹60,900</a>
                </div>
            </div>
        
        
            <div class="card col-3  ms-4" >
                <img src="https://m.media-amazon.com/images/I/61BGE6iu4AL._SL1500_.jpg" height={300}width={100} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Apple iPhone 14 Plus (128 GB) - Blue
                    </h5>
                    <p class="card-text">About this item :
16.95 cm (6.7-inch) Super Retina XDR display
Advanced camera system for better photos in any light
Cinematic mode now in 4K Dolby Vision up to 30 fps</p>
                    <a href="#" class="btn btn-primary">Price :  ₹64,999</a>
                </div>
            </div>
        
        </div>

</div>
    )
}
export default CardComp