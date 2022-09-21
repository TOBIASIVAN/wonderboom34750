import React from "react";
import "./Navbar.css"
import CartWidget from "./cartwidget/cartwidget";

    

  const Navbar = () => {
    return(
<nav>

<div>
  
   <h2>Ultimate Ears</h2>
      </div>

  <div>
     <button>Parlantes</button>
       <button>Auriculares</button>
          <button>Musica</button>
                  </div>
                     
<div>
  <CartWidget/>
</div>
</nav>

    )

  }

  export default Navbar


