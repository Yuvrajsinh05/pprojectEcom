import { Images } from "../../../assets/images";
import { useEffect, useState } from "react"
import { getApiCall } from "../../../requests/requests";
export const Products = () => {

    const [featuredProds, setFeaturedProds] = useState([])
    const [displayFeatd, setDisplayFeatd] = useState([])

    useEffect(() => {
        getFeaturedProducts()
    }, [])

    const getFeaturedProducts = async () => {
        console.log("called")
        let mobiles = await getApiCall('http://localhost:8670/mobiles')
        let computers = await getApiCall('http://localhost:8670/computer&Accessories')
        console.log("temp")
        let temp = []
        for (var i = 0; i < mobiles?.data?.length; i++) {
            temp.push(mobiles?.data[i])
        }
        for (var i = 0; i < computers?.data?.length; i++) {
            temp.push(computers?.data[i])
        }
        setFeaturedProds(temp)

        let displayFeatures = []

        for (var i = 0; i < temp?.length; i++) {
            for (var j = 0; displayFeatures?.length < 8; j++) {
                displayFeatures?.push(temp[Math.floor(Math.random() * temp.length)])
            }
        }
        setDisplayFeatd(displayFeatures)
    }


    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
                <div className="row px-xl-5">
                    {displayFeatd.map((fpro, index) => {
                        return(
                        <FeaturedCard fpro={fpro} key={index} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}



function FeaturedCard({fpro}) {
    console.log("refefe",fpro)
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img style={{height:"280px"}} className="img-fluid w-100" src={fpro?.imageUrl} alt="" />
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">{fpro?.model}</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>{"₹"+ fpro?.price}</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
            </div></>
    )
}