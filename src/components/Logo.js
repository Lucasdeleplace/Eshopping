import React from 'react';
import amazon from "./asset/https://help.lengow.com/hc/article_attachments/360009679272"
import shopify from "./asset/https://i0.wp.com/www.frenchweb.fr/wp-content/uploads/2022/12/LOGO-shopify-850.png?fit=850%2C478&ssl=1"
import lacoste from "./asset/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQboMRZ2fBvOiW-dWo2YaQYD6a0na5_d_xw&s"
import HM from "./asset/https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
import obey from "./asset/https://customisation.club/cdn/shop/products/obey_1468x.png?v=1573293648"
import levis from "./asset/https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/2560px-Levi%27s_logo.svg.png"

function Logo() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#f3e774",
            borderRadius: "8px"
        }}>
            <img src={lacoste} alt="Lacoste" style={{ height: "80px" }} />
            <img src={shopify} alt="shopify" style={{ height: "80px" }} />
            <img src={obey} alt="Obey" style={{ height: "80px" }} />
            <img src={levis} alt="Levi's" style={{ height: "80px" }} />
            <img src={amazon} alt="amazon" style={{ height: "80px" }} />
        </div>
    );
}

export default Logo;
