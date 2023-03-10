import { useEffect, useState } from "react"
import { getApiCall } from "../../requests/requests"




function DisplayProduct({ productString }) {


  const [displaydata, setDisplaydata] = useState([])
  // explore why this is not working

  // useEffect(()=>{
  //   getCateProducts()
  // },[])

  // const getCateProducts =async()=>{
  //   console.log("productString", productString)
  //   let encode = encodeURIComponent(productString)
  //   console.log(`http://localhost:8670/fashion?id=${encode}`)
  // }

  useEffect(() => {
    getApiCall();
  }, [productString]);


  const getApiCall = async () => {
    try {
      const encoded = encodeURIComponent(productString);
      const response = await fetch(`http://localhost:8670/fashion?id=${encoded}`);
      const data = await response.json();
      setDisplaydata(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  console.log("displaydata", displaydata)
  return (
    <>
      {displaydata.map((prods, index) => {
        return (
          <>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100" style={{height:"370px"}}
                    src={prods?.image}
                    alt=""
                  />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href={`/shopdetail/${prods?._id}`}>
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="far fa-heart"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="fa fa-sync-alt"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href="">
                    {prods.name}
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>{`₹${prods.price}`}</h5>
                    <h6 className="text-muted ml-2">
                      <del>{`₹${prods.price}`}</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
          </>

        )
      })}
    </>
  )
}


export default DisplayProduct