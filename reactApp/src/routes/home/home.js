import Carousel from "./carousel/carousel";
import Featured from "./feature/featured";
import { Categories } from "./categories/categories";
import { Products } from "./products/Products";
import { Offer } from "./offer/offer";
import { Vendor } from "./vendor/vendor";
import {} from "./style.css"


export default function Home (){
    return(
        <>
          <Carousel/>
          <Featured/>
          <Categories/>
          <Products/>
          <Offer/>
          <Products/> {/* this should be shown recent products */}
          {/* <Vendor/>  */}
            {/* check this why not working  */   }
          <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
        </>
    )
}