import React from "react";
import ProductList from "./containers/ProductList.js";
import Cart from "./containers/Cart.js";
 
const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>React+Redux FURNITURE Shopping Cart Example</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
<ProductList/>
        </div>
 <div className="col-md-4">
   <Cart/>
         </div>
      </div>

    </div>
  );
};

export default App;
