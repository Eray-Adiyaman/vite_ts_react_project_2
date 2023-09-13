import { ReactElement } from "react";
import useCart from "../Hooks/UseCart"
import useProducts from "../Hooks/UseProducts"
import Product from "./Product";

const ProductList = () => {

  const { dispatch,REDUCER_ACTIONS,cart } = useCart();
  const { products } = useProducts();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

  if(products?.length) {
    pageContent = products.map(products => {
      const inCart: boolean = cart.some(item => item.sku === products.sku) 
    
      return (
        <Product 
            key={products.sku}
            product={products}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
            inCart={inCart} 
        />
      )
    })
  }


  const content = (
    <main className="main main--products">
      {pageContent}
    </main>
  )

  return content
}

export default ProductList